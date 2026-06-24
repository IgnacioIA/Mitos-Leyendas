import "./styles/ProductoLootboxPBX2025.css";

import LootboxDesktopPBX2025 from "./sections/LootboxDesktopPBX2025";
import LootboxMobilePBX2025 from "./sections/LootboxMobilePBX2025";

export default function ProductoLootboxPBX2025() {
  return (
    <section className="ProductoLootboxPBX2025" id="ProductoLootboxPBX2025-section">

      <div className="ProductoLootboxPBX2025-Desktop">
        <LootboxDesktopPBX2025 />
      </div>

      <div className="ProductoLootboxPBX2025-Mobile">
        <LootboxMobilePBX2025 />
      </div>

    </section>
  );
}