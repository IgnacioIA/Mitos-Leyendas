// Carga automática de las imágenes de cada carpeta (mismo patrón que
// dataCartasBanList.js / dataContenidoTiendasAmigas.js): agregar o quitar
// una fecha es agregar o quitar el archivo en la carpeta correspondiente,
// no hay que tocar este código ni el componente.
//
// A diferencia de tiendasAmigas (que tenía todos los logos juntos en una
// sola carpeta "logos" y necesitaba repartirlos por índice), acá cada
// sección ya tiene su propia carpeta en assets, así que cada una se
// resuelve directo sin ese cálculo de offsets.
const cargarEntradas = (modules) =>
  Object.entries(modules).sort(([rutaA], [rutaB]) =>
    rutaA.localeCompare(rutaB, undefined, { numeric: true })
  );

// Link del grupo de WhatsApp de cada tienda, si tiene. La clave es la ruta
// del archivo tal cual la devuelve import.meta.glob (la misma que se ve en
// cargarEntradas), así que agregar/reordenar imágenes en una carpeta no
// desincroniza los links -quedan atados al archivo, no a la posición-.
// Las tarjetas cuya imagen no aparece acá muestran el aviso de "no tiene
// grupo de WhatsApp" al clickear.
//
// TODO: completar con los links reales. Ejemplo:
// "../../../../../assets/cronogramaLiga/seccion/fechasCABA/1.webp":
//   "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX",
const WHATSAPP_LINKS = {
  //CABA
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/1.webp":"https://chat.whatsapp.com/CaWE22D5ieSDklpTo8vGS4?s=cl&p=a&mlu=4",
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/2.webp":"https://chat.whatsapp.com/DtQpNV7bd8N90gmPNRUgcR",
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/3.webp":"https://chat.whatsapp.com/LfeiE3n54v6I3n3viBcYMl",
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/4.webp":"https://chat.whatsapp.com/DKocGIQDEyA6961n2DtAmV",
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/5.webp":"https://chat.whatsapp.com/Id0gOojn4gXEpSAcBXfF3C",
  //BsAs
  "../../../../../assets/cronogramaLiga/seccion/fechasBsAs/1.webp":"https://chat.whatsapp.com/LyOnEzywbcXEaIRkQA1iQT",
  //MDQ
  "../../../../../assets/cronogramaLiga/seccion/fechasMDQ/1.webp":"https://chat.whatsapp.com/LKlnT4wuqNMAsMDLY9XcRF",
  //San Luis
  "../../../../../assets/cronogramaLiga/seccion/fechasSanLuis/1.webp":"https://chat.whatsapp.com/Dr62WfX9AhxCgGC7okc3Bj",


};

// Cada tarjeta acá solo necesita id + imagen + whatsapp (a diferencia de
// TiendasAmigasTarjeta, no hay título/descripción/localidad/botones).
const crearTarjetas = (seccionId, modules) =>
  cargarEntradas(modules).map(([ruta, imagen], index) => ({
    id: `${seccionId}-${index + 1}`,
    imagen,
    whatsapp: WHATSAPP_LINKS[ruta] ?? null,
  }));

const fechasCABAModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechasCABA/*.webp",
  { eager: true, import: "default" }
);
const fechasGranBuenosAiresModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechaBsAs/*.webp",
  { eager: true, import: "default" }
);
const fechasRosarioModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechasRosario/*.webp",
  { eager: true, import: "default" }
);
const fechasMDQModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechasMDQ/*.webp",
  { eager: true, import: "default" }
);
const fechasSanLuisModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechasSanLuis/*.webp",
  { eager: true, import: "default" }
);
const fechasPuntaAltaModules = import.meta.glob(
  "../../../../../assets/cronogramaLiga/seccion/fechasPuntaAlta/*.webp",
  { eager: true, import: "default" }
);

export const dataContenidoCronologiaLiga = {
  secciones: [
    {
      id: "fechas-caba",
      titulo: "FECHAS EN CABA:",
      tarjetas: crearTarjetas("fechas-caba", fechasCABAModules),
    },
    {
      id: "fechas-gran-buenos-aires",
      titulo: "FECHAS EN GRAN BUENOS AIRES:",
      tarjetas: crearTarjetas("fechas-gba", fechasGranBuenosAiresModules),
    },
    {
      id: "fechas-rosario",
      titulo: "FECHAS EN ROSARIO:",
      tarjetas: crearTarjetas("fechas-rosario", fechasRosarioModules),
    },
    {
      id: "fechas-mdq",
      titulo: "FECHAS EN MAR DEL PLATA:",
      tarjetas: crearTarjetas("fechas-mdq", fechasMDQModules),
    },
    {
      id: "fechas-san-luis",
      titulo: "FECHAS EN SAN LUIS:",
      tarjetas: crearTarjetas("fechas-san-luis", fechasSanLuisModules),
    },
    // Sección nueva (no existe en tiendasAmigas): tiene su propia carpeta
    // de imagen en assets/cronogramaLiga/seccion/fechasPuntaAlta.
    {
      id: "fechas-punta-alta",
      titulo: "FECHAS EN PUNTA ALTA:",
      tarjetas: crearTarjetas("fechas-punta-alta", fechasPuntaAltaModules),
    },
  ],
};
