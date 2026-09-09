export default function useCinematicBackgroundStyles({
  image,
  // Variante opcional para Mobile. Los fondos de estas secciones son
  // panorámicos (pensados para una franja ancha de Desktop); en Mobile la
  // caja donde tienen que entrar es angosta y muy alta, así que
  // background-size:cover termina ampliando la imagen muchísimo para
  // cubrir el alto y mostrando solo una tira vertical recortada del medio
  // -- no es un bug de CSS, cover nunca deforma la imagen, es que no hay
  // recorte razonable de una imagen apaisada que cubra bien una caja
  // vertical. imageMobile permite pasar una composición pensada para esa
  // proporción; si no se provee, Mobile sigue usando "image" (mismo
  // comportamiento que hoy, sin cambios).
  imageMobile,
  overlay,
  position,
  // "cover" (default, comportamiento original) rellena todo el fondo
  // recortando lo que sobre. "contain" muestra la imagen completa, sin
  // recortarla, dejando ver el fondo de la página en los bordes sobrantes.
  size = "cover",
}) {
  return {
    imageStyle: {
      // El background-image real vive en el CSS (var(--cinematic-bg-*)),
      // no acá: así el media query de Mobile puede pisar la variable sin
      // pelear con la especificidad de un inline style. Ver
      // ParallaxBackgroundCinematografico.css / BackgroundCinematografico.css.
      "--cinematic-bg-desktop": `url(${image})`,
      ...(imageMobile && {
        "--cinematic-bg-mobile": `url(${imageMobile})`,
      }),
      backgroundPosition: position,
      backgroundSize: size,
    },
    overlayStyle: {
      backgroundColor: `rgba(0, 0, 0, ${overlay})`,
    },
  };
}
