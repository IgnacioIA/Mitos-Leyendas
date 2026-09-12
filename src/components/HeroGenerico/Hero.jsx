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
  variant = "",
}) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }

    if (scrollToId) {
      const el = document.getElementById(scrollToId);

      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={`Hero ${variant}`}>

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