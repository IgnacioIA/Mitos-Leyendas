// =========================================================
// GalleryControls.jsx
// =========================================================

import "../../styles/sections/galeria/GalleryControls.css";

export default function GalleryControls({
  nextSlide,
  prevSlide,
}) {

  return (
    <div className="gallery-controls">

      <button
        className="gallery-btn prev"
        onClick={prevSlide}
      >
        ←
      </button>

      <button
        className="gallery-btn next"
        onClick={nextSlide}
      >
        →
      </button>

    </div>
  );
}