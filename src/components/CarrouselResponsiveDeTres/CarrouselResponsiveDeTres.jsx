import "./CarrouselResponsiveDeTres.css";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function CarrouselResponsiveDeTres({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 3,
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
    <section className="CarrouselResponsiveDeTres">

      {showButtons && (
        <button
          className="
            CarrouselResponsiveDeTres-Button
            CarrouselResponsiveDeTres-ButtonPrev
          "
          onClick={scrollPrev}
          aria-label="Anterior"
        >
          ❮
        </button>
      )}

      <div
        className="CarrouselResponsiveDeTres-Viewport"
        ref={emblaRef}
      >
        <div className="CarrouselResponsiveDeTres-Container">

          {items.map((item, index) => (
            <div
              key={index}
              className="CarrouselResponsiveDeTres-Slide"
            >
              <div className="CarrouselResponsiveDeTres-Card">
                {renderItem(item)}
              </div>
            </div>
          ))}

        </div>
      </div>

      {showButtons && (
        <button
          className="
            CarrouselResponsiveDeTres-Button
            CarrouselResponsiveDeTres-ButtonNext
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
