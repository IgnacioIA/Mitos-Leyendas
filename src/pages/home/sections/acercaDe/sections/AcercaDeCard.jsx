import "../styles/AcercaDeCard.css";

export default function AcercaDeCard({
  title,
  image,
}) {
  return (
    <button
      className="acerca-de-card"
      type="button"
    >

      <img
        src={image}
        alt={title}
        className="acerca-de-card__image"
      />

      <span className="acerca-de-card__title">
        {title}
      </span>

    </button>
  );
}