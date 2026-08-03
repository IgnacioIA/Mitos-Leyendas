import background from "../../../../../assets/DracoSidhe/DracoSidheProductosDobles/FONDO PRODUCTOS.webp";

import producto1 from "../../../../../assets/DracoSidhe/DracoSidheProductosDobles/Kit Draco.png";
import producto2 from "../../../../../assets/DracoSidhe/DracoSidheProductosDobles/Kit Sidhe.png";

const dataDracoSidheProductosDobles = {
  background: {
    image: background,
    overlay: 0.35,
    position: "center top",
  },

  header: {
    titulo: "AUMENTÁ EL PODER DE TUS MAZOS",
    subtitulo: "CON LOS ARQUETIPOS",
    destacado: "DRACO Y SIDHE",
  },

  productos: [
    {
      id: 1,
      imagen: producto1,
      alt: "Producto Draco",

      explorar: {
        texto: "EXPLORAR",
        href: "#KitDraco",
      },

      comprar: {
        texto: "COMPRAR",
        href: "https://www.mylargentina.com/productos/kit-batalla-draco-leyendas-primer-bloque-4-0/",
      },
    },

    {
      id: 2,
      imagen: producto2,
      alt: "Producto Sidhe",

      explorar: {
        texto: "EXPLORAR",
        href: "#KitSidhe",
      },

      comprar: {
        texto: "COMPRAR",
        href: "https://www.mylargentina.com/productos/kit-batalla-sidhe-leyendas-primer-bloque-4-0/",
      },
    },
  ],
};

export default dataDracoSidheProductosDobles;