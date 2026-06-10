import "../styles/ProductosRecientesGallery.css";

import ProductoRecienteCard from "./ProductoRecienteCard";

import {
  productosRecientesData
} from "../data/productosRecientesData";

export default function ProductosRecientesGallery() {
  return (
    <div className="home-productos-recientes-gallery">

      {productosRecientesData.map((producto) => (

        <ProductoRecienteCard
          key={producto.id}
          title={producto.title}
          background={producto.background}
          product={producto.product}
          url={producto.url}
        />

      ))}

    </div>
  );
}