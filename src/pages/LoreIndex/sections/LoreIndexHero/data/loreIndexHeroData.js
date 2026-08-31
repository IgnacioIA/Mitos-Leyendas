// Imagen por convención de carpeta (mismo patrón usado en otras páginas
// nuevas): mientras no exista el archivo, el build no se rompe (glob vacío)
// y en cuanto se agregue "src/assets/LoreIndex/Hero/<algo>.webp" aparece
// solo, sin tocar este código.
const heroModules = import.meta.glob(
  "../../../../../assets/LoreIndex/index/LoreHero/*.webp",
  { eager: true, import: "default" }
);

const heroImage = Object.values(heroModules)[0];

// TODO: completar titulo/subtitulo/descripcion cuando se defina el
// contenido real. Mientras estén vacíos no se renderizan (ver
// LoreIndexHero.jsx), así el Hero queda listo pero sin contenido inventado.
export const loreIndexHeroData = {
  image: heroImage,
  titulo: "ARCHIVO MITOLÓGICO",
  subtitulo: "DE MITOS Y LEYENDAS ARGENTINA",
  descripcion: "",
};
