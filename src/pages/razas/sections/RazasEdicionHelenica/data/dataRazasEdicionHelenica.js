import fondoEspadaSagrada from "../../../../../assets/razas/RazasEdicionHelenica/FONDO HELENICA.webp";

import A1 from "../../../../../assets/razas/RazasEdicionHelenica/A1.webp";
import A2 from "../../../../../assets/razas/RazasEdicionHelenica/A2.webp";
import A3 from "../../../../../assets/razas/RazasEdicionHelenica/A3.webp";
import A4 from "../../../../../assets/razas/RazasEdicionHelenica/A4.webp";
import A5 from "../../../../../assets/razas/RazasEdicionHelenica/A5.webp";

import B1 from "../../../../../assets/razas/RazasEdicionHelenica/B1.webp";
import B2 from "../../../../../assets/razas/RazasEdicionHelenica/B2.webp";
import B3 from "../../../../../assets/razas/RazasEdicionHelenica/B3.webp";
import B4 from "../../../../../assets/razas/RazasEdicionHelenica/B4.webp";
import B5 from "../../../../../assets/razas/RazasEdicionHelenica/B5.webp";

import C1 from "../../../../../assets/razas/RazasEdicionHelenica/C1.webp";
import C2 from "../../../../../assets/razas/RazasEdicionHelenica/C2.webp";
import C3 from "../../../../../assets/razas/RazasEdicionHelenica/C3.webp";
import C4 from "../../../../../assets/razas/RazasEdicionHelenica/C4.webp";
import C5 from "../../../../../assets/razas/RazasEdicionHelenica/C5.webp";

const dataRazasEdicionEspadaSagrada = {
  titulo: {
    texto: "EDICIÓN",
    destacado: "HELÉNICA",
  },

  background: fondoEspadaSagrada,

  bloques: [
    {
      id: 1,

      titulo: "HÉROE",

      descripcion: "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",

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

      titulo: "OLÍMPICO",

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

      titulo: "TITÁN",

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