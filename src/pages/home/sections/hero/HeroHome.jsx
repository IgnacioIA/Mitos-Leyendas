import { useState } from "react";

import { HERO_SLIDES } from "./data/hero.data";

import HeroSlide from "./section/HeroSlide";
import HeroNavigation from "./section/HeroNavigation";

import "./styles/HeroHome.css";

export default function HeroHome() {

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === HERO_SLIDES.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0
        ? HERO_SLIDES.length - 1
        : prev - 1
    );
  };

  return (

    <section className="hero">

      <div
        className="hero-track"
        style={{
          transform:
            `translateX(-${currentSlide * 100}%)`
        }}
      >

        {
          HERO_SLIDES.map((slide) => (

            <HeroSlide
              key={slide.id}
              slide={slide}
            />

          ))
        }

      </div>

      <HeroNavigation
        onPrev={prevSlide}
        onNext={nextSlide}
      />

    </section>

  );
}