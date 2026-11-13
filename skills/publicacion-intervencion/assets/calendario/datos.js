/*
  DATOS DEL CALENDARIO. Este es el único archivo que se cambia; index.html no se toca.
  Este ejemplo es el de la Fundación Me Diste de Comer (tercera exposición), con fechas y piezas de ejemplo. Reemplázalo con los del proyecto.

  Cada elemento de "acciones" es una fila del calendario: una publicación o algo en persona.
    fecha       "AAAA-MM-DD" (obligatorio)          hora      "12:00"
    tipo        "publicación" o "en persona"         canal     "Instagram", "Salón S-11", ...
    titulo      Nombre corto de la pieza o acción     formato   "Reel vertical, 30 s"
    archivo     Ruta de la imagen o el video, dentro de piezas/ (por ejemplo "piezas/reel-1.mp4").
                Vacío si todavía no existe: la página muestra un recuadro en su lugar.
    portada     Imagen fija del video (opcional). Es la que sale en el PDF.
    pide        Qué le pide a la persona             por_que   Por qué en esa fecha
    cuenta      Cómo se va a contar                  aprueba   Quién la aprueba
    quien       Quién la publica o la hace           explicacion  Qué es y para qué sirve
    texto       El texto que acompaña la publicación, tal como sale en la red
    aprobar     false si la acción no necesita aprobación (por defecto, sí la necesita)

  whatsapp: número del equipo con código de país, solo si el equipo lo da ("58414..."). Si la página
  no está en Netlify, el botón de comentar abre WhatsApp con el comentario escrito.
  pdf: nombre del PDF dentro de la carpeta, si existe ("calendario.pdf"), para el botón Descargar PDF.
*/
window.CAMPANA = {
  proyecto: "Voluntarios para Me Diste de Comer",
  institucion: "Fundación Me Diste de Comer · Ciudad Guayana",
  equipo: "Fátima Nakad, Lisa Hernández y Paola Barbetta",
  intro: "Campaña para sumar voluntarios a la cocina de la fundación, que recibe voluntarios los lunes y jueves en la mañana. Primero presenta la causa, después muestra cómo se ayuda y al final pide que la persona escriba para coordinar su primera visita con el director.",
  aprobar_antes: "20/11/2026",
  ficticio: true,
  whatsapp: "",
  pdf: "",

  acciones: [
    { fecha: "2026-11-23", hora: "09:00", tipo: "publicación", canal: "Instagram",
      titulo: "Reel: la cocina funcionando", formato: "Reel vertical, 30 s", archivo: "",
      pide: "Conocer la causa.", por_que: "Sale un lunes, mientras la cocina está funcionando.",
      cuenta: "Estadísticas de Instagram.", aprueba: "Director de la fundación", quien: "Equipo",
      explicacion: "Muestra a los voluntarios cocinando y sirviendo, para que la gente conozca lo que hace la fundación.",
      texto: "Así se ve un lunes en la cocina de Me Diste de Comer 🍲\nCada plato lo preparan voluntarios de Ciudad Guayana." },
    { fecha: "2026-11-25", hora: "12:00", tipo: "publicación", canal: "Instagram",
      titulo: "Carrusel: cómo se ayuda", formato: "Carrusel de 5 láminas", archivo: "",
      pide: "Saber cómo ser voluntario.", por_que: "Entre los dos días de cocina, cuando ya conocen la causa.",
      cuenta: "Estadísticas de Instagram: guardados y compartidos.", aprueba: "Director de la fundación", quien: "Equipo",
      explicacion: "Explica las formas de ayudar: cocinar, servir o donar, y que el primer paso es hablar con el director.",
      texto: "¿Quieres ayudar y no sabes cómo? 👇\nDesliza: te contamos las formas de sumarte a la cocina." },
    { fecha: "2026-11-27", hora: "18:00", tipo: "publicación", canal: "Grupos de WhatsApp",
      titulo: "Mensaje en grupos de WhatsApp", formato: "Texto con el enlace del carrusel", archivo: "",
      pide: "Pasarlo a un conocido.", por_que: "Viernes en la tarde, antes del fin de semana y de la misa del domingo.",
      cuenta: "Mensajes que llegan preguntando cómo ayudar.", aprueba: "Director de la fundación", quien: "Equipo (no se puede programar)",
      explicacion: "Un mensaje corto para los grupos de la comunidad, con el enlace al carrusel.",
      texto: "Hola 👋 La Fundación Me Diste de Comer busca voluntarios para su cocina los lunes y jueves en la mañana. Si conoces a alguien que quiera ayudar, pásale este mensaje." },
    { fecha: "2026-11-29", hora: "11:00", tipo: "en persona", canal: "Parroquia, al salir de misa",
      titulo: "Invitación al salir de misa", formato: "Invitación en persona con volante", archivo: "",
      pide: "Escribir para coordinar la primera visita.", por_que: "La gente que sale de misa ya está cerca de la causa y puede decidir ahí.",
      cuenta: "Personas que dejan su contacto o escriben esa semana.", aprueba: "Director de la fundación y párroco", quien: "Equipo",
      explicacion: "Una persona del equipo invita a la salida de misa. Necesita el permiso del párroco." },
    { fecha: "2026-12-01", hora: "19:00", tipo: "publicación", canal: "Instagram (historia)",
      titulo: "Historia: un día en la cocina", formato: "Historias, 24 horas", archivo: "",
      pide: "Conocer la causa.", por_que: "Recuerda la causa a quienes ya la vieron.",
      cuenta: "Estadísticas de Instagram: vistas de la historia.", aprueba: "Director de la fundación", quien: "Equipo",
      explicacion: "Varias historias cortas de la mañana en la cocina, con permiso de quienes aparecen." },
    { fecha: "2026-12-02", hora: "12:00", tipo: "publicación", canal: "Instagram",
      titulo: "Publicación: «Escríbenos para coordinar tu primera visita»", formato: "Imagen cuadrada", archivo: "",
      pide: "Escribir para coordinar la primera visita.", por_que: "Antes del jueves de cocina.",
      cuenta: "Mensajes directos que preguntan por la visita.", aprueba: "Director de la fundación", quien: "Equipo",
      explicacion: "Pide el paso. No invita a llegar directo: el director pidió que todo voluntario hable primero con él.",
      texto: "¿Te gustaría ayudar en la cocina? ✋\nEscríbenos por mensaje directo y coordinamos tu primera visita con el director." },
    { fecha: "2026-12-05", hora: "09:00", tipo: "en persona", canal: "Cartelera de la parroquia",
      titulo: "Afiche en la cartelera", formato: "Afiche carta", archivo: "",
      pide: "Escribir para coordinar la primera visita.", por_que: "Queda puesto para la misa del domingo.",
      cuenta: "Personas que dicen que lo vieron en la cartelera.", aprueba: "Director de la fundación y párroco", quien: "Equipo",
      explicacion: "Recuerda la invitación en el lugar donde la persona puede decidir." },
    { fecha: "2026-12-06", hora: "11:00", tipo: "en persona", canal: "Parroquia, al salir de misa",
      titulo: "Invitación al salir de misa", formato: "Invitación en persona con volante", archivo: "",
      pide: "Escribir para coordinar la primera visita.", por_que: "La invitación se repite: casi nunca basta con verla una vez.",
      cuenta: "Personas que dejan su contacto o escriben esa semana.", aprueba: "Director de la fundación y párroco", quien: "Equipo" }
  ]
};
