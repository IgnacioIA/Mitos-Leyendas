import "../styles/AprendeAJugarVideoContainer-MazosInicialPB.css";

export default function AprendeAJugarVideoContainer({
  videoUrl,
}) {
  return (
    <div className="AprendeAJugarVideoContainer-MazosInicialPB">

      <iframe
        src={videoUrl}
        title="Aprende a jugar"
        allowFullScreen
        className="AprendeAJugarVideo-MazosInicialPB"
      />

    </div>
  );
}