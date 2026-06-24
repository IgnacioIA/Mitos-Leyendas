import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import BuyABoxSection from "../buyABoxEdicionLootboxPBX2025/BuyABoxEdicionLootboxPBX2025";
import CartasTextoSection from "../cartasYTextoEdicionPBX2025/CartasYTextoEdicionPBX2025";

import  background  from "../../../../assets/EdicionPBX2025/buyABoxEdicionLootBoxPBX2025/FONDO PARALAX.webp";

export default function UnionBuyABoxYCartaTexto() {
  console.log(background);
  return (
    <section className="ExperienciaEdicionPBX2025">

      <BackGround
        image={background}
        overlay={0.2}
        position="center center"
      >

        <BuyABoxSection />

        <CartasTextoSection />

      </BackGround>

    </section>
  );
}