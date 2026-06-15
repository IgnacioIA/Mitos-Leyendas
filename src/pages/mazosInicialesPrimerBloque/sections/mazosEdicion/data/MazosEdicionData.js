import BackgroundDragon from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/FONDO DRAGON.webp";

import LogoEspada from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/LOGO ESPADA.webp";
import MazoEspada from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/Mazo Dragon PB.png";

import MazoCol1 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/1.webp";
import MazoCol2 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/2.webp";
import MazoCol3 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/3.webp";
import MazoCol4 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/4.webp";
import MazoCol5 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionDragon/5.webp";
//-------------------------------------------------------------------------------------------------------------------
import BackgroundTitan from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/FONDO TITAN.webp";

import LogoHelenica from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/LOGO HELENICA.webp";
import MazoTitan from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/Mazo Titan PB.png";

import MazoTitanCol1 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/1.webp";
import MazoTitanCol2 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/2.webp";
import MazoTitanCol3 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/3.webp";
import MazoTitanCol4 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/4.webp";
import MazoTitanCol5 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionTitan/5.webp";
//-------------------------------------------------------------------------------------------------------------------
import BackgroundSombra from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/FONDO SOMBRA.webp";

import LogoDaana from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/LOGO DAANA.webp";
import MazoSombra from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/Mazo Sombra PB.png";

import MazoSombraCol1 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/1.webp";
import MazoSombraCol2 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/2.webp";
import MazoSombraCol3 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/3.webp";
import MazoSombraCol4 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/4.webp";
import MazoSombraCol5 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSombra/5.webp";
//-------------------------------------------------------------------------------------------------------------------
import BackgroundSacerdote from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/FONDO SACERDOTE.webp";

import LogoRa from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/LOGO RA.webp";
import MazoSacerdote from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/Mazo Sacerdote PB.png";

import MazoSacerdoteCol1 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/1.webp";
import MazoSacerdoteCol2 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/2.webp";
import MazoSacerdoteCol3 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/3.webp";
import MazoSacerdoteCol4 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/4.webp";
import MazoSacerdoteCol5 from "../../../../../assets/mazosInicialesPB/mazosEdicion/seccionSacerdote/5.webp";


const mazosEdicionData = [
  {
    id: 1,

    layout: "right",

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
  {
    id: 2,

    background: BackgroundTitan,

    layout: "left",

    contenidoSuperior: {
      title: "MAZO TITÁN ",

      subtitle: "EDICION",

      imagenSubtitulo: LogoHelenica,

      description:
        "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",
      description2:
        "Dentro de esta edición, tendremos 60 cartas nuevas que formarán parte de las ediciones Espada Sagrada, Helénica, Hijos de Daana o de Dominios de Ra, las que se podrán encontrar entre las frecuencias Mega Real, Real, Cortesano y Vasallo.",

      mazoPrincipal: MazoTitan,
    },

    contenidoInferior: {
      mazoColeccion: [
        { id: 1, imagen: MazoTitanCol1 },
        { id: 2, imagen: MazoTitanCol2 },
        { id: 3, imagen: MazoTitanCol3 },
        { id: 4, imagen: MazoTitanCol4 },
        { id: 5, imagen: MazoTitanCol5 },
      ],
      botonPrimario: "Comprar",
      botonSecundario: "Ver Cartas",
    },
  },
  {
    id: 3,

    layout: "right",

    background: BackgroundSombra,

    contenidoSuperior: {
      title: "MAZO SOMBRA ",

      subtitle: "EDICION",

      imagenSubtitulo: LogoDaana,

      description:
        "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",
      description2:
        "Dentro de esta edición, tendremos 60 cartas nuevas que formarán parte de las ediciones Espada Sagrada, Helénica, Hijos de Daana o de Dominios de Ra, las que se podrán encontrar entre las frecuencias Mega Real, Real, Cortesano y Vasallo.",

      mazoPrincipal: MazoSombra,
    },

    contenidoInferior: {
      mazoColeccion: [
        { id: 1, imagen: MazoSombraCol1 },
        { id: 2, imagen: MazoSombraCol2 },
        { id: 3, imagen: MazoSombraCol3 },
        { id: 4, imagen: MazoSombraCol4 },
        { id: 5, imagen: MazoSombraCol5 },
      ],
      botonPrimario: "Comprar",
      botonSecundario: "Ver Cartas",
    },
  },
  {
    id: 4,

    layout: "left",

    background: BackgroundSacerdote,

    contenidoSuperior: {
      title: "MAZO SACERDOTE ",

      subtitle: "EDICION",

      imagenSubtitulo: LogoRa,

      description:
        "Una de las principales novedades de esta nueva versión de Leyendas PB 4.0, son las cartas completamente nuevas que se agregan al formato de Primer Bloque Extendido.",
      description2:
        "Dentro de esta edición, tendremos 60 cartas nuevas que formarán parte de las ediciones Espada Sagrada, Helénica, Hijos de Daana o de Dominios de Ra, las que se podrán encontrar entre las frecuencias Mega Real, Real, Cortesano y Vasallo.",

      mazoPrincipal: MazoSacerdote,
    },

    contenidoInferior: {
      mazoColeccion: [
        { id: 1, imagen: MazoSacerdoteCol1 },
        { id: 2, imagen: MazoSacerdoteCol2 },
        { id: 3, imagen: MazoSacerdoteCol3 },
        { id: 4, imagen: MazoSacerdoteCol4 },
        { id: 5, imagen: MazoSacerdoteCol5 },
      ],
      botonPrimario: "Comprar",
      botonSecundario: "Ver Cartas",
    },
  },
];
export default mazosEdicionData;