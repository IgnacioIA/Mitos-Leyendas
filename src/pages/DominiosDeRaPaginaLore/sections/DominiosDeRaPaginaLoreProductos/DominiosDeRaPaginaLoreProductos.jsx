import "./styles/DominiosDeRaPaginaLoreProductos.css";

import Novedades from "../../../../components/Novedades/Novedades";
import dataDominiosDeRaPaginaLoreProductos from "./data/dataDominiosDeRaPaginaLoreProductos";

export default function DominiosDeRaPaginaLoreProductos() {
  return (
    <div className="DominiosDeRaPaginaLoreProductos">
      <Novedades data={dataDominiosDeRaPaginaLoreProductos} />
    </div>
  );
}
