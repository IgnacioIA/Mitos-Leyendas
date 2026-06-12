import { Link } from "react-router-dom";

import "../styles/HeroContent.css";

export default function HeroContent({
  slide
}) {

  const getButtonClassName = (index) =>
    `
      hero-button-Home
      ${
        index === 0
          ? "hero-button-primary-Home"
          : "hero-button-secondary-Home"
      }
    `;

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
          slide.buttons?.map((button, index) => {

            const isExternal =
              button.url.startsWith("http");

            const className =
              getButtonClassName(index);

            if (isExternal) {
              return (
                <a
                  key={button.text}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {button.text}
                </a>
              );
            }

            return (
              <Link
                key={button.text}
                to={button.url}
                className={className}
              >
                {button.text}
              </Link>
            );

          })
        }

      </div>

    </div>

  );

}