import "../styles/MobileCard.css";

export default function MobileCard({
  imagen,
}) {
  return (
    <div className="MobileCard">

      <img
        src={imagen}
        alt=""
        loading="lazy"
      />

    </div>
  );
}