import { useState } from "react";

import "./styles/BuyABox.css";

import carouselData from "./data/DataSection.js";

import BackgroundFX from "./components/BackgroundFX";
import SectionHeader from "./components/SectionHeader";
import CarouselViewport from "./components/CarouselViewport";

export default function BuyABox() {

  return (

    <section className="shogun-buyabox-section">

      <BackgroundFX />

      <div className="shogun-buyabox-container">

        <SectionHeader
          title="arte coleccionable"
        />

        <CarouselViewport
          groups={carouselData}
        />

      </div>

    </section>
  );
}