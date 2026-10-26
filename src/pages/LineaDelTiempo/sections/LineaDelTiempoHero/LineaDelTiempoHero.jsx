import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

import "./styles/LineaDelTiempoHero.css";

import { dataLineaDelTiempoHero } from "./data/dataLineaDelTiempoHero";

// El modelo ocupa 100svh sin header. Acá el header sticky del sitio ocupa
// su propio alto arriba del Hero, así que se descuenta (--hero-header-h)
// para que el contenido inferior y el CTA queden dentro de la primera
// pantalla. Se mide solo con la página arriba de todo: el header se
// compacta al scrollear y seguirlo en vivo haría saltar el layout.
function useAlturaHeaderInicial(ref) {
  useEffect(() => {
    const root = ref.current;
    const header = document.querySelector(".site-header");
    if (!root || !header) return undefined;

    const publicar = () => {
      if (window.scrollY > 1) return;
      root.style.setProperty("--hero-header-h", `${header.getBoundingClientRect().height}px`);
    };

    publicar();
    window.addEventListener("resize", publicar);

    return () => window.removeEventListener("resize", publicar);
  }, [ref]);
}

export default function LineaDelTiempoHero() {
  const { image, mini, titulo, tituloDestacado, cta, destino } = dataLineaDelTiempoHero;

  const rootRef = useRef(null);
  const reducirMovimiento = useReducedMotion();

  useAlturaHeaderInicial(rootRef);

  const irAlRecorrido = (event) => {
    const objetivo = document.getElementById(destino);
    if (!objetivo) return;

    event.preventDefault();
    objetivo.scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth" });
  };

  return (
    <section className="lineaDelTiempoHero" ref={rootRef}>

      <div
        className="lineaDelTiempoHero-imagen"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div className="lineaDelTiempoHero-contenido">

        <div className="lineaDelTiempoHero-mini">{mini}</div>

        <h1 className="lineaDelTiempoHero-titulo">
          <span>{titulo}</span>
          <br />
          <strong>{tituloDestacado}</strong>
        </h1>

        <a
          href={`#${destino}`}
          className="lineaDelTiempoHero-cta"
          onClick={irAlRecorrido}
        >
          {cta}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v16m-7-7 7 7 7-7" />
          </svg>
        </a>

      </div>

    </section>
  );
}
