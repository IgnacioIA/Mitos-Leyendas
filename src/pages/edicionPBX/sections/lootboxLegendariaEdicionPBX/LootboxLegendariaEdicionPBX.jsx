import "./styles/LootboxLegendariaEdicionPBX.css";

import ComponenteFondoParticulasMyL from "../../../../components/ComponenteFondoParticulasMyL/ComponenteFondoParticulasMyL";

import ContentHeader from "./sections/ContentHeader-LootboxLegendariaEdicionPBX";
import ContentCarrousel from "./sections/ContentCarrousel-LootboxLegendariaEdicionPBX";

import {
  tituloPrimeraPalabra,
  tituloSegundaPalabra,
  descripcion,
  fondoDesktop,
  fondoMobile,
} from "./data/LootboxLegendariaEdicionPBXData";

export default function LootboxLegendariaEdicionPBX() {
  return (
    <ComponenteFondoParticulasMyL
      backgroundDesktop={fondoDesktop}
      backgroundMobile={fondoMobile}
    >
      <section className="LootboxLegendariaEdicionPBX">

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