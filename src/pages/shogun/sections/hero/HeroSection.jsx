import "./styles/hero-section.css";

import HeroBackground from "./components/HeroBackground";
import HeroOverlay from "./components/HeroOverlay";
import HeroContent from "./components/HeroContent";
import HeroScrollButton from "./components/HeroScrollButton";

function HeroSection() {

  return (
    <section className="hero section">

      <HeroBackground />

      <HeroOverlay />

      <div className="container hero-layout">

        <div className="hero-bottom">

          <HeroContent />

          <HeroScrollButton />

        </div>

      </div>

    </section>
  );

}

export default HeroSection;