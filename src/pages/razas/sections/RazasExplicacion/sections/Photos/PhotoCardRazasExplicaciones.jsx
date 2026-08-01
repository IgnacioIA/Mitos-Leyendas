import "../../styles/PhotoCardRazasExplicaciones.css";

import { motion } from "framer-motion";

export default function PhotoCardRazasExplicaciones({
  image,
  titulo,
  destacado,
}) {
  return (
    <motion.div
      className="PhotoCardRazasExplicaciones"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="PhotoCardRazasExplicaciones-ImageWrapper">
        <motion.img
          src={image}
          alt={destacado}
          className="PhotoCardRazasExplicaciones-Image"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </div>

      <h3 className="PhotoCardRazasExplicaciones-Title">
        {titulo} <span>{destacado}</span>
      </h3>
    </motion.div>
  );
}