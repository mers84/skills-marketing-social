---
name: medicion-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Prepara y lleva la medición de una campaña de marketing social. A partir de la audiencia, la estrategia y la publicación, separa las métricas de vanidad de las de conducta, arma el plan de medición (qué número mide cada paso hacia la conducta, la meta y el número de partida), junta los datos de cada semana desde las redes y el conteo en persona, y crea un panel con gráficos, con la marca de la UCAB, en una página web y en PDF. Usar cuando se pida un plan de medición, decidir qué medir, bajar o leer las estadísticas de las redes, llevar el registro semanal o armar un panel o tablero de la campaña.
---

# Medición de intervención

Última skill de la cadena. Parte de lo que dejaron las anteriores y llega a una campaña que se puede medir: un plan, los datos de cada semana y un panel. Se basa en Lee y Kotler (2020), *Social Marketing*, 6.ª ed., cap. 7 (metas) y cap. 15 (monitoreo y evaluación). El detalle está en [references/guia.md](references/guia.md).

## Reglas

1. **Parte de lo que ya existe.** Busca en `salidas/`:
   - `audiencia.md` (o `perfil.md`, el nombre anterior): la conducta, y la meta y el punto de partida.
   - `estrategia.md`: el posicionamiento y las acciones, para saber qué se espera que cambie.
   - `publicacion.md`: los canales, el calendario y la sección «Lo que pasa a la medición».

   Si faltan, sugiere correr las skills anteriores, o pide al menos la conducta, la meta y las piezas con su canal.
2. **No todo es contenido.** La estrategia combina publicaciones con acciones en persona: un afiche, una actividad dirigida, un compromiso. Mide las dos partes: la digital, que dan las redes, y la física, que se cuenta donde ocurre la conducta.
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

Copia [assets/conteo.csv](assets/conteo.csv) a `datos/conteo.csv` para el conteo en persona, [assets/escaneos.csv](assets/escaneos.csv) a `datos/escaneos.csv` si hay códigos QR o enlaces propios, y [assets/compromisos.csv](assets/compromisos.csv) a `datos/compromisos.csv` si la estrategia pide un compromiso.

Si la estrategia no tiene un primer paso que se pueda contar, propone un compromiso (guía, «El compromiso»): es un incentivo según el libro y, además, cada compromiso se cuenta. Prefiere el de quien dirige la conducta (un profesor, un líder) y el sí en voz alta del grupo antes que una aplicación para marcar «lo hice».

### 3. Junta los datos de la semana

Hay dos formas (guía, «Traer los datos»):

- **Descargar el archivo de cada red** y guardarlo en `datos/` con la fecha en el nombre. Explica dónde está el botón en cada red.
- **Con el conector MCP de Metricool**, si el entorno lo tiene: consulta las estadísticas de la última semana de las redes conectadas y guárdalas en `datos/AAAA-MM-DD_redes.csv`. Metricool solo trae los números; el análisis lo haces tú. El plan gratis guarda 30 días: avisa si hay semanas sin bajar.

Los escaneos de un código QR quedan en el sitio que lo creó: alguien los copia cada semana en `datos/escaneos.csv`, un número por código. Si la página que abre el código es propia, también puede contar sus visitas con un pequeño código y avisar, por ejemplo, a un canal de Telegram; menciónalo como opción.

Lee también `datos/conteo.csv`, `datos/escaneos.csv` y `datos/compromisos.csv`. Resume qué subió, qué bajó y qué conviene corregir. Si un número no se mueve en dos semanas, sugiere cambiar una sola cosa.

### 4. Crea el panel

Es una página con la marca de la UCAB y dos vistas, con los mismos datos:

- **Tablero**, la que abre primero: ocupa una pantalla, sin desplazarse, para proyectarla o mirarla de un vistazo. Arriba los números grandes, debajo los dos o tres gráficos principales y al pie la conducta y la meta. Al tocar un recuadro se ve qué decidir.
- **Informe**: la página completa, con todos los gráficos, cada uno con su decisión y su fuente, y lo que dicen los datos. Es la que se manda o se imprime.

**No escribas la página: copia la plantilla y llena sus datos.**

1. Copia la carpeta [assets/panel/](assets/panel/) completa a `salidas/panel/`: `index.html`, `datos.js` y `logo-ucab.svg`. No cambies `index.html`.
2. Reescribe `salidas/panel/datos.js` con los números del proyecto. El archivo trae el ejemplo de Actívate y explica cada campo; reemplázalo todo.
3. Elige el tipo de cada recuadro según el dato:

   | El dato | Tipo | Ejemplo |
   |---|---|---|
   | Un número con su meta o su cambio frente a la semana anterior | `kpi` | Estudiantes que hicieron la pausa esta semana: 62, con una meta de 60 |
   | Un número semana a semana | `linea`, con `meta` si la hay | La conducta en las últimas cuatro semanas |
   | Comparar lugares, piezas o grupos | `barras` | Cuántos hicieron la conducta en cada salón |
   | Partes de un total | `dona` | Cuántos se comprometieron y cuántos no |
   | Los pasos de ver la pieza a hacer la conducta | `embudo` | La vio, le interesó, dio un primer paso, la hizo |
   | El detalle fila por fila | `tabla` | El conteo de la última semana |

   Pon de tres a cinco `kpi` y de tres a seis gráficos, al menos uno de conducta. Marca con `tablero: true` los dos o tres gráficos que van en la vista de tablero; los `kpi` van siempre. Marca cada uno con su `capa` (conducta, primer paso, interés o vanidad), su `fuente` y su `decision`. No sumes el alcance de varias publicaciones (guía, «El panel»).
4. Si los datos son de ejemplo, deja `ficticio: true`: la página lo dice arriba, en amarillo.
5. Saca `salidas/panel/panel.pdf`, que trae el tablero en la primera página y el informe detrás, con el comando de «Sacar los PDF», en el paso 5, y pon `pdf: "panel.pdf"` en `datos.js`, para que la página muestre el botón «Descargar PDF».

Después, compara cada número del panel con el archivo de donde salió y pide al equipo que lo revise también.

No la subas tú. La sube el equipo, para que la institución vea el panel en el teléfono con un enlace: se arrastra la carpeta `salidas/panel` a Netlify Drop (guía, «Compartir el panel»). Cada semana, con los datos nuevos, actualizas `datos.js` y el PDF, y el equipo vuelve a arrastrar la carpeta al mismo sitio, para que el enlace no cambie.

### 5. Guarda las salidas

En `salidas/`:

- `medicion.md`: los datos, con el formato de abajo.
- `medicion.html` y `medicion.pdf`: la hoja del plan, a partir de [assets/hoja-medicion.html](assets/hoja-medicion.html), con la marca de la UCAB. Copia [assets/logo-ucab.svg](assets/logo-ucab.svg) a `salidas/` para que se vea el logo. La hoja crece según la información.
- `panel/`: la carpeta del panel, lista para Netlify Drop, con `index.html`, `datos.js`, `logo-ucab.svg` y `panel.pdf`.

Y en `datos/`, los archivos de cada semana y `conteo.csv`.

### Sacar los PDF

Para sacar el PDF de una página, imprímela con el navegador sin abrir ventanas. En Windows, desde la carpeta del proyecto:

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --window-size=1280,900 --no-pdf-header-footer --virtual-time-budget=4000 --print-to-pdf="$PWD\salidas\panel\panel.pdf" "file:///$($PWD -replace '\\','/')/salidas/panel/index.html"
```

En Mac, lo mismo con `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`. Mantén `--window-size=1280,900`: sin él, el PDF sale en una sola columna. Si el comando falla, pide al equipo que abra la página y toque «Guardar en PDF». El PDF tarda unos segundos en aparecer después de que el comando termina. Ábrelo y revisa que no haya nada cortado.

Para la hoja, cambia las rutas por `salidas/medicion.html` y `salidas\medicion.pdf`.

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
