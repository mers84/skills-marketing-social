# Skills de marketing social

Skills de IA para diseñar campañas de cambio de conducta, de la investigación de la audiencia a la medición, para cualquier proyecto.

**Están basadas en la bibliografía de Lee y Kotler (2020), *Social Marketing: Behavior Change for Social Good*, 6.ª ed.** Sus conceptos, pasos y tácticas salen de ese libro, con capítulo y página.

Fueron creadas para la materia Marketing y Gestión de Causas Sociales de la UCAB Guayana. Están en español.

## Qué es una skill

Es una receta de trabajo para un agente de IA, guardada en una carpeta. Le indica cómo hacer una tarea, siempre de la misma forma, para no explicarle todo cada vez.

## Las skills

Funcionan en cadena: lo que sale de una es la entrada de la siguiente.

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
publicacion-intervencion → canales, calendario, textos por red y página con las piezas, enlace y programación
        ↓
medicion-intervencion    → plan de medición, datos de cada semana y panel
```

| Skill | Qué hace |
|---|---|
| [`audiencia-intervencion`](skills/audiencia-intervencion/SKILL.md) | Ordena los hallazgos: conducta, etapa de cambio, barreras, beneficios, motivadores, competencia e influyentes. Marca qué es evidencia, qué es supuesto y qué falta |
| [`estrategia-intervencion`](skills/estrategia-intervencion/SKILL.md) | Propone posicionamientos y acciones por los cuatro frentes de la balanza, y las combina en una sola estrategia |
| [`contenido-intervencion`](skills/contenido-intervencion/SKILL.md) | Convierte la hoja de la audiencia y la estrategia en ideas, mensajes, eslóganes, un storyboard por planos y un plan de edición. Si el modelo puede crear imágenes, ofrece bocetos; si no, entrega el texto de los planos |

| [`animatic-intervencion`](skills/animatic-intervencion/SKILL.md) | Convierte un storyboard aprobado en un video de prueba, con imágenes de Nano Banana o Codex y voz de ElevenLabs o Deepgram. La clave va en un archivo aparte. Necesita Python, Pillow y ffmpeg |
| [`publicacion-intervencion`](skills/publicacion-intervencion/SKILL.md) | Deja la campaña lista para salir: propone canales con datos, explica las opciones de cuenta, arma el calendario con publicaciones y acciones en persona, adapta los textos a cada red, crea una página con las piezas y un enlace para que la institución las revise, y programa las publicaciones, también con un conector MCP. Deja anotado cómo se va a contar cada pieza |
| [`medicion-intervencion`](skills/medicion-intervencion/SKILL.md) | Separa las métricas de vanidad de las de conducta y arma el plan de medición con la meta y el número de partida de la hoja de la audiencia; junta los datos de cada semana, descargándolos de cada red o con el conector MCP de Metricool, más el conteo en persona; y crea un panel con gráficos en una página web |

## Cómo instalarlas

Siguen el formato abierto Agent Skills, que usan agentes como Antigravity de Google. La forma más simple es pedírselo al agente, abierto en la carpeta de tu proyecto:

> Revisa https://github.com/mers84/skills-marketing-social, explícame qué hace cada skill e instálalas en este proyecto.

Si ya habías instalado la versión anterior, borra la carpeta `perfil-intervencion`: ahora se llama `audiencia-intervencion`.

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
3. Llama a cada skill:

```text
/audiencia-intervencion Lee el informe y las entrevistas. Audiencia prioritaria: ...
/estrategia-intervencion Usa la hoja de la audiencia de esta carpeta.
/contenido-intervencion Usa la audiencia y la estrategia. Dame ideas de contenido y el storyboard del video que elijamos.
/publicacion-intervencion Con la estrategia y las piezas, arma el calendario de la campaña y la página de revisión para la institución.
/medicion-intervencion Con la audiencia, la estrategia y el calendario, arma el plan de medición y el panel de la campaña.
```

Los resultados quedan en `salidas/`. Las hojas salen en HTML y en PDF.

## Límites

- **La IA propone, y las personas deciden.** Lo que sugiera no es evidencia: hay que probarlo con la audiencia.
- **Revisa las fuentes.** Los modelos pueden equivocarse, aunque las skills les pidan no inventar. Compara con tus entrevistas y con el libro.
- **Cuida los datos.** Lo que el agente lee puede enviarse al proveedor del modelo.
- **Comprueba lo que usas.** Antes de usar una herramienta, verifica su disponibilidad y su costo en tu país.
- **Son una primera versión.** Todavía no se han probado en todos los agentes.

## Fuentes y créditos

Las skills parafrasean y citan por capítulo y página a Lee, N. R. y Kotler, P. (2020), *Social Marketing: Behavior Change for Social Good* (6.ª ed.), SAGE. Este repositorio no incluye el libro ni sustituye su lectura. Algunas herramientas son de la cátedra y están marcadas como tales.

Si quieres ampliar, [marketingskills](https://github.com/coreyhaines31/marketingskills) tiene skills de marketing como `marketing-psychology` y `video`. Están pensadas sobre todo para productos y software.

## Licencia

[MIT](LICENSE)
