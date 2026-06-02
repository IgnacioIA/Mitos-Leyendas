import { INTERES_ITEMS }
from "./data/interes.data";

import InteresGrid
from "./sections/InteresGrid";

import "./styles/Interes.css";

export default function Interes() {

  return (

    <section className="interes">

      <div className="interes-overlay" />

      <div className="interes-content">

        <h2 className="interes-title">
          ESTO TE PUEDE INTERESAR
        </h2>

        <InteresGrid
          items={INTERES_ITEMS}
        />

      </div>

    </section>

  );
}