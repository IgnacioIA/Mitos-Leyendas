import "../styles/NovedadesGallery.css";

import NovedadCard from "./NovedadCard";

export default function NovedadesGallery({
  items,
  buttonText,
}) {
  return (
    <div className="Novedades-Gallery">

      {items.map((producto) => (

        <NovedadCard
          key={producto.id}
          title={producto.title}
          subtitle={producto.subtitle}
          background={producto.background}
          product={producto.product}
          url={producto.url}
          buttonText={producto.buttonText ?? buttonText}
        />

      ))}

    </div>
  );
}
