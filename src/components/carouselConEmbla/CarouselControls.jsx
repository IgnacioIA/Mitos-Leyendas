import "./carousel.css";

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="carousel-arrow-icon">
      <path
        d="M15 18l-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="carousel-arrow-icon">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CarouselControls({ direction, onClick }) {
  return (
    <button
      className={`carousel-button carousel-button-${direction}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}