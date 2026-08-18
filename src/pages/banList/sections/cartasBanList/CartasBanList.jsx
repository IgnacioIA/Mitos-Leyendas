import "./styles/CartasBanList.css";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/carrouselResponsive/CarrouselResponsive";
import CarrouselElastico from "../../../../components/carrouselElastico/CarrouselElastico";

import dataCartasBanList, {
  TIPOS_SECCION,
} from "./data/dataCartasBanList";

// Un renderer por tipo de sección: agregar/cambiar el children de una
// sección es elegir su "tipo" en el data, no tocar este componente
// (mismo patrón que CartasToolkit2025JuicioVision.jsx).
const RENDERERS = {
  [TIPOS_SECCION.CARROUSEL]: (seccion) => (
    <CarrouselResponsive
      items={seccion.imagenes}
      renderItem={({ src, alt }) => (
        <img
          className="CartasBanList-Carta"
          src={src}
          alt={alt}
        />
      )}
    />
  ),

  [TIPOS_SECCION.CARROUSEL_ELASTICO]: (seccion) => (
    <CarrouselElastico
      elementos={seccion.imagenes.map(({ src, alt }, index) => ({
        id: index,
        imagen: src,
        alt,
      }))}
    />
  ),

  [TIPOS_SECCION.SOLO_TEXTO]: () => null,
};

function renderContenido(seccion) {
  return RENDERERS[seccion.tipo]?.(seccion) ?? null;
}

// Las secciones con carrousel necesitan cartas para tener sentido; las de
// solo texto no dependen de imágenes, así que nunca se ocultan por eso.
function tieneContenido(seccion) {
  return (
    seccion.tipo === TIPOS_SECCION.SOLO_TEXTO ||
    seccion.imagenes.length > 0
  );
}

export default function CartasBanList() {
  const { bloques } = dataCartasBanList;

  return (
    <section className="CartasBanList">

      {bloques.map((bloque) => (

        <ParallaxBackgroundCinematografico
          key={bloque.id}
          id={bloque.id}
          image={bloque.fondo}
          overlay={bloque.overlay}
          position="center top"
          showDivider

        >

          <div className="CartasBanList-content">

            <img
              className="CartasBanList-tituloImagen"
              src={bloque.tituloImagen}
              alt={bloque.nombre}
            />

            {bloque.secciones
              .filter(tieneContenido)
              .map((seccion) => (

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

        </ParallaxBackgroundCinematografico>

      ))}

    </section>
  );
}
