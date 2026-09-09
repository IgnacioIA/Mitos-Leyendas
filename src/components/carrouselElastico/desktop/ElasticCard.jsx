import { motion } from "framer-motion";

import "../styles/ElasticCard.css";

export default function ElasticCard({
  imagen,
}) {
  return (
    <motion.div
      className="ElasticCard"

      whileHover={{
        y: -10,
        scale: 1.03,
      }}
    >
      <img
        src={imagen}
        alt=""
        loading="lazy"
      />
    </motion.div>
  );
}