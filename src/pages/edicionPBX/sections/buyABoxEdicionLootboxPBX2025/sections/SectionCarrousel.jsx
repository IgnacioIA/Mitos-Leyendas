import "../styles/SectionCarrousel.css";

import CarrouselElastico from "../../../../../components/carrouselElastico/CarrouselElastico";

import buyABoxEdicionLootBoxPBX2025Data from "../data/buyABoxEdicionLootBoxPBX2025Data";

export default function SectionCarrousel() {
  return (
    <div className="BuyABoxEdicionLootBoxPBX2025-SectionCarrousel">

      <CarrouselElastico
        elementos={buyABoxEdicionLootBoxPBX2025Data.cartas}
      />

    </div>
  );
}