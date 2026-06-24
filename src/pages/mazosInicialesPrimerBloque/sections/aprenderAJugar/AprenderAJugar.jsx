import "./styles/AprendeAJugar-MazosInicialPB.css";

import AprendeAJugarData from "./data/AprenderAJugarData";

import AprendeAJugarHeader from "./sections/AprendeAJugarHeader";
import AprendeAJugarVideoContainer from "./sections/AprendeAJugarVideoContainer";
import AprendeAJugarButton from "./sections/AprendeAJugarButton";

import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

export default function AprendeAJugar() {
  return (

    <section
      className="AprendeAJugar-MazosInicialPB"
      style={{ backgroundColor: "#260009" }}
    >
      <div className="AprendeAJugar-Content-MazosInicialPB">

        <AprendeAJugarHeader
          title={AprendeAJugarData.title}
          subtitle={AprendeAJugarData.subtitle}
        />

        <AprendeAJugarVideoContainer
          videoUrl={AprendeAJugarData.videoUrl}
        />

        <AprendeAJugarButton
          text={AprendeAJugarData.buttonText}
          url={AprendeAJugarData.buttonUrl}
        />

      </div>
    </section>
  );
}