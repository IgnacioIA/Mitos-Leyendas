import "../styles/VideoPlayer.css";

export default function VideoPlayer({
  videoUrl
}) {

  return (

    <div
      className="video-player"
    >

      <iframe
        src={videoUrl}
        title="Video"
        allowFullScreen
      />

    </div>

  );
}