// =========================================================
// GallerySlide.jsx
// =========================================================

import "../../styles/sections/galeria/GallerySlide.css";

export default function GallerySlide({ slide, isActive }) {

  return (
    <div
      className={`gallery-slide ${isActive ? "active" : ""}`}
    >
      <img
        src={slide.image}
        alt=""
        className="gallery-image"
      />
    </div>
  );
}