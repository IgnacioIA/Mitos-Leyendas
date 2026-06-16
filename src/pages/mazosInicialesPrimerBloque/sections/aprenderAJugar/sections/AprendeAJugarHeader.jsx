import "../styles/AprendeAJugarHeader-MazosInicialPB.css";

export default function AprendeAJugarHeader({
  title,
  subtitle,
}) {
  return (
    <header className="AprendeAJugarHeader-MazosInicialPB">

      <h2 className="AprendeAJugarTitle-MazosInicialPB">
        {title}
      </h2>

      <p className="AprendeAJugarSubtitle-MazosInicialPB">
        {subtitle}
      </p>

    </header>
  );
}