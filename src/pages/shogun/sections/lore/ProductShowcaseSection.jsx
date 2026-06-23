import "./styles/product-showcase-section.css";

import ShowcaseContent from "./components/ShowcaseContent";
import ShowcaseImage from "./components/ShowcaseImage";
import ShowcaseButton from "./components/ShowcaseButton";

function ProductShowcaseSection() {

  return (
    <section className="lore-showcase section">

      <div className="container">

        <div className="lore-showcase-layout">

          <div
            className="lore-showcase-info"
            id="next-section"
          >
            <ShowcaseContent />
          </div>

          <div className="lore-showcase-media">
            <ShowcaseImage />
          </div>

        </div>

        <div className="lore-showcase-button-container">
          <ShowcaseButton />
        </div>

      </div>

    </section>
  );

}

export default ProductShowcaseSection;