import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

import "./CardCarousel.css";

export default function CardCarousel({ cards }) {
  const [index, setIndex] = useState(0);

  const x = useMotionValue(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;

    if (offset < -40) {
      setIndex((prev) => (prev + 1) % cards.length);
    }

    if (offset > 40) {
      setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }

    x.set(0);
  };

  return (
    <div className="CardCarousel">

      <motion.div
        className="CardCarousel-wrapper"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        style={{ x }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card, i) => {
          const position =
            (i - index + cards.length) % cards.length;

          let className = "CardCarousel-card";

          if (position === 0)
            className += " CardCarousel-card--active";
          else if (position === 1)
            className += " CardCarousel-card--right";
          else if (position === cards.length - 1)
            className += " CardCarousel-card--left";
          else
            className += " CardCarousel-card--hidden";

          return (
            <motion.div
              key={i}
              className={className}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >
              <img
                src={card}
                alt=""
                draggable="false"
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div className="CardCarousel-dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`CardCarousel-dot ${
              i === index
                ? "CardCarousel-dot--active"
                : ""
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}