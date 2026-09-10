import "../styles/feature-card.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  containerVariants,
  itemVariants,
} from "../animations/FeatureAnimations";

export default function FeatureCard({ card, linkUrl, accentBase, accentHover }) {

  const navigate = useNavigate();

  const buttonLink = card.link || linkUrl;

  const isExternal =
    buttonLink?.startsWith("http://") ||
    buttonLink?.startsWith("https://");

  const handleClick = () => {
    if (!buttonLink) return;

    if (isExternal) {
      window.open(buttonLink, "_blank", "noopener,noreferrer");
    } else {
      navigate(buttonLink);
    }
  };

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
          onClick={handleClick}
        >
          {card.button}
        </motion.button>

      </div>

    </motion.article>
  );
}
