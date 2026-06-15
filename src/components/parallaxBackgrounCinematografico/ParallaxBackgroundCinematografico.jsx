import "./styles/ParallaxBackgroundCinematografico.css";

export default function ParallaxBackgroundCinematografico({
  image,
  overlay = 0.2,
  position = "center center",
  children,
}) {
  return (
    <section className="ParallaxBackgroundCinematografico">

      <div className="ParallaxBackgroundCinematografico-Sticky">

        <div
          className="ParallaxBackgroundCinematografico-Image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: position,
          }}
        />

        <div
          className="ParallaxBackgroundCinematografico-Overlay"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${overlay})`,
          }}
        />

      </div>

      <div className="ParallaxBackgroundCinematografico-Content">
        {children}
      </div>

    </section>
  );
}