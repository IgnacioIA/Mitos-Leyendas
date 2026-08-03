import "./styles/ParallaxBackgroundCinematografico.css";

import useCinematicBackgroundStyles from "../backgroundCinematografico/useCinematicBackgroundStyles";

export default function ParallaxBackgroundCinematografico({
  image,
  overlay = 0.2,
  position = "center center",
  children,
}) {
  const { imageStyle, overlayStyle } = useCinematicBackgroundStyles({
    image,
    overlay,
    position,
  });

  return (
    <section className="ParallaxBackgroundCinematografico">

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

    </section>
  );
}