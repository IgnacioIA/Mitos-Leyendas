import "../styles/HeroContent.css";

export default function HeroContent({
  slide
}) {

  return (

    <div className="hero-content-Home">

      <h1 className="hero-title-Home">
        {slide.title}
      </h1>

      <p className="hero-subtitle-Home">
        {slide.subtitle}
      </p>

      <p className="hero-description-Home">
        {slide.description}
      </p>

      <div className="hero-buttons-Home">

        {
          slide.buttons?.map((button, index) => (

            <a
              key={button.text}
              href={button.url}
              className={`
                hero-button-Home
                ${
                  index === 0
                    ? "hero-button-primary-Home"
                    : "hero-button-secondary-Home"
                }
              `}
            >
              {button.text}
            </a>

          ))
        }

      </div>

    </div>

  );
}