import "./styles/product-lineup.css";

import { motion } from "framer-motion";

import FeatureCard from "./components/FeatureCard";

export default function ProductLineup({
  title,
  cards,
  linkUrl,
  backgroundImage,
  accentBase = "white",
  accentHover = "#d4af37",
}) {

  return (
    <section
      className="features-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="features-overlay" />

      <div className="features-content">

        <motion.h2
          className="features-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="features-grid">

          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              card={card}
              linkUrl={linkUrl}
              accentBase={accentBase}
              accentHover={accentHover}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
