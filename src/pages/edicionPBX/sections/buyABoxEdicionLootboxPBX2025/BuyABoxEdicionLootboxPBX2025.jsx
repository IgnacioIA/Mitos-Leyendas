import "./styles/BuyABoxEdicionLootBoxPBX2025.css";

import SectionHeader from "./sections/SectionHeader";
import SectionCarrousel from "./sections/SectionCarrousel";

import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import fondoBackground from "../../../../assets/EdicionPBX2025/buyABoxEdicionLootBoxPBX2025/FONDO PARALAX.webp";

export default function BuyABoxEdicionLootBoxPBX2025() {
  return (
    <section className="BuyABoxEdicionLootBoxPBX2025">

      <BackGround image={fondoBackground} overlay={0.2} position="center center">

      <div className="BuyABoxEdicionLootBoxPBX2025-Container">

        <SectionHeader />

        <SectionCarrousel />

      </div>
    </BackGround>
    </section>
  );
}