import heroDesktop from "../../../../../assets/mitos4.0/hero/FONDO HERO.webp";
import heroMobile from "../../../../../assets/mitos4.0/hero/FONDO HERO MOBILE.webp";

// No existe todavía un asset de fondo específico para mobile: "mobile"
// apunta temporalmente a la misma imagen que "desktop" como placeholder,
// listo para reemplazarse por un asset real sin tocar código.
const dataHeroSection = {

  background: {
    desktop: heroDesktop,
    mobile: heroMobile,
  },

  content: {
    title: "LEYENDAS 4.0",
    subtitle: "PRIMER BLOQUE EXTENDIDO",
    description:
      "NUEVOS DIOSES Y CRIATURAS MITOLÓGICAS " +
      "LLEGAN A MITOS Y LEYENDAS " +
      "PARA REVOLUCIONAR EL JUEGO",
  },

  scrollButton: {
    label: "VER CONTENIDO",
    href: "#next-section",
    variant: "primary",
  },

};

export default dataHeroSection;
