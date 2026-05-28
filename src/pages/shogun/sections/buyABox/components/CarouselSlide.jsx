import "../styles/Carousel-slide.css";

export default function CarouselSlide({
  slide,
  position,
}) {

  return (

    <div
      className={`
        shogun-buyabox-slide
        shogun-buyabox-slide-${position}
      `}
    >

      <div className="shogun-buyabox-slide-image-wrapper">

        <img
          src={slide.image}
          alt={slide.title}
          className="shogun-buyabox-slide-image"
        />

      </div>

      <h3 className="shogun-buyabox-slide-title">
        {slide.title}
      </h3>

    </div>
  );
}