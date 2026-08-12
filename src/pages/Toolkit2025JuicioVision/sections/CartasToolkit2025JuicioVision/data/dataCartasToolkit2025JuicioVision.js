//AMATISTA
import fondo from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/FONDO.webp";

import card1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt1.webp";
import card2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt2.webp";
import card3 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt3.webp";
import card4 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt4.webp";
import card5 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt5.webp";
import card6 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt6.webp";
import card7 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt7.webp";
import card8 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/alt8.webp";

import NUEVA1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/nueva1.webp";
import NUEVA2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/nueva2.webp";
import NUEVA3 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/nueva3.webp";
import NUEVA4 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/nueva4.webp";
import NUEVA5 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/nueva5.webp";


import Lobo from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/BUY A BOX 1.webp";
import medalla from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/BUY A BOX 2.webp";

import REWORK1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/REWORK 1.webp";
import REWORK2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/REWORK 2.webp";

//DESAFIO
import fondo2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/FONDO.webp";

import cardDesafio1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt1.webp";
import cardDesafio2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt2.webp";
import cardDesafio3 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt3.webp";
import cardDesafio4 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt4.webp";
import cardDesafio5 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt5.webp";
import cardDesafio6 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt6.webp";
import cardDesafio7 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt7.webp";
import cardDesafio8 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/alt8.webp";

import NUEVADesafio1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/nueva1.webp";
import NUEVADesafio2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/nueva2.webp";
import NUEVADesafio3 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/nueva3.webp";
import NUEVADesafio4 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/nueva4.webp";
import NUEVADesafio5 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/nueva5.webp";

import Corazon from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/BUY A BOX 1.webp";
import medallaDesafio from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/BUY A BOX 2.webp";

import REWORKDesafio1 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/REWORK 1.webp";
import REWORKDesafio2 from "../../../../../assets/Toolkit2025JuicioVision/cartasToolkit2025JuicioVision/Variante2/REWORK 2.webp";

// Tipo de contenido de cada sección: define qué renderer usa el JSX.
// Agregar una sección nueva = agregar un objeto acá, no tocar el componente.
export const TIPOS_SECCION = {
  CARROUSEL: "carrousel",
  CARROUSEL_DE_TRES: "carrousel-de-tres",
  DOS_IMAGENES: "dos-imagenes",
};

const dataCartasToolkit2025JuicioVision = {
  bloques: [
    {
      id: "magia-amatista",
      fondo,

      encabezado: {
        subtitulo: "EXPANDE TU MAZO",

        titulo: {
          linea: "Domina tu estrategia",
          destacado: "Con JUICIO Y VISION",
        },

        descripcion:
          "Descubre nuevas cartas, ilustraciones alternativas y rediseños únicos preparados para transformar tu estrategia.",

        colorDestacado: "#d8b4fe",
        sombraDestacado: "0 0 25px rgba(192, 132, 252, 0.45)",
      },

      secciones: [
        {
          id: "CARTAS-BUY-A-BOX-DEL-PRODUCTO",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "CARTAS BUY A BOX DEL PRODUCTO",
          descripcion: [
            "Al igual que en productos anteriores, todas las unidades de Toolkit PB 2025 tendrán dos cartas exclusivas como Buy a Box con Artes Alternativos.",
            "En las Toolkit juicio y vision tendremos las cartas Salmón del saber y Toros apis. Cada una de ellas tendrá un diseño sin bordes, con un nuevo Arte y con aplicaciones de barnices especiales.",
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
            { src: card3, alt: "Carta Nueva 3" },
            { src: card4, alt: "Carta Nueva 4" },
            { src: card5, alt: "Carta Nueva 5" },
            { src: card6, alt: "Carta Nueva 6" },
            { src: card7, alt: "Carta Nueva 7" },
            { src: card8, alt: "Carta Nueva 8" },
          ],
        },
        {
          id: "5-CARTAS-NUEVAS",
          tipo: TIPOS_SECCION.CARROUSEL_DE_TRES,
          tituloPrimeraPalabra: "5 CARTAS NUEVAS PARA PRIMER BLOQUE EXTENDIDO",
          descripcion: [
            "Finalmente, y la principal novedad de estas nuevas Toolkit PB 2025, es la incorporación de nuevas cartas para Primer Bloque Extendido, las que añaden nuevas alternativas para todo tipo de estrategias para las ediciones de Espada Sagrada, Helénica, Hijos de Daana y Dominios de Ra.",
          ],
          imagenes: [
            { src: NUEVA1, alt: "Rework de Anillos de Badbury" },
            { src: NUEVA2, alt: "Rework de Magia Amatista" },
            { src: NUEVA3, alt: "Rework de Magia Amatista" },
            { src: NUEVA4, alt: "Rework de Magia Amatista" },
            { src: NUEVA5, alt: "Rework de Magia Amatista" },
          ],
        },
        {
          id: "CARTAS-REWORK-PRIMER-BLOQUE-EXTENDIDO",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "2 CARTAS REWORK PARA PRIMER BLOQUE EXTENDIDO",
          descripcion: [
            "Cada Toolkit tendrá dos nuevas cartas Rework para cada edición, donde tendremos versiones para las cartas Las Tres Plagas, La Visión, Fantasmas del Desierto y Ataque Fulminante, siendo estas las versiones oficiales para el formato de Primer Bloque Extendido.",
          ],
          imagenes: [
            { src: REWORK1, alt: "Lobo" },
            { src: REWORK2, alt: "medalla" },
          ],
        }
      ],
    },

    {
      id: "desafio",
      fondo: fondo2,

      encabezado: {
        subtitulo: "EDICIÓN DESAFÍO",

        titulo: {
          linea: "Domina tu estrategia",
          destacado: "Con nobleza y poder",
        },

        descripcion:
          "Descubre nuevas cartas, ilustraciones alternativas y rediseños únicos preparados para transformar tu estrategia.",

        colorDestacado: "#a7bef8",
        sombraDestacado: "0 0 25px rgba(41, 12, 207, 0.45)",
      },

      secciones: [
        {
          id: "CARTAS-BUY-A-BOX-DEL-PRODUCTO",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "CARTAS BUY A BOX DEL PRODUCTO",
          descripcion: [
            "Al igual que en productos anteriores, todas las unidades de Toolkit PB 2025 tendrán dos cartas exclusivas como Buy a Box con Artes Alternativos.",
            "En las Toolkit nobleza y poder tendremos las cartas tesoro de mowa y luz de prometeo. Cada una de ellas tendrá un diseño sin bordes, con un nuevo Arte y con aplicaciones de barnices especiales.",
          ],
          imagenes: [
            { src: Corazon, alt: "Corazon" },
            { src: medallaDesafio, alt: "medallaDesafio" },
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
            { src: cardDesafio1, alt: "Carta Nueva 1" },
            { src: cardDesafio2, alt: "Carta Nueva 2" },
            { src: cardDesafio3, alt: "Carta Nueva 3" },
            { src: cardDesafio4, alt: "Carta Nueva 4" },
            { src: cardDesafio5, alt: "Carta Nueva 5" },
            { src: cardDesafio6, alt: "Carta Nueva 6" },
            { src: cardDesafio7, alt: "Carta Nueva 7" },
            { src: cardDesafio8, alt: "Carta Nueva 8" },
          ],
        },
        {
          id: "6-CARTAS-NUEVAS",
          tipo: TIPOS_SECCION.CARROUSEL_DE_TRES,
          tituloPrimeraPalabra: "5 CARTAS NUEVAS PARA PRIMER BLOQUE EXTENDIDO",
          descripcion: [
            "Finalmente, y la principal novedad de estas nuevas Toolkit PB 2025, es la incorporación de nuevas cartas para Primer Bloque Extendido, las que añaden nuevas alternativas para todo tipo de estrategias para las ediciones de Espada Sagrada, Helénica, Hijos de Daana y Dominios de Ra.",
          ],
          imagenes: [
            { src: NUEVADesafio1, alt: "Rework de Anillos de Badbury" },
            { src: NUEVADesafio2, alt: "Rework de Magia Amatista" },
            { src: NUEVADesafio3, alt: "Rework de Magia Amatista" },
            { src: NUEVADesafio4, alt: "Rework de Magia Amatista" },
            { src: NUEVADesafio5, alt: "Rework de Magia Amatista" },
          ],
        },
        {
          id: "CARTAS-REWORK-PRIMER-BLOQUE-EXTENDIDO",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "2 CARTAS REWORK PARA PRIMER BLOQUE EXTENDIDO",
          descripcion: [
            "Cada Toolkit tendrá dos nuevas cartas Rework para cada edición, donde tendremos versiones para las cartas Las Tres Plagas, La Visión, Fantasmas del Desierto y Ataque Fulminante, siendo estas las versiones oficiales para el formato de Primer Bloque Extendido.",
          ],
          imagenes: [
            { src: REWORKDesafio1, alt: "Muerte" },
            { src: REWORKDesafio2, alt: "Carreta" },
          ],
        }
      ],
    },
  ],
};

export default dataCartasToolkit2025JuicioVision;