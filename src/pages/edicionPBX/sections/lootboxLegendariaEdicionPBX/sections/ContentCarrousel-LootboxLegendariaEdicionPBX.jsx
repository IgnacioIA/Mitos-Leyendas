import "../styles/ContentCarrousel-LootboxLegendariaEdicionPBX.css";

import CarrouselResponsive from "../../../../../components/CarrouselResponsive/CarrouselResponsive";

import { cartas } from "../data/LootboxLegendariaEdicionPBXData";

export default function ContentCarrousel() {
  return (
    <div className="LootboxLegendariaEdicionPBX-Carrousel">

      <CarrouselResponsive
        items={cartas}
        renderItem={(carta) => (
          <img
            className="LootboxLegendariaEdicionPBX-Carta"
            src={carta.imagen}
            alt={carta.nombre}
          />
        )}
      />

    </div>
  );
}