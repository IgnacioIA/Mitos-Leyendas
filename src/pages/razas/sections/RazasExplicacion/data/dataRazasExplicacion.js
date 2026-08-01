import espada from "../../../../../assets/razas/ExplicacionRazas/1.Webp";
import helenica from "../../../../../assets/razas/ExplicacionRazas/2.Webp";
import daana from "../../../../../assets/razas/ExplicacionRazas/3.Webp";
import ra from "../../../../../assets/razas/ExplicacionRazas/4.Webp";

const dataRazasExplicacion = {
  header: {
    titulo: "¿QUE SON LAS",
    destacado: "RAZAS",
  },

  body: [
    "Son las clasificaciones de los personajes aliados, existiendo 3 razas muy diferenciadas entre si por cada edición del juego. Estas comparten estrategias y una identidad propia.",

    "El sistema y formato racial se aplica estrictamente desde el lanzamiento del Primer Bloque Extendia, ya que antiguamente no era un impedimento mezclar razas dentro de un mazo de una edición específica.",

    "Este sistema de razas no aplica únicamente en el Formato Casual, en el cual la elección de las cartas es libre sin importar a que edición pertenezca cada una.",
  ],

  photos: [
    {
      id: 1,
      imagen: espada,
      titulo: "EDICIÓN",
      destacado: "¡ESPADA SAGRADA!",
    },
    {
      id: 2,
      imagen: helenica,
      titulo: "EDICIÓN",
      destacado: "¡HELÉNICA!",
    },
    {
      id: 3,
      imagen: daana,
      titulo: "EDICIÓN",
      destacado: "¡HIJOS DE DAANA!",
    },
    {
      id: 4,
      imagen: ra,
      titulo: "EDICIÓN",
      destacado: "¡DOMINIOS DE RA!",
    },
  ],
};

export default dataRazasExplicacion;