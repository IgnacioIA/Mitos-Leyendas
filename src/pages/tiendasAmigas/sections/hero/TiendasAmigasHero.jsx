import "./styles/TiendasAmigasHero.css";
import { tiendasAmigasHeroData } from "./data/tiendasAmigasHeroData";

// Mismo comportamiento/estructura que BannerPremier (banner de imagen full
// width, sin modificar ese componente): acá se agrega, de forma opcional y
// data-driven, un título/subtítulo que solo se renderiza si se completa en
// el data — hoy están vacíos, así que el resultado visual es el mismo banner.
const TiendasAmigasHero = () => {
  const { image, titulo, subtitulo } = tiendasAmigasHeroData;

  return (
    <section
      className="tiendasAmigasHero"
      style={{ backgroundImage: `url(${image})` }}
    >

      {(titulo || subtitulo) && (
        <div className="tiendasAmigasHero-content">

          {titulo && (
            <h1 className="tiendasAmigasHero-titulo">
              {titulo}
            </h1>
          )}

          {subtitulo && (
            <p className="tiendasAmigasHero-subtitulo">
              {subtitulo}
            </p>
          )}

        </div>
      )}

    </section>
  );
};

export default TiendasAmigasHero;
