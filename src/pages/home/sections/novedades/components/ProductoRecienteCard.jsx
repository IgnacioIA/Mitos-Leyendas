import { Link } from "react-router-dom";

import "../styles/ProductoRecienteCard.css";

export default function ProductoRecienteCard({
  title,
  background,
  product,
  url,
}) {

  const isExternal =
    url.startsWith("http://") ||
    url.startsWith("https://");

  return (
    <article
      className="home-productos-recientes-card"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="home-productos-recientes-card__content">

        <img
          src={product}
          alt={title}
          className="home-productos-recientes-card__product"
        />

        <div className="home-productos-recientes-card__title-container">

          <h3 className="home-productos-recientes-card__title">
            {title}
          </h3>

          {isExternal ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="home-productos-recientes-card__button"
            >
              VER PRODUCTO
            </a>
          ) : (
            <Link
              to={url}
              className="home-productos-recientes-card__button"
            >
              VER PRODUCTO
            </Link>
          )}

        </div>

      </div>
    </article>
  );
}