import "../styles/Novedad-card.css";

function NovedadCard({ title, image }) {

  return (
    <div
      className="novedad-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >

      <div className="novedad-overlay">

        <div className="novedad-content">

          <h3>{title}</h3>

          <button>
            Ver más
          </button>

        </div>

      </div>

    </div>
  );
}

export default NovedadCard;