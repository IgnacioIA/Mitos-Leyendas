import "./CarrouselResponsive.css";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import useResponsiveSlidesToScroll from "../../hooks/useResponsiveSlidesToScroll";

// Mismo ancho que CarrouselResponsive.css: 4 cartas visibles en Desktop,
// 1 sola a partir de ≤768px (único breakpoint que define este componente).
const BREAKPOINTS = [{ maxWidth: 768, slides: 1 }];

export default function CarrouselResponsive({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const slidesToScroll = useResponsiveSlidesToScroll(BREAKPOINTS, 4);

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