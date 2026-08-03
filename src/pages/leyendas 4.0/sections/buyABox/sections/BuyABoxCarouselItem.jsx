import "../styles/BuyABoxCarouselItem.css";

// Cada item del carrusel es una única carta: el componente solo pinta una
// imagen. CarrouselResponsiveDeTres se encarga de la navegación y el layout
// (3 visibles en desktop, paginado de a 3); esta pieza no sabe nada de eso.
export default function BuyABoxCarouselItem({ imagen }) {
  return (
    <img
      className="BuyABoxCarouselItem-image"
      src={imagen}
      alt=""
      draggable="false"
    />
  );
}
