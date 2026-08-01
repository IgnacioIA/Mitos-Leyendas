import "./CarrouselResponsiveDeCinco.css";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CarrouselResponsiveDeCinco({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 5,
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
    <section className="CarrouselResponsiveDeCinco">

      {showButtons && (
        <button
          className="
            CarrouselResponsiveDeCinco-Button
            CarrouselResponsiveDeCinco-ButtonPrev
          "
          onClick={scrollPrev}
          aria-label="Anterior"
        >
          ❮
        </button>
      )}

      <div
        className="CarrouselResponsiveDeCinco-Viewport"
        ref={emblaRef}
      >
        <div className="CarrouselResponsiveDeCinco-Container">

          {items.map((item, index) => (
            <div
              key={index}
              className="CarrouselResponsiveDeCinco-Slide"
            >
              <div className="CarrouselResponsiveDeCinco-Card">
                {renderItem(item)}
              </div>
            </div>
          ))}

        </div>
      </div>

      {showButtons && (
        <button
          className="
            CarrouselResponsiveDeCinco-Button
            CarrouselResponsiveDeCinco-ButtonNext
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
