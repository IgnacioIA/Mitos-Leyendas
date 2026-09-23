import { Link } from "react-router-dom";

import "../styles/NovedadCard.css";

export default function NovedadCard({
  title,
  subtitle,
  background,
  product,
  url,
  buttonText = "VER PRODUCTO",
}) {

  const isExternal =
    url.startsWith("http://") ||
    url.startsWith("https://");

  // Ancla a una sección de la misma página (ej: "#invasores").
  const isAnchor = url.startsWith("#");

  return (
    <article
      className="Novedades-Card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="Novedades-Card__content">

        <img
          src={product}
          alt={title}
          className="Novedades-Card__product"
        />

        <div className="Novedades-Card__title-container">

          <h3 className="Novedades-Card__title">
            {title}
          </h3>

          {subtitle && (
            <p className="Novedades-Card__subtitle">
              {subtitle}
            </p>
          )}

          {isExternal ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="Novedades-Card__button"
            >
              {buttonText}
            </a>
          ) : isAnchor ? (
            <a
              href={url}
              className="Novedades-Card__button"
            >
              {buttonText}
            </a>
          ) : (
            <Link
              to={url}
              className="Novedades-Card__button"
            >
              {buttonText}
            </Link>
          )}

        </div>

      </div>
    </article>
  );
}
