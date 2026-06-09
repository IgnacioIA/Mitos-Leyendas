import "../styles/AcercaDeGrid.css";

import AcercaDeCard from "./AcercaDeCard";

import { ACERCA_DE_ITEMS }
from "../data/AcercaDeData";

export default function AcercaDeGrid() {
  return (
    <div className="acerca-de-grid">

      {ACERCA_DE_ITEMS.map((item) => (
        <AcercaDeCard
          key={item.id}
          title={item.title}
          image={item.image}
        />
      ))}

    </div>
  );
}