// =========================================================
// GalleryBackground.jsx
// =========================================================

import "../../styles/sections/galeria/GalleryBackground.css";

import fondo from "../../../../assets/galeria/GALERIAFONDO.jpg";

export default function GalleryBackground({ slide }) {

  return (
    <>
      {/* Fondo fijo */}
      <div
        className="gallery-background-base"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      />

      {/* Imagen dinámica del slide */}
      <div
        className="gallery-background"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      />
    </>
  );
}