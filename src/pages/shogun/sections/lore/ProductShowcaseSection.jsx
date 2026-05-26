import "./styles/product-showcase-section.css";

import ShowcaseContent from "./components/ShowcaseContent";
import ShowcaseImage from "./components/ShowcaseImage";
import ShowcaseButton from "./components/ShowcaseButton";

function ProductShowcaseSection() {

  return (
    <section
      className="product-showcase section"
    >


      <div className="container">

        <div className="showcase-layout">

          <div className="showcase-info"
          id="next-section">
            <ShowcaseContent />
            <ShowcaseButton />
          </div>

          <div className="showcase-media">
            <ShowcaseImage />
          </div>

        </div>

      </div>

    </section>
  );

}

export default ProductShowcaseSection;