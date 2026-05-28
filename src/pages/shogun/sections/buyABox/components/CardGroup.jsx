import "../styles/Card-group.css";

export default function CardGroup({
  group
}) {

  return (

    <div className="shogun-buyabox-group">

      <div className="shogun-buyabox-card-stack">

        <img
          src={group.cards[0]}
          alt=""
          className="shogun-buyabox-card shogun-buyabox-card-left"
        />

        <img
          src={group.cards[1]}
          alt=""
          className="shogun-buyabox-card shogun-buyabox-card-center"
        />

        <img
          src={group.cards[2]}
          alt=""
          className="shogun-buyabox-card shogun-buyabox-card-right"
        />

      </div>

      <h3 className="shogun-buyabox-group-title">
        {group.title}
      </h3>

    </div>
  );
}