import "./styles/HijosDeDaanaPageCartas.css";

import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import CarrouselResponsiveDeTres from "../../../../components/CarrouselResponsiveDeTres/CarrouselResponsiveDeTres";
import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";
import Paralax from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataHijosDeDaanaPageCartas, {
  TIPOS_SECCION,
} from "./data/dataHijosDeDaanaPageCartas";

// Ambos componentes de carrusel comparten la misma interfaz (items, renderItem),
// así que un mismo factory arma el renderer para cualquiera de ellos: el tipo
// de sección en el data es lo único que decide cuál se usa.
const crearRendererCarrousel = (ComponenteCarrousel) => (seccion) => (
  <ComponenteCarrousel
    items={seccion.imagenes}
    renderItem={({ src, alt }) => (
      <img
        className="HijosDeDaanaPageCartas-Carta"
        src={src}
        alt={alt}
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
    <div className="HijosDeDaanaPageCartas-DosImagenes">
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

export default function HijosDeDaanaPageCartas() {
  const { bloques } = dataHijosDeDaanaPageCartas;

  return (
    <section className="HijosDeDaanaPageCartas">

      {bloques.map((bloque) => (

        <Paralax
          key={bloque.id}
          image={bloque.fondo}
          overlay={0}
          position="center bot"
          showDivider
        >

          <div className="HijosDeDaanaPageCartas-content">

            <header className="HijosDeDaanaPageCartas-header">

              <span className="HijosDeDaanaPageCartas-subtitle">
                {bloque.encabezado.subtitulo}
              </span>

              <h2 className="HijosDeDaanaPageCartas-title">

                <span className="HijosDeDaanaPageCartas-titleLine">
                  {bloque.encabezado.titulo.linea}
                </span>

                <span
                  className="HijosDeDaanaPageCartas-titleAccent"
                  style={{
                    "--titleAccent-color": bloque.encabezado.colorDestacado,
                    "--titleAccent-shadow": bloque.encabezado.sombraDestacado,
                  }}
                >
                  {bloque.encabezado.titulo.destacado}
                </span>

              </h2>

              <p className="HijosDeDaanaPageCartas-description">
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
