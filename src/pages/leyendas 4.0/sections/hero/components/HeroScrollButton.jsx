import "../styles/hero-scroll-button.css";

import Button from "../../../../../components/ui/button/Button";

function HeroScrollButton() {

  return (
    <div className="hero-scroll-wrapper">

      <Button href="#next-section" variant="primary">
        VER CONTENIDO
      </Button>

    </div>
  );

}

export default HeroScrollButton;