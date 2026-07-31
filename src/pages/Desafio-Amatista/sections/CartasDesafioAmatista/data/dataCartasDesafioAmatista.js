import fondo from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/FONDO.webp";

import card1 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/ALTER 1.webp";
import card2 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/ALTER 2.webp";

import NUEVA1 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/NUEVA 1.webp";
import NUEVA2 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/NUEVA 2.webp";

import Lobo from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/BUY A BOX 1.webp";
import medalla from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/BUY A BOX 2.webp";

import REWORK1 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/REWORK 1.webp";
import REWORK2 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/REWORK 2.webp";
// Tipo de contenido de cada sección: define qué renderer usa el JSX.
// Agregar una sección nueva = agregar un objeto acá, no tocar el componente.
export const TIPOS_SECCION = {
  CARROUSEL: "carrousel",
  DOS_IMAGENES: "dos-imagenes",
};

const dataCartasDesafioAmatista = {
  fondo,

  encabezado: {
    subtitulo: "EXPANDE TU MAZO",

    titulo: {
      linea: "Domina el Campo de Batalla",
      destacado: "Con Magia Amatista",
    },

    descripcion:
      "Descubre nuevas cartas, ilustraciones alternativas y rediseños únicos preparados para transformar tu estrategia.",
  },

  secciones: [
    {
      id: "CARTAS-BUY-A-BOX-DEL-PRODUCTO",
      tipo: TIPOS_SECCION.DOS_IMAGENES,
      tituloPrimeraPalabra: "CARTAS BUY A BOX DEL PRODUCTO",
      descripcion: [
        "Al igual que en productos anteriores, todas las unidades de Toolkit PB 2026 tendrán dos cartas exclusivas como Buy a Box con Artes Alternativos.",
         "En las Toolkit Desafío tendremos las cartas Vínculo del Aullido e Soteira. Cada una de ellas tendrá un diseño sin bordes, con un nuevo Arte y con aplicaciones de barnices especiales.",
      ],
      imagenes: [
        { src: Lobo, alt: "Lobo" },
        { src: medalla, alt: "medalla" },
      ],
    },
    {
      id: "CARTAS-REPRINT",
      tipo: TIPOS_SECCION.CARROUSEL,
      tituloPrimeraPalabra: "8 CARTAS REPRINT PARA PRIMER BLOQUE EXTENDIDO",
      descripcion: [
        "Cada Toolkit tendrá un total de 8 cartas reprint (4 por edición), las que vendrán con un nuevo arte alternativo, con su frame clásico de edición y con un acabado de foil premium especial.",
      ],
      imagenes: [
        { src: card1, alt: "Carta Nueva 1" },
        { src: card2, alt: "Carta Nueva 2" },
      ],
    },
    {
      id: "6-CARTAS-NUEVAS",
      tipo: TIPOS_SECCION.CARROUSEL,
      tituloPrimeraPalabra: "6 CARTAS NUEVAS PARA PRIMER BLOQUE EXTENDIDO",
      descripcion: [
        "Finalmente, y la principal novedad de estas nuevas Toolkit PB 2026, es la incorporación de nuevas cartas para Primer Bloque Extendido, las que añaden nuevas alternativas para todo tipo de estrategias para las ediciones de Espada Sagrada, Helénica, Hijos de Daana y Dominios de Ra.",
      ],
      imagenes: [
        { src: NUEVA1, alt: "Rework de Anillos de Badbury" },
        { src: NUEVA2, alt: "Rework de Magia Amatista" },
      ],
    },
    {
      id: "CARTAS-REWORK-PRIMER-BLOQUE-EXTENDIDO",
      tipo: TIPOS_SECCION.DOS_IMAGENES,
      tituloPrimeraPalabra: "2 CARTAS REWORK PARA PRIMER BLOQUE EXTENDIDO",
      descripcion: [
        "Cada Toolkit tendrá dos nuevas cartas Rework 1 para cada edición), donde tendremos versiones para las cartas Tótem del Errante, Atenas, Crear Talismán y Carro Real, siendo estas las versiones oficiales para el formato de Primer Bloque Extendido.",
      ],
      imagenes: [
        { src: REWORK1, alt: "Lobo" },
        { src: REWORK2, alt: "medalla" },
      ],
    }
  ],
};

export default dataCartasDesafioAmatista;
