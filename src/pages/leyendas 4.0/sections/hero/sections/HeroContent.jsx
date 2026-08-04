import "../styles/hero-content.css";

function HeroContent({ title, subtitle, description }) {

  return (
    <div className="hero-content">

      <h1 className="hero-title">
        {title}
      </h1>

      <span className="hero-subtitle">
        {subtitle}
      </span>

      <p className="hero-description">
        {description}
      </p>

    </div>
  );

}

export default HeroContent;
