// =========================================================
// VideoFrame.jsx
// =========================================================

import "../../styles/sections/aprenderAJugar/VideoFrame.css";

export default function VideoFrame() {

  return (
    <div className="video-frame">

      <iframe
        src="https://www.youtube.com/embed/zaDo_ffZYqI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

    </div>
  );
}