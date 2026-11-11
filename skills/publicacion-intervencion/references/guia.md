# Guía de publicación

Las herramientas cambian seguido. Antes de usar un paso con el equipo, comprueba en la ayuda oficial que siga igual y díselo si algo cambió.

## Canales

Lee y Kotler (2020, cap. 14, p. 489) dicen que lo que más pesa al elegir canales es la audiencia: su perfil y sus hábitos de medios. También piden pensar en el **alcance** (a cuántas personas de la audiencia llega el mensaje) y la **frecuencia** (cuántas veces lo recibe cada una), y en las **aperturas**: los momentos y lugares en que la persona está atenta y puede actuar.

Una audiencia no se define solo por edad o sexo. Se busca por sus **intereses y comportamientos**, dentro de la ciudad donde ocurre la campaña.

Para cada red, tres preguntas:

1. ¿Está en esa red la gente de esta ciudad con los intereses y comportamientos de la audiencia?
2. ¿El formato que esa red muestra más sirve para lo que queremos decir?
3. ¿La institución tiene quién publique y responda ahí durante toda la campaña?

Si una respuesta es no, esa red no es la prioridad. Las redes sirven sobre todo para el alcance; lo físico o en persona suele servir más para que alguien dé el paso.

Datos de Venezuela: [DataReportal, Digital 2026: Venezuela](https://datareportal.com/reports/digital-2026-venezuela) (alcance publicitario por red, de todo el país) y [StatCounter](https://gs.statcounter.com/social-media-stats/all/venezuela) (de qué red llegan las visitas a páginas web). Ninguno da datos por ciudad.

## Tamaño del público

En el [Administrador de anuncios de Meta](https://adsmanager.facebook.com):

1. Crear una campaña con el objetivo Reconocimiento.
2. En el conjunto de anuncios, poner la ciudad en Ubicación, con un radio.
3. En Segmentación detallada, escribir intereses y comportamientos de la audiencia.
4. Leer el tamaño estimado del público a la derecha. Con ubicaciones manuales se compara Instagram contra Facebook.
5. No publicar. Mientras no se publique, no se cobra.

El tamaño es una estimación de Meta y sale como un rango ([ayuda de Meta](https://www.facebook.com/business/help/1665333080167380)). TikTok Ads Manager y LinkedIn Campaign Manager tienen herramientas parecidas.

## Cuenta: tres planes

| Plan | Cómo funciona | Qué tener en cuenta |
|---|---|---|
| A · El equipo publica en la cuenta de la institución | La institución le da al equipo un permiso propio desde Meta Business Suite, sin compartir la contraseña | Es lo mejor: sale con sus seguidores y el equipo ve las estadísticas |
| B · La institución publica lo que el equipo le prepara | El equipo entrega cada pieza lista con su texto y su fecha | Para medir, la institución manda capturas de las estadísticas cada semana |
| C · Cuenta de la cátedra, en colaboración | Cada publicación invita a la institución como colaboradora; si acepta, sale también en su perfil | Aceptar no da acceso a nada. Validar en la ayuda de Instagram cómo funcionan hoy las colaboraciones |

Para programar y ver estadísticas, Instagram pide una **cuenta profesional** (empresa o creador). El cambio es gratis.

## Formatos

Comprueba en la ayuda de cada red las medidas vigentes. Como regla general:

- **Video corto vertical** (reels, TikTok, Shorts): el mensaje en los primeros segundos y texto en pantalla, porque muchos lo ven sin sonido.
- **Publicación con imagen:** una sola idea por imagen; el detalle va en el texto.
- **Historias:** duran 24 horas; sirven para recordar una fecha cercana.
- **Estado o grupo de WhatsApp:** texto corto, con el dónde y el cuándo.
- **Afiche:** pocas palabras, legible de lejos, con el llamado a actuar y cómo hacerlo.

## Publicar la página

### Netlify Drop (el más sencillo)

1. Crear una cuenta gratis en [Netlify](https://app.netlify.com/signup), con Google o con correo. Sin cuenta, el sitio se borra a las pocas horas.
2. Abrir [Netlify Drop](https://app.netlify.com/drop) y arrastrar la carpeta `salidas/revision` completa a la página.
3. En segundos da un enlace del tipo `nombre-al-azar.netlify.app`. En la configuración del sitio se le puede cambiar el nombre, por ejemplo `revision-fundacion.netlify.app`.
4. Para actualizar, se arrastra de nuevo la carpeta en la sección de despliegues del mismo sitio, y el enlace queda igual.

No hace falta instalar nada ni usar la terminal.

### Gemini Canvas (si no usan un agente)

En [Gemini](https://gemini.google.com), con Canvas activado, se le pide la página de revisión con los textos de cada pieza y se comparte desde «Compartir y exportar». El enlace se abre en gemini.google.com ([ayuda de Gemini](https://support.google.com/gemini/answer/16047321)). Sirve para textos; con videos es más limitado.

### Firebase Hosting (si ya usan la terminal)

Firebase es de Google y su plan gratis, Spark, no pide forma de pago según la [página de precios](https://firebase.google.com/pricing). Necesita Node.js: `npm install -g firebase-tools`, `firebase login`, `firebase init hosting` con `salidas/revision` como carpeta pública, y `firebase deploy --only hosting`. Da un enlace `nombre.web.app`. No uses «Publish my app» de Antigravity para esta página: publica en Firebase App Hosting, pensado para aplicaciones, que puede pedir un plan de pago.

## Programar

**Meta Business Suite** ([business.facebook.com](https://business.facebook.com)): crear la publicación, elegir Facebook, Instagram o las dos, y en vez de publicar elegir programar con fecha y hora. Queda en el planificador, donde se puede corregir, cambiar de hora o borrar antes de que salga.

**Metricool** ([planes](https://metricool.com/pricing/)): programa en varias redes a la vez. El plan gratis permite una marca y hasta 20 publicaciones programadas al mes.

Lo que no se puede programar, como un mensaje en un grupo de WhatsApp o una invitación en persona, queda en el calendario con su responsable.
