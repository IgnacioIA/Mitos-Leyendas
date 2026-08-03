import "./styles/BackgroundCinematografico.css";

import useCinematicBackgroundStyles from "./useCinematicBackgroundStyles";

export default function BackgroundCinematografico({
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
