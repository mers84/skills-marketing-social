# Formato de animatic.json

Las rutas son relativas a la carpeta del JSON.

```json
{
  "titulo": "Animatic del video",
  "nota": "Animatic de prueba: dibujos y voces generados. No es la pieza final.",
  "voces": {
    "ESTUDIANTE": {"elevenlabs": "codigo_de_la_voz", "deepgram": "aura-2-celeste-es"},
    "VOZ": {"deepgram": "aura-2-aquila-es"}
  },
  "ambientes": [
    {"archivo": "ambiente/pajaros.mp3", "desde_plano": 4, "hasta_plano": 6, "volumen": 0.2, "inicio": 20}
  ],
  "fotogramas": [
    {
      "imagen": "fotogramas/p1.png",
      "tiempo": "0:00 a 0:03",
      "segundos": 3,
      "texto_pantalla": "Lo que va escrito en pantalla",
      "sonido": "(Sonido que se indica por escrito, si no hay voz)",
      "brisa": true,
      "descripcion": "Texto alternativo de la imagen",
      "voz": [{"quien": "ESTUDIANTE", "texto": "Lo que dice, literal."}]
    }
  ]
}
```

- `segundos` es el mínimo: si la voz dura más, el fotograma espera a que termine.
- `voces` dice qué voz usa cada personaje en cada herramienta. Para ElevenLabs, el código sale de `--listar-voces`; para Deepgram, del Playground. Con MP3 propios no hace falta.
- Con MP3 propios, ponlos en `audio/` con estos nombres: `p1_1.mp3` es el plano 1, línea 1; `p5_2.mp3` es el plano 5, línea 2.
- `brisa` agrega de fondo un ruido suave generado, para que ese plano no quede en silencio. No sustituye el sonido real del lugar.
- `ambientes` pone sonidos de fondo sobre esos planos. `volumen` va de 0 a 1 y `inicio` es el segundo del archivo desde donde empieza. Un archivo corto se repite.
- `texto_pantalla`, `sonido`, `brisa`, `ambientes` y `voz` son opcionales.
