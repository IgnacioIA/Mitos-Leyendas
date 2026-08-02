import "../styles/DescripcionTituloDescripcionDosCarrousel.css";

export default function DescripcionTituloDescripcionDosCarrousel({
  descripcion,
}) {
  return (
    <div className="DescripcionTituloDescripcionDosCarrousel">
      <p className="DescripcionTituloDescripcionDosCarrousel-Texto">
        {descripcion}
      </p>
    </div>
  );
}
