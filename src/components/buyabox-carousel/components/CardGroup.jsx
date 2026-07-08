import "../styles/card-group.css";

export default function CardGroup({ group }) {
  const [left, center, right] = group.cards;

  return (
    <div className="card-group">

      <div className="card-group__stack">
        <img
          src={left}
          alt=""
          className="card-group__card card-group__card--left"
        />
        <img
          src={center}
          alt=""
          className="card-group__card card-group__card--center"
        />
        <img
          src={right}
          alt=""
          className="card-group__card card-group__card--right"
        />
      </div>

      {group.title && (
        <p className="card-group__title">{group.title}</p>
      )}

    </div>
  );
}
