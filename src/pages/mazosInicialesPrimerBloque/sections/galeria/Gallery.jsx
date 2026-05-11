// =========================================================
// Gallery.jsx
// =========================================================

import { useState } from "react";

import GalleryBackground from "./GalleryBackground";
import GalleryViewport from "./GalleryViewport";
import GalleryTrack from "./GalleryTrack";
import GallerySlide from "./GallerySlide";
import GalleryControls from "./GalleryControls";
import GalleryIndicators from "./GalleryIndicators";
import GalleryOverlay from "./GalleryOverlay";

import "../../styles/sections/galeria/Gallery.css";

import Dragon from "../../../../assets/galeria/GALERIA DRAGON.png";
import Titan from "../../../../assets/galeria/GALERIA TITAN.png";
import Sombra from "../../../../assets/galeria/GALERIA SOMBRA.png";
import Sacerdote from "../../../../assets/galeria/GALERIA SACERDOTE.png";



export default function Gallery() {

  const slides = [
    {
      id: 1,
      image: Dragon,
    },
    {
      id: 2,
      image: Titan,
    },
    {
      id: 3,
      image: Sombra,
    },
    {
      id: 4,
      image: Sacerdote,
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallerySection" className="gallery">

      <GalleryBackground slide={slides[currentIndex]} />

      <GalleryViewport>

        <GalleryTrack currentIndex={currentIndex}>

          {slides.map((slide, index) => (

            <GallerySlide
              key={slide.id}
              slide={slide}
              isActive={index === currentIndex}
            />

          ))}

        </GalleryTrack>

      </GalleryViewport>

      <GalleryOverlay slide={slides[currentIndex]} />

      <GalleryControls
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />

      <GalleryIndicators
        slides={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

    </section>
  );
}