import "../styles/hero-background.css";

function HeroBackground({ desktop, mobile }) {

  return (
    <div className="hero-background">

      <picture>

        <source
          media="(max-width: 768px)"
          srcSet={mobile}
        />

        <img
          src={desktop}
          className="hero-background-image"
        />

      </picture>

    </div>
  );

}

export default HeroBackground;
