import "./styles/LootboxLegendariaEdicionPBX.css";
import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import {
  fondoDesktop,
  fondoMobile,
  secciones,
  TIPOS_SECCION,
} from "./data/LootboxLegendariaEdicionPBXData";

import BannerTextoImagenBoton from "../../../../components/bannerTextoImagenBoton";
// Mismo archivo que usa CajaEdicionLootboxPBX2025Data.js (verificado por
// checksum: eran dos copias idénticas del mismo render). Se apunta a una
// sola para no duplicar la descarga entre ambas secciones.
import imagenBanner from "../../../../assets/EdicionPBX2025/cajaEdicionLootboxPBX2025/Lootbox 2025 Render.png";

import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";

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
          loading="lazy"
        />
      )}
    />
  ),
  [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
    <div className="LootboxLegendariaEdicionPBX-DosImagenes">
      {seccion.imagenes.map(({ src, alt }, index) => (
      <FrameFX>
        <img key={index} src={src} alt={alt} loading="lazy" />
      </FrameFX>
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
    <BackGround
      image={fondoDesktop}
      imageMobile={fondoMobile}
      overlay={0.2}
      position="center center"
    >
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