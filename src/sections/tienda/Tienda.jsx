import ShowcaseCard from "./ShowcaseCard";
import "../../styles/sections/tienda/Tienda.css";

import MazoTitanPB from "../../assets/tienda/Mazo Titan PB.png";
import MazoSombraPB from "../../assets/tienda/Mazo Sombra PB.png";
import MazoSacerdotePB from "../../assets/tienda/Mazo Sacerdote PB.png";
import MazoDragonPB from "../../assets/tienda/Mazo Dragon PB.png";

import FondoTitan from "../../assets/tienda/FONDOS TIENDA TITAN.webp";
import FondoSombra from "../../assets/tienda/FONDOS TIENDA SOMBRA.webp";
import FondoSacerdote from "../../assets/tienda/FONDOS TIENDA SACERDOTE.webp";
import FondoDragon from "../../assets/tienda/FONDOS TIENDA DRAGON.webp";

const cards = [
  {
    id: 1,
    title: "Mazo Dragon",
    description:
      "Desata la furia de los dragones. ",
    background:
      FondoDragon,
    product:
      MazoDragonPB,
  },

  {
    id: 2,
    title: "Mazo Titan",
    description:
      "Dirigí la ira de los titanes.",
    background:
      FondoTitan,
    product:
      MazoTitanPB,
  },

  {
    id: 3,
    title: "Mazo Sombra",
    description:
      "Invocá el poder de la sombra.",
    background:
      FondoSombra,
    product:
      MazoSombraPB,
  },

  {
    id: 4,
    title: "Mazo Sacerdote",
    description:
      "Canalizá la magia de los sacerdotes.",
    background:
      FondoSacerdote,
    product:
      MazoSacerdotePB,
  },


];

export default function Showcase() {
  return (
    <section id="tiendaSection" className="showcase-section">

      <div className="showcase-grid">

		  {cards.map((product) => (
		    
		    <div className="showcase-item" key={product.id}>
		      <ShowcaseCard product={product} />
		    </div>

		  ))}
		</div>

    </section>
  );
}