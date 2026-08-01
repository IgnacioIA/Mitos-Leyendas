import "./styles/RazasEdicionHijoDeDaana.css";

import dataRazasEdicionHijoDeDaana from "./data/dataRazasEdicionHijoDeDaana";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TituloCuerpoChildren from "../../../../components/TituloCuerpoChildren/TituloCuerpoChildren";
import CarrouselResponsiveDeCinco from "../../../../components/CarrouselResponsiveDeCinco/CarrouselResponsiveDeCinco";

export default function RazasEdicionHijoDeDaana() {
  const {
    titulo,
    background,
    bloques,
  } = dataRazasEdicionHijoDeDaana;

  return (
    <ParallaxBackgroundCinematografico
      image={background}
      position="center top"
      overlay={0.45}
    >
      <section className="RazasEdicionHijoDeDaana">

        <div className="container RazasEdicionHijoDeDaana-Container">

          <h2 className="RazasEdicionHijoDeDaana-Title">
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
                    className="RazasEdicionHijoDeDaana-CardImage"
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