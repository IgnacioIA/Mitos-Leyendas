import { motion } from "framer-motion";

import "../styles/showcase-image.css";

import productImage from "../../../../../assets/shogun/lore/SHOGUN 5.webp";

function ShowcaseImage() {

  return (

    <div className="lore-showcase-image-wrapper">

      <motion.img
        src={productImage}

        alt="Producto Shogun 5"

        className="lore-showcase-image"

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