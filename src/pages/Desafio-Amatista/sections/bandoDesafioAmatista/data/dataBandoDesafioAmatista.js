import cardAmatista from "../../../../../assets/DesafioAmatista/elegiBando/cajitas-14.png";
import cardDesafio from "../../../../../assets/DesafioAmatista/elegiBando/cajitas-15.png";

const dataBandoDesafioAmatista = {
  titulo: "ELIGE TU BANDO",
  subtitulo: "DOS PRODUCTOS · UN UNIVERSO",

  productos: [
    {
      id: 1,
      tipo: "amatista",
      titulo: "AMATISTA",
      imagen: cardAmatista,
      descripcion:
        "Expansión completa con cartas exclusivas, nuevas mecánicas y arte alternativo.",
      boton: {
        texto: "COMPRAR",
        link: "https://www.mylargentina.com/formato-oficial-pbx/preventas/toolkit-primer-bloque-2026-amatista",
      },
    },
    {
      id: 2,
      tipo: "desafio",
      titulo: "DESAFÍO",
      imagen: cardDesafio,
      descripcion:
        "Expansión completa con cartas exclusivas, nuevas mecánicas y arte alternativo.",
      boton: {
        texto: "COMPRAR",
        link: "https://www.mylargentina.com/formato-oficial-pbx/preventas/toolkit-primer-bloque-2026-desafio",
      },
    },
  ],
};

export default dataBandoDesafioAmatista;