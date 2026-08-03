export default function useCinematicBackgroundStyles({
  image,
  overlay,
  position,
}) {
  return {
    imageStyle: {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
    },
    overlayStyle: {
      backgroundColor: `rgba(0, 0, 0, ${overlay})`,
    },
  };
}
