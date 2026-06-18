import "./styles/CartasNuevasEdicionLootbox.css";

import ComponenteFondoParticulasMyL from "../../../../components/ComponenteFondoParticulasMyL/ComponenteFondoParticulasMyL";

import ContentHeader from "./sections/ContentHeader";
import ContentCarrousel from "./sections/ContentCarrousel";

import {
  tituloPrimeraPalabra,
  tituloSegundaPalabra,
  descripcion,
  fondoDesktop,
  fondoMobile,
} from "./data/CartasNuevasEdicionLootboxData";

export default function CartasNuevasEdicionLootbox() {
  return (
    <ComponenteFondoParticulasMyL
      backgroundDesktop={fondoDesktop}
      backgroundMobile={fondoMobile}
    >
      <section className="CartasNuevasEdicionLootbox">

        <ContentHeader
          tituloPrimeraPalabra={tituloPrimeraPalabra}
          tituloSegundaPalabra={tituloSegundaPalabra}
          descripcion={descripcion}
        />

        <ContentCarrousel />

      </section>
    </ComponenteFondoParticulasMyL>
  );
}