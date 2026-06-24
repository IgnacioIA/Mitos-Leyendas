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
}) {
      const smoothScrollTo = (targetY, duration = 800) => {

      const startY = window.scrollY;
      const diff = targetY - startY;

      let start;

      const step = (timestamp) => {

        if (!start) start = timestamp;

        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        // easing suave (easeInOutCubic)
        const easing =
          percent < 0.5
            ? 4 * percent * percent * percent
            : 1 - Math.pow(-2 * percent + 2, 3) / 2;

        window.scrollTo(0, startY + diff * easing);

        if (time < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };
  
  const handleClick = () => {

    if (onButtonClick) {
      onButtonClick();
      return;
    }

    if (scrollToId) {

      const el = document.getElementById(scrollToId);

      if (!el) return;

      const top =
        el.getBoundingClientRect().top +
        window.scrollY;

      smoothScrollTo(top, 2000); // 👈 duración (más alto = más lento)
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
            onClick={handleClick}
          >
            {buttonText}
          </button>
        )}

      </div>

    </section>
  );
}