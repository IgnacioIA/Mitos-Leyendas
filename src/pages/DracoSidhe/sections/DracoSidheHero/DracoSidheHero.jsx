import "./styles/DracoSidheHero.css";

import ParallaxBackgroundCinematografico 
from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import DracoSidheHeroButton from "./sections/DracoSidheHeroButton";

import dataDracoSidheHero from "./data/dataDracoSideHero";


export default function DracoSidheHero() {

  const {
    background,
    contenido,
  } = dataDracoSidheHero;


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
    <ParallaxBackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >

      <div className="DracoSidheHero">

        <h1>
          {contenido.titulo}
        </h1>


        <h2>
          {contenido.subtitulo}
        </h2>


        <p>
          {contenido.descripcion}
        </p>


        <DracoSidheHeroButton
          onClick={handleButton}
        >
          {contenido.boton.texto}
        </DracoSidheHeroButton>


      </div>

    </ParallaxBackgroundCinematografico>
  );
}