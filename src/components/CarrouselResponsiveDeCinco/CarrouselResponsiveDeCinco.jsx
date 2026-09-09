import "./CarrouselResponsiveDeCinco.css";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import useResponsiveSlidesToScroll from "../../hooks/useResponsiveSlidesToScroll";

// Mismos anchos que CarrouselResponsiveDeCinco.css: 5 cartas visibles en
// Desktop, 3 en tablet (≤1024px) y 2 en mobile chico (≤480px). Ver
// useResponsiveSlidesToScroll para el porqué.
const BREAKPOINTS = [
  { maxWidth: 480, slides: 2 },
  { maxWidth: 1024, slides: 3 },
];

export default function CarrouselResponsiveDeCinco({
  items = [],
  renderItem,
  showButtons = true,
}) {
  const slidesToScroll = useResponsiveSlidesToScroll(BREAKPOINTS, 5);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll,
  });

  // Embla no relee sus opciones en cada render: si el breakpoint cambia
  // (resize, rotación de pantalla) hay que reinicializarlo explícitamente
  // para que el nuevo slidesToScroll tenga efecto.
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
