import "./styles/HeroToolkit2025JuicioVision.css";
import dataHeroToolkit2025JuicioVision from "./data/dataHeroToolkit2025JuicioVision";

import useSplitHeroPointer from "../../../../hooks/useSplitHeroPointer";

export default function HeroToolkit2025JuicioVision() {
  const {
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useSplitHeroPointer();

  return (
    <section className="Toolkit2025JuicioVision-hero">
      <div
        ref={containerRef}
        className="Toolkit2025JuicioVision-split"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={dataHeroToolkit2025JuicioVision.imagenes.izquierda}
          alt={dataHeroToolkit2025JuicioVision.tituloIzquierdo}
          className="Toolkit2025JuicioVision-bg Toolkit2025JuicioVision-left-img"
        />

        <img
          src={dataHeroToolkit2025JuicioVision.imagenes.derecha}
          alt={dataHeroToolkit2025JuicioVision.tituloDerecho}
          className="Toolkit2025JuicioVision-bg Toolkit2025JuicioVision-right-img"
        />

        <div className="Toolkit2025JuicioVision-title-wrap">
          <h1 className="Toolkit2025JuicioVision-title Toolkit2025JuicioVision-left">
            {dataHeroToolkit2025JuicioVision.tituloIzquierdo}
          </h1>

          <h1 className="Toolkit2025JuicioVision-title Toolkit2025JuicioVision-right">
            {dataHeroToolkit2025JuicioVision.tituloDerecho}
          </h1>
        </div>

        <div className="Toolkit2025JuicioVision-divider" />

        <div className="Toolkit2025JuicioVision-center">
   
        </div>
      </div>
    </section>
  );
}