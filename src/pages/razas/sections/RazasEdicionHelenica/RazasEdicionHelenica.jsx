import "./styles/RazasEdicionHelenica.css";

import dataRazasEdicionHelenica from "./data/dataRazasEdicionHelenica";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TituloCuerpoChildren from "../../../../components/TituloCuerpoChildren/TituloCuerpoChildren";
import CarrouselResponsiveDeCinco from "../../../../components/CarrouselResponsiveDeCinco/CarrouselResponsiveDeCinco";

export default function RazasEdicionHelenica() {
  const {
    titulo,
    background,
    bloques,
  } = dataRazasEdicionHelenica;

  return (
    <ParallaxBackgroundCinematografico
      image={background}
      position="center top"
      overlay={0.45}
    >
      <section className="RazasEdicionHelenica">

        <div className="container RazasEdicionHelenica-Container">

          <h2 className="RazasEdicionHelenica-Title">
            {titulo.texto}{" "}
            <span>{titulo.destacado}</span>
          </h2>

          {bloques.map((bloque) => (
            <TituloCuerpoChildren
              key={bloque.id}
              title={bloque.titulo}
              description={bloque.descripcion}
            >
              <CarrouselResponsiveDeCinco
                items={bloque.cartas}
                renderItem={(item) => (
                  <img
                    src={item.imagen}
                    alt=""
                    className="RazasEdicionHelenica-CardImage"
                  />
                )}
              />
            </TituloCuerpoChildren>
          ))}

        </div>

      </section>
    </ParallaxBackgroundCinematografico>
  );
}