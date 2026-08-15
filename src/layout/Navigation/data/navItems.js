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
      { title: "PRÓXIMAMENTE", items: [] },
      {
        title: "PRODUCTOS RECIENTES",
        items: [
          { title: "KITS DE BATALLA: DRACO/SIDHE", path: "/DracoSidhe" },
          { title: "LEYENDAS 4.0", path: "/mitos4.0" },
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
          { title: "KITS DE BATALLA: DRACO/SIDHE", path: "/DracoSidhe" },
          { title: "TOOLKIT PBX 2026: DESAFÍO - AMATISTA", path: "/DesafioAmatista" },
          { title: "TOOLKIT PBX 2025: JUICIO Y VISIÓN - NOBLEZA Y PODER", path: "/Toolkit2025JuicioVision" },
          { title: "LOOTBOX PBX 2025", path: "/EdicionPBX" },
          { title: "LEYENDAS 4.0", path: "/mitos4.0" },
          { title: "SHOGUN 5", path: "/Shogun" },
          { title: "MAZOS INICIALES", path: "/mazoInicialPB" },
          { title: "HIJOS DE DAANA", path: "/HijosDeDaanaPage" },
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
          { title: "LORE", path: "/LorePage" },
        ],
      },
      {
        title: "ACERCA DEL JUEGO",
        items: [
          { title: "Aprende a jugar", path: "/Apj" },
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
          { title: "CRONOGRAMA DE LIGA", path: "/TeamsOficiales" },
          { title: "SALÓN DE CAMPEONES", path: "/TeamsOficiales" },
          { title: "JUNTADAS MITERAS", path: "/TeamsOficiales" },
          { title: "TEAMS", path: "/TeamsOficiales" },
          { title: "TIENDAS", path: "/TiendasAmigas" },
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
