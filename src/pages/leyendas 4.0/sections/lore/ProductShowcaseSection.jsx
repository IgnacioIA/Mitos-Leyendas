import "./styles/product-showcase-section.css";

import ShowcaseContent from "./components/ShowcaseContent";
import ShowcaseImage from "./components/ShowcaseImage";
import ShowcaseButton from "./components/ShowcaseButton";
import ShowcaseFog from "./components/ShowcaseFog";

function ProductShowcaseSection() {

  return (
    <section
      id="next-section"
      className="product-showcase section"
    >

      <ShowcaseFog />

      <div className="container">

        <div className="showcase-layout">

          <div className="showcase-info">
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