import { useMemo, useRef } from "react";

import "../styles/PanelPreviewRaza.css";

import useFiniteParallax from "../hooks/useFiniteParallax";
import EscenarioRaza from "./EscenarioRaza";

export default function PanelPreviewRaza({ razaId, raza, variacion }) {
  const panelRef = useRef(null);

  const variables = useMemo(
    () => ({ x: "--esc-x", y: "--esc-y", bx: "--esc-bx", by: "--esc-by" }),
    []
  );

  useFiniteParallax(panelRef, variables, 7, 5);

  return (
    <section className="PanelPreviewRaza" ref={panelRef}>
      <EscenarioRaza razaId={razaId} raza={raza} variacion={variacion} variante="panel" />

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
