import "../styles/Novedades-gallery.css";

import NovedadCard from "./NovedadCard";

import img1 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";
import img2 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";
import img3 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";
import img4 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";
import img5 from "../../../../../assets/mitos4.0/novedades/Crom Tigernmas ilus.png";

function NovedadesGallery() {

  const novedades = [
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
    <div className="novedades-gallery">

      {novedades.map((item) => (
        <NovedadCard
          key={item.id}
          title={item.title}
          image={item.image}
        />
      ))}

    </div>
  );
}

export default NovedadesGallery;