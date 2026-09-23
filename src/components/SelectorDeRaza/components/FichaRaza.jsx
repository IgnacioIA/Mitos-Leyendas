import { useEffect, useMemo, useRef } from "react";

import "../styles/FichaRaza.css";

import useFiniteParallax from "../hooks/useFiniteParallax";
import PersonajeRaza from "./PersonajeRaza";

const NOMBRES_CARTA_GENERICA = ["Aliado emblemático", "Carta de apoyo", "Talismán de raza", "Recurso especial"];

function CartaFicha({ carta, nombreRaza }) {
  return (
    <article className="FichaRaza-Carta">
      {carta.imagen ? (
        <img className="FichaRaza-CartaImagen" src={carta.imagen} alt={carta.titulo || `${nombreRaza} · carta`} loading="lazy" />
      ) : (
        <>
          <div className="FichaRaza-CartaArte" />
          <div className="FichaRaza-CartaRuna">{carta.simbolo}</div>
        </>
      )}
      <div className="FichaRaza-CartaCaption">
        <b>{carta.titulo || `${nombreRaza} · Carta`}</b>
        <span>{carta.subtitulo || "Arte conceptual de prueba para reemplazar luego por cartas reales."}</span>
      </div>
    </article>
  );
}

export default function FichaRaza({ raza, onCerrar }) {
  const heroRef = useRef(null);
  const pantallaRef = useRef(null);
  const abierta = Boolean(raza);

  const variables = useMemo(
    () => ({ x: "--dchar-x", y: "--dchar-y", bx: "--dbg-x", by: "--dbg-y" }),
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

  const cartas = raza?.cartas?.length
    ? raza.cartas
    : NOMBRES_CARTA_GENERICA.map((nombre) => ({ titulo: raza ? `${raza.nombre} · ${nombre}` : nombre, simbolo: raza?.simbolo }));

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

            {raza.edicion.imagenSimbolo ? (
              <img
                className="FichaRaza-Simbolo FichaRaza-Simbolo--imagen"
                src={raza.edicion.imagenSimbolo}
                alt=""
                aria-hidden="true"
              />
            ) : (
              <div className="FichaRaza-Simbolo">{raza.simbolo}</div>
            )}

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

            <div className="FichaRaza-Personaje" key={`ficha-personaje-${raza.id}`}>
              <PersonajeRaza
                nombre={raza.nombre}
                simbolo={raza.simbolo}
                colorPrincipal={raza.edicion.color}
                colorSecundario={raza.edicion.colorSecundario}
                variacion={raza.variacion}
                imagen={raza.imagenPersonaje}
              />
            </div>
          </div>

          <div className="FichaRaza-CartasStrip">
            <div className="FichaRaza-CartasHeader">
              <h2>Cartas de la raza</h2>
              <p>Galería · desplazamiento horizontal</p>
            </div>
            <div className="FichaRaza-CartasScroll">
              {cartas.map((carta, index) => (
                <CartaFicha key={`${raza.id}-${index}`} carta={carta} nombreRaza={raza.nombre} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
