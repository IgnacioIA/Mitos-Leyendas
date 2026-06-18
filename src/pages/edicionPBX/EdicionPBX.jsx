{/*import Hero from "./sections/hero/HeroHome";*/}


import "./styles/EdicionPBX.css";

import Hero from "./sections/heroEdicionPBX/heroEdicionPBX";
import ProductoLootboxPBX2025 from "./sections/productoLootboxPBX2025/ProductoLootboxPBX2025";
import CajaEdicionLootboxPBX2025 from "./sections/cajaEdicionLootboxPBX2025/CajaEdicionLootboxPBX2025";
import CartasSecretasLootBoxPBX2025 from "./sections/cartasSecretasLootBoxPBX2025/CartasSecretasLootBoxPBX2025";
import BuyABoxLootBoxPBX2025 from "./sections/buyABoxEdicionLootboxPBX2025/BuyABoxEdicionLootboxPBX2025";
import CartasYTextoEdicionPBX2025 from "./sections/cartasYTextoEdicionPBX2025/CartasYTextoEdicionPBX2025";
import CartasNuevasEdicionLootbox from "./sections/cartasNuevasEdicionLootbox/CartasNuevasEdicionLootbox";
import LootboxLegendariaEdicionPBX from "./sections/lootboxLegendariaEdicionPBX/LootboxLegendariaEdicionPBX";


export default function EdicionPBX() {

  return (
    <div className="EdicionPBX-container">

      <Hero/>
      <ProductoLootboxPBX2025/>
      <CajaEdicionLootboxPBX2025/>
      <CartasSecretasLootBoxPBX2025/>
      <BuyABoxLootBoxPBX2025/>
      <CartasYTextoEdicionPBX2025/>
      <CartasNuevasEdicionLootbox/>
      <LootboxLegendariaEdicionPBX/>
      
    </div>
  );
}
