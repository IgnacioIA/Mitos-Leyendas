import "./styles/Novedades.css";

import { novedadesData } from "./data/novedades.data.js";

import NovedadesHeader from "./components/NovedadesHeader";
import NovedadesGallery from "./components/NovedadesGallery";

export default function Novedades() {
  return (
    <section className="novedades section">

      <div className="container">

        <NovedadesHeader />

        <NovedadesGallery items={novedadesData} />

      </div>

    </section>
  );
}
