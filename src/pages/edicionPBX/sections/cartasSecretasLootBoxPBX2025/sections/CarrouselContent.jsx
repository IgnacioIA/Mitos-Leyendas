import "../styles/CarrouselContent.css";

import Carousel from "../../../../../components/carouselConEmbla/Carousel";

import CartasSecretasLootBoxPBX2025Data
  from "../data/CartasSecretasLootBoxPBX2025Data";

export default function CarrouselContent() {
  return (
    <div className="CartasSecretasLootBoxPBX2025-CarrouselContent">

      <Carousel
        items={CartasSecretasLootBoxPBX2025Data}
        renderItem={(item) => (
          <img
            src={item.imagen}
            alt={`carta-${item.id}`}
            className="carrousel-card"
          />
        )}
      />

    </div>
  );
}