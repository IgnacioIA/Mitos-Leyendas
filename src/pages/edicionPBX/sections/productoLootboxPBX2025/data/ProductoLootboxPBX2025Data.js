import FondoDesktop from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/FONDO PRODUCTO.webp";
import FondoMobile from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/FONDO PRODUCTO.webp";

import Producto1 from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/2- PAQUETES.webp";
import Producto2 from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/1- CAJA NEGRA.webp";
import Producto3 from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/3- CARTAS.webp";
import Producto4 from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/4- MINOTAURO.webp";
import Producto5 from "../../../../../assets/EdicionPBX2025/productoEdicionPBX2025/5- MAZO INICIAL.webp";

const productoLootboxPBX2025Data = {
  backgrounds: {
    desktop: FondoDesktop,
    mobile: FondoMobile,
  },


  products: [

     {
      id: 1,
      image: Producto2,
      title: "PRODUCTO AL AZAR",
      subtitle: "LANZADO EN 2025",
      position: "left",
    },

    {
      id: 2,
      image: Producto1,
      title: "8 BOOSTESR",
      subtitle: "EDICIÓN DOMINIOS DE RA ANIV.",
      position: "topLeft",

    },

    {
      id: 3,
      image: Producto3,
      title: "14 CARTAS ESPECIALES",
      subtitle: "ENTRE MUCHOS DISEÑOS POSIBLES",
      position: "topCenter",
    },

    {
      id: 4,
      image: Producto4,
      title: "CARTA BUY A BOX",
      subtitle: "DE 4 DISEÑOS POSIBLES",
      position: "topRight",
    },

    {
      id: 5,
      image: Producto5,
      title: "MAZO INICIAL",
      subtitle: "DE 4 RAZAS POSIBLES",
      position: "right",
    },
  ],
};

export default productoLootboxPBX2025Data;