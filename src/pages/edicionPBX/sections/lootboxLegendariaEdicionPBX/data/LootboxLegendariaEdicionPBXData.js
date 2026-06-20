import FondoDesktop from "../../../../../assets/EdicionPBX2025/lootboxLegendariaEdicionPBX2025/fondo.webp";
import Carta1 from "../../../../../assets/EdicionPBX2025/lootboxLegendariaEdicionPBX2025/LootboxUltraSecreta/CARTA 1.png";
import Carta2 from "../../../../../assets/EdicionPBX2025/lootboxLegendariaEdicionPBX2025/LootboxUltraSecreta/CARTA 2.png";

export const fondoDesktop = FondoDesktop;

export const TIPOS_SECCION = {
  CARROUSEL: "carrousel",
  DOS_IMAGENES: "dos-imagenes",
};

// Carga automática de todas las cartas "CARTA L*.png" de la carpeta.
// Agregar una carta nueva = poner el archivo en la carpeta. No hay que tocar este código.
const cartasModules = import.meta.glob(
  "../../../../../assets/EdicionPBX2025/lootboxLegendariaEdicionPBX2025/CARTA L*.png",
  { eager: true, import: "default" }
);

const cartasLegendarias = Object.entries(cartasModules)
  .sort(([rutaA], [rutaB]) =>
    rutaA.localeCompare(rutaB, undefined, { numeric: true })
  )
  .map(([, imagen], index) => ({
    id: index + 1,
    nombre: `Carta ${index + 1}`,
    imagen,
  }));

export const secciones = [
  {
    id: "legendaria",
    tipo: TIPOS_SECCION.CARROUSEL,
    tituloPrimeraPalabra: "LOOTBOX",
    tituloSegundaPalabra: "LEGENDARIA",
    descripcion: [
      "El 25% de las lootbox vendrá con una versión de carta Legendaria en su contenido, las que forman parte de una selección de 8 cartas de las cuatro ediciones de Primer Bloque. Para cada carta se respetarán los diseños de cada una de las cartas Legendarias de las ediciones aniversario de Primer Bloque con colores Morados, Rojos, Esmeralda y de Lapislázuli.",
    ],
    cartas: cartasLegendarias,
  },
{
  id: "legendaria-2",
  tipo: TIPOS_SECCION.DOS_IMAGENES,
  tituloPrimeraPalabra: "LOOTBOX",
  tituloSegundaPalabra: "ULTRA SECRETA FESTIVA",
  descripcion: [
    "Esta carta exclusiva se encontrará en el 10% de la producción total de Lootbox de Primer Bloque 2025, y servirá como un comodín para un entretenido premio, el que a diferencia de años anteriores, recibirás de forma inmediata sin tener que canjearlo en tu tienda más cercana.",
    "Al encontrar esta carta dentro del contenido de tu Lootbox de Primer Bloque 2025, podrás notar que se añadirá un segundo sobre rojo de cartas promocionales en el interior de tu producto, el que contendrá un set completo de las nuevas cartas de Primer Bloque Extendido exclusivas de esta Lootbox (19 cartas en total) y de forma adicional un premio exclusivo con una versión de “Anillos de Badbury” con un entretenido arte festivo.",
  ],
  imagenes: [
    { src: Carta1, alt: "Carta especial 1" },
    { src: Carta2, alt: "Carta especial 2" },
  ],
},
];