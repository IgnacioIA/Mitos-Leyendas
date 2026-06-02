import "./styles/ProductosRecientes.css";

import ProductosRecientesHeader from "./components/ProductosRecientesHeader";
import ProductosRecientesGallery from "./components/ProductosRecientesGallery";

export default function ProductosRecientes() {
  return (
    <section className="productos-recientes">

      <div className="container">

        <ProductosRecientesHeader />

      </div>

      <ProductosRecientesGallery />

    </section>
  );
}