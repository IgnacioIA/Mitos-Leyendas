import ProductLineup from "../../../../components/product-lineup/ProductLineup";

import dataDominiosDeRaPaginaLoreLineaProductos from "./data/dataDominiosDeRaPaginaLoreLineaProductos";

export default function DominiosDeRaPaginaLoreLineaProductos() {
  const {
    title,
    cards,
    linkUrl,
    backgroundImage,
    accentBase,
    accentHover,
  } = dataDominiosDeRaPaginaLoreLineaProductos;

  return (
    <ProductLineup
      title={title}
      cards={cards}
      linkUrl={linkUrl}
      backgroundImage={backgroundImage}
      accentBase={accentBase}
      accentHover={accentHover}
    />
  );
}
