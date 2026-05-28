import "../style/NovedadesGallery.css";

import NovedadesCard from
"./NovedadesCard.jsx";

export default function NovedadesGallery({
  items
}) {

  return (

    <div className="novedades-gallery">

      {items.map((item) => (

        <NovedadesCard
          key={item.id}
          image={item.image}
          title={item.title}
        />

      ))}

    </div>
  );
}