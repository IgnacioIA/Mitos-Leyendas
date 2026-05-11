import "../../styles/sections/hero/HeroBackground.css";

import heroMobile from "../../../../assets/hero/HERO MOBILE.webp";
import heroDesktop from "../../../../assets/hero/HERO PRUEBA.jpg";

export default function HeroBackground() {
  return (
    <picture className="hero-picture">

      {/* MOBILE */}
      <source
        media="(max-width: 768px)"
        srcSet={heroMobile}
      />

      {/* DESKTOP */}
      <img
        src={heroDesktop}
        alt="Hero Background"
        className="hero-image"
      />

    </picture>
  );
}