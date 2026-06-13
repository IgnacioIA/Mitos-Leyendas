import "../styles/CartasColumnsCard.css";

export default function CartasColumnsCard({ product }) {
  return (
    <article className="cartas-columns-card-MZPB">

      <div
        className="cartas-columns-card-background-MZPB"
        style={{
          backgroundImage: `url(${product.background})`,
        }}
      />

      <div className="cartas-columns-card-overlay-MZPB" />

      <div className="cartas-columns-card-content-MZPB">

        <div className="cartas-columns-card-main-MZPB">

          <h2 className="cartas-columns-card-title-MZPB">
            {product.title}
          </h2>

          <img
            className="cartas-columns-card-product-MZPB"
            src={product.product}
            alt={product.title}
          />

        </div>

        <div className="cartas-columns-card-hidden-MZPB">

          <p className="cartas-columns-card-description-MZPB">
            {product.description}
          </p>

          <button className="cartas-columns-card-button-MZPB">
            Comprar
          </button>

        </div>

      </div>

    </article>
  );
}