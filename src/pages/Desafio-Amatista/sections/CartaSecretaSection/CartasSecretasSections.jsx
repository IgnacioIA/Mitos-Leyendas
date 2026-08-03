import "./styles/CartasSecretasSection.css";

import CartaMvConTexto from "../../../../components/CartaMvConTexto/CartaMvConTexto";
import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataCartasSecretasSection from "./data/dataCartasSecretasSection";

export default function CartasSecretasSection() {
  const {
    titulo,
    tituloDestacado,
    fondo,
    ...contenido
  } = dataCartasSecretasSection;

  return (
    <section className="CartasSecretasSection">
      <ParallaxBackgroundCinematografico
        image={fondo}
        overlay={0}
        position="center center"
      >
        <CartaMvConTexto
          {...contenido}
          titulo={
            <>
              <span className="gold-text">{tituloDestacado}</span>{" "}
              {titulo}
            </>
          }
        />
      </ParallaxBackgroundCinematografico>
    </section>
  );
}