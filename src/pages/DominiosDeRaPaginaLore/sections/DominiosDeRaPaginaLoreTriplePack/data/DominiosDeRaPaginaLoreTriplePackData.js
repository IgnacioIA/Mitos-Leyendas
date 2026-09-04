import cajas from "../../../../../assets/DominiosDeRaPaginaLore/Paquetitos/CAJAS.webp";

// TODO: completar textos y link/acción definitivos del banner. Los textos se
// pasan siempre (incluso vacíos) porque BannerTextoImagenBoton trae textos
// por defecto propios de LootboxLegendariaEdicionPBX (su referencia): dejar
// alguno sin definir haría aparecer esa copia ajena en vez de un placeholder.
export const banner = {
  imagen: cajas,
  imagenAlt: "",

  tituloLinea1: "RESERVA LOS KITS",
  tituloLinea2: "AHORA MISMO",

  textoBoton: "VER TIENDAS AMIGAS",

  // Link de destino del botón. Si en vez de un link se necesita disparar
  // una acción (abrir un modal, hacer scroll, etc.), reemplazar por
  // onBotonClick en el data y pasarlo tal cual en el JSX.
  href: "/TiendasAmigas",

  imagenPrimero: true,
};
