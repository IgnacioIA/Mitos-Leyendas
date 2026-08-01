import "./styles/HeroRazas.css";

import Hero from "../../../../components/HeroGenericoSinBoton/HeroGenericoSinBoton";

import dataHeroRazas from "./data/dataHeroRazas";

export default function HeroRazas() {
  return (
    <section className="HeroRazas">
      <Hero
       
        backgroundDesktop={dataHeroRazas.backgroundDesktop}
        backgroundMobile={dataHeroRazas.backgroundMobile}
       
      />
    </section>
  );
}