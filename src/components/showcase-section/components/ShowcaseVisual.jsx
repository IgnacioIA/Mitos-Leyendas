import "../styles/showcase-visual.css";

import FrameFX from "../../../components/ui/cartaMovible/FrameFX";

export default function ShowcaseVisual({ image }) {

  return (
    <div className="magic-right-alt">
        <FrameFX>
          <div className="magic-card-alt">
            <img src={image} alt="Carta" />
          </div>
        </FrameFX>
      </div>
  );
}