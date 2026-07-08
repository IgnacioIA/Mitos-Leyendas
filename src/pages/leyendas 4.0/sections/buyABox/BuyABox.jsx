import "./styles/BuyABox.css";

import carouselData from "./data/DataSection.js";

import BackgroundFX from "./components/BackgroundFX";
import SectionHeader from "./components/SectionHeader";
import BuyABoxCarousel from "../../../../components/buyabox-carousel/BuyABoxCarousel.jsx";

export default function BuyABox() {
  return (
    <section className="feature-carousel-section">

      <BackgroundFX />

      <div className="feature-carousel-container">

        <SectionHeader title="cartas buy a box de la colección" />

        <BuyABoxCarousel groups={carouselData} />

      </div>

    </section>
  );
}
