import "../styles/feature-card.css";

import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
} from "../animations/FeatureAnimations";

export default function FeatureCard({ card, linkUrl, accentBase, accentHover }) {

  return (
    <motion.article
      className="feature-card"
      style={{
        "--feature-accent-base": accentBase,
        "--feature-accent-hover": accentHover,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="feature-content">

        {/* IMAGE */}

        <div className="feature-image-wrapper">

          <motion.img
            src={card.image}
            alt={`${card.title} producto`}
            className="feature-image"
            variants={itemVariants}
          />

        </div>

        {/* TITLE */}

        <motion.h3
          className="feature-title"
          variants={itemVariants}
        >
          {card.title}
        </motion.h3>

        {/* LIST */}

        <motion.ul className="feature-list">

          {card.items.map((item, index) => (

            <motion.li
              key={index}
              className="feature-item"
              variants={itemVariants}
            >
              {item}
            </motion.li>

          ))}

        </motion.ul>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="feature-footer">

        <motion.button
          className="feature-button"
          variants={itemVariants}
          onClick={() => window.open(linkUrl, "_blank")}
        >
          {card.button}
        </motion.button>

      </div>

    </motion.article>
  );
}
