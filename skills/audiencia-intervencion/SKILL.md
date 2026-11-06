---
name: audiencia-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Convierte un informe, entrevistas o notas de investigación en la hoja de la audiencia prioritaria de una campaña de cambio de conducta. Usar cuando se pida describir o perfilar a una audiencia prioritaria, sacar barreras, beneficios, motivadores, competencia o influyentes, ubicar la etapa de cambio, organizar hallazgos de entrevistas o preparar la información para diseñar una intervención de marketing social.
---

# Audiencia prioritaria

Toma lo que un equipo investigó y lo ordena con los conceptos de Lee y Kotler (2020), *Social Marketing*, 6.ª ed. Entrega una hoja clara que muestra lo que se sabe, lo que se supone y lo que falta averiguar.

La hoja es la entrada de la skill `estrategia-intervencion`. Aquí no se proponen campañas, mensajes ni tácticas. Si el informe ya trae una táctica, anótala como decisión del equipo, sin darla por buena.

## Reglas

1. **No inventes.** Todo dato sale de los archivos o de lo que diga el equipo.
2. **Marca el origen de cada dato:**
   - `evidencia`: la persona lo dijo o hizo, o está en una fuente. Indica cuál.
   - `supuesto`: es una deducción a partir de algo que sí consta, o una decisión del equipo. Indica de qué sale y cómo comprobarlo.
   - `falta`: no hay nada en qué apoyarse. No lo rellenes con lo que suele pasar.
3. **Separa lo dicho de lo interpretado.** Cita palabras breves y textuales. Si un informe y su transcripción no coinciden, confía en la transcripción y avisa. Si la pregunta sugirió la respuesta, márcalo: «evidencia, sugerida en la pregunta». Las transcripciones automáticas pueden errar en quién habla: dilo si hay duda. Si una fuente no está en la carpeta, escribe «según el informe».
4. **No generalices.** Con pocas entrevistas escribe «en estas conversaciones encontramos», no «los estudiantes piensan». Muestra cuando las fuentes difieren.
5. **Protege a las personas.** Usa códigos como «Entrevista 1», sin nombres, contactos ni datos que identifiquen. Respeta lo que alguien pidió no usar. En temas de salud mental no diagnostiques ni pidas que cuenten su situación de salud.
6. **Una audiencia y una conducta por hoja.** Si hay varias, pregunta con cuál empezar y crea una hoja por cada una.

## Pasos

### 1. Reúne el material

Lee los informes, transcripciones y notas de la carpeta del proyecto. Si no encuentras nada, pide que te indiquen los archivos.

### 2. Llena cada punto

Consulta [references/conceptos.md](references/conceptos.md) para las definiciones:

- Audiencia prioritaria
- Conducta
- Etapa de cambio
- Saber y creer
- Barreras y barrera crítica candidata
- Beneficios
- Motivadores
- Competencia
- Influyentes
- Balanza de costos y beneficios
- Meta y punto de partida

No uses una valoración general como prueba de la etapa. Que alguien califique un tema con 10 no demuestra que piense actuar: compáralo con lo que dice que hace.

### 3. Pregunta qué hacer con lo que falta

Muestra todos los vacíos juntos, en una sola tabla, y pide una decisión para cada uno:

| Opción | Qué pasa |
|---|---|
| **Asumir** | Propones un supuesto razonado, que queda marcado como tal |
| **Investigar** | Entregas preguntas para volver a la audiencia |
| **Dar la información** | El equipo la pega o indica el archivo |

Si el equipo no responde o pide avanzar, deja el punto como `falta`. Nunca lo conviertas por tu cuenta en un supuesto.

### 4. Si eligen investigar, prepara las preguntas

Pregunta por lo que la persona hizo y vivió con la conducta, sin sugerir la respuesta:

- Barreras: «La última vez que pudiste hacerlo y no lo hiciste, ¿qué pasó?»
- Beneficios: «¿Qué ganarías tú si lo hicieras?»
- Motivadores: «¿Qué podría decirte, mostrarte, darte o hacer alguien para que lo hagas?»
- Competencia: «¿Qué haces en vez de eso? ¿Qué te gusta de hacerlo así?»
- Influyentes: «En este tema, ¿a quién le harías caso?»

### 5. Crea la hoja

Guarda en `salidas/`:

- `audiencia.md`: los datos, para la siguiente skill.
- `audiencia.html`: la hoja horizontal tipo Canvas, a partir de [assets/hoja-audiencia.html](assets/hoja-audiencia.html). Conserva su diseño, sus íconos y sus recuadros. La hoja crece según la información: no recortes datos para que quepan. Escribe viñetas claras, con el detalle que haga falta.
- `audiencia.pdf`: la misma hoja, para compartir o imprimir. Genérala desde `audiencia.html` con Chrome o Edge en modo sin ventana (`--headless --print-to-pdf`, sin encabezados), y revisa que no se corte ningún recuadro. Si no puedes, indica que se abra el HTML y se use Imprimir > Guardar como PDF, en horizontal.

### 6. Cierra

Di en pocas líneas qué pasa a la estrategia, qué conviene comprobar primero y si la evidencia sugiere revisar la audiencia o la conducta. El libro lo prevé cuando las barreras son insalvables o la conducta no se entiende (cap. 8, p. 282).

## Formato de `audiencia.md`

```markdown
# Audiencia prioritaria: [proyecto]
Audiencia: ...

## Conducta
- ... [supuesto: por qué y cómo comprobarlo]

## Etapa de cambio
- ... [evidencia: Entrevista 2]

## Saber y creer
## Barreras
## Barrera crítica candidata
## Beneficios
## Motivadores
## Competencia
## Influyentes
## Balanza
## Meta y punto de partida
## Lo que pasa a la estrategia
## Decisiones sobre lo que falta
## Preguntas pendientes
## Avisos: lo que no coincide con las transcripciones
```
