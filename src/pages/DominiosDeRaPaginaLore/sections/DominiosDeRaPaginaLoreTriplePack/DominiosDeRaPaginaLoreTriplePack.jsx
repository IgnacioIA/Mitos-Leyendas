import "./styles/DominiosDeRaPaginaLoreTriplePack.css";

import BannerTextoImagenBoton from "../../../../components/bannerTextoImagenBoton";

import { banner } from "./data/DominiosDeRaPaginaLoreTriplePackData";





export default function DominiosDeRaPaginaLoreTriplePack() {
  return (
    <section className="DominiosDeRaPaginaLoreTriplePack">

      <BannerTextoImagenBoton
        imagen={banner.imagen}
        imagenAlt={banner.imagenAlt}
        tituloLinea1={banner.tituloLinea1}
        tituloLinea2={banner.tituloLinea2}
        textoBoton={banner.textoBoton}
        href={banner.href}
        imagenPrimero={banner.imagenPrimero}
      />

    </section>
  );
}
