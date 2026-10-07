import { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./styles/SelectorDeRaza.css";

import RosterDeRazas from "./components/RosterDeRazas";
import PanelPreviewRaza from "./components/PanelPreviewRaza";
import FichaRaza from "./components/FichaRaza";
import useAlturaHeader from "./hooks/useAlturaHeader";

// Cuánto debe permanecer el puntero sobre un personaje del roster (desktop)
// antes de que el panel cambie a mostrarlo. Sin esta demora, recorrer el
// roster con el mouse dispara un cambio por cada personaje que se cruza en
// el camino y nunca llega a apreciarse ninguno.
const DEMORA_PREVIEW_MS = 220;

export default function SelectorDeRaza({
  kicker,
  titulo,
  textoAyuda,
  razaInicial,
  razas,
  ordenRazas,
  fondo,
  onCambioPreview,
  onAbrirRaza,
}) {
  const primeraRazaValida = ordenRazas.find((razaId) => razas[razaId]);
  const razaInicialValida = razas[razaInicial] ? razaInicial : primeraRazaValida;

  const [razaEnPreview, setRazaEnPreview] = useState(razaInicialValida);
  const [razaAbiertaId, setRazaAbiertaId] = useState(null);
  const rootRef = useRef(null);
  const previewTimeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Si el componente se desmonta con un cambio de preview demorado pendiente,
  // cancelarlo (si no, dispararía setState sobre un árbol ya desmontado).
  useEffect(() => () => {
    if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);
  }, []);

  useAlturaHeader(rootRef);

  const previewRaza = razas[razaEnPreview];
  const previewVariacion = ordenRazas.indexOf(razaEnPreview);

  const razaAbierta = razaAbiertaId
    ? { ...razas[razaAbiertaId], id: razaAbiertaId, variacion: ordenRazas.indexOf(razaAbiertaId) }
    : null;

  const razaActiva = razaAbierta || previewRaza;

  const confirmarPreview = (razaId) => {
    setRazaEnPreview(razaId);
    onCambioPreview?.(razaId, razas[razaId]);
  };

  const handlePreview = (razaId) => {
    if (!razas[razaId] || razaId === razaEnPreview) return;

    if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);

    // Mobile no tiene hover (el panel ni siquiera se muestra ahí) y su
    // comportamiento actual no debe tocarse: se mantiene instantáneo.
    if (isMobile) {
      confirmarPreview(razaId);
      return;
    }

    previewTimeoutRef.current = setTimeout(() => {
      previewTimeoutRef.current = null;
      confirmarPreview(razaId);
    }, DEMORA_PREVIEW_MS);
  };

  const handleAbrir = (razaId) => {
    if (!razas[razaId]) return;

    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
      previewTimeoutRef.current = null;
    }

    setRazaAbiertaId(razaId);
    onAbrirRaza?.(razaId, razas[razaId]);
  };

  const coloresRaza = { "--accent": razaActiva.edicion.color, "--accent2": razaActiva.edicion.colorSecundario };

  return (
    <div className="SelectorDeRaza" style={coloresRaza} ref={rootRef}>
      <div className="SelectorDeRaza-Screen">
        <div className="SelectorDeRaza-Wrap">
          <section className="SelectorDeRaza-Side">
            <div className="SelectorDeRaza-Kicker">{kicker}</div>
            <h1>
              {titulo.split("\n").map((linea, index) => (
                <Fragment key={linea}>
                  {index > 0 && <br />}
                  {linea}
                </Fragment>
              ))}
            </h1>
            <div className="SelectorDeRaza-Ayuda">{textoAyuda}</div>

            <RosterDeRazas
              razas={razas}
              ordenRazas={ordenRazas}
              razaEnPreview={razaEnPreview}
              onPreview={handlePreview}
              onAbrir={handleAbrir}
            />
          </section>

          {!isMobile && (
            <PanelPreviewRaza razaId={razaEnPreview} raza={previewRaza} variacion={previewVariacion} />
          )}
        </div>
      </div>

      {/* La ficha es un overlay fixed: se porta al body para que su z-index
          compita con el Header y no quede atrapado en el stacking context
          del fondo parallax que envuelve al selector. */}
      {createPortal(
        <div className="SelectorDeRaza SelectorDeRaza--overlay" style={coloresRaza}>
          <FichaRaza raza={razaAbierta} fondo={fondo} onCerrar={() => setRazaAbiertaId(null)} />
        </div>,
        document.body
      )}
    </div>
  );
}
