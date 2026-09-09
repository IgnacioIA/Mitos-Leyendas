import "./styles/HeroDesafioAmatista.css";
import dataDesAmatis from "./data/dataDesAmatis";

import useSplitHeroPointer from "../../../../hooks/useSplitHeroPointer";

export default function HeroDesafioAmatista() {
  const {
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useSplitHeroPointer();

  return (
    <section className="DesafioAmatista-hero">
      <div
        ref={containerRef}
        className="DesafioAmatista-split"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={dataDesAmatis.imagenes.izquierda}
          alt={dataDesAmatis.tituloIzquierdo}
          className="DesafioAmatista-bg DesafioAmatista-left-img"
        />

        <img
          src={dataDesAmatis.imagenes.derecha}
          alt={dataDesAmatis.tituloDerecho}
          className="DesafioAmatista-bg DesafioAmatista-right-img"
        />

        <div className="DesafioAmatista-title-wrap">
          <h1 className="DesafioAmatista-title DesafioAmatista-left">
            {dataDesAmatis.tituloIzquierdo}
          </h1>

          <h1 className="DesafioAmatista-title DesafioAmatista-right">
            {dataDesAmatis.tituloDerecho}
          </h1>
        </div>

        <div className="DesafioAmatista-divider" />

        <div className="DesafioAmatista-center">
   
        </div>
      </div>
    </section>
  );
}