import HeroImage1
from "../../../../../assets/home/hero/banners-01.jpg";

import HeroImage2
from "../../../../../assets/home/hero/banners-02.jpg";

export const HERO_SLIDES = [

  {
    id: 1,

    image: HeroImage1,

    subtitle: "primer bloque extendido",

    title: "leyendas 4.0",

    description:
      "nuevos DIOSES y criaturas mitológicas llegan a mitos y leyendas para revolucionar el juego.",

    buttons: [
      {
        text: "Comprar",
        url: "https://mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0"
      },
      {
        text: "Ver colección",
        url: "/mitos4.0"
      }
    ]
  },

  {
    id: 2,

    image: HeroImage2,

    subtitle: "Edición especial",

    title: "Cartas Secretas",

    description:
      "Consigue las versiones más exclusivas.",

    buttons: [
      {
        text: "Comprar",
        url: "https://mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0"
      },
      {
        text: "Más información",
        url: "/Shogun"
      }
    ]
  }

];