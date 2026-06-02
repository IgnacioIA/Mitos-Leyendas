import "../styles/VideoContent.css";

export default function VideoContent({
  data
}) {

  return (

    <div
      className="video-content"
    >

      <p
        className="video-subtitle"
      >
        {data.subtitle}
      </p>

      <h2
        className="video-title"
      >
        {data.title}
      </h2>

      <a
        href={data.buttonUrl}
        className="video-button"
      >
        {data.buttonText}
      </a>

    </div>

  );
}