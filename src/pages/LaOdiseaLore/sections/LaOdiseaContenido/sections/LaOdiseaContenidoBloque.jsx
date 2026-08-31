import { motion } from "framer-motion";

import "../styles/LaOdiseaContenidoBloque.css";

import FrameFX from "../../../../../components/ui/cartaMovible/FrameFX";
import DosCartas from "../../../../../components/DosCartas/DosCartas";
import CartaDeTres from "../../../../../components/CartaDeTres/CartaDeTres";

// El bloque decide QUÉ componente visual usar según la cantidad de
// imágenes recibidas (no hay 3 layouts de bloque distintos, solo cambia
// el "lado visual"): 1 -> CartaMovible (FrameFX), 2 -> DosCartas,
// 3 (o más) -> CartaDeTres.
function renderVisual(imagenes) {
  if (imagenes.length === 2) {
    return <DosCartas cartas={imagenes} />;
  }

  if (imagenes.length >= 3) {
    return <CartaDeTres cartas={imagenes} />;
  }

  return (
    <FrameFX>
      <img
        className="laOdiseaContenidoBloque-imagenUnica"
        src={imagenes[0]}
        alt=""
      />
    </FrameFX>
  );
}

export default function LaOdiseaContenidoBloque({
  titulo,
  subtitulo,
  descripcion,
  imagenes,
  invertido,
}) {
  return (
    <div
      className={`laOdiseaContenidoBloque${
        invertido ? " laOdiseaContenidoBloque--invertido" : ""
      }`}
    >

      <motion.div
        className="laOdiseaContenidoBloque-visual"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {renderVisual(imagenes)}
      </motion.div>

      <motion.div
        className="laOdiseaContenidoBloque-texto"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
      >

        {titulo && (
          <h3 className="laOdiseaContenidoBloque-titulo">
            {titulo}
          </h3>
        )}

        {subtitulo && (
          <p className="laOdiseaContenidoBloque-subtitulo">
            {subtitulo}
          </p>
        )}

        {descripcion && (
          <p className="laOdiseaContenidoBloque-descripcion">
            {descripcion}
          </p>
        )}

      </motion.div>

    </div>
  );
}
