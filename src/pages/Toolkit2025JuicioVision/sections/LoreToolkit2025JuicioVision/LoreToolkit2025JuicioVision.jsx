import { motion } from "framer-motion";

import "./styles/LoreToolkit2025JuicioVision.css";
import dataLoreToolkit2025JuicioVision from "./data/dataLoreToolkit2025JuicioVision";

export default function LoreToolkit2025JuicioVision() {
  return (
    <section
      className="Toolkit2025JuicioVision-lore"
      style={{
        backgroundImage: `url(${dataLoreToolkit2025JuicioVision.imagenFondo})`,
      }}
    >
      <motion.div
        className="Toolkit2025JuicioVision-lore-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h2 className="Toolkit2025JuicioVision-lore-title">
          {dataLoreToolkit2025JuicioVision.titulo}
        </h2>

        {dataLoreToolkit2025JuicioVision.parrafos.map((texto, index) => (
          <motion.p
            key={index}
            className="Toolkit2025JuicioVision-lore-text"
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.4 + index * 0.6,
            }}
          >
            {texto}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}