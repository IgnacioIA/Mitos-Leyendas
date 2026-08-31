import "./styles/LoreIndexHero.css";
import { loreIndexHeroData } from "./data/loreIndexHeroData";

// Arquitectónicamente igual a SalonDeCampeonesHero (que a su vez sigue a
// BannerPremier: banner de imagen full width). Título/subtítulo/descripción
// son data-driven y solo se renderizan si están completos en el data.
const LoreIndexHero = () => {
  const { image, titulo, subtitulo, descripcion } = loreIndexHeroData;

  return (
    <section
      className="loreIndexHero"
      style={{ backgroundImage: `url(${image})` }}
    >

      {(titulo || subtitulo || descripcion) && (
        <div className="loreIndexHero-content">

          {titulo && (
            <h1 className="loreIndexHero-titulo">
              {titulo}
            </h1>
          )}

          {subtitulo && (
            <p className="loreIndexHero-subtitulo">
              {subtitulo}
            </p>
          )}

          {descripcion && (
            <p className="loreIndexHero-descripcion">
              {descripcion}
            </p>
          )}

        </div>
      )}

    </section>
  );
};

export default LoreIndexHero;
