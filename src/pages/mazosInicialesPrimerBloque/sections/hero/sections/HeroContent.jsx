import "../styles/HeroContent.css";

export default function HeroContent({
  title,
  subtitle,
  description,
  button,
}) {
  return (
    <div className="hero-content-MazosInicialesPB">

      <h1 className="hero-title-MazosInicialesPB">
        {title}
      </h1>

      <span className="hero-subtitle-MazosInicialesPB">
        {subtitle}
      </span>

      <p className="hero-description-MazosInicialesPB">
        {description}
      </p>

      <div className="hero-actions-MazosInicialesPB">
        <a
          href={button.url}
          className="hero-button-MazosInicialesPB"
        >
          {button.text}
        </a>
      </div>

    </div>
  );
}