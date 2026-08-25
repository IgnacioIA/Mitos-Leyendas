import "./styles/CronologiaLigaHero.css";
import { cronologiaLigaHeroData } from "./data/cronologiaLigaHeroData";

// Mismo comportamiento/estructura que TiendasAmigasHero (que a su vez sigue
// a BannerPremier: banner de imagen full width). Título/subtítulo son
// data-driven y solo se renderizan si están completos en el data.
const CronologiaLigaHero = () => {
  const { image, titulo, subtitulo } = cronologiaLigaHeroData;

  return (
    <section
      className="cronologiaLigaHero"
      style={{ backgroundImage: `url(${image})` }}
    >

      {(titulo || subtitulo) && (
        <div className="cronologiaLigaHero-content">

          {titulo && (
            <h1 className="cronologiaLigaHero-titulo">
              {titulo}
            </h1>
          )}

          {subtitulo && (
            <p className="cronologiaLigaHero-subtitulo">
              {subtitulo}
            </p>
          )}

        </div>
      )}

    </section>
  );
};

export default CronologiaLigaHero;
