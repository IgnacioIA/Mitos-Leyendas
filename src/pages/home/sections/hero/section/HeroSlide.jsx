import HeroContent from "./HeroContent";

import "../styles/HeroSlide.css";

export default function HeroSlide({
  slide
}) {

  return (

    <div
      className="hero-slide-Home"
      style={{
        // El background-image real vive en el CSS (var(--hero-bg-*)), no
        // acá: así el media query de Mobile puede pisar la variable sin
        // pelear con la especificidad de un inline style (mismo patrón
        // que useCinematicBackgroundStyles.js).
        "--hero-bg-desktop": `url(${slide.image})`,
        ...(slide.imageMobile && {
          "--hero-bg-mobile": `url(${slide.imageMobile})`,
        }),
      }}
    >

      <div className="hero-overlay-Home" />

      <HeroContent
        slide={slide}
      />

    </div>

  );
}