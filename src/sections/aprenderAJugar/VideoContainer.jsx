// =========================================================
// VideoContainer.jsx
// =========================================================

import VideoFrame from "./VideoFrame";

import "../../styles/sections/aprenderAJugar/VideoContainer.css";

export default function VideoContainer() {

  return (
    <div className="video-container">

      <div className="video-header">

        <h2 className="video-title">
          EMPEZÁ A JUGAR AHORA
        </h2>

      </div>

      <VideoFrame />

    </div>
  );
}