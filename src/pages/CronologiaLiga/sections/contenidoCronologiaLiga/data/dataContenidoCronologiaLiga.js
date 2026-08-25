// Carga automática de las imágenes de cada carpeta (mismo patrón que
// dataCartasBanList.js / dataContenidoTiendasAmigas.js): agregar o quitar
// una fecha es agregar o quitar el archivo en la carpeta correspondiente,
// no hay que tocar este código ni el componente.
//
// A diferencia de tiendasAmigas (que tenía todos los logos juntos en una
// sola carpeta "logos" y necesitaba repartirlos por índice), acá cada
// sección ya tiene su propia carpeta en assets, así que cada una se
// resuelve directo sin ese cálculo de offsets.
const cargarImagenes = (modules) =>
  Object.entries(modules)
    .sort(([rutaA], [rutaB]) =>
      rutaA.localeCompare(rutaB, undefined, { numeric: true })
    )
    .map(([, imagen]) => imagen);

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

// Cada tarjeta acá solo necesita id + imagen (a diferencia de
// TiendasAmigasTarjeta, no hay título/descripción/localidad/botones).
const crearTarjetas = (seccionId, modules) =>
  cargarImagenes(modules).map((imagen, index) => ({
    id: `${seccionId}-${index + 1}`,
    imagen,
  }));

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
