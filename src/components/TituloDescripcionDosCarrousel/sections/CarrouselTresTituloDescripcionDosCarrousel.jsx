import "../styles/CarrouselTresTituloDescripcionDosCarrousel.css";

export default function CarrouselTresTituloDescripcionDosCarrousel({
  titulo,
  children,
}) {
  return (
    <div className="CarrouselTresTituloDescripcionDosCarrousel">
      <h3 className="CarrouselTresTituloDescripcionDosCarrousel-Titulo">
        {titulo}
      </h3>

      <div className="CarrouselTresTituloDescripcionDosCarrousel-Contenido">
        {children}
      </div>
    </div>
  );
}
