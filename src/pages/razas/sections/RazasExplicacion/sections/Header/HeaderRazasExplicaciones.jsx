import "../../styles/HeaderRazasExplicaciones.css";

import { motion } from "framer-motion";

export default function HeaderRazasExplicaciones({
  titulo,
  destacado,
}) {
  return (
    <motion.header
      className="HeaderRazasExplicaciones"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="HeaderRazasExplicaciones-Title">
        {titulo} <span>{destacado}</span>?
      </h2>
    </motion.header>
  );
}