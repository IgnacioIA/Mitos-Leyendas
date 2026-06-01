import HeroContent from "./HeroContent";

import "../styles/HeroSlide.css";

export default function HeroSlide({
  slide
}) {

  return (

    <div
      className="hero-slide"
      style={{
        backgroundImage:
          `url(${slide.image})`
      }}
    >

      <div className="hero-overlay" />

      <HeroContent
        slide={slide}
      />

    </div>

  );
}