import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import "./styles/buyabox-carousel.css";

import CardGroup from "./components/CardGroup";
import CarouselControls from "./components/CarouselControls";

export default function BuyABoxCarousel({ groups = [] }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="bac__wrapper">

      <CarouselControls direction="left" onClick={scrollPrev} />

      <div className="bac__embla" ref={emblaRef}>
        <div className="bac__track">
          {groups.map((group, index) => (
            <div
              className="bac__slide"
              key={group.id ?? index}
            >
              <CardGroup group={group} />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls direction="right" onClick={scrollNext} />

      <div className="bac__dots" role="tablist" aria-label="Slides">
        {groups.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Ir al slide ${index + 1}`}
            className={`bac__dot${index === selectedIndex ? " bac__dot--active" : ""}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

    </div>
  );
}
