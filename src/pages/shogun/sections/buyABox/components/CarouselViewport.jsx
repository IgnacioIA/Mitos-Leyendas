import useEmblaCarousel
from "embla-carousel-react";

import "../styles/Carousel-viewport.css";

import CardGroup from "./CardGroup";

import CarouselControls
from "./CarouselControls";

export default function CarouselViewport({
  groups,
}) {

  const [emblaRef, emblaApi] =
    useEmblaCarousel({
      loop: true,
    });

  function scrollPrev() {

    if (emblaApi)
      emblaApi.scrollPrev();
  }

  function scrollNext() {

    if (emblaApi)
      emblaApi.scrollNext();
  }

  return (

    <div className="shogun-buyabox-carousel-wrapper">

      <CarouselControls
        direction="left"
        onClick={scrollPrev}
      />

      <div
        className="shogun-buyabox-carousel"
        ref={emblaRef}
      >

        <div className="shogun-buyabox-carousel-track">

          {groups.map((group, index) => (

            <div
              className="shogun-buyabox-carousel-slide"
              key={index}
            >

              <div className="shogun-buyabox-carousel-slide-inner">

                <CardGroup group={group} />

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