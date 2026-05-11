// =========================================================
// VideoSection.jsx
// =========================================================

import "./VideoOverlay";
import VideoOverlay from "./VideoOverlay";
import VideoContainer from "./VideoContainer";

import "../../styles/sections/aprenderAJugar/VideoSection.css";

import fondo from "../../assets/aprenderAJugar/VIDEO  APRENDE A JUGAR.jpg";

export default function VideoSection() {

  return (
    <section
      className="video-section"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >

      <VideoOverlay />

      <VideoContainer />

    </section>
  );
}