import "./styles/Tienda.css";

import tiendaData from "./data/tiendaData";

import TiendaHeader from "./sections/TiendaHeader";
import TiendaDivider from "./sections/TiendaDivider";
import TiendaCardsBlock from "./sections/TiendaCardsBlock";

export default function Tienda() {
  return (
    <section
      id="tiendaSection"
      className="tienda-section"
    >
      <div className="tienda-container">

        <TiendaHeader />

        <TiendaDivider />

        <TiendaCardsBlock
          cards={tiendaData}
        />

      </div>
    </section>
  );
}