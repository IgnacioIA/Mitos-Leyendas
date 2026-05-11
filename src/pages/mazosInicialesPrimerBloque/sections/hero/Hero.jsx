import "../../styles/sections/hero/Hero.css";

import HeroBackground from "./HeroBackground";
import HeroOverlay from "./HeroOverlay";
import HeroEffects from "./HeroEffects";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-background-layer">
        <HeroBackground />
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay-layer">
        <HeroOverlay />
      </div>

      {/* FX */}
      <div className="hero-effects-layer">
        <HeroEffects />
      </div>

      {/* CONTENT */}
      <div className="hero-content-layer">
        <div className="hero-container">
          <HeroContent />
        </div>
      </div>

    </section>
  );
}