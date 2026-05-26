import "../styles/showcase-button.css";

import { motion } from "framer-motion";

function ShowcaseButton() {

  return (

    <div className="lore-showcase-button-wrapper">

      <motion.button
        className="lore-showcase-button"

        initial={{
          opacity: 0,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
          delay: 0.4,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        CONSEGUIR SHOGUN 5
      </motion.button>

    </div>

  );

}

export default ShowcaseButton;