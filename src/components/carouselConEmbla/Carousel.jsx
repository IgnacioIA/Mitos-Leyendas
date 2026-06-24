import "./carousel.css";
import useCarousel from "./hooks/useCarousel";
import CarouselControls from "./CarouselControls";

export default function Carousel({
  items,
  renderItem,
}) {
  const {
    emblaRef,
    scrollPrev,
    scrollNext,
  } = useCarousel({ loop: true });

  return (
    <div className="carousel-wrapper">

      <CarouselControls
        direction="left"
        onClick={scrollPrev}
      />

      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-track">

          {items.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <div className="carousel-slide-inner">
                {renderItem(item, index)}
              </div>
            </div>
          ))}

        </div>
      </div>

      <CarouselControls
        direction="right"
        onClick={scrollNext}
      />
    </div>
  );
}