import LEYENDAS from "../../../../../assets/home/novedades/LEYENDAS.webp";
import SHOGUN from "../../../../../assets/home/novedades/SHOGUN.webp";
import bg3 from "../../../../../assets/home/novedades/PRODUCTO 3.webp";
import DOMINOSDERAbg from "../../../../../assets/home/novedades/DOMINIOS DE RA.webp";

import display from "../../../../../assets/home/novedades/Display-Leyendas-Primer-Bloque-2025.webp";
import shogun from "../../../../../assets/home/novedades/SHOGUN 5.webp";
// Mismo archivo que usa CajaEdicionLootboxPBX2025Data.js (verificado por
// checksum: eran copias idénticas del mismo render). Se apunta a una sola
// para no duplicar la descarga entre Home y EdicionPBX.
import lootbox from "../../../../../assets/EdicionPBX2025/cajaEdicionLootboxPBX2025/Lootbox 2025 Render.png";
import DOMINOSDERA from "../../../../../assets/home/novedades/CAJAS.webp";

export const dataNovedadesHome = {

  title: "ÚLTIMOS PRODUCTOS",

  items: [
    {
      id: 1,
      title: "DOMINIOS DE RA",
      background: DOMINOSDERAbg,
      product: DOMINOSDERA,
      url: "https://mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/",
    },

    {
      id: 2,
      title: "Leyendas 4.0",
      background: LEYENDAS,
      product: display,
      url: "https://www.mylargentina.com/productos/display-leyendas-primer-bloque-4-0-1-buy-a-box/",
    },
    {
      id: 3,
      title: "Shogun 5",
      background: SHOGUN,
      product: shogun,
      url: "https://www.mylargentina.com/productos/shogun-5-onna-musha-volumen-1-primer-bloque-1-buy-a-box/",
    },
    {
      id: 4,
      title: "Lootbox PBX 2025",
      background: bg3,
      product: lootbox,
      url: "https://www.mylargentina.com/productos/lootbox-primer-bloque-2025-buy-a-box-al-azar/",
    },
  ],

};
