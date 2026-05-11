// =========================================================
// RibbonButton.jsx
// =========================================================

import { motion } from "framer-motion";

import "../../styles/sections/final/ribbon-button.css";

function RibbonButton() {
  return (
    <motion.a
      href="#tiendaSection"
      className="ribbon-button"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      QUIERO MI MAZO INICIAL
    </motion.a>
  );
}

export default RibbonButton;