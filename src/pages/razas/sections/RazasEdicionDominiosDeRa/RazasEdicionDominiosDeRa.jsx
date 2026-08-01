import "./styles/RazasEdicionDominiosDeRa.css";

import dataRazasEdicionDominiosDeRa from "./data/dataRazasEdicionDominiosDeRa";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TituloCuerpoChildren from "../../../../components/TituloCuerpoChildren/TituloCuerpoChildren";
import CarrouselResponsiveDeCinco from "../../../../components/CarrouselResponsiveDeCinco/CarrouselResponsiveDeCinco";

export default function RazasEdicionDominiosDeRa() {
  const {
    titulo,
    background,
    bloques,
  } = dataRazasEdicionDominiosDeRa;

  return (
    <ParallaxBackgroundCinematografico
      image={background}
      position="center top"
      overlay={0.45}
    >
      <section className="RazasEdicionDominiosDeRa">

        <div className="container RazasEdicionDominiosDeRa-Container">

          <h2 className="RazasEdicionDominiosDeRa-Title">
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
                    className="RazasEdicionDominiosDeRa-CardImage"
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