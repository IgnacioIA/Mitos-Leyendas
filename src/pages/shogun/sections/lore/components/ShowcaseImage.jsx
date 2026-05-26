import { motion } from "framer-motion";
import "../styles/showcase-image.css";

import productImage from "../../../../../assets/mitos4.0/lore/Display-Leyendas-Primer-Bloque-2025.png";

function ShowcaseImage() {

  return (
    <div className="showcase-image-wrapper">

     <motion.img
      src={productImage}
      alt="Producto"

      className="showcase-image"

      initial={{
        opacity: 0,
        x: 120,
        scale: 0.9,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}

      transition={{
        duration: 1.3,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.3,
      }}
    />

    </div>
  );

}

export default ShowcaseImage;
