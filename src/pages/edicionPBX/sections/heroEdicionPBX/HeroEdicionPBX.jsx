import HeroGenerico from "../../../../components/HeroGenerico/Hero";

import heroEdicionPBXData from "./data/HeroEdicionPBXData";

export default function HeroEdicionPBX() {
  return (
    <HeroGenerico
      title={heroEdicionPBXData.titulo}
      subtitle={heroEdicionPBXData.subtitulo}
      description={heroEdicionPBXData.descripcion}
      backgroundDesktop={heroEdicionPBXData.backgroundMobile}
      backgroundMobile= {heroEdicionPBXData.backgroundDesktop}
      buttonText="VER CONTENIDO"
      scrollToId="ProductoLootboxPBX2025-section"
    />
  );
}