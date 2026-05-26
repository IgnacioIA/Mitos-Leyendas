import "../styles/hero-background.css";

import dragonBg from "../../../../../assets/shogun/hero/FONDO HERO.webp";

function HeroBackground() {

  return (
    <div className="hero-background">

      <img
        alt=""
        src={dragonBg}
        className="hero-background-image"
      />

    </div>
  );

}

export default HeroBackground;