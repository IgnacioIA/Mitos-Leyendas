import "./HeroContent.css";

import Button from "../ui/button/Button";

export default function HeroContent() {
  return (
    <div className="hero-content">

      <span className="overline">
        NUEVA EXPANSIÓN
      </span>

      <h1 className="hero-title">
        Mitos y Leyendas
      </h1>

      <p className="hero-description">
        Un universo de cartas, magia y estrategia.
      </p>

      <div className="hero-actions">

        <Button variant="primary">
          Explorar
        </Button>

        <Button variant="secondary">
          Ver Más
        </Button>

      </div>

    </div>
  );
}