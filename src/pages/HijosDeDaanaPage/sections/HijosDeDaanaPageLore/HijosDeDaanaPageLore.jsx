import { motion } from "framer-motion";

import "./styles/HijosDeDaanaPageLore.css";
import dataHijosDeDaanaPageLore from "./data/dataHijosDeDaanaPageLore";

export default function HijosDeDaanaPageLore() {
  return (
    <section
      className="HijosDeDaanaPage-lore"
      style={{
        backgroundImage: `url(${dataHijosDeDaanaPageLore.imagenFondo})`,
      }}
    >
      <motion.div
        className="HijosDeDaanaPage-lore-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h2 className="HijosDeDaanaPage-lore-title">
          {dataHijosDeDaanaPageLore.titulo}
        </h2>

        {dataHijosDeDaanaPageLore.parrafos.map((texto, index) => (
          <motion.p
            key={index}
            className="HijosDeDaanaPage-lore-text"
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
