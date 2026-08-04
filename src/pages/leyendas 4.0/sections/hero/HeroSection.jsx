import "./styles/hero-section.css";

import dataHeroSection from "./data/dataHeroSection.js";

import HeroBackground from "./sections/HeroBackground";
import HeroOverlay from "./sections/HeroOverlay";
import HeroContent from "./sections/HeroContent";
import HeroScrollButton from "./sections/HeroScrollButton";

function HeroSection() {

  const { background, content, scrollButton } = dataHeroSection;

  return (
    <section className="hero section">

      <HeroBackground
        desktop={background.desktop}
        mobile={background.mobile}
      />

      <HeroOverlay />

      <div className="container hero-layout">

        <div className="hero-bottom">

          <HeroContent
            title={content.title}
            subtitle={content.subtitle}
            description={content.description}
          />

          <HeroScrollButton
            label={scrollButton.label}
            href={scrollButton.href}
            variant={scrollButton.variant}
          />

        </div>

      </div>

    </section>
  );

}

export default HeroSection;
