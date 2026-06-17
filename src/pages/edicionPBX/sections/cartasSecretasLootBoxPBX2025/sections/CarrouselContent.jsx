import "../styles/CarrouselContent.css";

import CarrouselElastico from "../../../../../components/carrouselElastico/CarrouselElastico";

import CartasSecretasLootBoxPBX2025Data from "../data/CartasSecretasLootBoxPBX2025Data";

export default function CarrouselContent() {
  return (
    <div className="CartasSecretasLootBoxPBX2025-CarrouselContent">

      <CarrouselElastico
        elementos={CartasSecretasLootBoxPBX2025Data}
      />

    </div>
  );
}