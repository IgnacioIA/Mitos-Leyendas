export default function useCinematicBackgroundStyles({
  image,
  overlay,
  position,
  // "cover" (default, comportamiento original) rellena todo el fondo
  // recortando lo que sobre. "contain" muestra la imagen completa, sin
  // recortarla, dejando ver el fondo de la página en los bordes sobrantes.
  size = "cover",
}) {
  return {
    imageStyle: {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: size,
    },
    overlayStyle: {
      backgroundColor: `rgba(0, 0, 0, ${overlay})`,
    },
  };
}
