import { motion } from "framer-motion";

import "../styles/showcase-content.css";

function ShowcaseContent() {

  return (

    <motion.div
      className="lore-showcase-content"

      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.3,
      }}
    >

      <h2 className="lore-showcase-title">
        ACERCA DEL <span>PRODUCTO</span>
      </h2>

      <p className="lore-showcase-description">
        Shogun 5: Onna-musha nos sumerge en un nuevo
        imaginario fantástico, donde personajes femeninos
        toman el rol principal de cartas de primer bloque,
        reimaginando algunos como hermosas y valientes
        doncellas.
      </p>

      <p className="lore-showcase-description">
        En este contexto, tendremos dos productos
        especiales, el Volumen 1 y el Volumen 2, donde
        podrás encontrar a personajes que ya conocemos
        de Primer Bloque como Lady Calvaur, Sir Agravain,
        Melisende, Nefertiti, Gea, Mago Merlin, Ramsés IX
        o Ceilican Seelie entre otros, los que fueron
        reinterpretados completamente en un estilo
        de arte que hace homenaje a la cultura japonesa
        con referencias al anime y el manga.
      </p>

    </motion.div>

  );

}

export default ShowcaseContent;