import "./styles/AcercaDe.css";

import AcercaDeHeader from "./sections/AcercaDeHeader";
import AcercaDeGrid from "./sections/AcercaDeGrid";

export default function AcercaDe() {
  return (
    <section className="acerca-de">

      <div className="container">

        <AcercaDeHeader />

        <AcercaDeGrid />

      </div>

    </section>
  );
}