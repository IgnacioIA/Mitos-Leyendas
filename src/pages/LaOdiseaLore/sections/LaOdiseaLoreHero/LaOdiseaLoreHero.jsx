import "./styles/LaOdiseaLoreHero.css";
import { laOdiseaLoreHeroData } from "./data/laOdiseaLoreHeroData";

// Arquitectónicamente igual a LoreIndexHero (que a su vez replica
// SalonDeCampeonesHero / BannerPremier: banner de imagen full width).
// Título/subtítulo/descripción son data-driven y solo se renderizan si
// están completos en el data.
const LaOdiseaLoreHero = () => {
  const { image, titulo, subtitulo, descripcion } = laOdiseaLoreHeroData;

  return (
    <section
      className="laOdiseaLoreHero"
      style={{ backgroundImage: `url(${image})` }}
    >

      {(titulo || subtitulo || descripcion) && (
        <div className="laOdiseaLoreHero-content">

          {titulo && (
            <h1 className="laOdiseaLoreHero-titulo">
              {titulo}
            </h1>
          )}

          {subtitulo && (
            <p className="laOdiseaLoreHero-subtitulo">
              {subtitulo}
            </p>
          )}

          {descripcion && (
            <p className="laOdiseaLoreHero-descripcion">
              {descripcion}
            </p>
          )}

        </div>
      )}

    </section>
  );
};

export default LaOdiseaLoreHero;
