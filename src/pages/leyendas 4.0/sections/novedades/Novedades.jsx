import "./styles/Novedades.css";

import NovedadesHeader from "./components/NovedadesHeader";
import NovedadesGallery from "./components/NovedadesGallery";

function Novedades() {
  return (
    <section className="novedades section">

      <div className="container">

        <NovedadesHeader />

        <NovedadesGallery />

      </div>

    </section>
  );
}

export default Novedades;