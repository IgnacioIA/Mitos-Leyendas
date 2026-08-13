import "./styles/HijosDeDaanaPageBeneficioCompra.css";

import BackgroundCinematografico from "../../../../components/backgroundCinematografico/BackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselElastico from "../../../../components/carrouselElastico/CarrouselElastico";

import dataHijosDeDaanaPageBeneficioCompra from "./data/dataHijosDeDaanaPageBeneficioCompra";

export default function HijosDeDaanaPageBeneficioCompra() {
  const { background, texto, carrousel } = dataHijosDeDaanaPageBeneficioCompra;

  return (
    <BackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >
      <section className="HijosDeDaanaPageBeneficioCompra">

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
