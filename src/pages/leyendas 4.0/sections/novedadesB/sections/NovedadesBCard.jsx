import "../styles/Novedades-b-card.css";

function NovedadesBCard({ title, image, targetId }) {

  const ir = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="novedades-b-card">
      
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="novedades-b-image"
      />

      {/* OVERLAY */}
      <div className="novedades-b-overlay">

        {/* CONTENT */}
        <div className="novedades-b-content">
          
          <h3>{title}</h3>

          <button onClick={ir}>
            EXPLORAR
          </button>

        </div>

      </div>

    </div>
  );
}

export default NovedadesBCard;