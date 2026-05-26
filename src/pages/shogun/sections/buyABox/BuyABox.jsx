import { useState } from "react";

import "./styles/BuyABox.css";

import carouselData from "./data/DataSection.js";

import BackgroundFX from "./components/BackgroundFX";
import SectionHeader from "./components/SectionHeader";
import CarouselViewport from "./components/CarouselViewport";

export default function BuyABox() {

  return (

    <section className="feature-carousel-section">

      <BackgroundFX />

      <div className="feature-carousel-container">

        <SectionHeader
          title="cartas buy a box de la colección"
        />

        <CarouselViewport
          groups={carouselData}
        />

      </div>

    </section>
  );
}