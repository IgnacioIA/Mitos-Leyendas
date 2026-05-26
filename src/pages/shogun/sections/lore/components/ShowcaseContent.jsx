import { motion } from "framer-motion";

import "../styles/showcase-content.css";

function ShowcaseContent() {

  return (

    <motion.div
      className="showcase-content"

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

      <h2 className="showcase-title">
        UNA NUEVA ERA LLEGA
        <span>PARA CAMBIAR EL JUEGO</span>
      </h2>

      <p className="showcase-description">
        Leyendas Primer Bloque 4.0 llega a dar inicio a una nueva temporada de juego del formato, 
        trayendo un contenido “fresco” al formato que abrirá muchas estrategias para todo 2026 y 2027.
      </p>
      <p className="showcase-description">
        Dentro de las novedades que encontraremos en Leyendas PB 4.0 tendremos una configuración especial de sobre, 
        una nueva selección de cartas, nuevos tratamientos estéticos, nuevas cartas Rework y nuevas cartas para el formato.
      </p>
      

    </motion.div>

  );

}

export default ShowcaseContent;