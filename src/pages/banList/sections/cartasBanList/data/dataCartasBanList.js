// Fondos e imágenes de título: un archivo fijo por edición, se importan directo.
import fondoDominiosDeRa from "../../../../../assets/BanList/cartasBanList/DominiosDeRa/FONDO.webp";
import logoDominiosDeRa from "../../../../../assets/BanList/cartasBanList/DominiosDeRa/LOGO.webp";

import fondoEspadaSagrada from "../../../../../assets/BanList/cartasBanList/espadaSagrada/FONDO.webp";
import logoEspadaSagrada from "../../../../../assets/BanList/cartasBanList/espadaSagrada/LOGO.webp";

import fondoHelenica from "../../../../../assets/BanList/cartasBanList/Helenica/FONDO.webp";
import logoHelenica from "../../../../../assets/BanList/cartasBanList/Helenica/LOGO.webp";

import fondoHijosDeDaana from "../../../../../assets/BanList/cartasBanList/HijosDeDaana/FONDO.webp";
import logoHijosDeDaana from "../../../../../assets/BanList/cartasBanList/HijosDeDaana/LOGO.webp";

// Carga automática de las cartas de cada carpeta (copias1 / copias2 / prohibidas).
// Agregar o quitar una carta = agregar o quitar el archivo en la carpeta,
// no hay que tocar este código ni el componente.
const cargarImagenes = (modules, altBase) =>
  Object.entries(modules)
    .sort(([rutaA], [rutaB]) =>
      rutaA.localeCompare(rutaB, undefined, { numeric: true })
    )
    .map(([, imagen], index) => ({
      src: imagen,
      alt: `${altBase} ${index + 1}`,
    }));

const dominiosDeRaCopias1 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/DominiosDeRa/copias1/*.webp",
  { eager: true, import: "default" }
);
const dominiosDeRaCopias2 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/DominiosDeRa/copias2/*.webp",
  { eager: true, import: "default" }
);
const dominiosDeRaProhibidas = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/DominiosDeRa/prohibidas/*.webp",
  { eager: true, import: "default" }
);

const espadaSagradaCopias1 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/espadaSagrada/copias1/*.webp",
  { eager: true, import: "default" }
);
const espadaSagradaCopias2 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/espadaSagrada/copias2/*.webp",
  { eager: true, import: "default" }
);
const espadaSagradaProhibidas = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/espadaSagrada/prohibidas/*.webp",
  { eager: true, import: "default" }
);

const helenicaCopias1 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/Helenica/copias1/*.webp",
  { eager: true, import: "default" }
);
const helenicaCopias2 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/Helenica/copias2/*.webp",
  { eager: true, import: "default" }
);
const helenicaProhibidas = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/Helenica/prohibidas/*.webp",
  { eager: true, import: "default" }
);

const hijosDeDaanaCopias1 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/HijosDeDaana/copias1/*.webp",
  { eager: true, import: "default" }
);
const hijosDeDaanaCopias2 = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/HijosDeDaana/copias2/*.webp",
  { eager: true, import: "default" }
);
const hijosDeDaanaProhibidas = import.meta.glob(
  "../../../../../assets/BanList/cartasBanList/HijosDeDaana/prohibidas/*.webp",
  { eager: true, import: "default" }
);

// Tipo de contenido de cada sección: define qué renderer usa el JSX
// (igual patrón que dataCartasToolkit2025JuicioVision.js). Elegir el tipo
// es cosa del data, no del componente: CartasBanList.jsx no se toca.
export const TIPOS_SECCION = {
  CARROUSEL: "carrousel",
  CARROUSEL_ELASTICO: "carrousel-elastico",
  SOLO_TEXTO: "solo-texto",
};

// Textos base reutilizados por las 3 secciones que puede tener cada edición.
// "tipo" es el default (carrousel); se puede pisar por edición/sección con
// el 3er argumento de crearSecciones (overrides), igual que la descripción.
const SECCIONES_BASE = {
  copias1: {
    tituloPrimeraPalabra: "CARTAS LIMITADAS A ",
    tituloSegundaPalabra: "SOLO 1 COPIA",
    descripcion: [
      "",
    ],
    tipo: TIPOS_SECCION.CARROUSEL,
  },
  copias2: {
    tituloPrimeraPalabra: "CARTAS LIMITADAS A ",
    tituloSegundaPalabra: "SOLO 2 COPIAS",
    descripcion: [
      "",
    ],
    tipo: TIPOS_SECCION.CARROUSEL,
  },
  prohibidas: {
    tituloPrimeraPalabra: "CARTAS",
    tituloSegundaPalabra: "NO PERMITIDAS",
    descripcion: [
      "",
    ],
    tipo: TIPOS_SECCION.CARROUSEL,
  },
};

// overrides permite pisar, por carpeta, cualquier campo de SECCIONES_BASE
// (tipo, título, descripción) para una edición puntual sin duplicar datos
// ni tocar el componente. Ej: { prohibidas: { tipo: TIPOS_SECCION.SOLO_TEXTO } }
const crearSecciones = (nombreEdicion, modulosPorCarpeta, overrides = {}) =>
  Object.entries(modulosPorCarpeta).map(([carpeta, modules]) => ({
    id: `${nombreEdicion}-${carpeta}`,
    ...SECCIONES_BASE[carpeta],
    ...overrides[carpeta],
    imagenes: cargarImagenes(modules, `${nombreEdicion} - ${carpeta}`),
  }));

const dataCartasBanList = {
  bloques: [
    {
      id: "espada-sagrada-BanList",
      nombre: "Espada Sagrada",
      fondo: fondoEspadaSagrada,
      overlay: 0.55,
      tituloImagen: logoEspadaSagrada,
      secciones: crearSecciones(
        "Espada Sagrada",
        {
          prohibidas: espadaSagradaProhibidas,
          copias1: espadaSagradaCopias1,
          copias2: espadaSagradaCopias2,

        },
        {
          prohibidas: { tipo: TIPOS_SECCION.CARROUSEL },
          copias1: { tipo: TIPOS_SECCION.CARROUSEL_ELASTICO },
          copias2: { tipo: TIPOS_SECCION.CARROUSEL },
        }
      ),
    },
    {
      id: "helenica",
      nombre: "Helénica",
      fondo: fondoHelenica,
      overlay: 0.55,
      tituloImagen: logoHelenica,
      secciones: crearSecciones("Helénica", {
        prohibidas: helenicaProhibidas,
        copias1: helenicaCopias1,
        copias2: helenicaCopias2,

      },
        {
          prohibidas: { tipo: TIPOS_SECCION.CARROUSEL },
          copias1: { tipo: TIPOS_SECCION.CARROUSEL_ELASTICO },
          copias2: { tipo: TIPOS_SECCION.CARROUSEL },
        }
      ),
    },
    {
      id: "hijos-de-daana",
      nombre: "Hijos de Daana",
      fondo: fondoHijosDeDaana,
      overlay: 0.55,
      tituloImagen: logoHijosDeDaana,
      secciones: crearSecciones(
        "Hijos de Daana",
        {
          prohibidas: hijosDeDaanaProhibidas,
          copias1: hijosDeDaanaCopias1,
          copias2: hijosDeDaanaCopias2,

        },
        {
          // Carpeta "prohibidas" vacía para esta edición: en vez de
          // ocultar la sección (sin cartas para el carrousel), se muestra
          // solo el texto aclarando la situación.
          prohibidas: {
            tipo: TIPOS_SECCION.SOLO_TEXTO,
            descripcion: [
              "EN ESTE MOMENTO NO HAY CARTAS PROHIBIDAS EN LA EDICIÓN HIJOS DE DAANA",
            ],
          },
          copias1: { tipo: TIPOS_SECCION.CARROUSEL },
          copias2: { tipo: TIPOS_SECCION.CARROUSEL_ELASTICO },

        }
      ),
    },
    {
      id: "dominios-de-ra",
      nombre: "Dominios de Ra",
      fondo: fondoDominiosDeRa,
      overlay: 0,
      tituloImagen: logoDominiosDeRa,
      secciones: crearSecciones("Dominios de Ra", {
        prohibidas: dominiosDeRaProhibidas,
        copias1: dominiosDeRaCopias1,
        copias2: dominiosDeRaCopias2,

      },
        {
          prohibidas: { tipo: TIPOS_SECCION.CARROUSEL_ELASTICO },
          copias1: { tipo: TIPOS_SECCION.CARROUSEL },
          copias2: { tipo: TIPOS_SECCION.CARROUSEL },
        }
      ),
    },
  ],
};

export default dataCartasBanList;
