import "./CarrouselResponsiveDeTres.css";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import useResponsiveSlidesToScroll from "../../hooks/useResponsiveSlidesToScroll";

// Mismos anchos que CarrouselResponsiveDeTres.css: 3 cartas visibles en
// Desktop, 2 en tablet (≤1024px) y 1 en mobile chico (≤480px).
const BREAKPOINTS = [
  { maxWidth: 480, slides: 1 },
  { maxWidth: 1024, slides: 2 },
];

export default function CarrouselResponsiveDeTres({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const slidesToScroll = useResponsiveSlidesToScroll(BREAKPOINTS, 3);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll,
  });

  // Ver CarrouselResponsiveDeCinco.jsx: Embla necesita un reInit explícito
  // para tomar el nuevo slidesToScroll cuando cambia el breakpoint.
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit({ slidesToScroll });
  }, [emblaApi, slidesToScroll]);

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
