import { useEffect, useRef } from "react";

import "./styles/HeroToolkit2025JuicioVision.css";
import dataHeroToolkit2025JuicioVision from "./data/dataHeroToolkit2025JuicioVision";

export default function HeroToolkit2025JuicioVision() {
  const containerRef = useRef(null);

  const posRef = useRef(50);
  const targetRef = useRef(50);
  const mouseRef = useRef({
    x: 50,
    y: 50,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    targetRef.current += (x - targetRef.current) * 0.35;

    mouseRef.current.x +=
      (x - mouseRef.current.x) * 0.15;

    mouseRef.current.y +=
      (y - mouseRef.current.y) * 0.15;
  };

  useEffect(() => {
    let raf;

    const animate = () => {
      const diff =
        targetRef.current - posRef.current;

      const resistance =
        1 - Math.min(Math.abs(diff) / 50, 1);

      posRef.current +=
        diff * (0.08 + resistance * 0.12);

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--pos",
          `${posRef.current}%`
        );

        containerRef.current.style.setProperty(
          "--mx",
          `${mouseRef.current.x}%`
        );

        containerRef.current.style.setProperty(
          "--my",
          `${mouseRef.current.y}%`
        );
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="Toolkit2025JuicioVision-hero">
      <div
        ref={containerRef}
        className="Toolkit2025JuicioVision-split"
        onMouseMove={handleMove}
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