// Carga automática de los logos de la carpeta (mismo patrón que
// cartasBanList/data): agregar/quitar un logo es agregar/quitar el
// archivo, no hay que tocar este código.
const logosModules = import.meta.glob(
  "../../../../../assets/tiendasAmigas/contenido/logos/*.webp",
  { eager: true, import: "default" }
);

const logos = Object.entries(logosModules)
  .sort(([rutaA], [rutaB]) =>
    rutaA.localeCompare(rutaB, undefined, { numeric: true })
  )
  .map(([, imagen]) => imagen);

// TODO: completar nombre, descripción/localidad y URLs reales de cada
// tienda cuando se tenga la información. Los botones de acá abajo son de
// ejemplo (varían la cantidad entre 1 y 4 a propósito) para poder revisar
// los 4 layouts posibles de TiendasAmigasTarjeta-botones; reemplazar "#"
// por el link real de cada uno.
//
// Agregar una tienda nueva = agregar un objeto acá (y su logo en
// src/assets/tiendasAmigas/contenido/logos/) — no hay que tocar el JSX.
const TIENDAS_CABA = [
  {
    id: "tienda-1",
    titulo: "EL ABISMO DE HELM",
    descripcion: { texto: "Av. Corrientes 5239, Local 38", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "whatsapp", url: "#" },
      { tipo: "web", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
  {
    id: "tienda-2",
    titulo: "5 A LA CARA",
    descripcion: { texto: "SALTA 121", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "maps", url: "#" },
      { tipo: "web", url: "#" },
      
    ],
  },
  {
    id: "tienda-3",
    titulo: "DIGA GAME",
    descripcion: { texto: "Av. Avellaneda 907 - CABALLITO", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "whatsapp", url: "#" },
      { tipo: "web", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
  {
    id: "tienda-4",
    titulo: "RANCHO STORE",
    descripcion: { texto: "CERVANTES 1099", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "maps", url: "#" },
      { tipo: "web", url: "#" },
    ],
  },
  {
    id: "tienda-5",
    titulo: "PHOENIX REBORN",
    descripcion: { texto: "Cnel. Ramón Lista 5126 (sede Devoto)", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "maps", url: "#" },
      { tipo: "web", url: "#" },
    ],
  },
];

const TIENDAS_BsAs = [
  {
    id: "tienda-6",
    titulo: "DOJO MANGA STORE",
    descripcion: { texto: "Basavilbaso 630", localidad: "- Cañuelas" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "maps", url: "#" },
      { tipo: "web", url: "#" },
      
    ],
  },
  {
    id: "tienda-7",
    titulo: "LA CARTA NOSTRA",
    descripcion: { texto: "Hipólito Yrigoyen 1400", localidad: "- Quilmes" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
  {
    id: "tienda-8",
    titulo: "KRAKEN STORE",
    descripcion: { texto: "Av. Conquista del Desierto 164", localidad: "- Ezeiza" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "whatsapp", url: "#" },
      { tipo: "web", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
  {
    id: "tienda-9",
    titulo: "MY LITTLE KIOTO",
    descripcion: { texto: "Leandro Niceforo Alem 6824", localidad: "- Martn Coronado" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "web", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
];

const TIENDAS_Rosario = [
  {
    id: "tienda-10",
    titulo: "LA CARTA NOSTRA",
    descripcion: { texto: "Zeballos 1107", localidad: "- ROSARIO" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "whatsapp", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
 
];

const TIENDAS_MDQ = [
  {
    id: "tienda-11",
    titulo: "EL ÁTICO DE HISUI",
    descripcion: { texto: "Catamarca 1657, 1° Piso (dentro de Game Over Esports)", localidad: "- Mar del Plata" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "web", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
];

const TIENDAS_SanLuis = [
 {
    id: "tienda-12",
    titulo: "EL ÁTICO CLUB",
    descripcion: { texto: "BOLIVAR 881", localidad: "- SAN LUIS" },
    botones: [
      { tipo: "instagram", url: "#" },
      { tipo: "whatsapp", url: "#" },
      { tipo: "maps", url: "#" },
    ],
  },
];



const tarjetasCABA = TIENDAS_CABA.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[index],
}));

const tarjetasBsAs = TIENDAS_BsAs.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[TIENDAS_CABA.length + index],
}));

const tarjetasRosario = TIENDAS_Rosario.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[
    TIENDAS_CABA.length +
    TIENDAS_BsAs.length +
    index
  ],
}));

const tarjetasMDQ = TIENDAS_MDQ.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[
    TIENDAS_CABA.length +
    TIENDAS_BsAs.length +
    TIENDAS_Rosario.length +
    index
  ],
}));

const tarjetasSanLuis = TIENDAS_SanLuis.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[
    TIENDAS_CABA.length +
    TIENDAS_BsAs.length +
    TIENDAS_Rosario.length +
    TIENDAS_MDQ.length +
    index
  ],
}));

export const dataContenidoTiendasAmigas = {
  secciones: [
    {
      id: "tiendas-caba",
      titulo: "TIENDAS EN CABA:",
      tarjetas: tarjetasCABA,
    },
    {
      id: "tiendas-gran-buenos-aires",
      titulo: "TIENDAS EN GRAN BUENOS AIRES:",
      tarjetas: tarjetasBsAs,
    },
    {
      id: "tiendas-Rosario",
      titulo: "TIENDAS EN ROSARIO:",
      tarjetas: tarjetasRosario,
    },
    {
      id: "tiendas-MDQ",
      titulo: "TIENDAS EN MAR DEL PLATA::",
      tarjetas: tarjetasMDQ,
    },
    {
      id: "tiendas-SanLuis",
      titulo: "TIENDAS EN SAN LUIS::",
      tarjetas: tarjetasSanLuis,
    },

  ],
};
