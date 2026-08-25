import "./styles/SalonDeCampeonesHero.css";
import { salonDeCampeonesHeroData } from "./data/salonDeCampeonesHeroData";

// Mismo comportamiento/estructura que BannerPremier (banner de imagen full
// width, sin modificar ese componente): acá se agrega, de forma opcional y
// data-driven, un título/subtítulo que solo se renderiza si se completa en
// el data — hoy están vacíos, así que el resultado visual es el mismo banner.
const SalonDeCampeonesHero = () => {
  const { image, titulo, subtitulo } = salonDeCampeonesHeroData;

  return (
    <section
      className="salonDeCampeonesHero"
      style={{ backgroundImage: `url(${image})` }}
    >

      {(titulo || subtitulo) && (
        <div className="salonDeCampeonesHero-content">

          {titulo && (
            <h1 className="salonDeCampeonesHero-titulo">
              {titulo}
            </h1>
          )}

          {subtitulo && (
            <p className="salonDeCampeonesHero-subtitulo">
              {subtitulo}
            </p>
          )}

        </div>
      )}

    </section>
  );
};

export default SalonDeCampeonesHero;
