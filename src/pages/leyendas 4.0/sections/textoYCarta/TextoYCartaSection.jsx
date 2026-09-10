import "./styles/Carta-texto.css";

import dataTextoYCartaSection from "./data/dataTextoYCartaSection.js";
import TextoYCartaBlock from "./sections/TextoYCartaBlock.jsx";

export default function TextoYCartaSection() {

  const { background, bloques } = dataTextoYCartaSection;

  return (

    <section className="carta-texto-theme">

      {/* =====================================================
          BACKGROUND LAYER
      ===================================================== */}

      <div className="carta-texto-background">
        <div
          className="carta-texto-background-image"
          style={{
            "--carta-texto-bg-desktop": `url(${background.desktop})`,
            "--carta-texto-bg-mobile": `url(${background.mobile})`,
            "--carta-texto-bg-overlay-from": background.overlay.from,
            "--carta-texto-bg-overlay-to": background.overlay.to,
          }}
        />
      </div>

      <div className="carta-texto-content">

        {bloques.map((bloque) => (
          <TextoYCartaBlock
            key={bloque.id}
            {...bloque}
          />
        ))}

      </div>

    </section>
  );
}
