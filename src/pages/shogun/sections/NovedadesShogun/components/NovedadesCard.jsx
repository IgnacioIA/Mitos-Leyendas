import "../style/NovedadesCard.css";

export default function NovedadesCard({
  image,
  title
}) {

  return (

    <article className="novedades-card">

      <img
        src={image}
        alt={title}
        className="novedades-card__image"
      />

      <div className="novedades-card__caption">
        {title}
      </div>

    </article>
  );
}