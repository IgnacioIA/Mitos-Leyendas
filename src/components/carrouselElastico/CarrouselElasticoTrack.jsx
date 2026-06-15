import { motion } from "framer-motion";

import CarrouselElasticoCard from "./CarrouselElasticoCard";

import "./styles/CarrouselElasticoTrack.css";

export default function CarrouselElasticoTrack({
  elementos,
  cardWidth,
  dragElastic,
  hoverScale,
}) {
  return (
    <motion.div
      className="CarrouselElasticoTrack"
      drag="x"
      dragElastic={dragElastic}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
    >
      {elementos.map((elemento) => (
        <CarrouselElasticoCard
          key={elemento.id}
          imagen={elemento.imagen}
          width={cardWidth}
          hoverScale={hoverScale}
        />
      ))}
    </motion.div>
  );
}