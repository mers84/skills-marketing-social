---
name: publicacion-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Toma la audiencia, la estrategia y las piezas de una campaña de marketing social y la deja lista para salir al aire. Propone los canales con datos, explica las opciones de cuenta, arma el calendario de la campaña con publicaciones y acciones en persona, adapta los textos a cada red, crea una página web con el calendario y las piezas, con la marca de la UCAB, donde la institución ve cada pieza y deja su comentario, saca los PDF y programa las publicaciones. Usar cuando se pida elegir redes o canales, armar un calendario de publicaciones, preparar la aprobación de piezas, crear un enlace para revisar piezas o programar publicaciones.
---

# Publicación de intervención

Parte de lo que dejaron las skills anteriores y llega a una campaña lista para salir: canales elegidos, calendario, textos por red, piezas aprobadas por la institución y publicaciones programadas. Se basa en Lee y Kotler (2020), *Social Marketing*, 6.ª ed., cap. 14. El detalle de cada paso está en [references/guia.md](references/guia.md).

## Reglas

1. **Parte de lo que ya existe.** Busca `salidas/audiencia.md` (o `salidas/perfil.md`, el nombre anterior), `salidas/estrategia.md` y `salidas/contenido.md`. Del brief de la estrategia salen las aperturas y las piezas; del contenido, las piezas elegidas y sus textos. Si faltan, sugiere correr `audiencia-intervencion`, `estrategia-intervencion` y `contenido-intervencion`, o pide al menos la audiencia, la conducta, las aperturas y la lista de piezas.
2. **No todo es redes.** La estrategia puede tener acciones en persona: un afiche, una charla, una mesa. Van en el mismo calendario que las publicaciones.
3. **La institución decide.** Ninguna pieza se publica sin su aprobación. La página del calendario sirve para eso: ahí ve cada pieza y deja su comentario.
4. **No inventes datos de audiencia.** Si propones una red, di en qué te basas: lo que dijo la audiencia, lo que tiene la institución o el tamaño estimado que el equipo vio en una herramienta de anuncios. Si no hay dato, márcalo como supuesto.
5. **No publiques nada.** Puedes dejar publicaciones programadas o en borrador solo si el equipo lo pide y tiene el permiso de la institución. Nunca publiques a nombre de la institución por tu cuenta.
6. **Cuida los datos.** En la página del calendario no pongas nombres, teléfonos ni fotos de personas sin su permiso. El número de WhatsApp del equipo va solo si el equipo lo da.

## Antes de empezar

Pregunta qué quieren hacer, y haz solo eso:

- Elegir los canales.
- Armar el calendario.
- Adaptar los textos a cada red.
- Crear la página del calendario con las piezas, su PDF y su enlace.
- Programar las publicaciones.

## Pasos

### 1. Propón los canales

Con la audiencia y la estrategia, propone dónde va cada pieza: qué redes y qué lugares en persona. Para cada red responde las tres preguntas de la guía: si está ahí la gente de esa ciudad con los intereses y comportamientos de la audiencia, si el formato de la red sirve para el mensaje y si la institución puede sostenerla. Si el equipo no tiene datos de tamaño, explícale cómo verlos en el Administrador de anuncios de Meta, sin publicar nada (guía, «Tamaño del público»).

### 2. Aclara la cuenta

Pregunta desde qué cuenta se va a publicar y explica los tres planes de la guía: publicar en la cuenta de la institución con un permiso propio, que la institución publique lo que el equipo le prepara, o una cuenta de la cátedra con publicaciones en colaboración. Deja escrito cuál se intenta primero.

### 3. Arma el calendario

Crea una fila por acción, sea una publicación o algo en persona:

| Fecha y hora | Tipo | Canal o lugar | Pieza o acción | Qué le pide a la persona | Por qué en esa fecha | Cómo se va a contar | Quién la aprueba | Quién la publica o la hace |
|---|---|---|---|---|---|---|---|---|

- Empieza por las fechas en que la audiencia puede actuar.
- Ordena en tres momentos: presentar la causa, mostrar cómo se participa y pedir que dé el paso.
- Cuenta en las fechas los días que tarda la institución en aprobar.
- Si de una pieza salen varias versiones, cada versión es una fila.
- En «Cómo se va a contar», di de dónde saldrá su número: las estadísticas de la red, un código o enlace propio de esa pieza, o un conteo en persona. Si una pieza lleva código QR, que abra algo que la persona use para hacer la conducta.

### 4. Adapta los textos a cada red

Por cada pieza y cada canal, escribe el texto que la acompaña, con el formato de esa red (guía, «Formatos»). Mantén el mismo mensaje y el mismo llamado a actuar en todas las versiones.

### 5. Crea la página del calendario y las piezas

Es una página con la marca de la UCAB y dos vistas, con los mismos datos:

- **Calendario**, la que abre en la computadora: las semanas de la campaña ocupan la pantalla, sin desplazarse, para proyectarlas en una exposición o en una reunión. Cada acción muestra su hora, su canal y una miniatura de la pieza.
- **Piezas**, la que abre en el teléfono: todas las piezas en orden, para que la institución las revise.

En las dos, al tocar una acción se abre la pieza (el video o la imagen), su texto y una cajita para aprobarla o pedir cambios.

**No escribas la página: copia la plantilla y llena sus datos.**

1. Copia la carpeta [assets/calendario/](assets/calendario/) completa a `salidas/calendario/`: `index.html`, `datos.js` y `logo-ucab.svg`. No cambies `index.html`.
2. Reescribe `salidas/calendario/datos.js` con el calendario del paso 3: una entrada en `acciones` por fila, con su fecha, hora, tipo, canal, título, qué pide, cómo se cuenta, quién la aprueba, el texto del paso 4 y una explicación corta. El archivo trae el ejemplo de Actívate y explica cada campo; reemplázalo todo y quita `ficticio: true` si los datos son reales.
3. Copia las imágenes y videos a `salidas/calendario/piezas/` y pon su ruta en `archivo` (por ejemplo `piezas/reel-1.mp4`). Si una pieza todavía no existe, deja `archivo` vacío: la página muestra un recuadro. Para que cargue rápido en el teléfono, deja cada video en 720 píxeles de ancho o menos y por debajo de 10 MB; si tienes ffmpeg, comprímelo.
4. Abre la página y comprueba que se ve el calendario y que cada acción abre su pieza.

**Los comentarios.** Si la página está en Netlify con la detección de formularios activada, cada comentario llega a la sección Forms del sitio, y Netlify puede mandarlo por correo (guía, «Recibir los comentarios»). Si no, el botón abre WhatsApp con el comentario escrito, cuando el equipo pone su número en `whatsapp`, o lo copia para pegarlo en un mensaje.

**El PDF.** Saca `salidas/calendario/calendario.pdf` con el comando de «Sacar los PDF», en el paso 7, y pon `pdf: "calendario.pdf"` en `datos.js`: así la página muestra el botón «Descargar PDF». En el PDF sale el calendario en la primera página y después todas las piezas con su texto; los videos salen con su portada si tienen una en `portada`.

No la subas tú: deja la carpeta `salidas/calendario` lista. La sube el equipo a Netlify Drop, arrastrando la carpeta completa, y da un enlace sin instalar nada (guía, «Publicar la página»). Pide que abran el enlace en el teléfono y comprueben que se vean las piezas antes de mandárselo a la institución.

### 6. Programa las publicaciones

Hay tres formas (guía, «Programar»): en cada red por separado, desde una aplicación como Metricool o Buffer, o con un conector MCP. Si el entorno tiene conectado el servidor MCP de Metricool o de Buffer, puedes programar tú las publicaciones del calendario que la institución ya aprobó, con su pieza, su texto y su hora. Antes, muestra la lista de lo que vas a programar y espera el sí del equipo. Después, entrega el enlace de cada publicación para revisarla. Si no hay conector, explica cómo hacerlo a mano. Lo que no se puede programar, como un mensaje en un grupo de WhatsApp, queda en el calendario con el nombre de quién lo hace.

### 7. Guarda las salidas

En `salidas/`:

- `publicacion.md`: canales, plan de cuenta, calendario y textos por red. Termina con la sección «Lo que pasa a la medición».
- `publicacion.html` y `publicacion.pdf`: la hoja, a partir de [assets/hoja-publicacion.html](assets/hoja-publicacion.html), con la marca de la UCAB. Copia [assets/logo-ucab.svg](assets/logo-ucab.svg) a `salidas/` para que se vea el logo. La hoja crece según la información.
- `calendario.csv`: el calendario, para abrir en Google Sheets.
- `calendario/`: la página del calendario y las piezas, lista para Netlify Drop, con `index.html`, `datos.js`, `logo-ucab.svg`, `calendario.pdf` y las piezas en `piezas/`.

`publicacion.md` termina así, para la skill `medicion-intervencion`:

```markdown
## Lo que pasa a la medición
- Conducta y meta (de la hoja de la audiencia):
- Piezas, canal y fecha:
- Cómo se cuenta cada pieza (estadísticas, código o enlace, conteo en persona):
- Cuenta desde donde se leerán las estadísticas, y si es profesional:
- Conector MCP conectado (Metricool, Buffer o ninguno):
```

### Sacar los PDF

Para sacar el PDF de una página, imprímela con el navegador sin abrir ventanas. En Windows, desde la carpeta del proyecto:

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --window-size=1280,900 --no-pdf-header-footer --virtual-time-budget=4000 --print-to-pdf="$PWD\salidas\calendario\calendario.pdf" "file:///$($PWD -replace '\\','/')/salidas/calendario/index.html"
```

En Mac, lo mismo con `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`. Mantén `--window-size=1280,900`: sin él, el PDF sale en una sola columna. Si el comando falla, pide al equipo que abra la página y toque «Guardar en PDF». El PDF tarda unos segundos en aparecer después de que el comando termina. Ábrelo y revisa que no haya nada cortado.

Para la hoja, cambia las rutas por `salidas/publicacion.html` y `salidas\publicacion.pdf`.

### 8. Itera

Acepta ajustes como «muévelo al lunes» o «hazlo más corto para historias». Cuando la institución pida cambios en una pieza, actualiza `datos.js` o la pieza, vuelve a sacar el PDF y que el equipo suba de nuevo la carpeta al mismo sitio, para que el enlace no cambie.

Antes de lanzar, sugiere correr `medicion-intervencion` para dejar listo el número de partida y los códigos que se van a contar: lo que no se prepara antes no se puede medir después.
