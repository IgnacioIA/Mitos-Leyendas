import HeroGenerico from "../../../../components/HeroGenerico/Hero";
import dataDominiosDeRaPaginaLoreHero from "./data/dataDominiosDeRaPaginaLoreHero";
import "./styles/DominiosDeRaPaginaLoreHero.css";

export default function DominiosDeRaPaginaLoreHero() {
  return (
    <HeroGenerico
      title={
        <div className="DominiosDeRaPaginaLoreHero-title">
          <span className="DominiosDeRaPaginaLoreHero-title-top">
            {dataDominiosDeRaPaginaLoreHero.tituloTop}
          </span>

          <span className="DominiosDeRaPaginaLoreHero-title-main">
            {dataDominiosDeRaPaginaLoreHero.tituloMain}
          </span>
        </div>
      }
      subtitle={dataDominiosDeRaPaginaLoreHero.subtitulo}
      backgroundDesktop={dataDominiosDeRaPaginaLoreHero.backgroundDesktop}
      backgroundMobile={dataDominiosDeRaPaginaLoreHero.backgroundMobile}
      scrollToId="DominiosDeRaPaginaLoreExplicacion-section"
    />
  );
}
