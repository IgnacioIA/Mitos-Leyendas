import { Link } from "react-router-dom";

import "../styles/InteresCard.css";

export default function InteresCard({
  item
}) {

  const isExternal =
    item.url?.startsWith("http");

  const cardContent = (
    <img
      src={item.image}
      alt={item.alt}
      className="interes-card-image"
    />
  );

  if (!item.url) {
    return (
      <div className="interes-card">
        {cardContent}
      </div>
    );
  }

  return isExternal ? (

    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="interes-card"
    >
      {cardContent}
    </a>

  ) : (

    <Link
      to={item.url}
      className="interes-card"
    >
      {cardContent}
    </Link>

  );

}