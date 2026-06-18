import "./CarrouselResponsive.css";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CarrouselResponsive({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 4,
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="CarrouselResponsive">

      {showButtons && (
        <button
          className="
            CarrouselResponsive-Button
            CarrouselResponsive-ButtonPrev
          "
          onClick={scrollPrev}
          aria-label="Anterior"
        >
          ❮
        </button>
      )}

      <div
        className="CarrouselResponsive-Viewport"
        ref={emblaRef}
      >
        <div className="CarrouselResponsive-Container">

          {items.map((item, index) => (
            <div
              key={index}
              className="CarrouselResponsive-Slide"
            >
              <div className="CarrouselResponsive-Card">
                {renderItem(item)}
              </div>
            </div>
          ))}

        </div>
      </div>

      {showButtons && (
        <button
          className="
            CarrouselResponsive-Button
            CarrouselResponsive-ButtonNext
          "
          onClick={scrollNext}
          aria-label="Siguiente"
        >
          ❯
        </button>
      )}

    </section>
  );
}