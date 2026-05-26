import "../styles/Carousel-slide.css";

export default function CarouselSlide({
  slide,
  position,
}) {

  return (

    <div className={`carousel-slide ${position}`}>

      <div className="carousel-slide-image-wrapper">

        <img
          src={slide.image}
          alt={slide.title}
          className="carousel-slide-image"
        />

      </div>

      <h3 className="carousel-slide-title">
        {slide.title}
      </h3>

    </div>
  );
}