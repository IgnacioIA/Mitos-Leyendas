import { useMemo, useRef } from "react";

import "../styles/PanelPreviewRaza.css";

import useFiniteParallax from "../hooks/useFiniteParallax";
import PersonajeRaza from "./PersonajeRaza";

export default function PanelPreviewRaza({ razaId, raza, variacion }) {
  const panelRef = useRef(null);

  const variables = useMemo(
    () => ({ x: "--char-x", y: "--char-y", bx: "--bg-x", by: "--bg-y" }),
    []
  );

  useFiniteParallax(panelRef, variables, 7, 5);

  return (
    <section className="PanelPreviewRaza" ref={panelRef}>
      <div className="PanelPreviewRaza-ParallaxLayer" aria-hidden="true" />

      {raza.edicion.imagenSimbolo ? (
        <img
          className="PanelPreviewRaza-Simbolo PanelPreviewRaza-Simbolo--imagen"
          src={raza.edicion.imagenSimbolo}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <div className="PanelPreviewRaza-Simbolo">{raza.simbolo}</div>
      )}

      <div className="PanelPreviewRaza-Personaje" key={`personaje-${razaId}`}>
        <PersonajeRaza
          nombre={raza.nombre}
          simbolo={raza.simbolo}
          colorPrincipal={raza.edicion.color}
          colorSecundario={raza.edicion.colorSecundario}
          variacion={variacion}
          imagen={raza.imagenPersonaje}
        />
      </div>

      <div className="PanelPreviewRaza-Namebox PanelPreviewRaza-TextEnter" key={`texto-${razaId}`}>
        <span className="PanelPreviewRaza-Edicion">{raza.edicion.nombre}</span>
        <div className="PanelPreviewRaza-Namebar">
          <div className="PanelPreviewRaza-Sigilo">{raza.simbolo}</div>
          <div className="PanelPreviewRaza-Nombre">{raza.nombre}</div>
        </div>
      </div>

      <div className="PanelPreviewRaza-Hint">Click para ver la ficha completa ↗</div>
    </section>
  );
}
