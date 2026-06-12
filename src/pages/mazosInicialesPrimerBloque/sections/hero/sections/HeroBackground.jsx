import "../styles/HeroBackground.css";

export default function HeroBackground({ images }) {
  return (
    <picture className="hero-picture-MazosInicialesPB">

      <source
        media="(max-width: 768px)"
        srcSet={images.mobile}
      />

      <img
        src={images.desktop}
        alt="Hero Background"
        className="hero-image-MazosInicialesPB"
      />

    </picture>
  );
}