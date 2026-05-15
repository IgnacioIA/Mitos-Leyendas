import { motion } from "framer-motion";

import "../styles/showcase-content.css";

export default function ShowcaseContent({
  title,
  highlight,
  children,
}) {

  const remainingTitle =
    title.replace(highlight, "");

  return (
    <div className="showcase-content">

      <motion.h2
        className="showcase-title"
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >

        <span className="gold-text">
          {highlight}
        </span>

        {remainingTitle}

      </motion.h2>

      <motion.div
        className="showcase-text-group"
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>

    </div>
  );
}