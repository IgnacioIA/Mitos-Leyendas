import "./styles/ParallaxBackgroundCinematografico.css";

import useCinematicBackgroundStyles from "../backgroundCinematografico/useCinematicBackgroundStyles";

export default function ParallaxBackgroundCinematografico({
  id,
  image,
  overlay = 0.2,
  position = "center center",
  size = "cover",
  showDivider = false,
  children,
}) {
  const { imageStyle, overlayStyle } = useCinematicBackgroundStyles({
    image,
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