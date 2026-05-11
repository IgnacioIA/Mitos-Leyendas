import { motion } from "framer-motion";
import "../../styles/sections/lore/Lore.css";

export default function Lore() {
  return (
    <section className="lore">
      <motion.div
        className="lore-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="lore-title">El Origen del Poder</h2>

        {/* PÁRRAFO 1 */}
        <motion.p
          className="lore-text"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          En los rincones olvidados del tiempo, donde la magia y la realidad se entrelazan,
          nacieron las cartas de poder. Cada una contiene fragmentos de historias antiguas,
          reliquias de civilizaciones perdidas y fuerzas que aún susurran en la oscuridad.
        </motion.p>

        {/* PÁRRAFO 2 */}
        <motion.p
          className="lore-text"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Aquellos que logran dominarlas no solo controlan el juego,
          sino también el destino que estas cartas fueron destinadas a revelar.
        </motion.p>
        
      </motion.div>
    </section>
  );
}