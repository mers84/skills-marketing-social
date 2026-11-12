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
3. **Dio un primer paso**: escaneos de un código o clics en un enlace, distinto por pieza o lugar. El código tiene que abrir algo que la persona usa para hacer la conducta. Un código QR dinámico deja cambiar el destino sin reimprimirlo y cuenta los escaneos.
4. **Hizo la conducta**: se cuenta en el lugar. Una conducta a hora fija y con alguien que la dirige es más fácil de contar.

Para atribuir un cambio a la campaña: un número de partida contado antes de lanzar y la pregunta «¿viste la campaña?» a quienes hicieron la conducta. Anota lo que también pudo influir: exámenes, feriados, otras actividades.

## Traer los datos

| Forma | Cómo | Límite |
|---|---|---|
| Meta Business Suite | En la computadora, exportar datos de Facebook o de Instagram; sale un CSV | Paso tomado de guías de usuarios; comprobarlo |
| TikTok Studio | En la computadora, en estadísticas, descargar datos | Paso tomado de guías de usuarios; comprobarlo |
| YouTube Studio | Exportar la vista de estadísticas a Google Sheets o CSV | Paso tomado de guías de usuarios; comprobarlo |
| Conector MCP de Metricool | El agente consulta las estadísticas de las redes conectadas ([ayuda de Metricool](https://help.metricool.com/es/limites-del-mcp-y-requisitos-del-plan-h72jg)). Es el mismo que usa `publicacion-intervencion` para programar | Funciona con el plan gratis; ese plan guarda 30 días |

La aplicación de Instagram en el teléfono no exporta datos. En Instagram las estadísticas solo existen en las cuentas profesionales.

## El panel

- Tres o cuatro números, al menos uno de conducta.
- Cada número con su meta y la decisión que permite tomar. Si no lleva a ninguna decisión, sobra.
- Pensado para quien lo va a ver: a la institución le importa cuántas personas hicieron la conducta.

## Compartir el panel

Igual que la página de revisión de `publicacion-intervencion` (su guía, «Publicar la página»):

1. Crear una cuenta gratis en [Netlify](https://app.netlify.com/signup). Sin cuenta, el sitio se borra a las pocas horas.
2. Abrir [Netlify Drop](https://app.netlify.com/drop) y arrastrar la carpeta `salidas/panel` completa.
3. Da un enlace del tipo `nombre-al-azar.netlify.app`; el nombre se puede cambiar en la configuración del sitio.
4. Para actualizar, se arrastra de nuevo la carpeta en la sección de despliegues del mismo sitio, y el enlace queda igual.

Si el panel lleva datos de personas, aunque sean conteos, recuerda que quien tenga el enlace lo puede ver.
