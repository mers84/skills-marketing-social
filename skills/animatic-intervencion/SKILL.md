---
name: animatic-intervencion
description: Convierte un storyboard ya aprobado en un video MP4 de prueba, con fotogramas a color que van pasando, voz en off y subtítulos. Sirve para mostrar y probar la historia antes de grabar. Usar solo cuando el equipo ya aprobó el storyboard y pida animarlo, hacer un animatic, ver la historia en movimiento o agregarle voz en off a los fotogramas. Para crear el storyboard, usar contenido-intervencion.
---

# Animatic de intervención

Saca un video con los fotogramas de un storyboard que ya existe, para probar la historia, el texto y el ritmo antes de grabar. No reemplaza al storyboard ni a la pieza final.

Gasta créditos de imágenes y de voz. Por eso es una skill aparte, y se usa al final.

## Reglas

1. **Primero el storyboard aprobado.** Usa `salidas/contenido.md`. Si no existe o el equipo no lo ha aprobado, detente y sugiere `contenido-intervencion`. No cambies lo que se dice sin avisar.
2. **La clave no entra al chat.** Nunca pidas que peguen una clave en la conversación, no la leas en voz alta ni la imprimas, y no la subas a un repositorio. Va en el archivo `claves-voz.env`.
3. **Sin clave también se puede.** La falta de clave o de imágenes nunca detiene el trabajo.
4. **Di lo que es.** El video lleva una nota que aclara que los dibujos y las voces son generados. No imites la voz de una persona real, y una voz generada no se presenta como el testimonio de alguien.
5. **No se publica como pieza.** Es para probar y decidir. Si la campaña va a usar una voz generada, revisa la licencia de la herramienta.

## Pasos

### 1. Confirma antes de gastar

Confirma que el storyboard está aprobado y di cuántos fotogramas y líneas de voz vas a generar. Espera el sí.

### 2. Fotogramas a color

Usa la herramienta de imágenes de tu entorno: Nano Banana en Antigravity, o la generación de imágenes de Codex en Codex. Si no sabes si la tienes, intenta con un solo fotograma.

1. Crea primero **un solo fotograma** y pide que aprueben el estilo.
2. Crea los demás, uno por plano, describiendo a los personajes igual en cada prompt para que se parezcan.
3. Comprueba cada imagen: si el video es vertical, debe ser más alta que ancha. Si no lo es, rehazla.

Guárdalos en `salidas/animatic/fotogramas/`. Si no puedes generar imágenes, dilo y usa los bocetos del storyboard.

### 3. Prepara la voz

Pregunta cuál prefieren:

| Opción | Hace falta | Cómo |
|---|---|---|
| **ElevenLabs con clave** | Crear una cuenta | Copia [assets/claves-voz.env](assets/claves-voz.env) a la carpeta del proyecto y agrégalo a `.gitignore`. El equipo abre ese archivo, pega su clave y guarda. Luego, con `--listar-voces`, eligen una voz por personaje |
| **Deepgram con clave** | Crear una cuenta | Igual, en el mismo archivo. Sus voces en español están en el Playground, y se escriben así: `aura-2-celeste-es` |
| **Sin clave** | Una cuenta | Escriben cada línea en la página de la herramienta, descargan el MP3 y lo guardan en `audio/` con el nombre que indica el script |
| **Sin voz** | Nada | Sale con subtítulos |

Si ElevenLabs falla, porque la voz pide plan de pago o no hay créditos, el script pasa a Deepgram si tiene clave para eso. Comprueba el costo y las voces disponibles: estas condiciones cambian. Prueba con una sola línea antes de generar todas.

### 4. Saca el video

Escribe `salidas/animatic/animatic.json` según [references/formato.md](references/formato.md) y corre:

```bash
python scripts/sacar_video.py salidas/animatic/animatic.json
```

Necesita Python con Pillow, y ffmpeg. Si no puedes correrlo, dilo y arma con el equipo el mismo video en CapCut: los fotogramas en orden, cada MP3 sobre su plano y los textos de `animatic.json`.

### 5. Revisa y entrega

Mira cuadros del video y comprueba texto, orden y duración. Di con claridad lo que no pudiste escuchar: una persona debe verlo completo con sonido. Propón dos o tres preguntas para mostrárselo a personas de la audiencia: qué entendieron, qué se les pide y qué les molestó.
