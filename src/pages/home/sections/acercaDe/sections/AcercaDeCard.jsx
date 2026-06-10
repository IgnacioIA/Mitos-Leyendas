import { Link } from "react-router-dom";
import "../styles/AcercaDeCard.css";

export default function AcercaDeCard({
  title,
  image,
  url,
}) {
  return (
    <Link
      to={url}
      className="acerca-de-card"
    >
      <img
        src={image}
        alt={title}
        className="acerca-de-card__image"
      />

      <span className="acerca-de-card__title">
        {title}
      </span>
    </Link>
  );
}