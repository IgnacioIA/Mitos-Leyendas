import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import ElasticCard from "./ElasticCard";

import "../styles/ElasticTrack.css";

export default function ElasticTrack({ elementos }) {

  const trackRef = useRef(null);

  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {

    const calcularAncho = () => {

      if (!trackRef.current) return;

      const scrollWidth =
        trackRef.current.scrollWidth;

      const offsetWidth =
        trackRef.current.offsetWidth;

      setDragWidth(
        scrollWidth - offsetWidth
      );

    };

    calcularAncho();

    window.addEventListener(
      "resize",
      calcularAncho
    );

    return () =>
      window.removeEventListener(
        "resize",
        calcularAncho
      );

  }, [elementos]);

  return (
    <div className="ElasticTrackWrapper">

      <motion.div
        ref={trackRef}
        className="ElasticTrack"

        drag="x"

        dragConstraints={{
          left: -dragWidth,
          right: 0,
        }}

        dragElastic={0.25}

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