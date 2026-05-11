// =========================================================
// GalleryIndicators.jsx
// =========================================================

import "../../styles/sections/galeria/GalleryIndicators.css";

export default function GalleryIndicators({
  slides,
  currentIndex,
  setCurrentIndex,
}) {

  return (
    <div className="gallery-indicators">

      {slides.map((_, index) => (

        <button
          key={index}
          className={`gallery-dot ${
            index === currentIndex ? "active" : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        />

      ))}

    </div>
  );
}