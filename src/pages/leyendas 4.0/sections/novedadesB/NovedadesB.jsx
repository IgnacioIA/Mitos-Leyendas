import "./styles/Novedades-b.css";

import NovedadesBHeader from "./sections/NovedadesBHeader";
import NovedadesBGrid from "./sections/NovedadesBGrid";

import ComponenteFondoParticulasMyL from "../../../../components/ComponenteFondoParticulasMyL/ComponenteFondoParticulasMyL";
import fondoDesktop from "../../../../assets/mitos4.0/novedades/FONDO NOVEDADES.WEBP";

function NovedadesB() {
  return (
    <ComponenteFondoParticulasMyL
      backgroundDesktop={fondoDesktop}
      backgroundMobile={fondoDesktop}
    >
      <section className="novedades-b section">
        <div className="container">
          <NovedadesBHeader />
          <NovedadesBGrid />
        </div>
      </section>
    </ComponenteFondoParticulasMyL>
  );
}

export default NovedadesB;