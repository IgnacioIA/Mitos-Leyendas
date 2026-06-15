import BackgroundDragon from "../../../../../assets/mazosInicialesPB/mazosEdicion/FONDO DRAGON.webp";

import LogoEspada from "../../../../../assets/mazosInicialesPB/mazosEdicion/LOGO ESPADA.webp";
import MazoEspada from "../../../../../assets/mazosInicialesPB/mazosEdicion/Mazo Dragon PB.png";

import MazoCol1 from "../../../../../assets/mazosInicialesPB/mazosEdicion/1.webp";
import MazoCol2 from "../../../../../assets/mazosInicialesPB/mazosEdicion/2.webp";
import MazoCol3 from "../../../../../assets/mazosInicialesPB/mazosEdicion/3.webp";
import MazoCol4 from "../../../../../assets/mazosInicialesPB/mazosEdicion/4.webp";
import MazoCol5 from "../../../../../assets/mazosInicialesPB/mazosEdicion/5.webp";


const mazosEdicionData = [
  {
    id: 1,

    background: BackgroundDragon,

    contenidoSuperior: {
      title: "MAZO DRÁGON ",

      subtitle: "EDICION",

      imagenSubtitulo: LogoEspada,

      description:
        "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",
      description2:
        "Dentro de esta edición, tendremos 60 cartas nuevas que formarán parte de las ediciones Espada Sagrada, Helénica, Hijos de Daana o de Dominios de Ra, las que se podrán encontrar entre las frecuencias Mega Real, Real, Cortesano y Vasallo.",

      mazoPrincipal: MazoEspada,
    },

    contenidoInferior: {
      mazoColeccion: [
        { id: 1, imagen: MazoCol1 },
        { id: 2, imagen: MazoCol2 },
        { id: 3, imagen: MazoCol3 },
        { id: 4, imagen: MazoCol4 },
        { id: 5, imagen: MazoCol5 },
      ],
      botonPrimario: "Comprar",
      botonSecundario: "Ver Cartas",
    },
  },
];
export default mazosEdicionData;