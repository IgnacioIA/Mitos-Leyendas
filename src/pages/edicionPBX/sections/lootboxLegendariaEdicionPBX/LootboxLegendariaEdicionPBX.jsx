import "./styles/LootboxLegendariaEdicionPBX.css";
import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import {
  fondoDesktop,
  secciones,
  TIPOS_SECCION,
} from "./data/LootboxLegendariaEdicionPBXData";

import BannerTextoImagenBoton from "../../../../components/bannerTextoImagenBoton";
import imagenBanner from "../../../../assets/EdicionPBX2025/lootboxLegendariaEdicionPBX2025/LootboxUltraSecreta/Lootbox 2025 Render.png";

// Definido fuera del componente: no se recrea en cada render
// y queda fácil de extender con nuevos tipos de sección sin tocar el switch.
const RENDERERS = {
  [TIPOS_SECCION.CARROUSEL]: (seccion) => (
    <CarrouselResponsive
      items={seccion.cartas}
      renderItem={(carta) => (
        <img
          className="LootboxLegendariaEdicionPBX-Carta"
          src={carta.imagen}
          alt={carta.nombre}
        />
      )}
    />
  ),
  [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
    <div className="LootboxLegendariaEdicionPBX-DosImagenes">
      {seccion.imagenes.map(({ src, alt }, index) => (
        <img key={index} src={src} alt={alt} />
      ))}
    </div>
  ),
};

function renderContenido(seccion) {
  const render = RENDERERS[seccion.tipo];
  return render ? render(seccion) : null;
}

export default function LootboxLegendariaEdicionPBX() {
  return (
    <BackGround image={fondoDesktop} overlay={0.2} position="center center">
      {secciones.map((seccion) => (
        <TextoArribaContenidoAbajo
          key={seccion.id}
          tituloPrimeraPalabra={seccion.tituloPrimeraPalabra}
          tituloSegundaPalabra={seccion.tituloSegundaPalabra}
          descripcion={seccion.descripcion}
        >
          {renderContenido(seccion)}
        </TextoArribaContenidoAbajo>
      ))}

      <BannerTextoImagenBoton
        imagen={imagenBanner}
        imagenAlt="Gladiador Primer Bloque"
        onBotonClick={() => {
          window.open(
            "https://www.mylargentina.com/productos/lootbox-primer-bloque-2025-buy-a-box-al-azar/",
            "_blank"
          );
        }}
      />
    </BackGround>
  );
}