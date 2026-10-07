import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import ElasticCard from "./ElasticCard";

import "../styles/ElasticTrack.css";

export default function ElasticTrack({ elementos }) {

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {

    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return undefined;

    // El recorrido es lo que el track (contenido) excede al wrapper
    // (viewport visible); medir el track contra sí mismo daba siempre 0.
    const calcularAncho = () => {

      setDragWidth(
        Math.max(
          0,
          track.scrollWidth - wrapper.clientWidth
        )
      );

    };

    calcularAncho();

    // ResizeObserver en vez de solo el resize de window: el track puede
    // cambiar de tamaño (fuentes, imágenes, o la propia ficha abriéndose)
    // sin que la ventana cambie, y con "resize" nada más esos casos
    // dejaban dragWidth desactualizado (constriction mal calculada y
    // cartas finales inalcanzables).
    const observer = new ResizeObserver(calcularAncho);
    observer.observe(wrapper);
    observer.observe(track);

    return () => observer.disconnect();

  }, [elementos]);

  return (
    <div
      ref={wrapperRef}
      className="ElasticTrackWrapper"
    >

      <motion.div
        ref={trackRef}
        className="ElasticTrack"

        drag="x"

        dragConstraints={{
          left: -dragWidth,
          right: 0,
        }}

        // Sin inercia: al soltar, la carta queda exactamente donde se
        // dejó. Con dragMomentum (el default) la velocidad del gesto
        // seguía moviendo el track tras soltar y, cerca del final,
        // rebotaba hacia atrás antes de llegar a mostrar la última
        // carta — se sentía como si "siempre volviera a la misma
        // posición". El recorrido queda libre entre ambos extremos;
        // el elástico (dragElastic) solo entra en juego al arrastrar
        // más allá del principio o el final.
        dragMomentum={false}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 24 }}
      >
        {elementos.map((elemento) => (
          <ElasticCard
            key={elemento.id}
            imagen={elemento.imagen}
            alt={elemento.alt}
          />
        ))}
      </motion.div>

    </div>
  );
}
