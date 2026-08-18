// Posters: se cargan por convención de nombre de archivo, no por ruta fija
// (import.meta.glob), igual que en cartasBanList/data. Esto evita que el
// build se rompa si todavía no se subió alguna imagen, y hace que alcance
// con poner el archivo en la carpeta para que aparezca acá:
//
//   src/assets/BanList/botonesBanList/1.webp -> poster izquierdo
//   src/assets/BanList/botonesBanList/2.webp -> poster derecho
const posterModules = import.meta.glob(
  "../../../../../assets/BanList/botonesBanList/*.webp",
  { eager: true, import: "default" }
);

const posterImages = Object.entries(posterModules)
  .sort(([rutaA], [rutaB]) =>
    rutaA.localeCompare(rutaB, undefined, { numeric: true })
  )
  .map(([, imagen]) => imagen);

// Metadata de cada botón, en el mismo orden en que deben aparecer
// (1.webp -> índice 0, 2.webp -> índice 1).
// TODO: completar "url" con el destino real de cada botón (ruta interna
// de React Router o link externo) cuando se defina.
const BOTONES_BASE = [
  {
    id: "racial-edicion",
    titulo: "Racial Edición",
    alt: "Ver banlist completa de Racial Edición",
    url: "",
  },
  {
    id: "racial-libre",
    titulo: "Racial Libre",
    alt: "Ver banlist completa de Racial Libre",
    url: "",
  },
];

const dataBotonesBanList = {
  titulo: "OTRAS BANLIST PRIMER BLOQUE EXTENDIDO",

  botones: BOTONES_BASE.map((boton, index) => ({
    ...boton,
    imagen: posterImages[index],
  })),
};

export default dataBotonesBanList;
