import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import "./DosCartas.css";

// Componente genérico y reutilizable (no depende de ninguna página en
// particular, no recibe textos ni contenido específico): muestra 2 cartas
// siempre visibles, enfrentadas en diagonal, y permite alternar cuál queda
// al frente arrastrando horizontal (mouse o touch, vía el gesto "drag" de
// Framer Motion — mismo mecanismo que ya usa CardCarousel de CartaDeTres:
// useMotionValue + dragConstraints fijos + dragElastic para el rebote en
// los límites, sin necesitar lógica extra para "estado inválido": como acá
// solo hay 2 estados posibles (0 o 1), cualquier swipe siempre cae en un
// estado válido y el drag vuelve solo a x:0 al soltar).
//
// cartas: array de exactamente 2 elementos, cada uno un string (src) o un
// objeto { src, alt }.
export default function DosCartas({ cartas }) {
  const [frente, setFrente] = useState(0);

  const x = useMotionValue(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;

    if (offset < -40) setFrente(1);
    else if (offset > 40) setFrente(0);

    x.set(0);
  };

  return (
    <div className="DosCartas">

      <motion.div
        className="DosCartas-drag"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        style={{ x, touchAction: "pan-y" }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >

        {cartas.slice(0, 2).map((carta, index) => {
          const { src, alt } =
            typeof carta === "string" ? { src: carta, alt: "" } : carta;

          const esFrente = index === frente;

          return (
            <div
              key={index}
              className={[
                "DosCartas-carta",
                index === 0 ? "DosCartas-carta--a" : "DosCartas-carta--b",
                esFrente
                  ? "DosCartas-carta--frente"
                  : "DosCartas-carta--atras",
              ].join(" ")}
            >
              <img
                src={src}
                alt={alt}
                draggable="false"
              />
            </div>
          );
        })}

      </motion.div>

    </div>
  );
}
