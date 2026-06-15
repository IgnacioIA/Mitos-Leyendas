import MobileCard from "./MobileCard";

import "../styles/MobileCarousel.css";

export default function MobileCarousel({
  elementos,
}) {
  return (
    <div className="MobileCarousel">

      {elementos.map((elemento) => (
        <MobileCard
          key={elemento.id}
          imagen={elemento.imagen}
        />
      ))}

    </div>
  );
}