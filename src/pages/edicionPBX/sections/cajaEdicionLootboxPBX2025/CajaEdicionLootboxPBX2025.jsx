import "./styles/CajaEdicionLootboxPBX2025.css";

import data from "./data/cajaEdicionLootboxPBX2025Data";

export default function CajaEdicionLootboxPBX2025() {

  const sectionStyle =
  data.background.startsWith("#") ||
  data.background.startsWith("rgb") ||
  data.background.startsWith("linear-gradient")
    ? {
        background: data.background,
      }
    : {
        backgroundImage: `url(${data.background})`,
      };

      
  return (
    <section
      className="CajaEdicionLootboxPBX2025"
      style={sectionStyle}
    >
      <div className="CajaEdicionLootboxPBX2025-Content">

        <div className="CajaEdicionLootboxPBX2025-Left">

          <div className="CajaEdicionLootboxPBX2025-Text">

            <h2 className="CajaEdicionLootboxPBX2025-Title">
              {data.title}
            </h2>

            <p className="CajaEdicionLootboxPBX2025-Subtitle">
              {data.subtitle}
            </p>

          </div>

          <div className="CajaEdicionLootboxPBX2025-Actions">

            <a
              href={data.buttonUrl}
              className="CajaEdicionLootboxPBX2025-Button"
            >
              {data.buttonText}
            </a>

          </div>

        </div>

        <div className="CajaEdicionLootboxPBX2025-Right">

          <img
            src={data.image}
            alt={data.title}
            className="CajaEdicionLootboxPBX2025-Image"
          />

        </div>

      </div>
    </section>
  );
}