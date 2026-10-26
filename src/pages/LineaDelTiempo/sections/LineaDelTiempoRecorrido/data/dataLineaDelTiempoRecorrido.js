// Textos copiados literalmente del modelo de referencia
// (pages/LineaDelTiempo/modelo/mitos_y_leyendas_timeline_v10.html).

// Todas las imágenes de assets/LineaDelTiempo/TimeLap (una carpeta por
// etapa). El glob solo resuelve URLs: qué imagen usa cada etapa/carta lo
// decide el nombre de archivo explícito de abajo, nunca el orden del glob.
const timeLapModules = import.meta.glob(
  "../../../../../assets/LineaDelTiempo/TimeLap/*/*.{webp,jpg,png}",
  { eager: true, import: "default" }
);

const TIMELAP = "../../../../../assets/LineaDelTiempo/TimeLap";

function imagen(carpeta, archivo) {
  const url = timeLapModules[`${TIMELAP}/${carpeta}/${archivo}`];

  if (!url) {
    console.warn(`LineaDelTiempo: no existe la imagen ${carpeta}/${archivo}`);
  }

  return url;
}

// carpeta → archivo del banner + cartas con su nombre. La correspondencia
// archivo ↔ nombre se verificó contra las imágenes del modelo (comparación
// de píxeles + revisión visual).
function etapaImagenes(carpeta, cartas) {
  return {
    banner: imagen(carpeta, "BANNER.png"),
    cartas: cartas.map(([archivo, nombre]) => ({
      id: `${carpeta}/${archivo}`,
      imagen: imagen(carpeta, archivo),
      nombre,
    })),
  };
}

export const dataLineaDelTiempoRecorrido = {
  intro: {
    id: "recorrido",
    eyebrow: "Archivo de formatos",
    titulo: "Una historia que sigue creciendo",
    descripcion:
      "Recorré cada etapa del juego a través de sus imágenes, historias y cartas más representativas. El ambiente y la línea temporal cambian de color a medida que avanza cada época, desde Primera Era hasta el presente de Primer Bloque Extendido.",
  },

  galeriaTitulo: "Cartas y productos",

  // desde/hasta: lo que muestra el marcador del eje. `hasta` vacío = un
  // solo valor (Génesis, Imperio, PBX). El período completo de la tarjeta
  // está en `periodo` (Imperio: "2014–actualidad").
  etapas: [
    {
      id: "primera-era",
      formato: "Primera Era",
      periodo: "2000–2002",
      desde: "2000",
      hasta: "2002",
      color: "#f0c419",
      titulo: "El origen de Mitos y Leyendas",
      parrafos: [
        "Primera Era marcó el nacimiento de Mitos y Leyendas y sentó las bases del juego con una identidad visual muy fuerte, un enfoque directo y una gran carga de nostalgia.",
        "Durante este período se publicaron colecciones fundamentales como El Reto, Mundo Gótico, La Ira del Nahual, Ragnarok, La Cofradía y Espíritu de Dragón.",
        "Su lectura histórica funciona como el punto de partida de todo el universo de MyL, tanto para jugadores como para coleccionistas.",
      ],
      cierre:
        "Es el capítulo fundacional del juego y una referencia permanente para toda la comunidad.",
      ...etapaImagenes("1 - primeraEra", [
        ["1.webp", "Inti"],
        ["2.webp", "Odín"],
        ["3.webp", "Zeus"],
        ["5.jpg", "Kasewats"],
        ["4.webp", "Yagyu Jubei"],
      ]),
    },
    {
      id: "primer-bloque",
      formato: "Primer Bloque",
      periodo: "2003–2004",
      desde: "2003",
      hasta: "2004",
      color: "#2b78d8",
      titulo: "La etapa más icónica del juego",
      parrafos: [
        "Primer Bloque expandió el universo de MyL con una identidad propia muy reconocible y con algunas de las cartas más recordadas por la comunidad.",
        "A través de Espada Sagrada, Helénica, Hijos de Daana y Dominios de Ra, el juego incorporó nuevas razas, culturas y estrategias que consolidaron su época dorada.",
        "Su legado sigue siendo central dentro del juego y hoy continúa reinterpretado a través de Primer Bloque Extendido.",
      ],
      cierre:
        "Su estética, sus cartas emblemáticas y su variedad estratégica siguen siendo uno de los grandes pilares de MyL.",
      ...etapaImagenes("2 - Primer Bloque", [
        ["1.webp", "Rey Arturo Pendragón"],
        ["2.webp", "Dragón de Magma"],
        ["3.webp", "El Gran Zeus"],
        ["4.webp", "Lugh"],
        // Edición Aniversario Ra (2025); el modelo muestra la de Primera
        // Edición. Para reemplazarla basta con cambiar este archivo.
        ["5.webp", "Ra"],
      ]),
    },
    {
      id: "segundo-bloque",
      formato: "Segundo Bloque",
      periodo: "2005–2006",
      desde: "2005",
      hasta: "2006",
      color: "#d23b3b",
      titulo: "Expansión y evolución del sistema",
      parrafos: [
        "Segundo Bloque amplió las posibilidades del juego con nuevas mecánicas, razas y una construcción de mazos cada vez más rica.",
        "Ediciones como Guerrero Jaguar, Vendaval, Barbarie, Reino de Acero, Hordas y Bestiario reforzaron la profundidad estratégica del formato.",
        "La etapa combinó continuidad con innovación, manteniendo el espíritu de MyL mientras empujaba sus límites de diseño.",
      ],
      cierre:
        "Fue una evolución natural del juego que ensanchó el mapa de posibilidades para los jugadores.",
      ...etapaImagenes("3 - Segundo Bloque", [
        ["1.webp", "William Wallace"],
        ["2.webp", "Huitzilopochtli"],
        ["3.webp", "Tsukuyomi"],
        ["4.webp", "Dragón Cometa"],
        ["5.webp", "Dragón de Marduk"],
      ]),
    },
    {
      id: "cronicas",
      formato: "Crónicas",
      periodo: "2007–2008",
      desde: "2007",
      hasta: "2008",
      color: "#36a95f",
      titulo: "Historias, culturas y nuevas ambientaciones",
      parrafos: [
        "Crónicas abrió el juego hacia relatos históricos y culturales con una propuesta temática muy marcada.",
        "Samuráis, piratas, conquistadores y vikingos convivieron dentro de un mismo bloque con una identidad mucho más narrativa.",
        "La mezcla de nuevas mecánicas y ambientaciones distintas convirtió a esta etapa en un capítulo muy singular dentro de la línea temporal del juego.",
      ],
      cierre:
        "Crónicas amplió el universo de MyL con nuevas miradas y escenarios muy recordados.",
      ...etapaImagenes("4 - Cronicas", [
        ["1.jpg", "Uriel"],
        ["2.jpg", "Naamah"],
        ["3.jpg", "Abrahel"],
        ["4.jpg", "Penemuel"],
        ["5.jpg", "Araziel"],
      ]),
    },
    {
      id: "genesis",
      formato: "Génesis",
      periodo: "2009",
      desde: "2009",
      hasta: "",
      color: "#ff8f2a",
      titulo: "El cierre de una era",
      parrafos: [
        "Génesis fue el último gran formato de la etapa Salo y propuso una lectura más moderna, oscura y experimental del juego.",
        "Conquista, Trincheras y Apocalipsis introdujeron nuevas ideas de construcción y una ambientación más contemporánea y rupturista.",
        "Su tono y sus mecánicas lo convirtieron en un punto de quiebre dentro de la evolución histórica de Mitos y Leyendas.",
      ],
      cierre: "Fue una despedida audaz para la etapa clásica del juego.",
      ...etapaImagenes("5 - Genesis", [
        ["1.webp", "Lucifer"],
        ["2.webp", "El Espía Negro"],
        ["3.webp", "Fundación de Santiago"],
        ["4.webp", "Conquista"],
        ["5.webp", "Francisco Fernando"],
      ]),
    },
    {
      id: "furia",
      formato: "Furia",
      periodo: "2014–2015",
      desde: "2014",
      hasta: "2015",
      color: "#ffcc33",
      titulo: "El regreso oficial de MyL",
      parrafos: [
        "Furia marcó el retorno de Mitos y Leyendas e inauguró la Nueva Era con un sistema renovado, una estética actualizada y nuevos públicos.",
        "Furia, Sumeria y Asgard ayudaron a reintroducir el juego con una estructura moderna, sin perder el ADN clásico de la franquicia.",
        "El formato fue clave para reconectar la marca con una nueva generación de jugadores.",
      ],
      cierre:
        "Furia volvió a poner a MyL en movimiento y abrió la puerta al ecosistema competitivo moderno.",
      ...etapaImagenes("6 - Furia", [
        ["1.png", "Ataque de Dragón"],
        ["2.png", "Zeus de Olimpia"],
        ["3.png", "Surt"],
        ["4.png", "Seth"],
        ["5.png", "Cristalino Amarillo"],
      ]),
    },
    {
      id: "escuelas",
      formato: "Escuelas Elementales",
      periodo: "2016–2019",
      desde: "2016",
      hasta: "2019",
      color: "#8a4fd0",
      titulo: "Una nueva lógica para construir mazos",
      parrafos: [
        "Escuelas Elementales reorganizó la experiencia de juego con un sistema que cambió la manera de pensar la construcción de mazos.",
        "Dominio, Contraataque, Águila Imperial, Axis Mundi, Hijos del Sol y Legado Gótico exploraron nuevas combinaciones y enfoques estratégicos.",
        "La etapa es recordada por su diversidad, por su identidad fuerte y por abrir caminos muy diferentes dentro del juego.",
      ],
      cierre:
        "Las Escuelas ampliaron la profundidad táctica y dieron una personalidad muy clara a esta época.",
      ...etapaImagenes("7 - Escuelas Elementales", [
        ["1.jpg", "Olvido"],
        ["2.jpg", "Necromancia"],
        ["3.png", "Danza Macabra"],
        ["4.png", "Karma"],
        ["5.webp", "Trance Yoruba"],
      ]),
    },
    {
      id: "imperio",
      formato: "Imperio",
      periodo: "2014–actualidad",
      // El marcador muestra solo "ACTUALIDAD", como el modelo.
      desde: "ACTUALIDAD",
      hasta: "",
      color: "#20b8c5",
      titulo: "El formato competitivo moderno",
      parrafos: [
        "Imperio es uno de los formatos centrales de la era moderna y funciona con una lógica de rotación que mantiene vivo el entorno competitivo.",
        "Su evolución permanente lo transformó en una puerta de entrada importante para el juego actual, acompañando nuevos lanzamientos, escenas y estrategias.",
        "Dentro del recorrido histórico, Imperio representa la cara más dinámica y activa del MyL contemporáneo.",
      ],
      cierre:
        "Se mantiene vigente como uno de los formatos clave del presente competitivo.",
      ...etapaImagenes("8 - Imperio", [
        ["1.png", "Dragón Dorado"],
        ["2.png", "Guadaña de Santa Muerte"],
        ["3.png", "Ímpetu de Sela"],
        ["4.png", "Ay"],
        ["5.png", "Bernardo O’Higgins"],
      ]),
    },
    {
      id: "pbx",
      formato: "Primer Bloque Extendido",
      periodo: "Actualidad",
      desde: "ACTUALIDAD",
      hasta: "",
      color: "#30c36a",
      titulo: "La versión viva del Primer Bloque",
      parrafos: [
        "Primer Bloque Extendido retoma la base histórica de Primer Bloque y la mantiene vigente con un marco actualizado para el juego organizado actual.",
        "Según la documentación oficial del formato, PBX incorpora nuevas cartas y nuevas interacciones a partir de productos modernos como Relatos de Espada Sagrada reposición, Leyendas 3.0 y Aniversario Helénica.",
        "El formato sigue creciendo con productos dedicados, mazos iniciales y nuevas cartas que amplían las estrategias disponibles, mientras sus reediciones y versiones actualizadas acercan el bloque clásico a nuevas generaciones de jugadores.",
      ],
      cierre:
        "PBX funciona como una continuidad moderna del Primer Bloque: conserva su identidad clásica, pero recibe soporte, reworks y contenido nuevo.",
      ...etapaImagenes("9 - PBX", [
        ["1.webp", "Lady Calvaur"],
        ["2.webp", "Guerrero Bereber"],
        ["3.webp", "Grod Tigernos"],
        ["4.webp", "Minotauro Colosal"],
        ["5.webp", "Caballero Negro"],
      ]),
    },
  ],

  // Separador entre Génesis (2009) y Furia (2014): no es una etapa, no
  // altera fechas ni el índice de capítulos.
  interludio: {
    despuesDe: "genesis",
    ariaLabel:
      "Un paréntesis en la historia de Mitos y Leyendas entre 2009 y 2014",
    desde: "2009",
    hasta: "2014",
    titulo: "UN PARÉNTESIS",
    tituloSecundario: "EN LA HISTORIA",
    eyebrow: "ANTES DE UNA NUEVA ERA",
    descripcion: {
      antes:
        "Tras el cierre de Génesis, el juego atravesó una pausa en los grandes lanzamientos oficiales. La historia quedó en suspenso hasta su regreso en 2014 con ",
      destacado: "Furia",
      despues: ".",
    },
  },

  cierre: {
    titulo: "La historia",
    tituloDestacado: "continúa",
   
  },
};
