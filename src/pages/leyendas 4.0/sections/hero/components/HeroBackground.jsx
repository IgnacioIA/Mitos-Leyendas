import "../styles/hero-background.css";

import dragonBg from "../../../../../assets/mitos4.0/hero/FONDO HERO.webp";

function HeroBackground() {

  return (
    <div className="hero-background">

      <img
        src={dragonBg}
        alt="Dragon background"
        className="hero-background-image"
      />

    </div>
  );

}

export default HeroBackground;