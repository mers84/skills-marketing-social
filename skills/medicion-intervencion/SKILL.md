---
name: medicion-intervencion
description: Basada en Lee y Kotler (2020), Social Marketing, 6.ª ed. Prepara y lleva la medición de una campaña de marketing social. Arma el plan de medición desde la estrategia (qué número mide cada paso hacia la conducta, la meta y el número de partida), deja la lista de lo que hay que preparar antes de lanzar, junta los datos de cada semana desde las redes y el conteo en persona, y crea un panel con gráficos en una página web. Usar cuando se pida un plan de medición, decidir qué medir, bajar o leer las estadísticas de las redes, llevar el registro semanal o armar un panel o tablero de la campaña.
---

# Medición de intervención

Última skill de la cadena. Parte de la estrategia y del calendario, y llega a una campaña que se puede medir: un plan, los datos de cada semana y un panel. Se basa en Lee y Kotler (2020), *Social Marketing*, 6.ª ed., cap. 15. El detalle está en [references/guia.md](references/guia.md).

## Reglas

1. **Parte de lo que ya existe.** Busca `salidas/estrategia.md` y `salidas/publicacion.md`. Si faltan, pide al menos la conducta, la audiencia, la meta y las piezas con su canal.
2. **La conducta manda.** Los me gusta y las visualizaciones dicen que la pieza llegó, no que alguien cambió. Todo plan incluye al menos un número que se acerque a la conducta.
3. **Dos capas.** Lo que pasa en las redes se lee en sus estadísticas. Lo que pasa en persona se cuenta en el lugar. Ninguna red da el segundo número.
4. **No pidas pasos sin beneficio.** No propongas que la persona marque «lo hice» en una página. Mide a través de algo que ya hace para cumplir la conducta.
5. **No inventes datos.** Si faltan números, dilo. Si el equipo pide datos de ejemplo para una demostración, márcalos como ficticios en el propio panel.
6. **Cuida los datos.** Los conteos no llevan nombres ni datos que identifiquen a las personas.

## Antes de empezar

Pregunta qué quieren hacer, y haz solo eso:

- Armar el plan de medición.
- Juntar los datos de la semana.
- Crear o actualizar el panel.

## Pasos

### 1. Arma el plan de medición

Con la estrategia, escribe los pasos entre ver una pieza y hacer la conducta, y qué número mide cada uno (guía, «Los cuatro pasos»):

| Paso | Número | De dónde sale | Meta | Cada cuánto |
|---|---|---|---|---|

Separa lo que hizo la campaña, lo que llegó a la audiencia y lo que cambió en ella (guía, «Qué se mide»). Agrega la lista de lo que hay que dejar listo antes de lanzar, con responsable y fecha: el número de partida, lo que abre cada código o enlace, un enlace por pieza y la cuenta con estadísticas activas.

Copia [assets/conteo.csv](assets/conteo.csv) a `datos/conteo.csv` para el conteo en persona.

### 2. Junta los datos de la semana

Hay dos formas (guía, «Traer los datos»):

- Si el entorno tiene conectado el servidor MCP de Metricool, consulta las estadísticas de la última semana de las redes conectadas y guárdalas en `datos/AAAA-MM-DD_redes.csv`. El plan gratis guarda 30 días: avisa si hay semanas sin bajar.
- Si no hay conector, explica cómo descargar el archivo de cada red y dónde guardarlo.

Lee también `datos/conteo.csv`. Resume qué subió, qué bajó y qué conviene corregir. Si un número no se mueve en dos semanas, sugiere cambiar una sola cosa.

### 3. Crea el panel

Crea `salidas/panel/index.html`: una página que se abre sin servidor, con un gráfico por número elegido (tres o cuatro), semana a semana, con la meta marcada y, al lado, la decisión que sugiere. Pon los datos dentro de la página. Si son de ejemplo, escribe arriba, visible, que son ficticios. Explica cómo publicarla con Netlify Drop, igual que la página de revisión.

Después, compara cada número del panel con el archivo de donde salió y pide al equipo que lo revise también.

### 4. Guarda las salidas

- `salidas/medicion.md`: el plan y la lista de lo que hay que preparar.
- `datos/`: los archivos de cada semana y `conteo.csv`.
- `salidas/panel/index.html`: el panel.
