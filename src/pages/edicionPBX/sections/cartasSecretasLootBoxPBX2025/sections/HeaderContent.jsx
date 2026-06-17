import { motion } from "framer-motion";

import "../styles/HeaderContent.css";

export default function HeaderContent() {
  return (
    <motion.div
      className="CartasSecretasLootBoxPBX2025-HeaderContent"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <p className="CartasSecretasLootBoxPBX2025-Subtitle">
        TODAS LAS CARTAS{" "}
        <span>QUE VAS A ENCONTRAR:</span>
      </p>

      <h2 className="CartasSecretasLootBoxPBX2025-Title">
        CARTAS{" "}
        <span>SECRETAS DORADAS</span>
      </h2>

      <p className="CartasSecretasLootBoxPBX2025-Description">
        Una de las novedades de las Lootbox de Primer Bloque son la nueva selección de cartas Secretas
        Doradas exclusivas en su interior, continuando estas el diseño de carta Premium Dorada
        con aplicaciones de barnices especiales que hemos visto en productos anteriores.
      </p>

      <p className="CartasSecretasLootBoxPBX2025-Description">
        En cada Lootbox encontrarás al menos 1 carta Secreta Dorada exclusiva, la que será al azar
        entre 10 modelos diferentes.
      </p>
    </motion.div>
  );
}