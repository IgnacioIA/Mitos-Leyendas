import "../styles/LootboxDesktopPBX2025.css";

import data from "../data/productoLootboxPBX2025Data";

export default function LootboxDesktopPBX2025() {

  return (
    <section
      className="LootboxDesktopPBX2025"
      style={{
        backgroundImage: `url(${data.backgrounds.desktop})`,
      }}
    >
      {data.products.map((product) => (
        <article
          key={product.id}
          className={`
            LootboxDesktopPBX2025-Product
            LootboxDesktopPBX2025-${product.position}
          `}
        >
          {(product.position === "topLeft" ||
            product.position === "topCenter" ||
            product.position === "topRight") && (
            <div className="LootboxDesktopPBX2025-Info">
              <h3>{product.title}</h3>
              <p>{product.subtitle}</p>
            </div>
          )}

          <img
            src={product.image}
            alt={product.title}
          />

          {(product.position === "left" ||
            product.position === "right") && (
            <div className="LootboxDesktopPBX2025-Info">
              <h3>{product.title}</h3>
              <p>{product.subtitle}</p>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}