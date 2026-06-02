import "../styles/ProductoRecienteCard.css";

export default function ProductoRecienteCard({
  title,
  image,
}) {
  return (
    <article
      className="producto-reciente-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="producto-reciente-card__overlay">

        <h3>{title}</h3>

      </div>

    </article>
  );
}