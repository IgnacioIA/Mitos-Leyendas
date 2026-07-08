import { motion } from "framer-motion";

import "./styles/lore-showcase.css";

/* =========================================================
   VARIANTES FRAMER MOTION
========================================================= */

const CONTENT_VARIANTS = {
  hidden:  { opacity: 0, y: 80, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)"  },
};

const IMAGE_VARIANTS = {
  hidden:  { opacity: 0, x: 120, scale: 0.9 },
  visible: { opacity: 1, x: 0,   scale: 1   },
};

const BUTTON_VARIANTS = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0  },
};

const VIEWPORT = { once: true, amount: 0.3 };

/* =========================================================
   COMPONENTE
========================================================= */

export default function LoreShowcase({
  theme = "light",       // "light" (Leyendas) | "dark" (Shogun)
  background,            // imagen importada en JS → backgroundImage inline
  title,
  titleHighlight,
  paragraphs = [],
  image,
  imageAlt = "",
  button,                // { label: string, url: string }
}) {
  return (
    <section
      className={`lore-showcase lore-showcase--${theme}`}
      style={
        background
          ? { backgroundImage: `url(${background})` }
          : undefined
      }
    >
      <div className="container">

        <div className="lore-showcase__layout">

          {/* INFO — título + párrafos */}
          <motion.div
            className="lore-showcase__info"
            id="next-section"
            variants={CONTENT_VARIANTS}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={VIEWPORT}
          >
            <h2 className="lore-showcase__title">
              {title}
              {titleHighlight && (
                <span className="lore-showcase__title-highlight">
                  {titleHighlight}
                </span>
              )}
            </h2>

            {paragraphs.map((text, index) => (
              <p key={index} className="lore-showcase__description">
                {text}
              </p>
            ))}
          </motion.div>

          {/* MEDIA — imagen del producto */}
          <motion.div
            className="lore-showcase__media"
            variants={IMAGE_VARIANTS}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            viewport={VIEWPORT}
          >
            <img
              src={image}
              alt={imageAlt}
              className="lore-showcase__image"
            />
          </motion.div>

        </div>

        {/* CTA — botón opcional */}
        {button && (
          <motion.div
            className="lore-showcase__cta"
            variants={BUTTON_VARIANTS}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            viewport={VIEWPORT}
          >
            <button
              className="lore-showcase__button"
              onClick={() =>
                window.open(button.url, "_blank", "noopener,noreferrer")
              }
            >
              {button.label}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
