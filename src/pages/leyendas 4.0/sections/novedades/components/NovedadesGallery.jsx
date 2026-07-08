import "../styles/Novedades-gallery.css";

import NovedadCard from "./NovedadCard";

export default function NovedadesGallery({ items = [] }) {
  return (
    <div className="novedades-gallery">
      {items.map((item) => (
        <NovedadCard
          key={item.id}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}
