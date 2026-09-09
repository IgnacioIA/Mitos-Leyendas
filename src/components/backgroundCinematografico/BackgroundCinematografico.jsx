import "./styles/BackgroundCinematografico.css";

import useCinematicBackgroundStyles from "./useCinematicBackgroundStyles";

export default function BackgroundCinematografico({
  image,
  // Ver ParallaxBackgroundCinematografico.jsx: composición opcional para
  // la proporción vertical de Mobile. Sin imageMobile, cero cambio.
  imageMobile,
  overlay = 0.2,
  position = "center center",
  children,
}) {
  const { imageStyle, overlayStyle } = useCinematicBackgroundStyles({
    image,
    imageMobile,
    overlay,
    position,
  });

  return (
    <section className="BackgroundCinematografico">

      <div className="BackgroundCinematografico-Layer">

        <div
          className="BackgroundCinematografico-Image"
          style={imageStyle}
        />

        <div
          className="BackgroundCinematografico-Overlay"
          style={overlayStyle}
        />

      </div>

      <div className="BackgroundCinematografico-Content">
        {children}
      </div>

    </section>
  );
}
