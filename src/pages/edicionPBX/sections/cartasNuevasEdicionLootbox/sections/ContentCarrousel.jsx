import "../styles/ContentCarrousel.css";

import CarrouselResponsive from "../../../../../components/CarrouselResponsive/CarrouselResponsive";

import { cartas } from "../data/CartasNuevasEdicionLootboxData";

export default function ContentCarrousel() {
  return (
    <div className="CartasNuevasEdicionLootbox-Carrousel">

      <CarrouselResponsive
        items={cartas}
        renderItem={(carta) => (
          <img
            className="CartasNuevasEdicionLootbox-Carta"
            src={carta.imagen}
            alt={carta.nombre}
          />
        )}
      />

    </div>
  );
}