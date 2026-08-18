import "./styles/HeroBanList.css";

import BackgroundCinematografico
from "../../../../components/backgroundCinematografico/BackgroundCinematografico";

import HeroBanListButton from "./sections/HeroBanListButton";

import dataHeroBanList from "./data/dataHeroBanList";


export default function HeroBanList() {

  const {
    background,
    contenido,
  } = dataHeroBanList;


  const handleButton = () => {

    const section = document.getElementById(
      contenido.boton.destino
    );

    if(section){
      section.scrollIntoView({
        behavior:"smooth"
      });
    }

  };


  return (
    <BackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >

      <div className="HeroBanList">

        <h1>
          {contenido.titulo}
        </h1>


        <h2>
          {contenido.subtitulo}
        </h2>


        <p>
          {contenido.descripcion}
        </p>


        <HeroBanListButton
          onClick={handleButton}
        >
          {contenido.boton.texto}
        </HeroBanListButton>


      </div>

    </BackgroundCinematografico>
  );
}
