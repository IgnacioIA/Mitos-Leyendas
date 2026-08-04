import "./styles/Hero.css";

export default function Hero({
  title,
  subtitle,
  description,
  backgroundDesktop,
  backgroundMobile,
  buttonText = "Ver Contenido",
  onButtonClick,
  scrollToId,
  compactTitle = false,
}) {
  const handleClick = () => {

    if (onButtonClick) {
      onButtonClick();
      return;
    }

    if (scrollToId) {

      const el = document.getElementById(scrollToId);

      if (!el) return;

      // El sitio ya define "scroll-behavior: smooth" global (src/index.css),
      // así que alcanza con scrollIntoView nativo. Animar el scroll a mano
      // con requestAnimationFrame + window.scrollTo en cada frame competía
      // con esa suavizado nativo (cada llamada relanzaba su propia animación
      // smooth), lo que se sentía trabado.
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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

        <h1
          className={
            compactTitle
              ? "Hero-Title Hero-Title--compact"
              : "Hero-Title"
          }
        >
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
            onClick={handleClick}
          >
            {buttonText}
          </button>
        )}

      </div>

    </section>
  );
}