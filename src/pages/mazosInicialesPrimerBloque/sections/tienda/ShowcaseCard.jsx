import "../../styles/sections/tienda/showcaseCard.css";

export default function ShowcaseCard({ product }) {
  return (
    <article className="showcase-card">

      {/* BACKGROUND */}
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${product.background})`,
        }}
      />

      {/* OVERLAY */}
      <div className="card-overlay" />

      {/* CONTENT */}
      <div className="card-content">

        <p className="card-date">
          {product.date}
        </p>

        {/* BLOQUE PRINCIPAL */}
        <div className="card-main">

          <div className="card-titles">

            <h3 className="card-subtitle">
              {product.subtitle}
            </h3>

            <h2 className="card-title">
              {product.title}
            </h2>

          </div>

          {/* PRODUCT */}
          <img
            className="card-product"
            src={product.product}
            alt={product.title}
          />

        </div>

        {/* HIDDEN CONTENT */}
        <div className="card-hidden">

          <p className="card-description">
            {product.description}
          </p>

          <button className="card-button">
            Comprar
          </button>

        </div>

      </div>

    </article>
  );
}