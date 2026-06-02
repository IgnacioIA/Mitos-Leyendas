import {
  VIDEO_SECTION
}
from "./data/videoSection.data";

import VideoContent
from "./sections/VideoContent";

import VideoPlayer
from "./sections/VideoPlayer";

import "./styles/AprendeAJugar.css";

export default function VideoSection() {

  return (

    <section
      className="video-section"
    >

      <div
        className="video-section-container"
      >

        <VideoContent
          data={VIDEO_SECTION}
        />

        <VideoPlayer
          videoUrl={
            VIDEO_SECTION.videoUrl
          }
        />

      </div>

    </section>

  );
}