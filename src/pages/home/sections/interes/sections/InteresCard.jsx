import "../styles/InteresCard.css";

export default function InteresCard({
  item
}) {

  return (

    <article
      className="interes-card"
    >

      <img
        src={item.image}
        alt={item.alt}
        className="interes-image"
      />

    </article>

  );
}