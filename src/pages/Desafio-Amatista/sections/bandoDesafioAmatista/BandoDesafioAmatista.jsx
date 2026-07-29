import "./styles/BandoDesafioAmatista.css";
import dataBandoDesafioAmatista from "./data/dataBandoDesafioAmatista";

export default function BandoDesafioAmatista() {
  return (
    <section className="BandoDesafioAmatista-section">

      <h2 className="BandoDesafioAmatista-title">
        {dataBandoDesafioAmatista.titulo}
      </h2>

      <p className="BandoDesafioAmatista-subtitle">
        {dataBandoDesafioAmatista.subtitulo}
      </p>

      <div className="BandoDesafioAmatista-container">

        {dataBandoDesafioAmatista.productos.map((producto) => (
          <div
            key={producto.id}
            className={`BandoDesafioAmatista-card ${producto.tipo}`}
          >
            <img
              src={producto.imagen}
              alt={producto.titulo}
            />

            <h3>{producto.titulo}</h3>

            <p>{producto.descripcion}</p>

            <a
              href={producto.boton.link}
              className="BandoDesafioAmatista-btn"
            >
              <span className="BandoDesafioAmatista-btn-bg"></span>

              <span className="BandoDesafioAmatista-btn-glow"></span>

              <span className="BandoDesafioAmatista-btn-text">
                {producto.boton.texto}
              </span>
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}