import "./styles/DominiosDeRaPaginaCRework.css";

import BackgroundCinematografico from "../../../../components/backgroundCinematografico/BackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselElastico from "../../../../components/carrouselElastico/CarrouselElastico";

import dataDominiosDeRaPaginaCRework from "./data/dataDominiosDeRaPaginaCRework";

export default function DominiosDeRaPaginaCRework() {
  const { background, texto, carrousel } = dataDominiosDeRaPaginaCRework;

  return (
    <BackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >
      <section className="DominiosDeRaPaginaCRework">

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
