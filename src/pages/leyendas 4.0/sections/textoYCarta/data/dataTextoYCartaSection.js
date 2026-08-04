import fondoDesktop from "../../../../../assets/mitos4.0/cartaYTexto/FONDO SECCION CARTAS.webp";
import fondoMobile from "../../../../../assets/mitos4.0/cartaYTexto/FONDO SECCION CARTAS MOBILE.webp";
import carta1 from "../../../../../assets/mitos4.0/cartaYTexto/cartasNuevas/1.webp";
import carta2 from "../../../../../assets/mitos4.0/cartaYTexto/cartasNuevas/2.webp";
import carta3 from "../../../../../assets/mitos4.0/cartaYTexto/cartasNuevas/3.webp";

import carta4 from "../../../../../assets/mitos4.0/cartaYTexto/cartasPremium/1.webp";
import carta5 from "../../../../../assets/mitos4.0/cartaYTexto/cartasPremium/2.webp";
import carta6 from "../../../../../assets/mitos4.0/cartaYTexto/cartasPremium/3.webp";

import carta7 from "../../../../../assets/mitos4.0/cartaYTexto/cartasRework/1.webp";
import carta8 from "../../../../../assets/mitos4.0/cartaYTexto/cartasRework/2.webp";
import carta9 from "../../../../../assets/mitos4.0/cartaYTexto/cartasRework/3.webp";

import carta10 from "../../../../../assets/mitos4.0/cartaYTexto/cartasFoilEspecial/1.webp";
import carta11 from "../../../../../assets/mitos4.0/cartaYTexto/cartasFoilEspecial/2.webp";
import carta12 from "../../../../../assets/mitos4.0/cartaYTexto/cartasFoilEspecial/3.webp";

import carta13 from "../../../../../assets/mitos4.0/cartaYTexto/cartasSecretas/1.webp";
import carta14 from "../../../../../assets/mitos4.0/cartaYTexto/cartasSecretas/2.webp";
import carta15 from "../../../../../assets/mitos4.0/cartaYTexto/cartasSecretas/3.webp";


const dataTextoYCartaSection = {

  background: {
    // No existe todavía un asset de fondo específico para mobile:
    // "mobile" apunta temporalmente a la misma imagen que "desktop"
    // como placeholder, listo para reemplazarse por un asset real
    // sin tocar código.
    desktop: fondoDesktop,
    mobile: fondoMobile,
    overlay: {
      from: "rgba(0,0,0,0.10)",
      to: "rgba(0,0,100,0.10)",
    },
  },

  bloques: [
  {
    id: "cartas-nuevas",
    anchorId: "cartas-nuevas-section",
    title: "Cartas Nuevas",
    reverse: true,
    cartas: [carta1, carta2, carta3],
    paragraphs: [
      `Una de las principales novedades de esta nueva versión
      de Leyendas PB 4.0, son las cartas completamente nuevas
      que se agregan al formato de Primer Bloque Extendido.`,
      `Dentro de esta edición, tendremos 60 cartas nuevas
      que formarán parte de las ediciones Espada Sagrada,
      Helénica, Hijos de Daana o de Dominios de Ra, las que
      se podrán encontrar entre las frecuencias Mega Real,
      Real, Cortesano y Vasallo.`,
    ],
  },
  {
    id: "cartas-premium",
    anchorId: "cartas-premium-section",
    title: "Cartas Premium",
    reverse: false,
    cartas: [carta4, carta5, carta6],
    paragraphs: [
      `Otra de las novedades de estos nuevos sobres con
      las nuevas cartas Ultra Raras o “Premium”, las que
      serán un poco menos frecuentes que las carta
      “Mega Real” apareciendo en 1 de cada 12 sobres*
      aproximadamente. Estas cartas añaden un nuevo
      diseño sin bordes y un Foil Premium de barniz
      trama especial.`,
      `Dentro de esta edición, podrás encontrar 25 cartas
      del tipo “Premium” y al igual que las cartas Mega Real,
      podrán ser identificadas por su Foil Premium especial.`,
    ],
  },
  {
    id: "cartas-rework",
    anchorId: "cartas-rework-section",
    title: "Cartas Rework",
    reverse: true,
    cartas: [carta7, carta8, carta9],
    paragraphs: [
      `Siguiendo con las novedades, los nuevos sobres
      de Leyendas Primer Bloque 4.0 agregan nuevas cartas
      clásicas con habilidades Rework, las que se incorporan
      al formato de Primer Bloque Extendido.`,
      `Dentro de esta edición tendremos más de 40 nuevas
      cartas Rework, divididas entre las frecuencias Real,
      Cortesano y Vasallo, y que pertenecen a las ediciones
      de Espada Sagrada, Helénica, Hijos de Daana
      o Dominios de Ra.`,
    ],
  },
  {
    id: "cartas-foil-especial",
    anchorId: "cartas-foil-especial-section",
    title: "Cartas Foil Especial",
    reverse: false,
    cartas: [carta10, carta11, carta12],
    paragraphs: [
      `En esta nueva versión de Leyendas Primer Bloque 4.0
      agregaremos nuevas cartas de frecuencia Legendaria,
      conservando un estilo de aplicación de colores continuando
      este tipo de tratamiento de las cartas de esta frecuencia
      de las ediciones de Aniversario.`,
      `Dentro de la edición existe un total de 09 nuevas cartas
      Legendarias, las que tienen una frecuencia de aparición
      de 1 de cada 72 sobres.`,
    ],
  },
  {
    id: "cartas-exclusivas",
    anchorId: "cartas-exclusivas-section",
    title: "Cartas Secretas",
    reverse: true,
    cartas: [carta13, carta14, carta15],
    paragraphs: [
      `Finalmente, queremos mostrarles la última novedad
      de esta edición con las nuevas cartas Secretas.`,
      `Existirán un total de 5 cartas del tipo Secreta dentro
      de Leyendas PB 4.0, las que tendrán una frecuencia
      de 1 de cada 3.000 sobres aproximadamente, siendo
      estas cartas un verdadero tesoro y una de las más
      raras de todo Mitos y Leyendas.`,
    ],
  },
  ],

};

export default dataTextoYCartaSection;
