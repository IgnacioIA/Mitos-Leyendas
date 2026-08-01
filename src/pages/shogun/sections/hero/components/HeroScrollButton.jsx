import "../styles/hero-scroll-button.css";

import Button from "../../../../../components/ui/button/Button";

function HeroScrollButton() {

  return (
    <div className="hero-scroll-wrapper">

      <Button href="#next-section" variant="primary" className="hero-buton">
        DESCUBRÍ TODO EL CONTENIDO
      </Button>

    </div>
  );

}

export default HeroScrollButton;