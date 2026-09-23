import "./styles/RazasSelectorPersonaje.css";

import dataRazasSelectorPersonaje from "./data/dataRazasSelectorPersonaje";

import SelectorDeRaza from "../../../../components/SelectorDeRaza/SelectorDeRaza";

export default function RazasSelectorPersonaje() {
  const {
    kicker,
    titulo,
    textoAyuda,
    razaInicial,
    razas,
    ordenRazas,
  } = dataRazasSelectorPersonaje;

  return (
    <section className="RazasSelectorPersonaje" id="RazasSelectorPersonaje-section">
      <SelectorDeRaza
        kicker={kicker}
        titulo={titulo}
        textoAyuda={textoAyuda}
        razaInicial={razaInicial}
        razas={razas}
        ordenRazas={ordenRazas}
      />
    </section>
  );
}
