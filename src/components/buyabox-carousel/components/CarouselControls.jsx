import "../styles/carousel-controls.css";

export default function CarouselControls({ direction, onClick }) {
  return (
    <button
      className={`carousel-ctrl carousel-ctrl--${direction}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    >
      <span className="carousel-ctrl__icon" aria-hidden="true">
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}
