import { motion } from "framer-motion";

import "./styles/LoreDesafioAmatista.css";
import dataLoreDesafioAmatista from "./data/dataLoreDesafioAmatista";

export default function LoreDesafioAmatista() {
  return (
    <section
      className="DesafioAmatista-lore"
      style={{
        backgroundImage: `url(${dataLoreDesafioAmatista.imagenFondo})`,
      }}
    >
      <motion.div
        className="DesafioAmatista-lore-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h2 className="DesafioAmatista-lore-title">
          {dataLoreDesafioAmatista.titulo}
        </h2>

        {dataLoreDesafioAmatista.parrafos.map((texto, index) => (
          <motion.p
            key={index}
            className="DesafioAmatista-lore-text"
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