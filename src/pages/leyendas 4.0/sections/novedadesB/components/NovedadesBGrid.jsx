import "../style/Novedades-b-grid.css";

import NovedadesBCard from "./NovedadesBCard";

import img1 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";
import img2 from "../../../../../assets/mitos4.0/novedades/Imagen2.png";
import img3 from "../../../../../assets/mitos4.0/novedades/Imagen3.png";
import img4 from "../../../../../assets/mitos4.0/novedades/Imagen4.png";
import img5 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";

function NovedadesBGrid() {

  const cards = [
     {
      id: 1,
      title: "Cartas Nuevas",
      image: img1,
    },
    {
      id: 2,
      title: "Cartas Premium",
      image: img2,
    },
    {
      id: 3,
      title: "Cartas Rework",
      image: img3,
    },
    {
      id: 4,
      title: "Cartas Foil Especial",
      image: img4,
    },
    {
      id: 5,
      title: "Cartas Exclusivas",
      image: img5,
    },
  ];

  return (
    <div className="novedades-b-grid">

      {cards.map((card) => (
        <NovedadesBCard
          key={card.id}
          title={card.title}
          image={card.image}
        />
      ))}

    </div>
  );
}

export default NovedadesBGrid;