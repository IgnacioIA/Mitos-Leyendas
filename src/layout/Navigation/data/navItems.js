// TODO: reemplazar por la URL real de la tienda oficial
export const SHOP_URL = "#";

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
          { title: "LEYENDAS 4.0", path: "/mitos4.0" },
          { title: "SHOGUN 5", path: "/Shogun" },
          { title: "MAZOS INICIALES", path: "/mazoInicialPB" },
          { title: "LOOTBOX", path: "/EdicionPBX" },
          { title: "TOOLKIT PBX", path: "#" }, // TODO: crear página/ruta de Toolkit PBX
          { title: "DRACO Y SIDHE", path: "/DracoSidhe" },
          { title: "RAZAS", path: "/RazasPage" },
          { title: "DESAFÍO AMATISTA", path: "/DesafioAmatista" },
          { title: "PREMIER BS AS 2026", path: "/PremierBsAs2026" },
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
        title: null,
        items: [
          { title: "LORE", path: "/LorePage" },
          { title: "APRENDER A JUGAR", path: "/Apj" },
          { title: "FORMATOS", path: "/Formatos" },
          { title: "BANLIST PBX", path: "/BanList" },
          { title: "RAZAS PBX", path: "#" }, // TODO: crear página/ruta de Razas PBX
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
        items: [{ title: "TEAMS", path: "/TeamsOficiales" }],
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
        // TODO: crear página del torneo
        items: [{ title: "TORNEO PREMIER PBX 2026", path: "#" }],
      },
    ],
  },
];

export default navItems;
