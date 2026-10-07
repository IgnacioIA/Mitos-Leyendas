import "./styles/RazasSelectorPersonaje.css";

import dataRazasSelectorPersonaje from "./data/dataRazasSelectorPersonaje";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import SelectorDeRaza from "../../../../components/SelectorDeRaza/SelectorDeRaza";

export default function RazasSelectorPersonaje() {
  const {
    fondo,
    kicker,
    titulo,
    textoAyuda,
    razaInicial,
    razas,
    ordenRazas,
  } = dataRazasSelectorPersonaje;

  return (
    <section className="RazasSelectorPersonaje" id="RazasSelectorPersonaje-section">
      <ParallaxBackgroundCinematografico image={fondo} overlay={0.25}>
        <SelectorDeRaza
          kicker={kicker}
          titulo={titulo}
          textoAyuda={textoAyuda}
          razaInicial={razaInicial}
          razas={razas}
          ordenRazas={ordenRazas}
          fondo={fondo}
        />
      </ParallaxBackgroundCinematografico>
    </section>
  );
}
