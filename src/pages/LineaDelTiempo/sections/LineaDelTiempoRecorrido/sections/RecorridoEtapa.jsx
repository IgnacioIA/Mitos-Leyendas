import { motion } from "framer-motion";

import "../styles/RecorridoEtapa.css";

import RecorridoTarjeta from "./RecorridoTarjeta";

// Posiciones de las partículas del fantasma ([left %, top %, tamaño px]),
// copiadas del modelo. Se alternan por etapa. En v10 son estáticas.
const PARTICULAS = [
  [[12, 20, 7], [30, 12, 9], [54, 24, 5], [68, 14, 10], [81, 25, 6], [20, 56, 8], [38, 48, 4], [61, 54, 11], [77, 48, 5], [50, 70, 8], [28, 76, 6], [72, 76, 8]],
  [[16, 18, 7], [34, 10, 5], [58, 20, 10], [76, 16, 6], [84, 34, 9], [22, 42, 5], [44, 52, 10], [64, 44, 6], [78, 62, 4], [54, 68, 8], [30, 74, 7], [70, 80, 10]],
  [[12, 28, 6], [32, 18, 10], [48, 12, 4], [68, 22, 8], [84, 18, 6], [22, 56, 8], [38, 46, 5], [60, 52, 9], [78, 50, 6], [48, 72, 12], [26, 82, 5], [74, 78, 7]],
];

// v10: solo aparición por opacidad, sin desplazamientos (curva CSS "ease").
const EASE = [0.25, 0.1, 0.25, 1];

const tarjetaVariants = {
  oculta: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const fantasmaVariants = {
  oculta: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export default function RecorridoEtapa({ etapaRef, etapa, index, galeriaTitulo, reducirMovimiento }) {
  const capitulo = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={etapaRef}
      id={etapa.id}
      className="recorridoEtapa"
      data-lado={index % 2 === 0 ? "izquierda" : "derecha"}
      style={{ "--era": etapa.color }}
      initial={reducirMovimiento ? false : "oculta"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >

      <motion.div className="recorridoEtapa-tarjeta" variants={tarjetaVariants}>
        <RecorridoTarjeta etapa={etapa} galeriaTitulo={galeriaTitulo} />
      </motion.div>

      <motion.div
        className="recorridoEtapa-fantasma"
        variants={fantasmaVariants}
        aria-hidden="true"
      >
        <div className="recorridoEtapa-particulas">
          {PARTICULAS[index % PARTICULAS.length].map(([left, top, size]) => (
            <span
              key={`${left}-${top}`}
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            />
          ))}
        </div>

        <div className="recorridoEtapa-fantasmaInterior">
          <div className="recorridoEtapa-capitulo">CAPÍTULO {capitulo}</div>
          <p className="recorridoEtapa-nombre">{etapa.formato}</p>
          <div className="recorridoEtapa-periodo">{etapa.periodo}</div>
          <div className="recorridoEtapa-acento" />
        </div>
      </motion.div>

    </motion.article>
  );
}
