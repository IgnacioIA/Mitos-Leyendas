import "../styles/ProductoRecienteCard.css";

export default function ProductoRecienteCard({
  title,
  background,
  product,
  url,
}) {
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

          <a
            href={url}
            className="home-productos-recientes-card__button"
          >
            VER PRODUCTO
          </a>

        </div>

      </div>
    </article>
  );
}