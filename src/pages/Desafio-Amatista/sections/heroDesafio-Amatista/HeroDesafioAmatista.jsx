import { useEffect, useRef } from "react";

import "./styles/HeroDesafioAmatista.css";
import dataDesAmatis from "./data/dataDesAmatis";

export default function HeroDesafioAmatista() {
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
    <section className="DesafioAmatista-hero">
      <div
        ref={containerRef}
        className="DesafioAmatista-split"
        onMouseMove={handleMove}
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