import backgroundImage from "../../../../../assets/DominiosDeRaPaginaLore/Productos/FONDO PRODUCTOS FINAL.webp";

import producto1 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 1.webp";
import producto2 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 2.webp";
import producto3 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 3.webp";

// TODO: completar títulos, ítems, links e imágenes definitivos de cada
// producto. Los valores de abajo son placeholders seguros (no rompen el
// render) para que solo haga falta reemplazarlos por el contenido definitivo.
//
// "link" de cada card define a dónde navega su botón:
// - Ruta interna del proyecto (ej: "/DracoSidhe") -> navega dentro de la SPA.
// - Ancla de la misma página (ej: "#invasores") -> hace scroll a esa sección.
// - URL externa (empieza con "http://" o "https://") -> se abre en pestaña nueva.
// Si una card no define "link", se usa "linkUrl" como destino por defecto.
const dataDominiosDeRaPaginaLoreLineaProductos = {

  title: "Línea de productos",

  linkUrl: "https://www.mylargentina.com/",

  backgroundImage,

  accentBase: "#e8c17a",
  accentHover: "#ffb347",

  cards: [
    {
      title: "cada kit invasores contiene:",
      items: [
        "12 cartas nuevas para mazo faraón",
        "2 cartas rework buy a box",
        "1 cartas rework al azar",
        "8 booster de LEYENDAS 4.0",
      ],
      image: producto1,
      button: "COMPRAR",
      link: "https://www.mylargentina.com/productos/preventa-relatos-de-dominios-de-ra-invasores-1l75v/",
    },
    {
      title: "cada kit sabiduría contiene:",
      items: [
        "12 cartas nuevas para mazo sacerdote",
        "2 cartas rework buy a box",
        "1 cartas rework al azar",
        "8 booster de LEYENDAS 4.0",
      ],
      image: producto2,
      button: "COMPRAR",
      link: "https://www.mylargentina.com/productos/preventa-relatos-de-dominios-de-ra-sabiduria-yt9va/",
    },
    {
      title: "cada kit amanecer contiene:",
      items: [
        "12 cartas nuevas para mazo eterno",
        "2 cartas rework buy a box",
        "1 cartas rework al azar",
        "8 booster de LEYENDAS 4.0",
      ],
      image: producto3,
      button: "COMPRAR",
      link: "https://www.mylargentina.com/productos/preventa-relatos-de-dominios-de-ra-amanecer-1x2pi/",
    },
  ],

};

export default dataDominiosDeRaPaginaLoreLineaProductos;
