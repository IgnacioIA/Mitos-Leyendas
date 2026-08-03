import "./styles/Carta-texto.css";

import fondo from "../../../../assets/mitos4.0/cartaYTexto/fondo.webp";

import textoYCartaData from "./data/textoYCartaData.js";
import TextoYCartaBlock from "./sections/TextoYCartaBlock.jsx";

export default function CartaTexto() {

  return (

    <section className="carta-texto-theme">

      {/* =====================================================
          BACKGROUND LAYER
      ===================================================== */}

      <div
        className="carta-texto-background"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.10),
              rgba(0,0,100,0.10)
            ),
            url(${fondo})
          `
        }}
      />

      <div className="carta-texto-content">

        {textoYCartaData.map((bloque) => (
          <TextoYCartaBlock
            key={bloque.id}
            {...bloque}
          />
        ))}

      </div>

    </section>
  );
}
