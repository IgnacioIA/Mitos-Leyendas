import { FaChevronLeft, FaChevronRight }
from "react-icons/fa";

import "../styles/Carousel-controls.css";

export default function CarouselControls({
  direction,
  onClick,
}) {

  return (

    <button
      className={
        `shogun-control-carousel-control
        shogun-control-carousel-control--${direction}`
      }
      onClick={onClick}
      aria-label={
        direction === "left"
          ? "Anterior"
          : "Siguiente"
      }
    >

      {direction === "left"
        ? <FaChevronLeft />
        : <FaChevronRight />
      }

    </button>
  );
}