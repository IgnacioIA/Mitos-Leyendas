import { motion } from "framer-motion";

import "./styles/DominiosDeRaPaginaLoreExplicacion.css";
import dataDominiosDeRaPaginaLoreExplicacion from "./data/dataDominiosDeRaPaginaLoreExplicacion";

export default function DominiosDeRaPaginaLoreExplicacion() {
  return (
    <section
      id="DominiosDeRaPaginaLoreExplicacion-section"
      className="DominiosDeRaPaginaLoreExplicacion"
      style={{
        backgroundImage: `url(${dataDominiosDeRaPaginaLoreExplicacion.imagenFondo})`,
      }}
    >
      <motion.div
        className="DominiosDeRaPaginaLoreExplicacion-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <h2 className="DominiosDeRaPaginaLoreExplicacion-title">
          {dataDominiosDeRaPaginaLoreExplicacion.titulo}
        </h2>

        {dataDominiosDeRaPaginaLoreExplicacion.parrafos.map((texto, index) => (
          <motion.p
            key={index}
            className="DominiosDeRaPaginaLoreExplicacion-text"
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
