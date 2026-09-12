import HeroGenerico from "../../../../components/HeroGenerico/Hero";

import "./styles/HeroEdicionPBX.css";

import heroEdicionPBXData from "./data/HeroEdicionPBXData";

export default function HeroEdicionPBX() {
  return (
    <HeroGenerico
      title={heroEdicionPBXData.titulo}
      subtitle={heroEdicionPBXData.subtitulo}
      description={heroEdicionPBXData.descripcion}
      backgroundDesktop={heroEdicionPBXData.backgroundDesktop}
      backgroundMobile={heroEdicionPBXData.backgroundMobile}
      buttonText="VER CONTENIDO"
      scrollToId="ProductoLootboxPBX2025-section"
      variant="HeroEdicionPBX"
    />
  );
}