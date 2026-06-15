import { motion } from "framer-motion";

import "./styles/CarrouselElasticoCard.css";

export default function CarrouselElasticoCard({
  imagen,
  width,
  hoverScale,
}) {
  return (
    <motion.div
      className="CarrouselElasticoCard"
      whileHover={{
        scale: hoverScale,
        y: -10,
      }}
      style={{
        width: `${width}px`,
      }}
    >
      <img
        src={imagen}
        alt=""
      />
    </motion.div>
  );
}