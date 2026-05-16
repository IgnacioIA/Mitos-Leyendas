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

    <div className="carousel-wrapper">

      <CarouselControls
        direction="left"
        onClick={scrollPrev}
      />

      <div
        className="embla"
        ref={emblaRef}
      >

        <div className="embla__container">

          {groups.map((group, index) => (

            <div
              className="embla__slide"
              key={index}
            >

              <div className="embla__slide__inner">

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