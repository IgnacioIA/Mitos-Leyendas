import "../styles/Novedades-gallery.css";

import NovedadCard from "./NovedadCard";

import img1 from "../../../../../assets/mitos4.0/novedades/1-NUEVAS.jpg";
import img2 from "../../../../../assets/mitos4.0/novedades/2-PREMIUM.jpg";
import img3 from "../../../../../assets/mitos4.0/novedades/3-REWORK.jpg";
import img4 from "../../../../../assets/mitos4.0/novedades/4-FOIL ESPECIAL.jpg";
import img5 from "../../../../../assets/mitos4.0/novedades/5-EXCLUSIVAS.jpg";

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