import "./styles/CartasDesafioAmatista.css";

import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";
import Paralax from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataCartasDesafioAmatista, {
  TIPOS_SECCION,
} from "./data/dataCartasDesafioAmatista";

const RENDERERS = {
  [TIPOS_SECCION.CARROUSEL]: (seccion) => (
    <CarrouselResponsive
      items={seccion.imagenes}
      renderItem={({ src, alt }) => (
        <img
          className="CartasDesafioAmatista-Carta"
          src={src}
          alt={alt}
        />
      )}
    />
  ),

  [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
    <div className="CartasDesafioAmatista-DosImagenes">
      {seccion.imagenes.map(({ src, alt }, index) => (
        <FrameFX key={index}>
          <img src={src} alt={alt} />
        </FrameFX>
      ))}
    </div>
  ),
};

function renderContenido(seccion) {
  return RENDERERS[seccion.tipo]?.(seccion) ?? null;
}

export default function CartasDesafioAmatista() {
  const { encabezado, bloques } = dataCartasDesafioAmatista;

  return (
    <section className="CartasDesafioAmatista">

      {bloques.map((bloque, index) => (

        <Paralax
          key={bloque.id}
          image={bloque.fondo}
          overlay={0}
          position="center center"
        >

          <div className="CartasDesafioAmatista-content">

            {index === 0 && (

              <header className="CartasDesafioAmatista-header">

                <span className="CartasDesafioAmatista-subtitle">
                  {encabezado.subtitulo}
                </span>

                <h2 className="CartasDesafioAmatista-title">

                  <span className="CartasDesafioAmatista-titleLine">
                    {encabezado.titulo.linea}
                  </span>

                  <span className="CartasDesafioAmatista-titleAccent">
                    {encabezado.titulo.destacado}
                  </span>

                </h2>

                <p className="CartasDesafioAmatista-description">
                  {encabezado.descripcion}
                </p>

              </header>

            )}

            {bloque.secciones.map((seccion) => (

              <TextoArribaContenidoAbajo
                key={seccion.id}
                tituloPrimeraPalabra={seccion.tituloPrimeraPalabra}
                tituloSegundaPalabra={seccion.tituloSegundaPalabra}
                descripcion={seccion.descripcion}
              >
                {renderContenido(seccion)}
              </TextoArribaContenidoAbajo>

            ))}

          </div>

        </Paralax>

      ))}

    </section>
  );
}