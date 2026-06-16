import "./styles/Hero.css";

export default function Hero({
  title,
  subtitle,
  description,
  backgroundDesktop,
  backgroundMobile,
  buttonText = "Ver Contenido",
  onButtonClick,
}) {
  return (
    <section className="Hero">

      <picture className="Hero-Background">

        <source
          media="(max-width: 768px)"
          srcSet={backgroundMobile}
        />

        <img
          src={backgroundDesktop}
          alt={title}
          className="Hero-BackgroundImage"
        />

      </picture>

      <div className="Hero-Overlay" />

      <div className="Hero-Content">

        <h1 className="Hero-Title">
          {title}
        </h1>

        {subtitle && (
          <h2 className="Hero-Subtitle">
            {subtitle}
          </h2>
        )}

        {description && (
          <p className="Hero-Description">
            {description}
          </p>
        )}

        {buttonText && (
          <button
            className="Hero-Button"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}

      </div>

    </section>
  );
}