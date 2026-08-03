import "./styles/BuyABox.css";

import buyABoxData from "./data/DataSection.js";

import BackgroundFX from "./sections/BackgroundFX";
import SectionHeader from "./sections/SectionHeader";
import BuyABoxCarouselItem from "./sections/BuyABoxCarouselItem.jsx";
import CarrouselResponsiveDeTres from "../../../../components/CarrouselResponsiveDeTres/CarrouselResponsiveDeTres.jsx";

export default function BuyABox() {
  return (
    <section className="feature-carousel-section">

      <BackgroundFX />

      <div className="feature-carousel-container">

        <SectionHeader
          title={buyABoxData.title}
          description={buyABoxData.description}
        />

        <CarrouselResponsiveDeTres
          items={buyABoxData.editions}
          renderItem={(edition) => (
            <BuyABoxCarouselItem imagen={edition.cartas} />
          )}
        />

      </div>

    </section>
  );
}
