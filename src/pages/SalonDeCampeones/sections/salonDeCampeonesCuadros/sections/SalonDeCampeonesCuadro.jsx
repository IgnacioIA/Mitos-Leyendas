import "../styles/SalonDeCampeonesCuadro.css";

export default function SalonDeCampeonesCuadro({
  imagen,
  alt,
  titulo,
  descripcion,
}) {
  return (
    <article className="salonDeCampeonesCuadro">

      <div className="salonDeCampeonesCuadro-divSup">
        <img
          className="salonDeCampeonesCuadro-imagen"
          src={imagen}
          alt={alt}
          loading="lazy"
        />
      </div>

      <div className="salonDeCampeonesCuadro-divInf">

        <h3 className="salonDeCampeonesCuadro-titulo">
          {titulo}
        </h3>

        <p className="salonDeCampeonesCuadro-descripcion">
          {descripcion}
        </p>

      </div>

    </article>
  );
}
