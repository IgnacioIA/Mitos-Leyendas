// =========================
// DRACO
// =========================

import backgroundDraco from "../../../../../assets/DracoSidhe/DracoSidheKits/FONDO DRACO.webp";

import nueva1 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva1.webp";
import nueva2 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva2.webp";
import nueva3 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva3.webp";
import nueva4 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva4.webp";
import nueva5 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva5.webp";
import nueva6 from "../../../../../assets/DracoSidhe/DracoSidheKits/nueva6.webp";

import promo1 from "../../../../../assets/DracoSidhe/DracoSidheKits/promo1.webp";
import promo2 from "../../../../../assets/DracoSidhe/DracoSidheKits/promo2.webp";
import promo3 from "../../../../../assets/DracoSidhe/DracoSidheKits/promo3.webp";
import promo4 from "../../../../../assets/DracoSidhe/DracoSidheKits/promo4.webp";

// =========================
// SIDHE
// =========================

import backgroundSidhe from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/FONDO SIDHE.webp";

import nuevaSidhe1 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva1.webp";
import nuevaSidhe2 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva2.webp";
import nuevaSidhe3 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva3.webp";
import nuevaSidhe4 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva4.webp";
import nuevaSidhe5 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva5.webp";
import nuevaSidhe6 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/nueva6.webp";

import promoSidhe1 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/promo1.webp";
import promoSidhe2 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/promo2.webp";
import promoSidhe3 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/promo3.webp";
import promoSidhe4 from "../../../../../assets/DracoSidhe/DracoSidheKits/Sidhe/promo4.webp";

const dataDracoSidheKits = [
  {
    id: "draco",
    sectionId: "KitDraco",

    background: {
      image: backgroundDraco,
      overlay: 0.35,
      position: "center top",
    },

    titulo: "KIT DRACO",

    descripcion:
      "El Kit Draco contiene nuevas cartas para la edición Espada Sagrada, incorporando cartas exclusivas para el arquetipo Draco y cartas genéricas para la edición.",

    primerBloque: {
      titulo: "6 CARTAS NUEVAS PARA PRIMER BLOQUE EXTENDIDO",
      tipo: "responsiveTres",
      items: [
        nueva1,
        nueva2,
        nueva3,
        nueva4,
        nueva5,
        nueva6,
      ],
    },

    segundoBloque: {
      titulo: "4 CARTAS DE PB 4.0 EN VERSIÓN FOIL ANIVERSARIO 25 AÑOS",
      tipo: "elastico",
      items: [
        { id: 1, imagen: promo1 },
        { id: 2, imagen: promo2 },
        { id: 3, imagen: promo3 },
        { id: 4, imagen: promo4 },
      ],
    },
  },

  {
    id: "sidhe",
    sectionId: "KitSidhe",

    background: {
      image: backgroundSidhe,
      overlay: 0.35,
      position: "center top",
    },

    titulo: "KIT SIDHE",

    descripcion:
      "El Kit Sidhe incorpora cartas exclusivas para el arquetipo Sidhe junto con nuevas cartas genéricas para la edición Hijos de Daana.",

    primerBloque: {
      titulo: "6 CARTAS NUEVAS PARA PRIMER BLOQUE EXTENDIDO",
      tipo: "responsiveTres",
      items: [
        nuevaSidhe1,
        nuevaSidhe2,
        nuevaSidhe3,
        nuevaSidhe4,
        nuevaSidhe5,
        nuevaSidhe6,
      ],
    },

    segundoBloque: {
      titulo: "4 CARTAS DE PB 4.0 EN VERSIÓN FOIL ANIVERSARIO 25 AÑOS",
      tipo: "elastico",
      items: [
        { id: 1, imagen: promoSidhe1 },
        { id: 2, imagen: promoSidhe2 },
        { id: 3, imagen: promoSidhe3 },
        { id: 4, imagen: promoSidhe4 },
      ],
    },
  },
];

export default dataDracoSidheKits;