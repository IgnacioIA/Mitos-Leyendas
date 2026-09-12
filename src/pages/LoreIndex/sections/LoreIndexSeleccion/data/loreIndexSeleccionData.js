// Fondo de la sección: mismo criterio que loreIndexHeroData.js — glob por
// convención de carpeta, build-safe aunque el archivo todavía no exista.
const fondoModules = import.meta.glob(
  "../../../../../assets/LoreIndex/index/LoreSeleccion/FONDO PAGINA.webp",
  { eager: true, import: "default" }
);

const fondo = Object.values(fondoModules)[0];

// Cada destino ya tiene su propia portada ilustrada (LIBRO 1/2/3.webp, con
// el título del libro grabado en la tapa) salvo el último, que todavía no
// tiene historia asignada: usa LIBROS.webp (la portada lisa/sin número que
// antes se reutilizaba en los 4 botones) como portada genérica de
// "próximamente".
import libro1 from "../../../../../assets/LoreIndex/index/LoreSeleccion/LIBRO 1.webp";
import libro2 from "../../../../../assets/LoreIndex/index/LoreSeleccion/LIBRO 2.webp";
import libro3 from "../../../../../assets/LoreIndex/index/LoreSeleccion/LIBRO 3.webp";
import libroProximamente from "../../../../../assets/LoreIndex/index/LoreSeleccion/LIBROS.webp";

// TODO: completar título, descripción y ruta real de cada uno de los 4
// destinos (path: ruta interna con React Router, o una URL "http..." para
// links externos — ver el switch Link/<a> en LoreIndexSeleccion.jsx).
// Agregar/quitar un destino es agregar/quitar un objeto acá, no hay que
// tocar el componente.
const ITEMS_BASE = [
  { id: "destino-1", titulo: "LA ODISEA", descripcion: "CONTADO EN 13 CARTAS", alt: "Portada del libro La Odisea", path: "/LaOdiseaLore", imagen: libro1 },
  { id: "destino-2", titulo: "LA GUERRA DE TROYA", descripcion: "CONTADO EN 10 CARTAS", alt: "Portada del libro La Guerra de Troya", path: "", imagen: libro2 },
  { id: "destino-3", titulo: "REY ARTURO Y SUS CABALLEROS", descripcion: "CONTADO EN 13 CARTAS", alt: "Portada del libro El Rey Arturo y sus Caballeros de la Mesa Redonda", path: "", imagen: libro3 },
  { id: "destino-4", titulo: "PRÓXIMAMENTE", descripcion: "", alt: "Portada de libro aún sin título", path: "", imagen: libroProximamente },
];

export const loreIndexSeleccionData = {
  overlay: 0.55,
  fondo,

  header: {
    titulo: "EL ORIGEN DE NUESTRAS CARTAS",
    descripcion: [
      "En Mitos y Leyendas, cada carta es la representación de personajes o momentos icónicos de la mitología de diversas culturas.",
      "En este Archivo Mitológico, te traemos esas historias contadas a través de las mismas cartas que forman parte de las distintas ediciones del juego.",

    ],
  },

  items: ITEMS_BASE,
};
