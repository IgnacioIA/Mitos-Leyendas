import "../styles/ProductosRecientesGallery.css";

import ProductoRecienteCard from "./ProductoRecienteCard";

import img1 from "../../../../../assets/home/novedades/PERSONAJES 1.webp";
import img2 from "../../../../../assets/home/novedades/PERSONAJES 2.webp";
import img3 from "../../../../../assets/home/novedades/PERSONAJES 3.webp";
import img4 from "../../../../../assets/home/novedades/PERSONAJES 4.webp";
import img5 from "../../../../../assets/home/novedades/PERSONAJES 5.webp";

export default function ProductosRecientesGallery() {

  const productos = [
    { id: 1, title: "Cartas Nuevas", image: img1 },
    { id: 2, title: "Cartas Premium", image: img2 },
    { id: 3, title: "Cartas Rework", image: img3 },
    { id: 4, title: "Cartas Foil Especial", image: img4 },
    { id: 5, title: "Cartas Exclusivas", image: img5 },
  ];

  return (
    <div className="productos-recientes-gallery">

      {productos.map((producto) => (
        <ProductoRecienteCard
          key={producto.id}
          title={producto.title}
          image={producto.image}
        />
      ))}

    </div>
  );
}