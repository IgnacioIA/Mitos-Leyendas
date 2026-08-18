import { Link } from "react-router-dom";

import "../styles/PosterBotonBanList.css";

// Mismo criterio de navegación que InteresCard.jsx (src/pages/home/sections/interes):
// link externo si la url empieza con "http", interno (React Router) en cualquier otro caso.
export default function PosterBotonBanList({
  titulo,
  imagen,
  alt,
  url,
}) {
  const esExterno = url?.startsWith("http");

  const contenido = (
    <span className="PosterBotonBanList-float">

      <span className="PosterBotonBanList-marco">
        <img
          className="PosterBotonBanList-imagen"
          src={imagen}
          alt={alt}
          loading="lazy"
        />
      </span>

      <span className="PosterBotonBanList-titulo">
        {titulo}
      </span>

    </span>
  );

  if (esExterno) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="PosterBotonBanList"
      >
        {contenido}
      </a>
    );
  }

  return (
    <Link
      to={url || "#"}
      className="PosterBotonBanList"
    >
      {contenido}
    </Link>
  );
}
