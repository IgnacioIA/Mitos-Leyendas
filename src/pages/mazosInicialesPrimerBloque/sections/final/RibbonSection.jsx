// =========================================================
// RibbonSection.jsx
// =========================================================

import RibbonOverlay from "./RibbonOverlay";
import RibbonContent from "./RibbonContent";
import banner from "../../../../assets/final/FINAL.jpg";

import "../../styles/sections/final/ribbon-section.css";

function RibbonSection() {
  return (
    <section className="ribbon-section"
    style={{ backgroundImage: `url(${banner})` }}>
      <RibbonOverlay />
      <RibbonContent />
    </section>
  );
}

export default RibbonSection;