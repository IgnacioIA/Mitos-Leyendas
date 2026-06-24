import "./styles/MazosEdicion.css";

import mazosEdicionData from "./data/MazosEdicionData";

import ContenidoSuperior from "./sections/ContenidoSuperior";
import ContenidoInferior from "./sections/ContenidoInferior";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico.jsx";

export default function MazosEdicion() {
  return (
    <section className="Page-MazosEdicion-Section">

      {mazosEdicionData.map((mazo) => (

        <ParallaxBackgroundCinematografico
          key={mazo.id}
          image={mazo.background}
          position={mazo.position}
          overlay={0.15}
        >

          <article
            id={mazo.anchorId}
            className="Page-MazosEdicion-Item"
          >

            <ContenidoSuperior
              layout={mazo.layout}
              {...mazo.contenidoSuperior}
            />

            <ContenidoInferior
              {...mazo.contenidoInferior}
            />

          </article>

        </ParallaxBackgroundCinematografico>

      ))}

    </section>
  );
}