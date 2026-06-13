import "../styles/TiendaCardsBlock.css";

import TiendaColumns from "./TiendaColumns";

export default function TiendaCardsBlock({
  cards,
}) {
  return (
    <section className="tienda-cards-block">

      <h3 className="tienda-cards-title">
        ELEGÍ TU MAZO PREFERIDO Y DESCUBRÍ TODO SU PODER
      </h3>

      <TiendaColumns
        cards={cards}
      />

    </section>
  );
}