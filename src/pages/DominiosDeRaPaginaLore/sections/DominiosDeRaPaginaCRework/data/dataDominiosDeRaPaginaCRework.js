import fondoCRework from "../../../../../assets/DominiosDeRaPaginaLore/CRework/FONDO.webp";

import carta1 from "../../../../../assets/DominiosDeRaPaginaLore/CRework/1.webp";
import carta2 from "../../../../../assets/DominiosDeRaPaginaLore/CRework/2.webp";
import carta3 from "../../../../../assets/DominiosDeRaPaginaLore/CRework/3.webp";
import carta4 from "../../../../../assets/DominiosDeRaPaginaLore/CRework/4.webp";
import carta5 from "../../../../../assets/DominiosDeRaPaginaLore/CRework/5.webp";

// TODO: completar textos definitivos de esta sección.
const dataDominiosDeRaPaginaCRework = {
  background: {
    image: fondoCRework,
    overlay: 0.35,
    position: "center top",
  },

  texto: {
    tituloPrimeraPalabra: "CARTAS REWORK AL AZAR", // TODO
    tituloSegundaPalabra: "", // TODO
    descripcion: [
      "En cada producto viene 1 carta al azar de entre 5 opciones diferentes. Estas versiones de cartas Rework serán exclusivas de estos productos y no habrá otra forma de conseguirlas.", // TODO
    ],
  },

  carrousel: {
    elementos: [
      { id: "crework-1", imagen: carta1 },
      { id: "crework-2", imagen: carta2 },
      { id: "crework-3", imagen: carta3 },
      { id: "crework-4", imagen: carta4 },
      { id: "crework-5", imagen: carta5 },
    ],
  },
};

export default dataDominiosDeRaPaginaCRework;
