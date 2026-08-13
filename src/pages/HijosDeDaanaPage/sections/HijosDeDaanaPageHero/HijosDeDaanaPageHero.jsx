import HeroGenerico from "../../../../components/HeroGenerico/Hero";
import DataHijosDeDaanaPage from "./data/DataHijosDeDaanaPageHero";
import "./styles/HijosDeDaanaPageHero.css";

export default function HijosDeDaanaPageHero() {
  return (
    <HeroGenerico
      title={
        <div className="HijosDeDaanaPageHero-title">
          <span className="HijosDeDaanaPageHero-title-top">
            RELATOS DE
          </span>

          <span className="HijosDeDaanaPageHero-title-main">
            HIJOS DE DAANA
          </span>
        </div>
      }
      subtitle={DataHijosDeDaanaPage.subtitulo}
      backgroundDesktop={DataHijosDeDaanaPage.backgroundDesktop}
      scrollToId="HijosDeDaanaPageLore-section"
    />
  );
}