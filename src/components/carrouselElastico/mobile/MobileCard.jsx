import "../styles/MobileCard.css";

export default function MobileCard({
  imagen,
  alt = "",
}) {
  return (
    <div className="MobileCard">

      <img
        src={imagen}
        alt={alt}
        loading="lazy"
      />

    </div>
  );
}