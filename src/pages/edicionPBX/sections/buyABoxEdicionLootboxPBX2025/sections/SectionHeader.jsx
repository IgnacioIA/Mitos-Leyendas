import { motion } from "framer-motion";

import "../styles/SectionHeader.css";

import buyABoxEdicionLootBoxPBX2025Data from "../data/buyABoxEdicionLootBoxPBX2025Data";

export default function SectionHeader() {
  return (
    <div className="BuyABoxEdicionLootBoxPBX2025-SectionHeader">

      <h2 className="BuyABoxEdicionLootBoxPBX2025-Title">
        CARTAS <span>BUY A BOX</span>
      </h2>

      <motion.p
        className="BuyABoxEdicionLootBoxPBX2025-Description"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}

        transition={{
          duration: 0.8,
        }}
      >
        {buyABoxEdicionLootBoxPBX2025Data.descripcion}
      </motion.p>

    </div>
  );
}