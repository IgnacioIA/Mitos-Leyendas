import "./styles/HijosDeDaanaPageCartasAzar.css";

import BackgroundCinematografico from "../../../../components/backgroundCinematografico/BackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselElastico from "../../../../components/carrouselElastico/CarrouselElastico";

import dataHijosDeDaanaPageCartasAzar from "./data/dataHijosDeDaanaPageCartasAzar";

export default function HijosDeDaanaPageCartasAzar() {
  const { background, texto, carrousel } = dataHijosDeDaanaPageCartasAzar;

  return (
    <BackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >
      <section className="HijosDeDaanaPageCartasAzar">

        <TextoArribaContenidoAbajo
          tituloPrimeraPalabra={texto.tituloPrimeraPalabra}
          tituloSegundaPalabra={texto.tituloSegundaPalabra}
          descripcion={texto.descripcion}
        >
          <CarrouselElastico
            elementos={carrousel.elementos}
          />
        </TextoArribaContenidoAbajo>

      </section>
    </BackgroundCinematografico>
  );
}
