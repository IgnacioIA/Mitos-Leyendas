import ProductLineup from "../../../../components/product-lineup/ProductLineup";

import backgroundImage from "../../../../assets/mitos4.0/productos/FONDO PRODUCTOS.webp";
import { cards } from "./data/FeaturesData";

export default function Productos() {
  return (
    <ProductLineup
      title="Línea de productos"
      cards={cards}
      linkUrl="https://www.mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/"
      backgroundImage={backgroundImage}
      accentBase="white"
      accentHover="#d4af37"
    />
  );
}
