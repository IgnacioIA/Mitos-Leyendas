import "../styles/TiendaColumns.css";

import TiendaCard from "./TiendaCard";

export default function TiendaColumns({
  cards,
}) {
  return (
    <div className="tienda-columns">

      {cards.map((card) => (
        <TiendaCard
          key={card.id}
          card={card}
        />
      ))}

    </div>
  );
}