import "../styles/TiendaCard.css";

export default function TiendaCard({
  card,
}) {
  return (
    <article className="tienda-card">

      <div className="tienda-card-image-wrapper">

        <img
          src={card.image}
          alt={card.title}
          className={`
            tienda-card-image
            tienda-card-image--${card.color}
          `}
        />

      </div>

      <h4 className="tienda-card-title">
        {card.title}
      </h4>

      <p className="tienda-card-subtitle">
        {card.subtitle}
      </p>

    </article>
  );
}