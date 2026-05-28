import "../styles/Carousel-controls.css";

export default function CarouselControls({
  direction,
  onClick,
}) {

  return (

    <button
      className="shogun-control-carousel-control"
      onClick={onClick}
    >

      {direction === "left" ? "←" : "→"}

    </button>
  );
}