import "./styles/CartasSecretasLootBoxPBX2025.css";

import HeaderContent from "./sections/HeaderContent";
import CarrouselContent from "./sections/CarrouselContent";

import ComponenteFondoParticulasMyL from "../../../../components/ComponenteFondoParticulasMyL/ComponenteFondoParticulasMyL";
import fondoDesktop from "../../../../assets/EdicionPBX2025/cartasSecretasLootBoxPBX2025/FONDO SECRETA.webp";

export default function CartasSecretasLootBoxPBX2025() {
  return (
    
    <section className="CartasSecretasLootBoxPBX2025">

        <ComponenteFondoParticulasMyL
          backgroundDesktop={fondoDesktop}
          backgroundMobile={fondoDesktop}
        >

        <div className="CartasSecretasLootBoxPBX2025-Container">

          <HeaderContent />

          <CarrouselContent />

        </div>
      </ComponenteFondoParticulasMyL>
    </section>

  );
}