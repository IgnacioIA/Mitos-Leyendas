import "../styles/NovedadesHeader.css";

export default function NovedadesHeader({
  title
}) {
  return (
    <div className="Novedades-Header">

      <h2 className="Novedades-HeaderTitle">
        {title}
      </h2>

    </div>
  );
}
