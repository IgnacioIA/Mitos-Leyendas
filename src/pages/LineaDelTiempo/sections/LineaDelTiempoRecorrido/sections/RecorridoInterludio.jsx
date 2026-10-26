import { motion } from "framer-motion";

import "../styles/RecorridoInterludio.css";

const ladoVariants = {
  oculto: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] } },
};

// Separador histórico entre dos etapas, sin tarjeta de contenido.
export default function RecorridoInterludio({ interludio, reducirMovimiento }) {
  const { ariaLabel, desde, hasta, titulo, tituloSecundario, eyebrow, descripcion } = interludio;

  return (
    <motion.aside
      className="recorridoInterludio"
      aria-label={ariaLabel}
      initial={reducirMovimiento ? false : "oculto"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >

      <motion.div
        className="recorridoInterludio-lado recorridoInterludio-izquierda"
        variants={ladoVariants}
      >
        <div className="recorridoInterludio-anios">
          {desde} <span className="recorridoInterludio-guion">—</span> {hasta}
        </div>
        <h3 className="recorridoInterludio-titulo">
          {titulo}
          <br />
          <span>{tituloSecundario}</span>
        </h3>
        <div className="recorridoInterludio-regla" aria-hidden="true" />
      </motion.div>

      <div className="recorridoInterludio-eje" aria-hidden="true" />

      <motion.div
        className="recorridoInterludio-lado recorridoInterludio-derecha"
        variants={ladoVariants}
      >
        <span className="recorridoInterludio-eyebrow">{eyebrow}</span>
        <p className="recorridoInterludio-texto">
          {descripcion.antes}
          <strong>{descripcion.destacado}</strong>
          {descripcion.despues}
        </p>
        <div className="recorridoInterludio-regla" aria-hidden="true" />
      </motion.div>

    </motion.aside>
  );
}
