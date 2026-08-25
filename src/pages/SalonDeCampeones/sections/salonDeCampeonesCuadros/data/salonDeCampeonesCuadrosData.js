import img1 from "../../../../../assets/salonDeCampeones/cuadros/1.webp";
import img2 from "../../../../../assets/salonDeCampeones/cuadros/2.webp";
import img3 from "../../../../../assets/salonDeCampeones/cuadros/3.webp";
import img4 from "../../../../../assets/salonDeCampeones/cuadros/4.webp";
import img5 from "../../../../../assets/salonDeCampeones/cuadros/5.webp";

// TODO: completar título/descripción/alt reales de cada cuadro cuando se
// defina el contenido (quiénes son, qué representan). Agregar un cuadro
// nuevo en el futuro es solo agregar un objeto acá — el componente no se
// toca (SalonDeCampeonesCuadros.jsx solo mapea este array).
export const salonDeCampeonesCuadrosData = {
  header: {
    titulo: "LOS NOMBRES QUE HICIERON HISTORIA",
    descripcion: [
      "En Mitos y Leyendas, cada torneo es una nueva batalla. Cada campeón deja su huella.",
      "Este espacio está dedicado a quienes lograron llegar hasta lo más alto y convertirse en protagonistas de la historia competitiva de Mitos y Leyendas Argentina.",
    ],
  },

  cuadros: [
    {
      id: "cuadro-1",
      imagen: img1,
      alt: "",
      titulo: "JUAN MARGOSSIAN",
      descripcion: "CAMPEÓN LIGA ARGENTINA DE MITOS Y LEYENDAS",
    },
    {
      id: "cuadro-2",
      imagen: img2,
      alt: "",
      titulo: "EMANUEL DIOGO",
      descripcion: "CAMPEÓN 1° PREMIER PBX ARGENTINA 2025",
    },
    {
      id: "cuadro-3",
      imagen: img3,
      alt: "",
      titulo: "JEAN VALDIVIESO",
      descripcion: "CAMPEÓN 2° PREMIER PBX ARGENTINA 2025",
    },
    {
      id: "cuadro-4",
      imagen: img4,
      alt: "",
      titulo: "IGNACIO FALCO",
      descripcion: "CAMPEÓN TORNEO DE CAMPEONES 2026",
    },
    {
      id: "cuadro-5",
      imagen: img5,
      alt: "",
      titulo: "VICENTE ROJAS",
      descripcion: "CAMPEÓN 3° PREMIER PBX ARGENTINA 2026",
    },
  ],
};
