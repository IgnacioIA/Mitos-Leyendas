import fondoCartasAzar from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageCartasAzar/FONDO.webp";

import cartaAzar1 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageCartasAzar/1.webp";
import cartaAzar2 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageCartasAzar/2.webp";
import cartaAzar3 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageCartasAzar/3.webp";
import cartaAzar4 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageCartasAzar/4.webp";

// TODO: completar textos definitivos de esta sección.
const dataHijosDeDaanaPageCartasAzar = {
  background: {
    image: fondoCartasAzar,
    overlay: 0.35,
    position: "center top",
  },

  texto: {
    tituloPrimeraPalabra: "CARTAS REWORK AL AZAR", // TODO
    tituloSegundaPalabra: "", // TODO
    descripcion: [
      "Dentro de cada uno de los Kit, vendrá 1 carta Rework al azar de 4 modelos diferentes, las que forman parte de una selección de cartas soporte para todo tipo de estrategias.", // TODO
    ],
  },

  carrousel: {
    elementos: [
      { id: "carta-azar-1", imagen: cartaAzar1 },
      { id: "carta-azar-2", imagen: cartaAzar2 },
      { id: "carta-azar-3", imagen: cartaAzar3 },
      { id: "carta-azar-4", imagen: cartaAzar4 },
    ],
  },
};

export default dataHijosDeDaanaPageCartasAzar;
