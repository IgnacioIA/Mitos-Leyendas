import "./CardCarousel.css";

const POSITION_CLASS = [
  "CardCarousel-card--left",
  "CardCarousel-card--active",
  "CardCarousel-card--right",
];

// Variante sin drag de CardCarousel: mismas cartas, mismo look (sombras,
// tilt, profundidad), pero sin lógica de índice ni gesto propio. Existe
// para poder mostrar el stack de 3 cartas dentro de otro carrusel
// (CarrouselResponsiveDeTres en BuyABox) sin dos gestos de arrastre
// compitiendo por el mismo drag horizontal.
export default function CardStackStatic({ cartas = [] }) {
  return (
    <div className="CardCarousel CardCarousel--static">
      <div className="CardCarousel-wrapper">
        {cartas.slice(0, 3).map((carta, index) => (
          <div
            key={index}
            className={`CardCarousel-card ${POSITION_CLASS[index]}`}
          >
            <img
              src={carta}
              alt=""
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
