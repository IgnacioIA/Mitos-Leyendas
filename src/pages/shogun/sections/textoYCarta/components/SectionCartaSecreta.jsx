import { motion } from "framer-motion";

import cartaSecretaImg from
"../../../../../assets/mitos4.0/cartaYTexto/Sobre-Leyendas-Primer-Bloque-2025_04.png";

import FrameFX from
"../../../../../components/ui/cartaMovible/FrameFX.jsx";

import "../style/SecretCardSection.css";

export default function SecretCardSection() {

  return (

    <section className="secret-card-section">

      {/* =========================================
          CARD VISUAL
      ========================================= */}

      <div className="secret-card-section__visual">

        <FrameFX>

          <div className="secret-card-section__card">

            <img
              src={cartaSecretaImg}
              alt="Carta secreta"
            />

          </div>

        </FrameFX>

      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="secret-card-section__content">

        <motion.h2
          className="secret-card-section__title"

          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)"
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}

          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}

          viewport={{ once: true }}
        >

          <span className="secret-card-section__title-highlight">
            Cartas Secretas
          </span>

          {" "}del producto

        </motion.h2>

        <motion.p
          className="secret-card-section__text"

          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)"
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}

          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}

          viewport={{ once: true }}
        >

          Como sorpresa adicional, dentro de las Toolkit PB 2026
          podrán aparecer cartas del producto en versión Secreta,
          las que serán exclusivas de este lanzamiento.

        </motion.p>

        <motion.p
          className="secret-card-section__text"

          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)"
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}

          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}

          viewport={{ once: true }}
        >

          Aproximadamente en el 50% de la producción total
          de estas nuevas Toolkit PB 2026, podrá aparecer
          una carta Secreta adicional al contenido del producto.

        </motion.p>

      </div>

    </section>
  );
}