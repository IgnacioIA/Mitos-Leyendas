import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./styles/BanListCarrousel.css";

import BanListCarrouselTitle from "./components/BanListCarrouselTitle";
import BanListCarrouselImage from "./components/BanListCarrouselImage";
import BanListCarrouselControls from "./components/BanListCarrouselControls";
import BanListCarrouselIndicators from "./components/BanListCarrouselIndicators";

export default function BanListCarrousel({ images, title }) {

  const [index, setIndex] = useState(0);
  const isSingle = images.length <= 1;

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const handleKeyDown = (event) => {
    if (isSingle) return;
    if (event.key === "ArrowLeft") goPrev();
    if (event.key === "ArrowRight") goNext();
  };

  return (
    <section
      className="BanListCarrousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
    >

      <BanListCarrouselTitle title={title} />

      <div className="BanListCarrousel__stage">

        {!isSingle && (
          <BanListCarrouselControls direction="prev" onClick={goPrev} />
        )}

        <div className="BanListCarrousel__frame">
          <AnimatePresence mode="wait">
            <BanListCarrouselImage
              key={index}
              image={images[index]}
              isSingle={isSingle}
              onSwipeNext={goNext}
              onSwipePrev={goPrev}
            />
          </AnimatePresence>
        </div>

        {!isSingle && (
          <BanListCarrouselControls direction="next" onClick={goNext} />
        )}

      </div>

      {!isSingle && (
        <BanListCarrouselIndicators
          count={images.length}
          activeIndex={index}
          onSelect={setIndex}
        />
      )}

    </section>
  );
}
