"""Saca un video MP4 con los fotogramas pasando, voz en off, texto y subtítulos.

Uso:
    python sacar_video.py animatic.json [--salida animatic.mp4] [--alto 1920]

Las rutas del JSON son relativas a la carpeta del JSON. Ver references/formato.md.

La voz sale, en este orden, de:
1. Un MP3 que ya exista en audio/ (por ejemplo, descargado de la página de ElevenLabs).
2. ElevenLabs, si hay ELEVENLABS_API_KEY y el personaje tiene su voz.
3. Deepgram, si hay DEEPGRAM_API_KEY y el personaje tiene su voz.
4. Nada: ese tramo queda con subtítulos y el script dice qué archivos faltan.

Las claves se leen del entorno o de un archivo claves-voz.env (o .env), en la carpeta del JSON
o en alguna de las de arriba. Nunca se imprimen. Necesita ffmpeg, ffprobe y Pillow.

Para ver las voces de tu cuenta de ElevenLabs y sus códigos:
    python sacar_video.py animatic.json --listar-voces
"""
import argparse, json, os, shutil, subprocess, sys, tempfile, textwrap, urllib.error, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

FPS = 30
PAUSA = 0.25


def leer_claves(base):
    claves = {n: os.environ.get(n, "") for n in ("ELEVENLABS_API_KEY", "DEEPGRAM_API_KEY")}
    for carpeta in [base, *list(base.parents)[:4]]:
        for nombre in ("claves-voz.env", ".env"):
            env = carpeta / nombre
            if not env.is_file():
                continue
            for linea in env.read_text(encoding="utf-8").splitlines():
                n, igual, valor = linea.strip().partition("=")
                if igual and n in claves and not claves[n]:
                    claves[n] = valor.strip().strip('"').strip("'")
    return claves


def voz_elevenlabs(texto, voz, destino, clave):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{urllib.parse.quote(voz)}?output_format=mp3_44100_128"
    req = urllib.request.Request(url, data=json.dumps({"text": texto, "model_id": "eleven_multilingual_v2"}).encode("utf-8"),
                                 headers={"xi-api-key": clave, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        destino.write_bytes(r.read())


def listar_voces(clave):
    req = urllib.request.Request("https://api.elevenlabs.io/v1/voices", headers={"xi-api-key": clave})
    with urllib.request.urlopen(req, timeout=60) as r:
        for v in json.load(r).get("voices", []):
            print(f"{v.get('voice_id')}  {v.get('name')}  ({v.get('category', '')})")


def generar_voz(texto, voz, destino, claves):
    """Prueba ElevenLabs y luego Deepgram. Un fallo no detiene el video."""
    if isinstance(voz, str):
        voz = {"deepgram": voz}
    voz = voz or {}
    intentos = [("ElevenLabs", claves.get("ELEVENLABS_API_KEY"), voz.get("elevenlabs"), voz_elevenlabs),
                ("Deepgram", claves.get("DEEPGRAM_API_KEY"), voz.get("deepgram"), voz_deepgram)]
    for nombre, clave, modelo, fn in intentos:
        if not clave or not modelo:
            continue
        try:
            fn(texto, modelo, destino, clave)
            print(f"voz con {nombre}: {destino.name}", flush=True)
            return
        except urllib.error.HTTPError as e:
            ayuda = {401: "revisa la clave y sus permisos", 402: "esa voz o función pide plan de pago; elige otra", 429: "límite de uso o sin créditos"}.get(e.code, "")
            print(f"{nombre} respondió {e.code} para {destino.name}. {ayuda}", flush=True)
        except urllib.error.URLError as e:
            print(f"{nombre}: no hubo conexión ({e.reason}). Si la herramienta está bloqueada, prueba con VPN.", flush=True)


def voz_deepgram(texto, modelo, destino, clave):
    url = "https://api.deepgram.com/v1/speak?" + urllib.parse.urlencode({"model": modelo, "encoding": "mp3"})
    req = urllib.request.Request(url, data=json.dumps({"text": texto}).encode("utf-8"),
                                 headers={"Authorization": "Token " + clave, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        destino.write_bytes(r.read())


def duracion(ruta):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(ruta)],
                       capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def fuente(tam, negrita=False):
    nombres = (["segoeuib.ttf", "arialbd.ttf", "DejaVuSans-Bold.ttf", "Arial Bold.ttf"] if negrita
               else ["segoeui.ttf", "arial.ttf", "DejaVuSans.ttf", "Arial.ttf"])
    for n in nombres:
        try:
            return ImageFont.truetype(n, tam)
        except OSError:
            continue
    return ImageFont.load_default(tam)


def letrero(texto, ancho, alto, tam, y, negrita, ruta, ancla="centro"):
    """PNG transparente del tamaño del video, con el texto sobre una franja oscura."""
    im = Image.new("RGBA", (ancho, alto), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    f = fuente(tam, negrita)
    lineas = textwrap.wrap(texto, width=max(12, int(ancho * 0.86 / (tam * 0.52))))
    alto_linea = int(tam * 1.32)
    top = y if ancla == "arriba" else y - alto_linea * len(lineas)
    for k, linea in enumerate(lineas):
        w = d.textlength(linea, font=f)
        x = (ancho - w) / 2
        yy = top + k * alto_linea
        d.rounded_rectangle((x - tam * 0.4, yy - tam * 0.08, x + w + tam * 0.4, yy + alto_linea), radius=int(tam * 0.2), fill=(0, 0, 0, 170))
        d.text((x, yy), linea, font=f, fill=(255, 255, 255, 255))
    im.save(ruta)
    return ruta


def plano(n, f, base, tmp, ancho, alto, voces, claves, faltan, aviso):
    tramos, t = [], PAUSA
    for k, linea in enumerate(f.get("voz", []), 1):
        mp3 = base / "audio" / f"p{n}_{k}.mp3"
        if not mp3.exists():
            generar_voz(linea["texto"], voces.get(linea["quien"]), mp3, claves)
        if mp3.exists():
            d = duracion(mp3)
        else:
            faltan.append(f"audio/{mp3.name}: {linea['texto']}")
            d = max(1.5, len(linea["texto"]) * 0.065)
        tramos.append((linea["texto"], mp3 if mp3.exists() else None, t, d))
        t += d + 0.2
    total = max(float(f["segundos"]), t + 0.25)
    frames = round(total * FPS)

    entradas = ["-loop", "1", "-framerate", str(FPS), "-t", f"{total:.3f}", "-i", str(base / f["imagen"])]
    capas, n_in = [], 1
    def capa(ruta, ini, fin):
        nonlocal n_in
        entradas.extend(["-loop", "1", "-framerate", str(FPS), "-t", f"{total:.3f}", "-i", str(ruta)])
        capas.append((n_in, ini, fin))
        n_in += 1
    if f.get("texto_pantalla"):
        capa(letrero(f["texto_pantalla"], ancho, alto, int(alto * 0.024), int(alto * 0.07), True, tmp / f"s{n}.png", "arriba"), 0, total)
    capa(letrero(aviso, ancho, alto, int(alto * 0.0135), int(alto * 0.985), False, tmp / f"a{n}.png"), 0, total)
    for k, (texto, _, ini, d) in enumerate(tramos, 1):
        capa(letrero(texto, ancho, alto, int(alto * 0.024), int(alto * 0.9), False, tmp / f"t{n}_{k}.png"), ini, ini + d + 0.1)
    if f.get("sonido") and not tramos:
        capa(letrero(f["sonido"], ancho, alto, int(alto * 0.02), int(alto * 0.9), False, tmp / f"e{n}.png"), 0, total)

    # Se escala al doble antes de acercar: así el movimiento no tiembla.
    fil = (f"[0:v]scale={ancho * 2}:{alto * 2}:force_original_aspect_ratio=increase,crop={ancho * 2}:{alto * 2},"
           f"zoompan=z='1+0.06*on/{frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={ancho}x{alto}:fps={FPS},setsar=1[v0];")
    prev = "v0"
    for k, (idx, ini, fin) in enumerate(capas, 1):
        fil += f"[{prev}][{idx}:v]overlay=enable='between(t,{ini:.3f},{fin:.3f})':shortest=1[v{k}];"
        prev = f"v{k}"
    fil += f"[{prev}]fade=t=in:st=0:d=0.2,fade=t=out:st={total - 0.2:.3f}:d=0.2,format=yuv420p[v];"

    voces_in, etiquetas = [], []
    for texto, mp3, ini, d in tramos:
        if mp3:
            entradas.extend(["-i", str(mp3)])
            fil += f"[{n_in}:a]aresample=44100,aformat=channel_layouts=stereo,adelay={int(ini * 1000)}:all=1[a{n_in}];"
            etiquetas.append(f"[a{n_in}]")
            n_in += 1
    if f.get("brisa"):
        fil += f"anoisesrc=color=pink:amplitude=0.035:duration={total:.3f}:seed={n},lowpass=f=1100,aresample=44100,aformat=channel_layouts=stereo[br];"
        etiquetas.append("[br]")
    fil += f"anullsrc=r=44100:cl=stereo:d={total:.3f}[sil];"
    etiquetas.append("[sil]")
    fil += "".join(etiquetas) + f"amix=inputs={len(etiquetas)}:duration=longest:normalize=0,atrim=0:{total:.3f}[a]"
    salida = tmp / f"plano{n}.mp4"
    subprocess.run(["ffmpeg", "-y", "-v", "error", *entradas, "-filter_complex", fil, "-map", "[v]", "-map", "[a]",
                    "-t", f"{total:.3f}", "-c:v", "libx264", "-preset", "medium", "-crf", "21", "-c:a", "aac", "-b:a", "128k", str(salida)], check=True)
    print(f"plano {n}: {total:.1f} s", flush=True)
    return salida


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("spec")
    ap.add_argument("--salida", default="animatic.mp4")
    ap.add_argument("--alto", type=int, default=1920)
    ap.add_argument("--listar-voces", action="store_true", help="muestra las voces de tu cuenta de ElevenLabs y termina")
    a = ap.parse_args()
    if a.listar_voces:
        clave = leer_claves(Path(a.spec).resolve().parent)["ELEVENLABS_API_KEY"]
        if not clave:
            sys.exit("No encontré ELEVENLABS_API_KEY. Ponla en claves-voz.env.")
        try:
            listar_voces(clave)
        except urllib.error.HTTPError as e:
            sys.exit(f"ElevenLabs respondió {e.code}: revisa la clave y sus permisos.")
        return
    for prog in ("ffmpeg", "ffprobe"):
        if not shutil.which(prog):
            sys.exit(f"Falta {prog}. Instálalo, o monta los fotogramas y los MP3 a mano en CapCut.")
    spec_path = Path(a.spec).resolve()
    base = spec_path.parent
    spec = json.loads(spec_path.read_text(encoding="utf-8"))
    (base / "audio").mkdir(exist_ok=True)
    primera = Image.open(base / spec["fotogramas"][0]["imagen"])
    vertical = primera.height > primera.width
    alto = a.alto if vertical else round(a.alto * 9 / 16)
    ancho = round(alto * 9 / 16) if vertical else round(alto * 16 / 9)
    ancho -= ancho % 2
    alto -= alto % 2
    claves = leer_claves(base)
    aviso = spec.get("nota", "Animatic de prueba: dibujos y voces generados. No es la pieza final.")
    faltan = []
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        partes = [plano(n, f, base, tmp, ancho, alto, spec.get("voces", {}), claves, faltan, aviso) for n, f in enumerate(spec["fotogramas"], 1)]
        lista = tmp / "lista.txt"
        lista.write_text("".join(f"file '{p.as_posix()}'\n" for p in partes), encoding="utf-8")
        destino = (base / a.salida).resolve()
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(lista), "-c", "copy", "-movflags", "+faststart", str(destino)], check=True)
    print(f"Listo: {destino} ({duracion(destino):.1f} s, {destino.stat().st_size // 1024 // 1024} MB)")
    if faltan:
        print("\nFaltan estos audios; esos tramos solo llevan subtítulo. Crea cada MP3 y vuelve a correr el script:")
        print("\n".join("  " + x for x in faltan))


if __name__ == "__main__":
    main()
