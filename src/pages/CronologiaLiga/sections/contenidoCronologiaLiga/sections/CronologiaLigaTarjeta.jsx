import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/CronologiaLigaTarjeta.css";

// Cuánto queda visible el aviso de "no tiene grupo" antes de desaparecer solo.
const DURACION_AVISO_MS = 2000;

// A diferencia de TiendasAmigasTarjeta, acá no hay título/descripción/
// localidad/botones: la tarjeta es únicamente la imagen de la fecha. Al
// clickear, si la tienda tiene grupo de WhatsApp (whatsapp viene del data)
// se abre en una pestaña nueva; si no, se muestra un aviso temporal.
export default function CronologiaLigaTarjeta({ imagen, whatsapp }) {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const ocultarAvisoTimeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(ocultarAvisoTimeoutRef.current);
  }, []);

  const handleClick = () => {
    if (whatsapp) {
      window.open(whatsapp, "_blank", "noopener,noreferrer");
      return;
    }

    setMostrarAviso(true);

    clearTimeout(ocultarAvisoTimeoutRef.current);
    ocultarAvisoTimeoutRef.current = setTimeout(() => {
      setMostrarAviso(false);
    }, DURACION_AVISO_MS);
  };

  const handleKeyDown = (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="cronologiaLigaTarjeta"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img
        className="cronologiaLigaTarjeta-imagen"
        src={imagen}
        alt=""
        loading="lazy"
      />

      <AnimatePresence>
        {mostrarAviso && (
          <motion.div
            className="cronologiaLigaTarjeta-aviso"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            Esta tienda no tiene grupo de WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
