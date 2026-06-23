import "../styles/Carousel-controls.css";

export default function CarouselControls({
  direction,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`carousel-control carousel-control-${direction}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    >
      <span className="carousel-control-icon">
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}