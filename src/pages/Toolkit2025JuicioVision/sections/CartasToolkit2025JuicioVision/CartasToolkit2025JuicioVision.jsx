import "./styles/CartasToolkit2025JuicioVision.css";

import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import CarrouselResponsiveDeTres from "../../../../components/CarrouselResponsiveDeTres/CarrouselResponsiveDeTres";
import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";
import Paralax from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataCartasToolkit2025JuicioVision, {
  TIPOS_SECCION,
} from "./data/dataCartasToolkit2025JuicioVision";

// Ambos componentes de carrusel comparten la misma interfaz (items, renderItem),
// así que un mismo factory arma el renderer para cualquiera de ellos: el tipo
// de sección en el data es lo único que decide cuál se usa.
const crearRendererCarrousel = (ComponenteCarrousel) => (seccion) => (
  <ComponenteCarrousel
    items={seccion.imagenes}
    renderItem={({ src, alt }) => (
      <img
        className="CartasToolkit2025JuicioVision-Carta"
        src={src}
        alt={alt}
        loading="lazy"
      />
    )}
  />
);

const RENDERERS = {
  [TIPOS_SECCION.CARROUSEL]: crearRendererCarrousel(CarrouselResponsive),

  [TIPOS_SECCION.CARROUSEL_DE_TRES]: crearRendererCarrousel(
    CarrouselResponsiveDeTres
  ),

  [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
    <div className="CartasToolkit2025JuicioVision-DosImagenes">
      {seccion.imagenes.map(({ src, alt }, index) => (
        <FrameFX key={index}>
          <img src={src} alt={alt} loading="lazy" />
        </FrameFX>
      ))}
    </div>
  ),
};

function renderContenido(seccion) {
  return RENDERERS[seccion.tipo]?.(seccion) ?? null;
}

export default function CartasToolkit2025JuicioVision() {
  const { bloques } = dataCartasToolkit2025JuicioVision;

  return (
    <section className="CartasToolkit2025JuicioVision">

      {bloques.map((bloque) => (

        <Paralax
          key={bloque.id}
          image={bloque.fondo}
          imageMobile={bloque.fondoMobile}
          overlay={0}
          position="center bottom"
          showDivider
        >

          <div className="CartasToolkit2025JuicioVision-content">

            <header className="CartasToolkit2025JuicioVision-header">

              <span className="CartasToolkit2025JuicioVision-subtitle">
                {bloque.encabezado.subtitulo}
              </span>

              <h2 className="CartasToolkit2025JuicioVision-title">

                <span className="CartasToolkit2025JuicioVision-titleLine">
                  {bloque.encabezado.titulo.linea}
                </span>

                <span
                  className="CartasToolkit2025JuicioVision-titleAccent"
                  style={{
                    "--titleAccent-color": bloque.encabezado.colorDestacado,
                    "--titleAccent-shadow": bloque.encabezado.sombraDestacado,
                  }}
                >
                  {bloque.encabezado.titulo.destacado}
                </span>

              </h2>

              <p className="CartasToolkit2025JuicioVision-description">
                {bloque.encabezado.descripcion}
              </p>

            </header>

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