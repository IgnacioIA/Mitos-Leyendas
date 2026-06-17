import "../styles/LootboxMobilePBX2025.css";

import data from "../data/productoLootboxPBX2025Data";

export default function LootboxMobilePBX2025() {
  return (
    <section
      className="LootboxMobilePBX2025"
      style={{
        backgroundImage: `url(${data.backgrounds.mobile})`,
      }}
    >
      <img
        src={data.boxImage}
        alt=""
        className="LootboxMobilePBX2025-Box"
      />

      <div className="LootboxMobilePBX2025-Products">

        {data.products.map((product) => (
          <article
            key={product.id}
            className="LootboxMobilePBX2025-Card"
          >
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>{product.subtitle}</p>
          </article>
        ))}

      </div>
    </section>
  );
}