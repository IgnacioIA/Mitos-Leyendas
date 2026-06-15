import CarrouselElasticoTrack from "./CarrouselElasticoTrack";

import "./styles/CarrouselElastico.css";

export default function CarrouselElastico({
  elementos,
  cardWidth = 280,
  dragElastic = 0.35,
  hoverScale = 1.05,
}) {
  return (
    <section className="CarrouselElastico">

      <CarrouselElasticoTrack
        elementos={elementos}
        cardWidth={cardWidth}
        dragElastic={dragElastic}
        hoverScale={hoverScale}
      />

    </section>
  );
}