// Fondo de la sección: mismo criterio que loreIndexHeroData.js — glob por
// convención de carpeta, build-safe aunque el archivo todavía no exista.
const fondoModules = import.meta.glob(
  "../../../../../assets/LoreIndex/index/LoreSeleccion/FONDO PAGINA.webp",
  { eager: true, import: "default" }
);

const fondo = Object.values(fondoModules)[0];

// Los 4 destinos comparten a propósito la misma imagen (LIBROS.webp): no
// hay una carpeta con una imagen por destino, sino un único ícono/imagen
// reutilizado en los 4 botones — lo que cambia entre uno y otro es el
// título, la descripción y el destino (path), no la imagen.
const itemImagenModules = import.meta.glob(
  "../../../../../assets/LoreIndex/index/LoreSeleccion/LIBROS.webp",
  { eager: true, import: "default" }
);

const itemImagen = Object.values(itemImagenModules)[0];

// TODO: completar título, descripción y ruta real de cada uno de los 4
// destinos (path: ruta interna con React Router, o una URL "http..." para
// links externos — ver el switch Link/<a> en LoreIndexSeleccion.jsx).
// Agregar/quitar un destino es agregar/quitar un objeto acá, no hay que
// tocar el componente.
const ITEMS_BASE = [
  { id: "destino-1", titulo: "LA ODISEA", descripcion: "CONTADA EN 13 CARTAS", alt: "", path: "/LaOdiseaLore" },
  { id: "destino-2", titulo: "LA GUERRA DE TROYA", descripcion: "CONTADA EN 10 CARTAS", alt: "", path: "" },
  { id: "destino-3", titulo: "REY ARTURO Y SUS CABALLEROS", descripcion: "CAMPEÓN LIGA ARGENTINA DE MITOS Y LEYENDAS", alt: "", path: "" },
  { id: "destino-4", titulo: "PRÓXIMAMENTE", descripcion: "", alt: "", path: "" },
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

  items: ITEMS_BASE.map((item) => ({
    ...item,
    imagen: itemImagen,
  })),
};
