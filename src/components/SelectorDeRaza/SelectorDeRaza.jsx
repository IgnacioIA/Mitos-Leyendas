import { Fragment, useEffect, useState } from "react";

import "./styles/SelectorDeRaza.css";

import RosterDeRazas from "./components/RosterDeRazas";
import PanelPreviewRaza from "./components/PanelPreviewRaza";
import FichaRaza from "./components/FichaRaza";

export default function SelectorDeRaza({
  kicker,
  titulo,
  textoAyuda,
  razaInicial,
  razas,
  ordenRazas,
  onCambioPreview,
  onAbrirRaza,
}) {
  const primeraRazaValida = ordenRazas.find((razaId) => razas[razaId]);
  const razaInicialValida = razas[razaInicial] ? razaInicial : primeraRazaValida;

  const [razaEnPreview, setRazaEnPreview] = useState(razaInicialValida);
  const [razaAbiertaId, setRazaAbiertaId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const previewRaza = razas[razaEnPreview];
  const previewVariacion = ordenRazas.indexOf(razaEnPreview);

  const razaAbierta = razaAbiertaId
    ? { ...razas[razaAbiertaId], id: razaAbiertaId, variacion: ordenRazas.indexOf(razaAbiertaId) }
    : null;

  const razaActiva = razaAbierta || previewRaza;

  const handlePreview = (razaId) => {
    if (!razas[razaId] || razaId === razaEnPreview) return;
    setRazaEnPreview(razaId);
    onCambioPreview?.(razaId, razas[razaId]);
  };

  const handleAbrir = (razaId) => {
    if (!razas[razaId]) return;
    setRazaAbiertaId(razaId);
    onAbrirRaza?.(razaId, razas[razaId]);
  };

  return (
    <div
      className="SelectorDeRaza"
      style={{ "--accent": razaActiva.edicion.color, "--accent2": razaActiva.edicion.colorSecundario }}
    >
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

      <FichaRaza raza={razaAbierta} onCerrar={() => setRazaAbiertaId(null)} />
    </div>
  );
}
