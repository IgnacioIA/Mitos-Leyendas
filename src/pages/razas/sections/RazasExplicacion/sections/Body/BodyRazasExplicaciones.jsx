import "../../styles/BodyRazasExplicaciones.css";

import { motion } from "framer-motion";

export default function BodyRazasExplicaciones({
  paragraphs,
}) {
  return (
    <div className="BodyRazasExplicaciones">
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          className="BodyRazasExplicaciones-Paragraph"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}