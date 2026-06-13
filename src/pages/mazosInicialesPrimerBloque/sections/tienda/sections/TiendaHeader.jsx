import { motion } from "framer-motion";

import "../styles/TiendaHeader.css";

const fadeBlurUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function TiendaHeader() {
  return (
    <header className="tienda-header">

      <h2 className="tienda-header-title">
        ¿QUÉ SON LOS{" "}

        <span className="tienda-header-title-highlight">
          MAZOS INICIALES
        </span>

        ?
      </h2>

      <motion.p
        className="tienda-header-description"
        variants={fadeBlurUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        Los Mazos Iniciales de Mitos y Leyendas son productos
        preconstruidos diseñados para que cualquier jugador
        pueda comenzar a jugar desde el primer momento.
        Cada mazo incluye una selección estratégica de cartas
        listas para usar, centradas en una raza específica
        y con una identidad de juego propia.
      </motion.p>

      <motion.p
        className="tienda-header-description"
        variants={fadeBlurUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          delay: 1.5,
        }}
      >
        Ya sea que prefieras la fuerza imparable de los Titanes,
        el poder ancestral de los Dragones, las tácticas oscuras
        de Sombra o la sabiduría y control de los Sacerdotes,
        los Mazos Iniciales son la puerta de entrada perfecta
        al mundo de Mitos y Leyendas.
      </motion.p>

    </header>
  );
}