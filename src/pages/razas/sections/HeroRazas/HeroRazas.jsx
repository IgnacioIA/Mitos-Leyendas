import HeroGenerico from "../../../../components/HeroGenerico/Hero";

import dataHeroRazas from "./data/dataHeroRazas";

export default function HeroRazas() {
  return (
    <HeroGenerico
      title={dataHeroRazas.titulo}
      subtitle={dataHeroRazas.subtitulo}
      description={dataHeroRazas.descripcion}
      backgroundDesktop={dataHeroRazas.backgroundDesktop}
      backgroundMobile={dataHeroRazas.backgroundMobile}
      buttonText="VER RAZAS"
      scrollToId="RazasExplicacion-section"
      compactTitle
    />
  );
}
