import { Fragment, useCallback } from "react";

import "./styles/LineaDelTiempoRecorrido.css";

import useAlturaHeader from "../../../../components/SelectorDeRaza/hooks/useAlturaHeader";

import RecorridoFondo from "./sections/RecorridoFondo";
import RecorridoEje from "./sections/RecorridoEje";
import RecorridoEtapa from "./sections/RecorridoEtapa";
import RecorridoInterludio from "./sections/RecorridoInterludio";
import RecorridoNavegador from "./sections/RecorridoNavegador";

import useRecorridoScroll from "./hooks/useRecorridoScroll";

import { dataLineaDelTiempoRecorrido } from "./data/dataLineaDelTiempoRecorrido";

// Intro + eje con las etapas + cierre comparten el mismo fondo difuminado
// y el mismo color de acento (--accent), por eso viven en una sola sección
// coordinada por useRecorridoScroll.
export default function LineaDelTiempoRecorrido() {
  const { intro, galeriaTitulo, etapas, interludio, cierre } = dataLineaDelTiempoRecorrido;

  const {
    rootRef,
    ejeRef,
    capaARef,
    capaBRef,
    registrarEtapa,
    progreso,
    etapaActiva,
    navegadorVisible,
    reducirMovimiento,
  } = useRecorridoScroll(etapas);

  // --header-h: el marcador de años nunca queda debajo del header sticky.
  useAlturaHeader(rootRef);

  const irAEtapa = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducirMovimiento ? "auto" : "smooth",
      block: "center",
    });
  }, [reducirMovimiento]);

  return (
    <section className="lineaDelTiempoRecorrido" ref={rootRef}>

      <RecorridoFondo capaARef={capaARef} capaBRef={capaBRef} />

      <div className="lineaDelTiempoRecorrido-contenido">

        <div className="lineaDelTiempoRecorrido-intro" id={intro.id}>
          <div className="lineaDelTiempoRecorrido-eyebrow">{intro.eyebrow}</div>
          <h2 className="lineaDelTiempoRecorrido-introTitulo">{intro.titulo}</h2>
          <p className="lineaDelTiempoRecorrido-introTexto">{intro.descripcion}</p>
        </div>

        <div className="lineaDelTiempoRecorrido-shell">
          <RecorridoEje
            ejeRef={ejeRef}
            progreso={progreso}
            etapa={etapas[etapaActiva]}
            animarCambio={!reducirMovimiento}
          >
            {etapas.map((etapa, index) => (
              <Fragment key={etapa.id}>
                <RecorridoEtapa
                  etapaRef={registrarEtapa(index)}
                  etapa={etapa}
                  index={index}
                  galeriaTitulo={galeriaTitulo}
                  reducirMovimiento={reducirMovimiento}
                />

                {interludio.despuesDe === etapa.id && (
                  <RecorridoInterludio
                    interludio={interludio}
                    reducirMovimiento={reducirMovimiento}
                  />
                )}
              </Fragment>
            ))}
          </RecorridoEje>
        </div>

        <RecorridoNavegador
          etapas={etapas}
          etapaActiva={etapaActiva}
          isVisible={navegadorVisible}
          onSeleccionar={irAEtapa}
        />

        <footer className="lineaDelTiempoRecorrido-cierre">
          <div>
            <h2 className="lineaDelTiempoRecorrido-cierreTitulo">
              {cierre.titulo} <span>{cierre.tituloDestacado}</span>
            </h2>
            <p className="lineaDelTiempoRecorrido-cierreTexto">{cierre.descripcion}</p>
          </div>
        </footer>

      </div>

    </section>
  );
}
