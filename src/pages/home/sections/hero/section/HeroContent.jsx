import "../styles/HeroContent.css";

export default function HeroContent({
  slide
}) {

  return (

    <div className="hero-content">

      <p className="hero-subtitle">
        {slide.subtitle}
      </p>

      <h1 className="hero-title">
        {slide.title}
      </h1>

      <p className="hero-description">
        {slide.description}
      </p>

      <div className="hero-buttons">

        {
          slide.buttons?.map((button) => (

            <a
              key={button.text}
              href={button.url}
              className="hero-button"
            >
              {button.text}
            </a>

          ))
        }

      </div>

    </div>

  );
}