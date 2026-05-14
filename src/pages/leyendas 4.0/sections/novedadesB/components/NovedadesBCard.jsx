import "../style/Novedades-b-card.css";

function NovedadesBCard({ title, image }) {

  return (
     <article className="novedades-b-card">

      <img
        src={image}
        alt={title}
        className="novedades-b-image"
      />

      <div className="novedades-b-overlay">

        <div className="novedades-b-content">

          <h3>{title}</h3>

          <button>
            Ver más
          </button>

        </div>

      </div>

    </article>
  );
}

export default NovedadesBCard;