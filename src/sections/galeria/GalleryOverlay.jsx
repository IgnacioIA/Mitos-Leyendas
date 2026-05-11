// =========================================================
// GalleryOverlay.jsx
// =========================================================

import "../../styles/sections/galeria/GalleryOverlay.css";

export default function GalleryOverlay({ slide }) {

  return (
    <div className="gallery-overlay">

      <h2 className="gallery-title">
        {slide.title}
      </h2>

      <p className="gallery-description">
        {slide.description}
      </p>

    </div>
  );
}