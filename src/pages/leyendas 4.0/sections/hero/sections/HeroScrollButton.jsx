import "../styles/hero-scroll-button.css";

import Button from "../../../../../components/ui/button/Button";

function HeroScrollButton({ label, href, variant }) {

  return (
    <div className="hero-scroll-wrapper">

      <Button href={href} variant={variant}>
        {label}
      </Button>

    </div>
  );

}

export default HeroScrollButton;
