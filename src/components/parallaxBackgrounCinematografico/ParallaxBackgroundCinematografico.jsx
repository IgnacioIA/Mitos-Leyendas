import "./styles/ParallaxBackgroundCinematografico.css";

import useCinematicBackgroundStyles from "../backgroundCinematografico/useCinematicBackgroundStyles";

export default function ParallaxBackgroundCinematografico({
  id,
  image,
  // Opcional: composición pensada para la proporción vertical de Mobile.
  // Los fondos de estas secciones son panorámicos; en Mobile
  // background-size:cover los recorta/amplía tanto que a veces no se
  // distingue que hay una imagen. Sin imageMobile, Mobile sigue mostrando
  // "image" igual que siempre (cero cambio de comportamiento).
  imageMobile,
  overlay = 0.2,
  position = "center center",
  size = "cover",
  showDivider = false,
  children,
}) {
  const { imageStyle, overlayStyle } = useCinematicBackgroundStyles({
    image,
    imageMobile,
    overlay,
    position,
    size,
  });

  return (
    <section
      id={id}
      className="ParallaxBackgroundCinematografico"
    >

      <div className="ParallaxBackgroundCinematografico-Sticky">

        <div
          className="ParallaxBackgroundCinematografico-Image"
          style={imageStyle}
        />

        <div
          className="ParallaxBackgroundCinematografico-Overlay"
          style={overlayStyle}
        />

      </div>

      <div className="ParallaxBackgroundCinematografico-Content">
        {children}
      </div>

      {showDivider && (
        <div className="ParallaxBackgroundCinematografico-Divider" />
      )}

    </section>
  );
}