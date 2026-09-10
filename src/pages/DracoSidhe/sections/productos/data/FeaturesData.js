import img1 from "../../../../../assets/mitos4.0/productos/Display-1.png";
import img2 from "../../../../../assets/mitos4.0/productos/KITS DE BATALLA.webp";
import img3 from "../../../../../assets/mitos4.0/productos/SHOGUN 5.webp";

// "link" define a donde navega el boton de cada card.
// - Ruta interna del proyecto (ej: "/DracoSidhe") -> navega dentro de la SPA, misma pestaña.
// - URL externa (empieza con "http://" o "https://") -> se abre en una pestaña nueva.
export const cards = [

  {
    title: "cada display contienen:",

     items: [
      "24 boosters leyendas 4.0",
      "1 carta buy a box al azar",
    ],


    image:
      img1,

    button: "Explorar",
    link: "https://www.mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/",
  },

  {
    title: "cada kit de batalla contien:",

     items: [
      "6 cartas nuevas exclusivas",
      "4 cartas foil aniversario",
      "8 boosters leyendas 4.0",
    ],

    image:
      img2,

    button: "Explorar",
    link: "https://www.mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/",
  },

  {
    title: "cada kit de batalla contien:",

     items: [
      "25 cartas con arte alternativo",
      "1 carta buy a box",
      "8 boosters leyendas 4.0",
    ],

    image:
      img3,

    button: "Explorar",
    link: "https://www.mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/",
  },
];