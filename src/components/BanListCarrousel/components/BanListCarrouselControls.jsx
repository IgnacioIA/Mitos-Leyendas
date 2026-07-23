import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "../styles/BanListCarrouselControls.css";

export default function BanListCarrouselControls({ direction, onClick }) {
  return (
    <button
      type="button"
      className={`BanListCarrouselControls BanListCarrouselControls--${direction}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Imagen anterior" : "Imagen siguiente"}
    >
      {direction === "prev" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
