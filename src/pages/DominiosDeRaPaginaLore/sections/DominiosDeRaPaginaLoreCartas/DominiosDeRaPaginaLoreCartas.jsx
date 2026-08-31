import "./styles/DominiosDeRaPaginaLoreCartas.css";

import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";
import Paralax from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataDominiosDeRaPaginaLoreCartas, {
  TIPOS_SECCION,
} from "./data/dataDominiosDeRaPaginaLoreCartas";

// El mismo renderer sirve para cualquier carrusel: el tipo de sección en el
// data es lo único que decide qué contenido se muestra.
const crearRendererCarrousel = (ComponenteCarrousel) => (seccion) => (
  <ComponenteCarrousel
    items={seccion.imagenes}
    renderItem={({ src, alt }) => (
      <img
        className="DominiosDeRaPaginaLoreCartas-Carta"
        src={src}
        alt={alt}
      />
    )}
  />
);

const RENDERERS = {
  [TIPOS_SECCION.CARROUSEL]: crearRendererCarrousel(CarrouselResponsive),

  [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
    <div className="DominiosDeRaPaginaLoreCartas-DosImagenes">
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

export default function DominiosDeRaPaginaLoreCartas() {
  const { bloques } = dataDominiosDeRaPaginaLoreCartas;

  return (
    <section className="DominiosDeRaPaginaLoreCartas">

      {bloques.map((bloque) => (

        <Paralax
          key={bloque.id}
          image={bloque.fondo}
          overlay={0}
          position="center bot"
          showDivider
        >

          <div className="DominiosDeRaPaginaLoreCartas-content">

            <header className="DominiosDeRaPaginaLoreCartas-header">

              <span className="DominiosDeRaPaginaLoreCartas-subtitle">
                {bloque.encabezado.subtitulo}
              </span>

              <h2 className="DominiosDeRaPaginaLoreCartas-title">

                <span className="DominiosDeRaPaginaLoreCartas-titleLine">
                  {bloque.encabezado.titulo.linea}
                </span>

                <span
                  className="DominiosDeRaPaginaLoreCartas-titleAccent"
                  style={{
                    "--titleAccent-color": bloque.encabezado.colorDestacado,
                    "--titleAccent-shadow": bloque.encabezado.sombraDestacado,
                  }}
                >
                  {bloque.encabezado.titulo.destacado}
                </span>

              </h2>

              <p className="DominiosDeRaPaginaLoreCartas-description">
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
