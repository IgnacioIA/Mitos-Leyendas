import "../styles/Novedades-b-grid.css";
import NovedadesBCard from "./NovedadesBCard";
import { novedadesData } from "../data/novedadesData";

function NovedadesBGrid() {
  return (
    <div className="novedades-b-grid">
      {novedadesData.map((card) => (
        <NovedadesBCard
          key={card.id}
          title={card.title}
          image={card.image}
          targetId={card.targetId}
        />
      ))}
    </div>
  );
}

export default NovedadesBGrid;