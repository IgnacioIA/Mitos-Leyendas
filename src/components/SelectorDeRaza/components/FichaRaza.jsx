import { useEffect, useMemo, useRef } from "react";

import "../styles/FichaRaza.css";

import useFiniteParallax from "../hooks/useFiniteParallax";
import CarrouselElastico from "../../carrouselElastico/CarrouselElastico";
import EscenarioRaza from "./EscenarioRaza";

export default function FichaRaza({ raza, fondo, onCerrar }) {
  const heroRef = useRef(null);
  const pantallaRef = useRef(null);
  const abierta = Boolean(raza);

  const variables = useMemo(
    () => ({ x: "--esc-x", y: "--esc-y", bx: "--esc-bx", by: "--esc-by" }),
    []
  );

  useFiniteParallax(heroRef, variables, 6, 4);

  useEffect(() => {
    if (!abierta) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onCerrar();
    };

    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (pantallaRef.current) pantallaRef.current.scrollTop = 0;

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [abierta, onCerrar]);

  // Mismo shape que espera CarrouselElastico ({ id, imagen, alt }).
  const cartas = (raza?.cartas ?? [])
    .filter((carta) => carta.imagen)
    .map((carta, index) => ({
      id: `${raza.id}-${index}`,
      imagen: carta.imagen,
      alt: carta.titulo || `${raza.nombre} · carta ${index + 1}`,
    }));

  return (
    <section
      ref={pantallaRef}
      className={`FichaRaza${abierta ? " is-open" : ""}`}
      aria-hidden={abierta ? "false" : "true"}
    >
      {raza && (
        <>
          <div className="FichaRaza-Hero" ref={heroRef}>
            <div className="FichaRaza-Top">
              <button type="button" className="FichaRaza-Volver" onClick={onCerrar} aria-label="Volver al selector">‹</button>
              <div className="FichaRaza-Titulo">Selección de raza</div>
            </div>

            <div className="FichaRaza-Copy">
              <div className="FichaRaza-Kicker">
                <span className="FichaRaza-KickerSig">{raza.simbolo}</span>
                <span>{raza.kicker}</span>
              </div>
              <div className="FichaRaza-Nombre">{raza.nombre}</div>
              <div className="FichaRaza-DescBox">
                <div>{raza.descripcion}</div>
                <div className="FichaRaza-DescMeta">
                  <span className="FichaRaza-Pill">{raza.edicion.nombre}</span>
                  <span className="FichaRaza-Pill">{raza.estilo}</span>
                </div>
              </div>
            </div>

            <EscenarioRaza razaId={raza.id} raza={raza} variacion={raza.variacion} variante="ficha" fondo={fondo} />
          </div>

          {cartas.length > 0 && (
            <div className="FichaRaza-CartasStrip">
              <div className="FichaRaza-CartasHeader">
                <h2>Cartas de la raza</h2>
                <p>Galería · arrastrá para explorar</p>
              </div>
              <CarrouselElastico elementos={cartas} />
            </div>
          )}
        </>
      )}
    </section>
  );
}
