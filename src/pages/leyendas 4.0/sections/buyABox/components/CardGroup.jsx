import "../styles/Card-group.css";

export default function CardGroup({
  group
}) {

  return (

    <div className="card-group">

      <div className="card-stack">

        <img
          src={group.cards[0]}
          alt=""
          className="group-card left"
        />

        <img
          src={group.cards[1]}
          alt=""
          className="group-card center"
        />

        <img
          src={group.cards[2]}
          alt=""
          className="group-card right"
        />

      </div>

      <h3 className="group-title">
        {group.title}
      </h3>

    </div>
  );
}