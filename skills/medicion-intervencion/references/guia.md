# Guía de medición

Las herramientas cambian seguido. Antes de usar un paso con el equipo, comprueba en la ayuda oficial que siga igual y díselo si algo cambió.

## Qué se mide

Eric Ries, en *The Lean Startup* (2011), llamó **métricas de vanidad** a los números que se ven bien pero no ayudan a decidir: suben y uno se siente bien, pero no dicen si lo que se hizo funcionó. En una campaña social son los me gusta, los seguidores y las visualizaciones cuando se miran solos.

Lee y Kotler (2020, cap. 15) separan el **monitoreo**, que se hace con la campaña en marcha para corregir a tiempo, de la **evaluación**, que se hace al final para saber si se alcanzó la meta (p. 509). Distinguen cuatro medidas (pp. 522-532):

| Medida | Qué dice | Ejemplo |
|---|---|---|
| Insumo | Los recursos que se gastaron | Horas del equipo, dinero |
| Producto | Lo que hizo la campaña | Publicaciones, afiches, códigos impresos |
| Resultado | Cómo respondió la audiencia | Escaneos, personas que hicieron la conducta |
| Impacto | Si mejoró el problema de fondo | El problema social que motivó la campaña |

La meta dice cuántas personas harán la conducta y para cuándo, y necesita un punto de partida (cap. 7, p. 230). Viene de la hoja de la audiencia.

## Los cuatro pasos

1. **La vio**: alcance (personas distintas) y visualizaciones (veces que se vio).
2. **Le interesó**: guardados, compartidos, comentarios, preguntas.
3. **Dio un primer paso**: escaneos de un código, clics en un enlace o compromisos (una firma, una mano levantada, un sí), distinto por pieza o lugar. El código tiene que abrir algo que la persona usa para hacer la conducta. Un código QR dinámico deja cambiar el destino sin reimprimirlo y cuenta los escaneos.
4. **Hizo la conducta**: se cuenta en el lugar. Una conducta a hora fija y con alguien que la dirige es más fácil de contar.

Para atribuir un cambio a la campaña:

- **Si la conducta ya existe sin la campaña** (reciclar, vacunarse): cuenta el número de partida antes de lanzar y pregunta «¿viste la campaña?» a quienes hicieron la conducta.
- **Si la conducta la crea la campaña** (una actividad nueva, dirigida por alguien): el número de partida es cero y se escribe así; no hace falta contarlo. Cada vez que ocurre es efecto de la campaña. La pregunta útil es qué parte funcionó: compara lugares con y sin cada acción, y usa un código distinto por pieza.
- **En los dos casos**, cuenta de nuevo unas semanas después de retirar la acción que la impulsa, para saber si la conducta se sostiene.

Anota lo que también pudo influir: exámenes, feriados, otras actividades.

## El compromiso

Lee y Kotler llaman compromiso (*pledge*) a una promesa explícita: firmar un papel, marcar una casilla o decir que sí delante de otros. Lo tratan como un incentivo no monetario: quien acepta algo pequeño tiende a cumplir lo grande (cap. 11, PDF pp. 369-372; cap. 17, p. 588). No tiene que ser escrito: McKenzie-Mohr distingue compromisos verbales, escritos, públicos y duraderos (PDF pp. 369-370). Cada compromiso se puede contar, sin teléfono.

Pautas de Doug McKenzie-Mohr que cita el libro (p. 588): que sea público, que se pida en grupo, que la persona haga la actividad una vez al comprometerse y que se pida en un lugar donde ya hay contacto.

Caso del capítulo 15, In Motion (King County Metro, Seattle; PDF pp. 533-536): metas de inscribir a 1.000 dueños de carro, que el 75 % firmara el compromiso de manejar menos solo y bajar un 10 % esos viajes. Resultado: 1.874 inscritos, 91 % firmó; solo 22,7 % anotó sus viajes cada semana, aun con sorteo; una encuesta final midió el cambio. Lo que enseña: el compromiso se cuenta fácil, pero pedir que la persona reporte la conducta da pocos datos. La conducta se cuenta en el lugar.

## Traer los datos

| Forma | Cómo | Límite |
|---|---|---|
| Meta Business Suite | En la computadora, exportar datos de Facebook o de Instagram; sale un CSV | Paso tomado de guías de usuarios; comprobarlo |
| TikTok Studio | En la computadora, en estadísticas, descargar datos | Paso tomado de guías de usuarios; comprobarlo |
| YouTube Studio | Exportar la vista de estadísticas a Google Sheets o CSV | Paso tomado de guías de usuarios; comprobarlo |
| Conector MCP de Metricool | El agente consulta las estadísticas de las redes conectadas ([ayuda de Metricool](https://help.metricool.com/es/limites-del-mcp-y-requisitos-del-plan-h72jg)). Es el mismo que usa `publicacion-intervencion` para programar | Funciona con el plan gratis; ese plan guarda 30 días |
| Sitio del código QR dinámico | Se copia cada semana el número de escaneos de cada código en `datos/escaneos.csv` | Los escaneos no salen del sitio solos |
| Página propia que abre el código | Un pequeño código en la página anota cada visita y puede avisar, por ejemplo, a un canal de Telegram | Hay que programarlo aparte |

La aplicación de Instagram en el teléfono no exporta datos. En Instagram las estadísticas solo existen en las cuentas profesionales.

## El panel

- Tres o cuatro números, al menos uno de conducta.
- Cada número con su meta y la decisión que permite tomar. Si no lleva a ninguna decisión, sobra.
- Pensado para quien lo va a ver: a la institución le importa cuántas personas hicieron la conducta.

Tres trampas al leer los datos:

- **El alcance no se suma entre publicaciones.** La misma persona puede haber visto varias; sumarlas cuenta gente de más. Para la campaña completa, usa el alcance de la cuenta en el periodo, o muestra cada publicación por separado.
- **Los archivos semanales suelen traer el total acumulado** de cada publicación desde que salió. Para saber lo de la semana, resta la semana anterior.
- **La meta y el conteo, en la misma unidad.** Si la meta habla de estudiantes distintos y el conteo suma veces, no se pueden comparar. Ajusta uno de los dos y dilo.

## Compartir el panel

Igual que la página del calendario de `publicacion-intervencion` (su guía, «Publicar la página»):

1. Crear una cuenta gratis en [Netlify](https://app.netlify.com/signup). Sin cuenta, el sitio se borra a las pocas horas.
2. Abrir [Netlify Drop](https://app.netlify.com/drop) y arrastrar la carpeta `salidas/panel` completa.
3. Da un enlace del tipo `nombre-al-azar.netlify.app`; el nombre se puede cambiar en la configuración del sitio.
4. Para actualizar, se arrastra de nuevo la carpeta en la sección de despliegues del mismo sitio, y el enlace queda igual.

Si el panel lleva datos de personas, aunque sean conteos, recuerda que quien tenga el enlace lo puede ver.
