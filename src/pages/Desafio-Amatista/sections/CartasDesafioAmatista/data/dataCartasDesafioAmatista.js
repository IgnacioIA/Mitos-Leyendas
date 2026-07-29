import fondo from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/fondoSectionCR-B.jpg";

import c1 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/card1.webp";
import c2 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/card2.jpg";
import c3 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/card3.jpg";

import c4 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Anillos de Badbury.png";
import c5 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Magia Amatista.png";
import c6 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Nudo de Isis.png";

import c7 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Anillos de Badbury.png";
import c8 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Magia Amatista.png";
import c9 from "../../../../../assets/DesafioAmatista/cartasDesafioAmatista/Ilustración Nudo de Isis.png";

const dataCartasDesafioAmatista = {
  fondo,

  encabezado: {
    subtitulo: "EXPANDE TU MAZO",

    titulo: {
      linea: "Domina el Campo de Batalla",
      destacado: "Con Magia Amatista",
    },

    descripcion:
      "Descubre nuevas cartas, ilustraciones alternativas y rediseños únicos preparados para transformar tu estrategia.",
  },

  bloques: [
    {
      id: 1,
      titulo: "Cartas Nuevas",
      cartas: [c1, c2, c3],
    },
    {
      id: 2,
      titulo: "Arte Alternativo",
      cartas: [c4, c5, c6],
    },
    {
      id: 3,
      titulo: "Reworks",
      cartas: [c7, c8, c9],
    },
  ],
};

export default dataCartasDesafioAmatista;