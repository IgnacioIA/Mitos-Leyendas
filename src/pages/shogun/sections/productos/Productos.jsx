import "./styles/Productos.css";

import { motion } from "framer-motion";

import FeatureCard from "./components/FeatureCard";

import { cards } from "./data/featuresData";

export default function Productos() {

  return (
    <section className="features-section">

      <div className="features-overlay" />

      <div className="features-content">

        <motion.h2
          className="features-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Linea de Productos
        </motion.h2>

        <div className="features-grid">

          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              card={card}
            />
          ))}

        </div>

      </div>

    </section>
  );
}