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

        <InteresGrid
          items={INTERES_ITEMS}
        />

      </div>

    </section>

  );
}