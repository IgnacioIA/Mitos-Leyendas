import "./styles/Hero.css";

import heroData from "./datos/HeroDataMazosInicialesPB";

import HeroBackground from "./sections/HeroBackground";
import HeroContent from "./sections/HeroContent";

export default function Hero() {
  return (
    <section className="hero-MazosInicialesPB">

      <HeroBackground images={heroData.images} />

      <div className="hero-container-MazosInicialesPB">
        <HeroContent
          title={heroData.title}
          subtitle={heroData.subtitle}
          description={heroData.description}
          button={heroData.button}
        />
      </div>

    </section>
  );
}