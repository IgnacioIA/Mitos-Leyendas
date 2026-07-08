import { motion } from "framer-motion";
import carta from "../../../../../assets/mitos4.0/cartaYTexto/Sobre-Leyendas-Primer-Bloque-2025_04.png";
import FrameFX from "../../../../../components/ui/cartaMovible/FrameFX.jsx";
import "../style/SectionCartaSecretaCss.css";

export default function MagicSectionAlt() {
  return (
    <section className="magic-section-alt">

      {/* LADO IZQUIERDO (IMAGEN) */}
      <div className="magic-right-alt">
        <FrameFX>
          <div className="magic-card-alt">
            <img src={carta} alt="Carta" />
          </div>
        </FrameFX>
      </div>

      {/* LADO DERECHO (TEXTO) */}
      <div className="magic-left-alt">
        
        <motion.h2
          className="magic-title-alt"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
        <span className="gold-text">Cartas Secretas</span> Del producto
        </motion.h2>

        <motion.p
          className="magic-text-alt"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Como sorpresa adicional, dentro de las Toolkit PB 2026 podrán aparecer cartas
          del producto en versión Secreta, las que serán exclusivas de este lanzamiento.
        </motion.p>

        <motion.p
          className="magic-text-alt"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Aproximadamente en el 50% de la producción total de estas nuevas
          Toolkit PB 2026, podrá aparecer una carta Secreta adicional al contenido
          del producto, las que vendrán con sus Artes Alternativos en versión Dorada
          y Negro con acabado Premium
        </motion.p>

      </div>

    </section>
  );
}