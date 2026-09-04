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
      { tipo: "instagram", url: "https://www.instagram.com/elabismodehelmwargames" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=541140387407&text&type=phone_number&app_absent=0" },
      { tipo: "web", url: "https://www.elabismodehelmwargames.ar/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Av.+Corrientes+5239,+Villa+Crespo,+Buenos+Aires" },
    ],
  },
  {
    id: "tienda-2",
    titulo: "5 A LA CARA",
    descripcion: { texto: "SALTA 121", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/5alacara_store" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Salta+121,+Buenos+Aires" },
      { tipo: "web", url: "https://5alacara.com.ar/" },
      
    ],
  },
  {
    id: "tienda-3",
    titulo: "DIMA GAME",
    descripcion: { texto: "Av. Avellaneda 907 - CABALLITO", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/dimagames" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=541125512349&text&type=phone_number&app_absent=0" },
      { tipo: "web", url: "https://dimagame.com/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Av.+Avellaneda+907,+Caballito,+Buenos+Aires" },
    ],
  },
  {
    id: "tienda-4",
    titulo: "RANCHO STORE",
    descripcion: { texto: "CERVANTES 1099", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/ranchodelprofesor" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Cervantes+1099,+Floresta,+Buenos+Aires" },
      { tipo: "web", url: "https://ranchostoretcg.com.ar/" },
    ],
  },
  {
    id: "tienda-5",
    titulo: "PHOENIX REBORN",
    descripcion: { texto: "Cnel. Ramón Lista 5126 (sede Devoto)", localidad: "- CABA" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/phoenixrebornstore" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Ramón+Lista+5126,+Villa+Devoto,+Buenos+Aires" },
      { tipo: "web", url: "https://phoenixreborn.com.ar/" },
    ],
  },
];

const TIENDAS_BsAs = [
  {
    id: "tienda-6",
    titulo: "DOJO MANGA STORE",
    descripcion: { texto: "Basavilbaso 630", localidad: "- Cañuelas" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/dojomangastore/?hl=es" },
      { tipo: "maps", url: "https://maps.app.goo.gl/hxruS677WrnJdhxT6" },
      { tipo: "web", url: "https://www.dojomangastore.com.ar/?srsltid=AfmBOooYuM10tTTXs8twYFMSPCi4yyoPJluH_RO8a3NHQVn8V3CazY6W" },
      
    ],
  },
  {
    id: "tienda-7",
    titulo: "LA CARTA NOSTRA",
    descripcion: { texto: "Hipólito Yrigoyen 1400", localidad: "- Quilmes" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/la_carta_nostra/" },
      { tipo: "maps", url: "https://maps.app.goo.gl/pj5Bb8EKWj3RTXW1A" },
    ],
  },
  {
    id: "tienda-8",
    titulo: "KRAKEN STORE",
    descripcion: { texto: "Av. Conquista del Desierto 164", localidad: "- Ezeiza" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/krakennstore" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=541131870661&text&type=phone_number&app_absent=0" },
      { tipo: "web", url: "https://kraken.empretienda.com.ar/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Av.+Conquista+del+Desierto+164,+Ezeiza" },
    ],
  },
  {
    id: "tienda-9",
    titulo: "MY LITTLE KIOTO",
    descripcion: { texto: "Leandro Niceforo Alem 6824", localidad: "- Martn Coronado" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/mylittlekioto" },
      { tipo: "web", url: "https://mylittlekioto.com/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Leandro+N.+Alem+6824,+Martín+Coronado" },
    ],
  },
];

const TIENDAS_Rosario = [
  {
    id: "tienda-10",
    titulo: "CIRCUNLOQUIO",
    descripcion: { texto: "Zeballos 1107", localidad: "- ROSARIO" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/circunloquiojuegos" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=5493413487351&text&type=phone_number&app_absent=0" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Zeballos+1107,+Rosario" },
    ],
  },
 
];

const TIENDAS_MDQ = [
  {
    id: "tienda-11",
    titulo: "EL ÁTICO DE HISUI",
    descripcion: { texto: "Catamarca 1657, 1° Piso (dentro de Game Over Esports)", localidad: "- Mar del Plata" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/el.atico.de.hisui" },
      { tipo: "web", url: "https://aticodehisui.com/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Catamarca+1657,+Mar+del+Plata" },
    ],
  },
];

const TIENDAS_SanLuis = [
 {
    id: "tienda-12",
    titulo: "EL ÁTICO CLUB",
    descripcion: { texto: "BOLIVAR 881", localidad: "- SAN LUIS" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/el.atico.club" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=5492664487329&text&type=phone_number&app_absent=0" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Bolívar+881,+San+Luis" },
    ],
  },
];

const TIENDAS_PuntaAlta = [
 {
    id: "tienda-13",
    titulo: "DE ONE MANA",
    descripcion: { texto: "Av. Colón y Rivadavia", localidad: "- PUNTA ALTA" },
    botones: [
      { tipo: "instagram", url: "https://www.instagram.com/the.one.mana.puntaalta" },
      { tipo: "whatsapp", url: "https://api.whatsapp.com/send/?phone=5492932476101&text&type=phone_number&app_absent=0" },
      { tipo: "web", url: "https://theonemana.mitiendanube.com/" },
      { tipo: "maps", url: "https://www.google.com/maps?q=Av.+Colón+y+Rivadavia,+Punta+Alta" },
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

const tarjetasPuntaAlta = TIENDAS_PuntaAlta.map((tarjeta, index) => ({
  ...tarjeta,
  logo: logos[
    TIENDAS_CABA.length +
    TIENDAS_BsAs.length +
    TIENDAS_Rosario.length +
    TIENDAS_MDQ.length +
    TIENDAS_SanLuis.length +
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
      id: "tiendas-PuntaAlta",
      titulo: "TIENDAS EN PUNTA ALTA:",
      tarjetas: tarjetasPuntaAlta,
    },
    {
      id: "tiendas-Rosario",
      titulo: "TIENDAS EN ROSARIO:",
      tarjetas: tarjetasRosario,
    },
    {
      id: "tiendas-MDQ",
      titulo: "TIENDAS EN MAR DEL PLATA:",
      tarjetas: tarjetasMDQ,
    },
    {
      id: "tiendas-SanLuis",
      titulo: "TIENDAS EN SAN LUIS:",
      tarjetas: tarjetasSanLuis,
    },

  ],
};
