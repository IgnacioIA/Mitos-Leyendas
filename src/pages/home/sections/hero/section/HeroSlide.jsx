import HeroContent from "./HeroContent";

import "../styles/HeroSlide.css";

export default function HeroSlide({
  slide
}) {

  return (

    <div
      className="hero-slide-Home"
      style={{
        backgroundImage:
          `url(${slide.image})`
      }}
    >

      <div className="hero-overlay-Home" />

      <HeroContent
        slide={slide}
      />

    </div>

  );
}