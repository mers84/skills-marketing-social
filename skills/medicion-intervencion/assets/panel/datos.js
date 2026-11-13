/*
  DATOS DEL PANEL. Este es el único archivo que se cambia; index.html no se toca.
  Este ejemplo es el de Actívate, con datos ficticios. Reemplázalo con los del proyecto.

  Cada elemento de "componentes" es un recuadro del panel. Elige el tipo según el dato:
    kpi     Un número con su meta y su cambio frente a la semana anterior.
            Campos: valor, meta (opcional), anterior (opcional), de (opcional: "62 de 120"), unidad.
    linea   Un número semana a semana, con la meta marcada.
            Campos: ejeX (semanas), series [{nombre, valores}], meta (opcional). Hasta 5 series.
    barras  Comparar lugares, piezas o grupos en un mismo momento.
            Campos: etiquetas, valores, meta (opcional), sufijo (opcional, por ejemplo " %"), colores (opcional).
    dona    Partes de un total (por ejemplo, cuántos dijeron que sí y cuántos no).
            Campos: partes [{nombre, valor}]. La primera parte es la que se destaca en el centro.
    embudo  Los pasos entre ver la pieza y hacer la conducta.
            Campos: pasos [{nombre, valor, fuente}].
    tabla   El detalle, cuando hace falta ver cada fila.
            Campos: columnas, filas.
  Campos comunes: titulo, subtitulo, capa ("conducta", "primer paso", "interés" o "vanidad"),
  decision (qué decidir con ese número), fuente (de qué archivo sale), nota, ancho ("completo" ocupa toda la fila),
  tablero (true en los gráficos que van en la vista de tablero, hasta seis; los kpi van siempre, hasta seis).
*/
window.PANEL = {
  proyecto: "Actívate",
  institucion: "Centro de Desarrollo Estudiantil · UCAB Guayana",
  equipo: "Equipo Actívate",
  periodo: "23/11/2026 al 13/12/2026",
  actualizado: "13/12/2026",
  ficticio: true,
  pdf: "",
  conducta: "Hacer una pausa de 3 minutos de movimiento a la mitad de cada bloque largo de clase o de estudio.",
  audiencia: "Estudiantes de pregrado con bloques de clase o de estudio de dos horas o más.",
  meta: "60 estudiantes de 4 secciones hacen la pausa cada semana, al 15/01/2027.",
  partida: "0. Hoy nadie hace una pausa de movimiento dirigida en clase.",

  componentes: [
    { tipo: "kpi", capa: "conducta", titulo: "Hicieron la pausa esta semana",
      valor: 62, meta: 60, anterior: 57, unidad: "estudiantes en 4 salones",
      decision: "Se pasó la meta. Mantener la pausa a hora fija y no cambiar nada más.",
      fuente: "datos/conteo.csv, semana del 09 y 10/12" },
    { tipo: "kpi", capa: "primer paso", titulo: "Escanearon el código QR",
      valor: 63, anterior: 66, unidad: "escaneos en la semana",
      fuente: "datos/escaneos.csv, semana al 13/12" },
    { tipo: "kpi", capa: "primer paso", titulo: "Profesores que se comprometieron",
      valor: 2, de: 4, unidad: "profesores dirigen la pausa",
      fuente: "datos/compromisos.csv" },
    { tipo: "kpi", capa: "conducta", titulo: "Se sostiene sin el profesor",
      valor: 31, anterior: 44, anterior_texto: "diciembre, con el profesor", unidad: "estudiantes en S-11 y S-21, el 13/01",
      decision: "Bajó casi un tercio cuando el profesor dejó de dirigirla. Pedir que alguien del salón la siga proponiendo.",
      fuente: "datos/conteo.csv, 09/12 y 13/01" },
    { tipo: "kpi", capa: "vanidad", titulo: "Alcance del reel de la semana",
      valor: 1150, unidad: "cuentas vieron el reel con estudiantes",
      fuente: "datos/2026-12-13_instagram.csv" },

    { tipo: "linea", capa: "conducta", titulo: "Estudiantes que hicieron la pausa, por semana", tablero: true,
      subtitulo: "Suma de los 4 salones, un bloque por salón a la semana",
      ejeX: ["25-26/11", "02-03/12", "09-10/12"],
      series: [{ nombre: "Hicieron la pausa", valores: [54, 57, 62] }],
      meta: 60,
      decision: "La tendencia sube. Revisar en enero si se sostiene cuando el profesor deja de dirigirla.",
      fuente: "datos/conteo.csv" },

    { tipo: "barras", capa: "conducta", titulo: "Cuántos hicieron la pausa según quién la propuso", tablero: true,
      subtitulo: "Porcentaje de los presentes, las tres semanas juntas",
      etiquetas: ["La propuso el profesor", "La propuso el delegado", "No la propuso nadie"],
      valores: [68, 28, 18], sufijo: " %",
      colores: ["#047732", "#40b4e5", "#9aa0a6"],
      decision: "Conseguir que el profesor de S-22 la dirija: con él, la pausa casi se cuadruplica.",
      fuente: "datos/conteo.csv (141 de 206 con profesor, 17 de 61 con delegado, 15 de 85 sin nadie)" },

    { tipo: "linea", capa: "primer paso", titulo: "Escaneos del código QR por lugar", tablero: true,
      ejeX: ["29/11", "06/12", "13/12"],
      series: [
        { nombre: "Biblioteca", valores: [17, 26, 31] },
        { nombre: "Salones (4)", valores: [50, 40, 32] }
      ],
      decision: "En los salones ya no hace falta el video: la pausa la dirige alguien. Poner más códigos en la biblioteca.",
      fuente: "datos/escaneos.csv" },

    { tipo: "dona", capa: "primer paso", titulo: "Compromiso en el salón", tablero: true,
      subtitulo: "Manos levantadas el primer día, en 3 salones",
      partes: [{ nombre: "Se comprometieron", valor: 67 }, { nombre: "No levantaron la mano", valor: 22 }],
      decision: "Repetir el compromiso en S-12 ahora que el profesor la dirige.",
      fuente: "datos/compromisos.csv" },

    { tipo: "embudo", titulo: "Del reel a la pausa, semana del 07 al 13/12", tablero: true,
      pasos: [
        { nombre: "La vio", valor: 1150, fuente: "Alcance del reel" },
        { nombre: "Le interesó", valor: 61, fuente: "Guardados y compartidos" },
        { nombre: "Dio un primer paso", valor: 63, fuente: "Escaneos del QR" },
        { nombre: "Hizo la conducta", valor: 62, fuente: "Conteo en el salón" }
      ],
      nota: "Cada paso sale de una fuente distinta: no son las mismas personas pasando de un paso al otro, sino el tamaño de cada paso.",
      fuente: "Instagram, escaneos.csv y conteo.csv" },

    { tipo: "barras", capa: "vanidad", titulo: "Alcance de cada publicación", tablero: true,
      subtitulo: "No se suman: la misma persona pudo ver varias",
      etiquetas: ["Reel de presentación", "Video de la rutina", "Carrusel por qué 3 minutos", "Reel con estudiantes"],
      valores: [860, 640, 610, 1150],
      colores: ["#9aa0a6", "#9aa0a6", "#9aa0a6", "#40b4e5"],
      decision: "El reel con estudiantes llegó más lejos que los demás. El próximo, también con estudiantes.",
      fuente: "datos/2026-12-13_instagram.csv" },

    { tipo: "tabla", titulo: "Conteo de la última semana por salón",
      columnas: ["Salón", "Fecha", "Presentes", "Hicieron la pausa", "Quién la propuso"],
      filas: [
        ["S-11", "09/12", 31, 21, "Profesor"],
        ["S-21", "09/12", 29, 23, "Profesor"],
        ["S-12", "10/12", 29, 12, "Profesor (desde esta semana)"],
        ["S-22", "10/12", 30, 6, "Nadie"]
      ],
      fuente: "datos/conteo.csv" }
  ],

  lecturas: [
    "Subió: la pausa pasó de 54 a 62 estudiantes y llegó a la meta de 60.",
    "Bajó: los escaneos en los salones (de 50 a 32), porque la pausa ya la dirige alguien y no hace falta abrir el video.",
    "Corregir: S-22 sigue sin quien la proponga, y ahí solo la hace 1 de cada 5.",
    "Pendiente: en enero, sin el profesor dirigiéndola, S-11 y S-21 bajaron de 44 a 31. Hay que ver si se sostiene."
  ]
};
