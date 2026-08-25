import "./styles/SalonDeCampeonesCuadros.css";

import SalonDeCampeonesCuadro from "./sections/SalonDeCampeonesCuadro";

import { salonDeCampeonesCuadrosData } from "./data/salonDeCampeonesCuadrosData";

export default function SalonDeCampeonesCuadros() {
  const { header, cuadros } = salonDeCampeonesCuadrosData;

  return (
    <section className="salonDeCampeonesCuadros">

      <header className="salonDeCampeonesCuadros-header">

        <h2 className="salonDeCampeonesCuadros-titulo">
          {header.titulo}
        </h2>

        <div className="salonDeCampeonesCuadros-descripcion">
          {header.descripcion.map((parrafo, index) => (
            <p key={index}>
              {parrafo}
            </p>
          ))}
        </div>

      </header>

      <div className="salonDeCampeonesCuadros-grid">

        {cuadros.map((cuadro) => (
          <SalonDeCampeonesCuadro
            key={cuadro.id}
            imagen={cuadro.imagen}
            alt={cuadro.alt}
            titulo={cuadro.titulo}
            descripcion={cuadro.descripcion}
          />
        ))}

      </div>

    </section>
  );
}
