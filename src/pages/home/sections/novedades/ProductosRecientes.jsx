import "./styles/ProductosRecientes.css";

import ProductosRecientesHeader from "./components/ProductosRecientesHeader";
import ProductosRecientesGallery from "./components/ProductosRecientesGallery";

export default function ProductosRecientes() {
  return (
    <section className="home-productos-recientes">

      <div className="container-home-productos-recientes">

        <ProductosRecientesHeader />

      </div>

      <ProductosRecientesGallery />

    </section>
  );
}