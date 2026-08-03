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
      showDivider
    >
      <section className="RazasEdicionHelenica" id="helenicaSection">

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
                showButtons={false}
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