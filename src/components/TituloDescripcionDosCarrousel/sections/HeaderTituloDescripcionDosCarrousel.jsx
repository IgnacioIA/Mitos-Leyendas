import "../styles/HeaderTituloDescripcionDosCarrousel.css";

export default function HeaderTituloDescripcionDosCarrousel({
  titulo,
}) {
  return (
    <header className="HeaderTituloDescripcionDosCarrousel">
      <h2 className="HeaderTituloDescripcionDosCarrousel-Titulo">
        {titulo}
      </h2>
    </header>
  );
}
