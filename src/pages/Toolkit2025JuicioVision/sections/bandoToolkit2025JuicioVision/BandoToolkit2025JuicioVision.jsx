import "./styles/BandoToolkit2025JuicioVision.css";
import dataBandoToolkit2025JuicioVision from "./data/dataBandoToolkit2025JuicioVision";
import ComponenteFondoParticulasMyL from "../../../../components/ComponenteFondoParticulasMyL/ComponenteFondoParticulasMyL";


export default function BandoToolkit2025JuicioVision() {
  return (
    <ComponenteFondoParticulasMyL>
    <section className="BandoToolkit2025JuicioVision-section">

      <h2 className="BandoToolkit2025JuicioVision-title">
        {dataBandoToolkit2025JuicioVision.titulo}
      </h2>

      <p className="BandoToolkit2025JuicioVision-subtitle">
        {dataBandoToolkit2025JuicioVision.subtitulo}
      </p>

      <div className="BandoToolkit2025JuicioVision-container">

        {dataBandoToolkit2025JuicioVision.productos.map((producto) => (
          <div
            key={producto.id}
            className={`BandoToolkit2025JuicioVision-card BandoToolkit2025JuicioVision-card--${producto.tipo}`}
          >
            <img
              src={producto.imagen}
              alt={producto.titulo}
            />

            <h3>{producto.titulo}</h3>

            <p>{producto.descripcion}</p>

            <a
              href={producto.boton.link}
              className="BandoToolkit2025JuicioVision-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="BandoToolkit2025JuicioVision-btn-bg"></span>

              <span className="BandoToolkit2025JuicioVision-btn-glow"></span>

              <span className="BandoToolkit2025JuicioVision-btn-text">
                {producto.boton.texto}
              </span>
            </a>

          </div>
        ))}

      </div>

    </section>
    </ComponenteFondoParticulasMyL>
  );
}