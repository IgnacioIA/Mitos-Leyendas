import "./styles/HeroGenericoSinBoton.css";

export default function HeroGenericoSinBoton({
  title,
  subtitle,
  description,
  backgroundDesktop,
  backgroundMobile,
}) {
  return (
    <section className="HeroGenericoSinBoton">
      <picture className="HeroGenericoSinBoton-Background">
        <source
          media="(max-width: 768px)"
          srcSet={backgroundMobile}
        />

        <img
          src={backgroundDesktop}
          alt={title}
          className="HeroGenericoSinBoton-BackgroundImage"
        />
      </picture>

      <div className="HeroGenericoSinBoton-Overlay" />

      <div className="HeroGenericoSinBoton-Content">
        <h1 className="HeroGenericoSinBoton-Title">
          {title}
        </h1>

        {subtitle && (
          <h2 className="HeroGenericoSinBoton-Subtitle">
            {subtitle}
          </h2>
        )}

        {description && (
          <p className="HeroGenericoSinBoton-Description">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}