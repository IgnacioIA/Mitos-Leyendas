import fondoEspadaSagrada from "../../../../../assets/razas/RazasEspadasSagradas/FONDO ESPADA SAGRADA.webp";

import A1 from "../../../../../assets/razas/RazasEspadasSagradas/A1.webp";
import A2 from "../../../../../assets/razas/RazasEspadasSagradas/A2.webp";
import A3 from "../../../../../assets/razas/RazasEspadasSagradas/A3.webp";
import A4 from "../../../../../assets/razas/RazasEspadasSagradas/A4.webp";
import A5 from "../../../../../assets/razas/RazasEspadasSagradas/A5.webp";

import B1 from "../../../../../assets/razas/RazasEspadasSagradas/B1.webp";
import B2 from "../../../../../assets/razas/RazasEspadasSagradas/B2.webp";
import B3 from "../../../../../assets/razas/RazasEspadasSagradas/B3.webp";
import B4 from "../../../../../assets/razas/RazasEspadasSagradas/B4.webp";
import B5 from "../../../../../assets/razas/RazasEspadasSagradas/B5.webp";

import C1 from "../../../../../assets/razas/RazasEspadasSagradas/C1.webp";
import C2 from "../../../../../assets/razas/RazasEspadasSagradas/C2.webp";
import C3 from "../../../../../assets/razas/RazasEspadasSagradas/C3.webp";
import C4 from "../../../../../assets/razas/RazasEspadasSagradas/C4.webp";
import C5 from "../../../../../assets/razas/RazasEspadasSagradas/C5.webp";

const dataRazasEdicionEspadaSagrada = {
  titulo: {
    texto: "EDICIÓN",
    destacado: "ESPADA SAGRADA",
  },

  background: fondoEspadaSagrada,

  bloques: [
    {
      id: 1,

      titulo: "dragón",

      descripcion: "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido",

      cartas: [
        {
          id: 1,
          imagen: A1,
        },
        {
          id: 2,
          imagen: A2,
        },
        {
          id: 3,
          imagen: A3,
        },
        {
          id: 4,
          imagen: A4,
        },
        {
          id: 5,
          imagen: A5,
        },
      ]
    },

    {
      id: 2,

      titulo: "caballero",

      descripcion: "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",

      cartas: [
        {
          id: 1,
          imagen: B1,
        },
        {
          id: 2,
          imagen: B2,
        },
        {
          id: 3,
          imagen: B3,
        },
        {
          id: 4,
          imagen: B4,
        },
        {
          id: 5,
          imagen: B5,
        },
      ]
    },

    {
      id: 3,

      titulo: "faerie",

      descripcion: "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",

      cartas: [
        {
          id: 1,
          imagen: C1,
        },
        {
          id: 2,
          imagen: C2,
        },
        {
          id: 3,
          imagen: C3,
        },
        {
          id: 4,
          imagen: C4,
        },
        {
          id: 5,
          imagen: C5,
        },
      ]
    }
  ]
};

export default dataRazasEdicionEspadaSagrada;