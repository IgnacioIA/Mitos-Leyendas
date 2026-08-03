import "./styles/DracoSidheKits.css";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TituloDescripcionDosCarrousel from "../../../../components/TituloDescripcionDosCarrousel/TituloDescripcionDosCarrousel";

import CarrouselResponsiveDeTres from "../../../../components/CarrouselResponsiveDeTres/CarrouselResponsiveDeTres";
import CarrouselElastico from "../../../../components/carrouselElastico/CarrouselElastico";

import dataDracoSidheKits from "./data/dataDracoSidheKits";

export default function DracoSidheKits() {
  const renderBloque = (bloque) => {
    switch (bloque.tipo) {
      case "responsiveTres":
        return (
          <CarrouselResponsiveDeTres
            items={bloque.items}
            renderItem={(imagen) => (
              <img
                src={imagen}
                alt=""
                className="DracoSidheKits-CardImage"
              />
            )}
          />
        );

      case "elastico":
        return (
          <CarrouselElastico
            elementos={bloque.items}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {dataDracoSidheKits.map((kit) => (
        <ParallaxBackgroundCinematografico
          key={kit.id}
          image={kit.background.image}
          overlay={kit.background.overlay}
          position={kit.background.position}
        >
          <section
            className="DracoSidheKits"
            id={kit.sectionId}
          >
            <TituloDescripcionDosCarrousel
              titulo={kit.titulo}
              descripcion={kit.descripcion}
              tituloPrimerBloque={kit.primerBloque.titulo}
              tituloSegundoBloque={kit.segundoBloque.titulo}
            >
              {renderBloque(kit.primerBloque)}
              {renderBloque(kit.segundoBloque)}
            </TituloDescripcionDosCarrousel>
          </section>
        </ParallaxBackgroundCinematografico>
      ))}
    </>
  );
}