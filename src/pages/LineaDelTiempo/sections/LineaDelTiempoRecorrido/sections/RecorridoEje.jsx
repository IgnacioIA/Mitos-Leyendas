import { motion } from "framer-motion";

import "../styles/RecorridoEje.css";

// Eje temporal: barra con relleno de progreso, marcador de años sticky y
// punto final. Las etapas se renderizan como children dentro del mismo
// contenedor, que es el que mide el progreso.
export default function RecorridoEje({ ejeRef, progreso, etapa, animarCambio, children }) {
  const { desde, hasta } = etapa;

  return (
    <div className="recorridoEje" ref={ejeRef}>

      <div className="recorridoEje-rail" aria-hidden="true">
        <motion.div className="recorridoEje-progreso" style={{ scaleY: progreso }}>
          <span className="recorridoEje-brillo" />
        </motion.div>
      </div>

      {/* Duplica los años de la tarjeta activa: decorativo para lectores. */}
      <div className="recorridoEje-sticky" aria-hidden="true">
        <div
          key={etapa.id}
          className={[
            "recorridoEje-fecha",
            !hasta && "is-single",
            animarCambio && "is-bump",
          ].filter(Boolean).join(" ")}
        >
          <span className="recorridoEje-desde">{desde}</span>
          <i className="recorridoEje-separador" />
          <span className="recorridoEje-hasta">{hasta}</span>
        </div>
      </div>

      {children}

      <span className="recorridoEje-fin" aria-hidden="true" />

    </div>
  );
}
