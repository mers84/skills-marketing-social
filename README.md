# Skills de marketing social

Skills de IA para diseñar campañas de cambio de conducta, de la investigación de la audiencia a la medición, para cualquier proyecto.

**Están basadas en la bibliografía de Lee y Kotler (2020), *Social Marketing: Behavior Change for Social Good*, 6.ª ed.** Sus conceptos, pasos y tácticas salen de ese libro, con capítulo y página.

Fueron creadas para la materia Marketing y Gestión de Causas Sociales de la UCAB Guayana. Están en español.

## Qué es una skill

Es una receta de trabajo para un agente de IA, guardada en una carpeta. Le indica cómo hacer una tarea, siempre de la misma forma, para no explicarle todo cada vez.

## Las skills

Son seis y funcionan en cadena: lo que sale de una es la entrada de la siguiente. Cada exposición del curso explica un tramo de la cadena.

```text
Informe y entrevistas
        ↓
audiencia-intervencion   → hoja de la audiencia prioritaria
        ↓
estrategia-intervencion  → hoja de estrategia y brief
        ↓
contenido-intervencion   → ideas, storyboard, voz en off y plan de edición
        ↓ (con el storyboard aprobado)
animatic-intervencion    → video de prueba con fotogramas a color y voz en off
        ↓
publicacion-intervencion → canales, calendario web con las piezas y comentarios, PDF y programación
        ↓
medicion-intervencion    → plan de medición, datos de cada semana y panel web con gráficos y PDF
```

| Skill | Qué hace |
|---|---|
| [`audiencia-intervencion`](skills/audiencia-intervencion/SKILL.md) | Ordena los hallazgos: conducta, etapa de cambio, barreras, beneficios, motivadores, competencia e influyentes. Marca qué es evidencia, qué es supuesto y qué falta |
| [`estrategia-intervencion`](skills/estrategia-intervencion/SKILL.md) | Propone posicionamientos y acciones por los cuatro frentes de la balanza, y las combina en una sola estrategia |
| [`contenido-intervencion`](skills/contenido-intervencion/SKILL.md) | Convierte la hoja de la audiencia y la estrategia en ideas, mensajes, eslóganes, un storyboard por planos y un plan de edición. Si el modelo puede crear imágenes, ofrece bocetos; si no, entrega el texto de los planos |
| [`animatic-intervencion`](skills/animatic-intervencion/SKILL.md) | Convierte un storyboard aprobado en un video de prueba, con imágenes de Nano Banana o Codex y voz de ElevenLabs o Deepgram. La clave va en un archivo aparte. Necesita Python, Pillow y ffmpeg |
| [`publicacion-intervencion`](skills/publicacion-intervencion/SKILL.md) | Deja la campaña lista para salir: propone canales con datos, explica las opciones de cuenta, arma el calendario con publicaciones y acciones en persona y adapta los textos a cada red. Crea una página web con una vista de calendario a pantalla completa y otra con las piezas, donde la institución abre cada pieza y deja su comentario; saca su PDF y programa las publicaciones, también con un conector MCP. Deja anotado cómo se va a contar cada pieza |
| [`medicion-intervencion`](skills/medicion-intervencion/SKILL.md) | Separa las métricas de vanidad de las de conducta y arma el plan de medición con la meta y el número de partida de la hoja de la audiencia. Junta los datos de cada semana, descargándolos de cada red o con el conector MCP de Metricool, más el conteo en persona. Crea un panel en una página web, con una vista de tablero a pantalla completa y otra de informe, y su PDF |

## Qué necesita cada skill

Cada skill lee lo que dejó la anterior en la carpeta `salidas/` del proyecto. Si no lo encuentra, pide lo mínimo para arrancar.

| Skill | Lo que lee | Si falta, pide al menos | Lo que deja |
|---|---|---|---|
| `audiencia-intervencion` | El informe, las entrevistas o transcripciones y las notas de investigación, en la carpeta del proyecto | Que le indiquen dónde están los archivos | `audiencia.md` y la hoja de la audiencia |
| `estrategia-intervencion` | `salidas/audiencia.md` | La audiencia, la conducta y al menos una barrera | `estrategia.md` con el brief, y la hoja |
| `contenido-intervencion` | `audiencia.md` y `estrategia.md` | La audiencia, la conducta, la promesa y su respaldo | `contenido.md` con las ideas, el storyboard y el plan de edición |
| `animatic-intervencion` | `contenido.md` con el storyboard aprobado. Para la voz, una clave en `claves-voz.env` | No arranca sin el storyboard aprobado. Sin clave, sigue y entrega el video sin voz generada | El video de prueba |
| `publicacion-intervencion` | `audiencia.md`, `estrategia.md` y `contenido.md`, más las imágenes y los videos de las piezas | La audiencia, la conducta, las aperturas y la lista de piezas | `publicacion.md`, `calendario.csv`, la hoja y la página del calendario con su PDF |
| `medicion-intervencion` | `audiencia.md`, `estrategia.md` y `publicacion.md`, más los datos en `datos/`: el archivo de estadísticas que se baja de Meta Business Suite y los conteos en persona (`conteo.csv`, `escaneos.csv`, `compromisos.csv`) | La conducta, la meta y las piezas con su canal | `medicion.md`, la hoja y el panel con su PDF |

Si una pieza todavía no existe, el calendario igual sale y muestra un recuadro en su lugar. Mientras no haya datos reales, el kit de Actívate trae los archivos de `datos/` con datos ficticios.

## Qué skill usa cada exposición

| Exposición | Tema | Skills | Lo que se muestra |
|---|---|---|---|
| Primera | La audiencia y la estrategia | `audiencia-intervencion` y `estrategia-intervencion` | La hoja de la audiencia prioritaria y la hoja de estrategia |
| Segunda | Crear el contenido | `contenido-intervencion` y `animatic-intervencion` | Las ideas, el storyboard y el video de prueba |
| Tercera | Del contenido a la publicación | `publicacion-intervencion` | La página del calendario con las piezas, con su enlace y su PDF |
| Cuarta | De la publicación a la medición | `medicion-intervencion` | El plan de medición y el panel con gráficos, con su enlace y su PDF |

Cada equipo usa las skills de su exposición. No hace falta correr las anteriores: si faltan sus salidas, la skill pide lo mínimo que necesita. Después, en las evaluaciones, cada equipo recorre la cadena completa con su propio proyecto.

Las plantillas traen un ejemplo para ver cómo queda antes de usarlas: el calendario, con la campaña de voluntarios de la Fundación Me Diste de Comer, y el panel, con la campaña Actívate. Son fechas, piezas y números de muestra, y la página lo dice arriba. Para practicar la medición, la guía de la cuarta exposición trae un kit con tres semanas de datos ficticios de Actívate.

## Cómo instalarlas

Siguen el formato abierto Agent Skills, que usan agentes como Antigravity de Google. La forma más simple es pedírselo al agente, abierto en la carpeta de tu proyecto:

> Revisa https://github.com/mers84/skills-marketing-social, explícame qué hace cada skill e instálalas en este proyecto.

**Para actualizar** una skill que ya instalaste, pídeselo igual:

> Revisa https://github.com/mers84/skills-marketing-social y actualiza en este proyecto la skill publicacion-intervencion.

Si tenías la carpeta `perfil-intervencion`, bórrala: ahora se llama `audiencia-intervencion`.

O copia lo que necesites de `skills/` a una de estas carpetas:

- **Antigravity:** `.agents/skills/`
- **Claude Code:** `.claude/skills/`

También se puede instalar con la [CLI de skills](https://github.com/vercel-labs/skills), si tienes Node:

```bash
npx skills add mers84/skills-marketing-social
```

## Cómo usarlas

1. Crea una carpeta para tu proyecto con tu informe y tus entrevistas, **sin nombres ni datos que identifiquen a las personas**.
2. Abre la carpeta en tu agente.
3. Llama a la skill con una barra y su nombre, y dile qué necesitas:

```text
/audiencia-intervencion Lee el informe y las entrevistas. Audiencia prioritaria: ...
/estrategia-intervencion Usa la hoja de la audiencia de esta carpeta.
/contenido-intervencion Usa la audiencia y la estrategia. Dame ideas de contenido y el storyboard del video que elijamos.
/publicacion-intervencion Con la estrategia y las piezas, arma el calendario de la campaña, la página con las piezas para la institución y su PDF.
/medicion-intervencion Con los datos de esta carpeta, arma el plan de medición, el panel de la campaña y su PDF.
```

Los resultados quedan en `salidas/`:

- **Las hojas** de cada skill salen en HTML y en PDF.
- **El calendario con las piezas** (tercera exposición) y **el panel de medición** (cuarta) son páginas web con la marca de la UCAB. Quedan como carpetas listas para [Netlify Drop](https://app.netlify.com/drop): se arrastra la carpeta y da un enlace para mostrarlas en el teléfono o en clase. Las dos traen también su PDF.

## Límites

- **La IA propone, y las personas deciden.** Lo que sugiera no es evidencia: hay que probarlo con la audiencia.
- **Revisa las fuentes.** Los modelos pueden equivocarse, aunque las skills les pidan no inventar. Compara con tus entrevistas y con el libro.
- **Cuida los datos.** Lo que el agente lee puede enviarse al proveedor del modelo.
- **Comprueba lo que usas.** Antes de usar una herramienta, verifica su disponibilidad y su costo en tu país.
- **Están en construcción.** Se ajustan con lo que pasa en clase y todavía no se han probado en todos los agentes.

## Fuentes y créditos

Las skills parafrasean y citan por capítulo y página a Lee, N. R. y Kotler, P. (2020), *Social Marketing: Behavior Change for Social Good* (6.ª ed.), SAGE. Este repositorio no incluye el libro ni sustituye su lectura. Algunas herramientas son de la cátedra y están marcadas como tales.

Si quieres ampliar, [marketingskills](https://github.com/coreyhaines31/marketingskills) tiene skills de marketing como `marketing-psychology` y `video`. Están pensadas sobre todo para productos y software.

## Licencia

[MIT](LICENSE)
