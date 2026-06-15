import { motion } from "framer-motion";

import ElasticCard from "./ElasticCard";

import "../styles/ElasticTrack.css";

export default function ElasticTrack({
  elementos,
}) {
  return (
    <div className="ElasticTrackWrapper">

      <motion.div
        className="ElasticTrack"

        drag="x"

        dragConstraints={{
          left: 0,
          right: 0,
        }}

        dragElastic={0.35}

        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
      >
        {elementos.map((elemento) => (
          <ElasticCard
            key={elemento.id}
            imagen={elemento.imagen}
          />
        ))}
      </motion.div>

    </div>
  );
}