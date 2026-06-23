import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import "../styles/Carousel-viewport.css";

import CardGroup from "./CardGroup";

import CarouselControls
from "./CarouselControls";
export default function CarouselViewport({ groups }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // 👇 tracking del slide activo
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    // set inicial
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="carousel-wrapper">

      <CarouselControls direction="left" onClick={scrollPrev} />

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {groups.map((group, index) => (
            <div className="embla__slide" key={index}>
              <CardGroup group={group} />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls direction="right" onClick={scrollNext} />

      {/* 👇 INDICADOR */}
      <div className="carousel-dots">
        {groups.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === selectedIndex ? "active" : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}