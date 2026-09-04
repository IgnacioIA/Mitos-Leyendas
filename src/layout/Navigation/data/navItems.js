// TODO: reemplazar por la URL real de la tienda oficial
export const SHOP_URL = "https://www.mylargentina.com/";

/* =========================================================
   NAV ITEMS
   type "mega"     -> trigger + panel de ancho completo (1 o 2 columnas)
   type "external" -> link directo a una URL externa (sin dropdown)

   Cada columna: { title: string|null, items: [{ title, path }] }
   Una columna con items: [] se muestra vacía (a completar a futuro).
========================================================= */

const navItems = [
  {
    id: "novedades",
    title: "NOVEDADES",
    type: "mega",
    columns: [
      {
        title: "PRÓXIMAMENTE",
        items: [
          { title: "RELATOS DE HIJOS DE RA", path: "/DominiosDeRaPaginaLore" },
        ],
      },
      {
        title: "PRODUCTOS RECIENTES",
        items: [
          { title: "LEYENDAS 4.0", path: "/mitos4.0" },
          { title: "KITS DE BATALLA: DRACO/SIDHE", path: "/DracoSidhe" },
          { title: "SHOGUN 5", path: "/Shogun" },
        ],
      },
    ],
  },
  {
    id: "productos",
    title: "PRODUCTOS",
    type: "mega",
    columns: [
      {
        title: "FORMATO PRINCIPAL",
        items: [
          { title: "LEYENDAS 4.0", path: "/mitos4.0" },
          { title: "KITS DE BATALLA: DRACO/SIDHE", path: "/DracoSidhe" },
          { title: "SHOGUN 5", path: "/Shogun" },
          { title: "LOOTBOX PBX 2025", path: "/EdicionPBX" },
          { title: "MAZOS INICIALES", path: "/mazoInicialPB" },
          { title: "RELATOS DE HIJOS DE DAANA", path: "/HijosDeDaanaPage" },
          { title: "TOOLKIT PBX 2026: DESAFÍO - AMATISTA", path: "/DesafioAmatista" },
          { title: "TOOLKIT PBX 2025: JUICIO Y VISIÓN - NOBLEZA Y PODER", path: "/Toolkit2025JuicioVision" },
        ],
      },
      { title: "FORMATOS ALTERNATIVOS", items: [] },
    ],
  },
  {
    id: "jugar",
    title: "JUGAR MITOS Y LEYENDAS",
    type: "mega",
    columns: [
      {
        title: "FORMATOS",
        items: [
          { title: "CASUAL", path: "/Formatos" },
          { title: "COMPETITIVO", path: "/Formatos" },
        ],
      },
      {
        title: "PRIMER BLOQUE EXTENDIDO",
        items: [
          { title: "RAZAS", path: "/RazasPage" },
          { title: "BANLIST PBX", path: "/BanList" },
          { title: "LORE", path: "/LoreIndex" },
        ],
      },
      {
        title: "ACERCA DEL JUEGO",
        items: [
          { title: "APRENDER A JUGAR", path: "/Apj" },
          { title: "LINEA DEL TIEMPO", path: "/HistoriaMYL" },
        ],
      },
    ],
  },
  {
    id: "shop",
    title: "SHOP",
    type: "external",
    path: SHOP_URL,
  },
  {
    id: "comunidad",
    title: "COMUNIDAD",
    type: "mega",
    columns: [
      {
        title: null,
        items: [
          { title: "CRONOGRAMA DE LIGA", path: "/CronologiaLiga" },
          { title: "SALÓN DE CAMPEONES", path: "/SalonDeCampeones" },
          { title: "TIENDAS AMIGAS", path: "/TiendasAmigas" },
          { title: "TEAMS", path: "/TeamsOficiales" },
        ],
      },
    ],
  },
  {
    id: "articulos",
    title: "ARTICULOS",
    type: "mega",
    columns: [
      {
        title: null,
        items: [{ title: "TORNEO PREMIER PBX 2026", path: "/PremierBsAs2026" }],
      },
    ],
  },
];

export default navItems;
