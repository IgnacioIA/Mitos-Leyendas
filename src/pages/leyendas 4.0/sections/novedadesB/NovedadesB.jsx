import "./style/Novedades-b.css";

import NovedadesBHeader from "./components/NovedadesBHeader";
import NovedadesBGrid from "./components/NovedadesBGrid";

function NovedadesB() {

  return (
    <section className="novedades-b section">

      <div className="container">

        <NovedadesBHeader />

        <NovedadesBGrid />

      </div>

    </section>
  );
}

export default NovedadesB;