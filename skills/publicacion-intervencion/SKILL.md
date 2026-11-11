---
name: publicacion-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Toma la audiencia, la estrategia y las piezas de una campaña de marketing social y la deja lista para salir al aire. Propone los canales con datos, explica las opciones de cuenta, arma el calendario de la campaña con publicaciones y acciones en persona, adapta los textos a cada red, crea una página de revisión con un enlace para que la institución apruebe las piezas y guía la programación. Usar cuando se pida elegir redes o canales, armar un calendario de publicaciones, preparar la aprobación de piezas, crear un enlace para revisar piezas o programar publicaciones.
---

# Publicación de intervención

Parte de lo que dejaron las skills anteriores y llega a una campaña lista para salir: canales elegidos, calendario, textos por red, piezas aprobadas por la institución y publicaciones programadas. Se basa en Lee y Kotler (2020), *Social Marketing*, 6.ª ed., cap. 14. El detalle de cada paso está en [references/guia.md](references/guia.md).

## Reglas

1. **Parte de lo que ya existe.** Busca `salidas/audiencia.md`, `salidas/estrategia.md` y `salidas/contenido.md`. Si faltan, sugiere correr `audiencia-intervencion`, `estrategia-intervencion` y `contenido-intervencion`, o pide al menos la audiencia, la conducta, las aperturas y la lista de piezas.
2. **No todo es redes.** La estrategia puede tener acciones en persona: un afiche, una charla, una mesa. Van en el mismo calendario que las publicaciones.
3. **La institución decide.** Ninguna pieza se publica sin su aprobación. La página de revisión sirve para eso.
4. **No inventes datos de audiencia.** Si propones una red, di en qué te basas: lo que dijo la audiencia, lo que tiene la institución o el tamaño estimado que el equipo vio en una herramienta de anuncios. Si no hay dato, márcalo como supuesto.
5. **No publiques nada.** Puedes dejar publicaciones programadas o en borrador solo si el equipo lo pide y tiene el permiso de la institución. Nunca publiques a nombre de la institución por tu cuenta.
6. **Cuida los datos.** En la página de revisión no pongas nombres, teléfonos ni fotos de personas sin su permiso. El número de WhatsApp del equipo va solo si el equipo lo da.

## Antes de empezar

Pregunta qué quieren hacer, y haz solo eso:

- Elegir los canales.
- Armar el calendario.
- Adaptar los textos a cada red.
- Crear la página de revisión y su enlace.
- Programar las publicaciones.

## Pasos

### 1. Propón los canales

Con la audiencia y la estrategia, propone dónde va cada pieza: qué redes y qué lugares en persona. Para cada red responde las tres preguntas de la guía: si está ahí la gente de esa ciudad con los intereses y comportamientos de la audiencia, si el formato de la red sirve para el mensaje y si la institución puede sostenerla. Si el equipo no tiene datos de tamaño, explícale cómo verlos en el Administrador de anuncios de Meta, sin publicar nada (guía, «Tamaño del público»).

### 2. Aclara la cuenta

Pregunta desde qué cuenta se va a publicar y explica los tres planes de la guía: publicar en la cuenta de la institución con un permiso propio, que la institución publique lo que el equipo le prepara, o una cuenta de la cátedra con publicaciones en colaboración. Deja escrito cuál se intenta primero.

### 3. Arma el calendario

Crea una fila por acción, sea una publicación o algo en persona:

| Fecha y hora | Tipo | Canal o lugar | Pieza o acción | Qué le pide a la persona | Por qué en esa fecha | Quién la aprueba | Quién la publica o la hace |
|---|---|---|---|---|---|---|---|

- Empieza por las fechas en que la audiencia puede actuar.
- Ordena en tres momentos: presentar la causa, mostrar cómo se participa y pedir que dé el paso.
- Cuenta en las fechas los días que tarda la institución en aprobar.
- Si de una pieza salen varias versiones, cada versión es una fila.

### 4. Adapta los textos a cada red

Por cada pieza y cada canal, escribe el texto que la acompaña, con el formato de esa red (guía, «Formatos»). Mantén el mismo mensaje y el mismo llamado a actuar en todas las versiones.

### 5. Crea la página de revisión

A partir de [assets/revision.html](assets/revision.html), crea `salidas/revision/index.html` con todas las piezas en el orden del calendario. Llena el bloque `CAMPANA` del archivo: proyecto, equipo, WhatsApp o correo del equipo y, por pieza, título, fecha, canal, formato, texto, qué le pide a la persona y la ruta del archivo. Copia las imágenes y videos a `salidas/revision/piezas/`. Para que la página cargue rápido en el teléfono y se pueda subir sin problemas, deja cada video en 720 píxeles de ancho o menos y por debajo de 10 MB; si tienes ffmpeg, comprímelo. Al final, la carpeta `salidas/revision` tiene `index.html` y la subcarpeta `piezas/`: esa carpeta completa es la que se sube. Cada pieza tiene los botones «Apruebo» y «Pido un cambio», que abren un mensaje ya escrito para el equipo.

Después, explica cómo publicarla con un enlace. El camino más sencillo es Netlify Drop: se arrastra la carpeta `salidas/revision` y da el enlace, sin instalar nada (guía, «Publicar la página»). Si el equipo ya usa la terminal, puedes publicarla tú en Firebase Hosting, que tiene un plan gratis sin tarjeta. Pide que abran el enlace en el teléfono y comprueben que se vean las piezas antes de mandárselo a la institución.

### 6. Guía la programación

Explica cómo dejar cada publicación programada en Meta Business Suite o en Metricool (guía, «Programar»). Lo que no se puede programar, como un mensaje en un grupo de WhatsApp, queda en el calendario con el nombre de quién lo hace.

### 7. Guarda las salidas

En `salidas/`:

- `publicacion.md`: canales, plan de cuenta, calendario y textos por red.
- `calendario.csv`: el calendario, para abrir en Google Sheets.
- `revision/index.html`: la página de revisión, con sus piezas en `revision/piezas/`.

### 8. Itera

Acepta ajustes como «muévelo al lunes» o «hazlo más corto para historias». Cuando la institución pida cambios en una pieza, actualiza la página y vuelve a publicarla en el mismo enlace.
