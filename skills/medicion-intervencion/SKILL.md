---
name: medicion-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Prepara y lleva la medición de una campaña de marketing social. A partir de la audiencia, la estrategia y la publicación, separa las métricas de vanidad de las de conducta, arma el plan de medición (qué número mide cada paso hacia la conducta, la meta y el número de partida), junta los datos de cada semana desde las redes y el conteo en persona, y crea un panel con gráficos en una página web. Usar cuando se pida un plan de medición, decidir qué medir, bajar o leer las estadísticas de las redes, llevar el registro semanal o armar un panel o tablero de la campaña.
---

# Medición de intervención

Última skill de la cadena. Parte de lo que dejaron las anteriores y llega a una campaña que se puede medir: un plan, los datos de cada semana y un panel. Se basa en Lee y Kotler (2020), *Social Marketing*, 6.ª ed., cap. 7 (metas) y cap. 15 (monitoreo y evaluación). El detalle está en [references/guia.md](references/guia.md).

## Reglas

1. **Parte de lo que ya existe.** Busca en `salidas/`:
   - `audiencia.md` (o `perfil.md`, el nombre anterior): la conducta, y la meta y el punto de partida.
   - `estrategia.md`: el posicionamiento y las acciones, para saber qué se espera que cambie.
   - `publicacion.md`: los canales, el calendario y la sección «Lo que pasa a la medición».

   Si faltan, sugiere correr las skills anteriores, o pide al menos la conducta, la meta y las piezas con su canal.
2. **No todo es contenido.** La estrategia combina publicaciones con acciones en persona: un afiche, una actividad dirigida, un compromiso firmado. Mide las dos partes: la digital, que dan las redes, y la física, que se cuenta donde ocurre la conducta.
3. **La conducta manda.** Los me gusta, los seguidores y las visualizaciones son métricas de vanidad si se miran solas: dicen que la pieza llegó, no que alguien cambió. Todo plan incluye al menos un número de conducta.
4. **Dos capas.** Lo que pasa en las redes se lee en sus estadísticas. Lo que pasa en persona se cuenta en el lugar. Ninguna red da el segundo número.
5. **No pidas pasos sin beneficio.** No propongas que la persona marque «lo hice» en una página. Mide a través de algo que ya hace para cumplir la conducta: el video que abre un código, la pausa a hora fija que alguien dirige.
6. **No inventes datos.** Si falta el punto de partida o la meta, márcalo como `falta` y propone cómo conseguirlo. Si el equipo pide datos de ejemplo para una demostración, márcalos como ficticios en el propio panel.
7. **Cuida los datos.** Los conteos no llevan nombres ni datos que identifiquen a las personas.

## Antes de empezar

Pregunta qué quieren hacer, y haz solo eso:

- Armar el plan de medición.
- Juntar los datos de la semana.
- Crear o actualizar el panel.

## Pasos

### 1. Separa vanidad y conducta

Con la hoja de la audiencia, escribe la conducta y la meta. Lista los números que la campaña va a producir y marca cuáles son métricas de vanidad y cuál es el número de conducta (guía, «Qué se mide»).

### 2. Arma el plan de medición

Escribe los cuatro pasos entre ver una pieza y hacer la conducta, y qué número mide cada uno (guía, «Los cuatro pasos»):

| Paso | Número | De dónde sale | Meta | Cada cuánto |
|---|---|---|---|---|

Agrega la lista de lo que hay que dejar listo antes de lanzar, con responsable y fecha: el número de partida, lo que abre cada código o enlace, un código por pieza o lugar y la cuenta con estadísticas activas. Si `publicacion.md` ya dice cómo se cuenta cada pieza, úsalo; si no, propónlo.

Copia [assets/conteo.csv](assets/conteo.csv) a `datos/conteo.csv` para el conteo en persona, [assets/escaneos.csv](assets/escaneos.csv) a `datos/escaneos.csv` si hay códigos QR o enlaces propios, y [assets/compromisos.csv](assets/compromisos.csv) a `datos/compromisos.csv` si la estrategia pide un compromiso firmado.

Si la estrategia no tiene un primer paso que se pueda contar, propone un compromiso (guía, «El compromiso»): es un incentivo según el libro y, además, cada firma se cuenta.

### 3. Junta los datos de la semana

Hay dos formas (guía, «Traer los datos»):

- **Descargar el archivo de cada red** y guardarlo en `datos/` con la fecha en el nombre. Explica dónde está el botón en cada red.
- **Con el conector MCP de Metricool**, si el entorno lo tiene: consulta las estadísticas de la última semana de las redes conectadas y guárdalas en `datos/AAAA-MM-DD_redes.csv`. Metricool solo trae los números; el análisis lo haces tú. El plan gratis guarda 30 días: avisa si hay semanas sin bajar.

Los escaneos de un código QR quedan en el sitio que lo creó: alguien los copia cada semana en `datos/escaneos.csv`, un número por código. Si la página que abre el código es propia, también puede contar sus visitas con un pequeño código y avisar, por ejemplo, a un canal de Telegram; menciónalo como opción.

Lee también `datos/conteo.csv`, `datos/escaneos.csv` y `datos/compromisos.csv`. Resume qué subió, qué bajó y qué conviene corregir. Si un número no se mueve en dos semanas, sugiere cambiar una sola cosa.

### 4. Crea el panel

Crea la carpeta `salidas/panel/`, lista para Netlify Drop, con `index.html`: una página que se abre sin servidor, con un gráfico por número elegido (tres o cuatro, al menos uno de conducta), semana a semana, con la meta marcada y, al lado, la decisión que sugiere. Pon los datos dentro de la página, y que nada de lo que necesita quede fuera de la carpeta. Si los datos son de ejemplo, escribe arriba, visible, que son ficticios.

No la subas tú. La sube el equipo, para que la institución vea el panel en el teléfono con un enlace: se arrastra la carpeta `salidas/panel` a Netlify Drop (guía, «Compartir el panel»). Cada semana, con los datos nuevos, actualizas la página y el equipo vuelve a arrastrar la carpeta al mismo sitio, para que el enlace no cambie.

Después, compara cada número del panel con el archivo de donde salió y pide al equipo que lo revise también.

### 5. Guarda las salidas

En `salidas/`:

- `medicion.md`: los datos, con el formato de abajo.
- `medicion.html`: la hoja del plan, a partir de [assets/hoja-medicion.html](assets/hoja-medicion.html). Crece según la información.
- `panel/`: la carpeta del panel, lista para Netlify Drop.

Y en `datos/`, los archivos de cada semana y `conteo.csv`.

### 6. Cierra

Di en pocas líneas qué falta para poder medir (por lo general, el número de partida) y qué decisión permite tomar cada número del panel. Si los datos muestran que la conducta no se mueve, sugiere volver a `estrategia-intervencion`: el libro prevé ajustar la campaña con lo que dice el monitoreo (cap. 15, p. 509).

## Formato de `medicion.md`

```markdown
# Plan de medición: [proyecto]
Audiencia: ...
Conducta: ...

## Meta y número de partida
- Meta: ... [evidencia | supuesto | falta]
- Número de partida: ... [falta: cómo conseguirlo]

## Métricas de vanidad y número de conducta
## Los cuatro pasos
## Antes de lanzar
## Cómo se traen los datos
## El panel: números y decisiones
## Lo que falta para poder medir
```
