import "./styles/BuyABox.css";

import carouselData from "./data/DataSection.js";

import BackgroundFX from "./components/BackgroundFX";
import SectionHeader from "./components/SectionHeader";
import BuyABoxCarousel from "../../../../components/buyabox-carousel/BuyABoxCarousel.jsx";

export default function BuyABox() {
  return (
    <section className="shogun-buyabox-section">

      <BackgroundFX />

      <div className="shogun-buyabox-container">

        <SectionHeader title="arte coleccionable" />

        <BuyABoxCarousel groups={carouselData} />

      </div>

    </section>
  );
}
