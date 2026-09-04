// Fondo de la sección: mismo criterio que el resto de páginas nuevas —
// glob por convención de nombre, build-safe.
const fondoModules = import.meta.glob(
  "../../../../../assets/LaOdiseaPage/contenido/FONDO*.webp",
  { eager: true, import: "default" }
);

const fondo = Object.values(fondoModules)[0];

// Todas las imágenes de personajes/episodios de assets/LaOdiseaPage/contenido
// (una carpeta = un bloque de contenido). No se asumen nombres de carpeta:
// se agrupan dinámicamente por el nombre real de cada una y se ordenan
// alfabéticamente. Agregar/quitar un bloque = agregar/quitar la carpeta
// completa, no hay que tocar este código ni el componente.
const personajesModules = import.meta.glob(
  "../../../../../assets/LaOdiseaPage/contenido/*/*.webp",
  { eager: true, import: "default" }
);

function agruparPorCarpeta(modules) {
  const grupos = {};

  for (const [ruta, modulo] of Object.entries(modules)) {
    const partes = ruta.split("/");
    const archivo = partes[partes.length - 1];
    const carpeta = partes[partes.length - 2];

    if (!grupos[carpeta]) {
      grupos[carpeta] = [];
    }

    grupos[carpeta].push([archivo, modulo]);
  }

  return Object.entries(grupos)
    .sort(([carpetaA], [carpetaB]) => carpetaA.localeCompare(carpetaB))
    .map(([carpeta, archivos]) => ({
      carpeta,
      imagenes: archivos
        .sort(([archivoA], [archivoB]) =>
          archivoA.localeCompare(archivoB, undefined, { numeric: true })
        )
        .map(([, modulo]) => modulo),
    }));
}

// Subtítulo + descripción propios de cada personaje/episodio, con la
// clave exacta del nombre de carpeta en assets/LaOdiseaPage/contenido.
// Si se agrega una carpeta nueva que todavía no está acá, el bloque
// simplemente queda con subtítulo/descripción vacíos hasta completarlos
// (no rompe nada, ver el fallback más abajo).
const BLOQUES_TEXTO = {
  Atenea: {
    subtitulo: "La protectora de Odiseo",
    descripcion:
      "La diosa de la sabiduría guía y protege a Odiseo durante gran parte de su viaje de regreso.",
  },
  Calipso: {
    subtitulo: "La isla del olvido",
    descripcion:
      "La ninfa Calipso retiene a Odiseo durante años, ofreciéndole una vida eterna. Su único deseo, sin embargo, es regresar a su hogar.",
  },
  Circe: {
    subtitulo: "La hechicera",
    descripcion:
      "Circe transforma a los marineros en cerdos.Con la ayuda de Hermes, Odiseo rompe el hechizo y consigue una nueva aliada.",
  },
  Eolo: {
    subtitulo: "El señor de los vientos",
    descripcion:
      "Eolo entrega a Odiseo los vientos para llevarlo a casa. La curiosidad de su tripulación arruina la oportunidad de regresar.",
  },
  "Escila y caribdis": {
    subtitulo: "Entre dos monstruos",
    descripcion:
      "Odiseo debe atravesar un estrecho custodiado por Escila y Caribdis, sacrificando parte de su tripulación para salvar el barco.",
  },
  "Guerra de Troya": {
    subtitulo: "El plan maestro",
    descripcion:
      "Gracias a la astucia de Odiseo, los griegos logran infiltrarse en Troya y poner fin a la guerra.",
  },
  Nausicaa: {
    subtitulo: "La última ayuda",
    descripcion:
      "Náufrago y sin fuerzas, Odiseo es encontrado por la princesa Nausícaa, quien le brinda refugio y lo ayuda a continuar su viaje.",
  },
  Odiseo: {
    subtitulo: "El comienzo del viaje",
    descripcion:
      "Tras la caída de Troya, Odiseo zarpa rumbo a Ítaca. Lo que parecía un regreso triunfal se convertirá en una odisea de diez años.",
  },
  Penelope: {
    subtitulo: "El regreso a Ítaca",
    descripcion:
      "Disfrazado de mendigo, Odiseo recupera su reino, derrota a los pretendientes y finalmente se reúne con Penélope, poniendo fin a su largo viaje.",
  },
  Polifemo: {
    subtitulo: "El cíclope engañado",
    descripcion:
      "Odiseo y sus hombres quedan atrapados por Polifemo. Con ingenio, logran escapar después de dejar ciego al gigante.",
  },
  Sirenas: {
    subtitulo: "El canto irresistible",
    descripcion:
      "Para escuchar el canto de las Sirenas sin sucumbir a él, Odiseo se hace atar al mástil mientras su tripulación navega con los oídos cubiertos.",
  },
  Telemaco: {
    subtitulo: "El heredero de Ítaca",
    descripcion:
      "Mientras su padre permanece desaparecido, Telémaco emprende su propia búsqueda para conocer su destino.",
  },
  Tiresias: {
    subtitulo: "El sabio del Inframundo",
    descripcion:
      "Odiseo desciende al reino de los muertos para consultar a Tiresias, quien le revela el camino que deberá seguir para volver a Ítaca.",
  },
};

// Orden de aparición pedido para los bloques (nombre real de carpeta, tal
// cual la clave usada en BLOQUES_TEXTO), en vez del alfabético que arma
// agruparPorCarpeta. Una carpeta nueva que todavía no esté acá no rompe
// nada: sencillamente aparece al final, en el orden en que llegó desde
// agruparPorCarpeta (ver ordenarPorBloques más abajo).
const ORDEN_BLOQUES = [
  "Odiseo",
  "Guerra de Troya",
  "Atenea",
  "Polifemo",
  "Eolo",
  "Circe",
  "Tiresias",
  "Sirenas",
  "Escila y caribdis",
  "Calipso",
  "Nausicaa",
  "Telemaco",
  "Penelope",
];

function ordenarPorBloques(grupos) {
  return [...grupos].sort((a, b) => {
    const indexA = ORDEN_BLOQUES.indexOf(a.carpeta);
    const indexB = ORDEN_BLOQUES.indexOf(b.carpeta);

    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}

// El título toma el nombre real de la carpeta (Atenea, Calipso, Circe,
// etc.); subtítulo y descripción salen de BLOQUES_TEXTO de acá arriba,
// así cada bloque tiene su propio contenido en vez de repetir el mismo.
const bloques = ordenarPorBloques(agruparPorCarpeta(personajesModules)).map(
  ({ carpeta, imagenes }, index) => ({
    id: `bloque-${index + 1}`,
    titulo: carpeta.toUpperCase(),
    subtitulo: BLOQUES_TEXTO[carpeta]?.subtitulo ?? "",
    descripcion: BLOQUES_TEXTO[carpeta]?.descripcion ?? "",
    imagenes,
  })
);

export const laOdiseaContenidoData = {
  fondo,
  overlay: 0.6,

  header: {
    subtitulo: "DESDE LA GUERRA DE TROYA HASTA EL REGRESO A ÍTACA",
    titulo: "la odisea",

    // Fragmentos de texto con color opcional por fragmento:
    // { text: "...", color?: "cualquier valor CSS válido" }.
    // El color se resuelve vía variable CSS (--fragmentoColor), no
    // mediante estilos inline directos — ver LaOdiseaContenido.jsx/.css.
    descripcion: [
      {
        text: "Te contamos un poco de ",
      },
      {
        text: "La Odisea",
        color: "#ffd815",
      },
      {
        text: " con distintas cartas de los formatos que tiene Mitos y Leyendas, entre estas, vas a conocer los artes diferenciados entre los formatos del juego.",
      },
    ],
  },

  bloques,
};
