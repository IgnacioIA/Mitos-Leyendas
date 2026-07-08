import LoreShowcase from "../../../../components/lore-showcase/LoreShowcase.jsx";

import productImage from "../../../../assets/mitos4.0/lore/Display-Leyendas-Primer-Bloque-2025.png";

export default function ProductShowcaseSection() {
  return (
    <LoreShowcase
      theme="light"
      title="UNA NUEVA ERA LLEGA"
      titleHighlight="PARA CAMBIAR EL JUEGO"
      paragraphs={[
        "Leyendas Primer Bloque 4.0 llega a dar inicio a una nueva temporada de juego del formato, trayendo un contenido fresco al formato que abrirá muchas estrategias para todo 2026 y 2027.",
        "Dentro de las novedades que encontraremos en Leyendas PB 4.0 tendremos una configuración especial de sobre, una nueva selección de cartas, nuevos tratamientos estéticos, nuevas cartas Rework y nuevas cartas para el formato.",
      ]}
      image={productImage}
      imageAlt="Display Leyendas Primer Bloque 4.0"
      button={{
        label: "CONSEGUIR DISPLAY",
        url: "https://mylargentina.com/formato-competitivo-pbx/ultimos-lanzamientos/leyendas-4-0/",
      }}
    />
  );
}
