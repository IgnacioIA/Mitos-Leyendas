import "../styles/CarrouselCuatroTituloDescripcionDosCarrousel.css";

export default function CarrouselCuatroTituloDescripcionDosCarrousel({
  titulo,
  children,
}) {
  return (
    <div className="CarrouselCuatroTituloDescripcionDosCarrousel">
      <h3 className="CarrouselCuatroTituloDescripcionDosCarrousel-Titulo">
        {titulo}
      </h3>

      <div className="CarrouselCuatroTituloDescripcionDosCarrousel-Contenido">
        {children}
      </div>
    </div>
  );
}
