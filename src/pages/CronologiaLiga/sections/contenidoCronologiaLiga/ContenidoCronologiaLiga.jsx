import "./styles/ContenidoCronologiaLiga.css";

import CronologiaLigaTarjeta from "./sections/CronologiaLigaTarjeta";

import { dataContenidoCronologiaLiga } from "./data/dataContenidoCronologiaLiga";

export default function ContenidoCronologiaLiga() {
  const { secciones } = dataContenidoCronologiaLiga;

  return (
    <section className="cronologiaLigaContenido">

      {secciones.map((seccion) => (

        <div
          className="cronologiaLigaSeccion"
          key={seccion.id}
        >

          <h2 className="cronologiaLigaSeccion-titulo">
            {seccion.titulo}
          </h2>

          <div className="cronologiaLigaSeccion-grid">

            {seccion.tarjetas.map((tarjeta) => (
              <CronologiaLigaTarjeta
                key={tarjeta.id}
                imagen={tarjeta.imagen}
              />
            ))}

          </div>

        </div>

      ))}

    </section>
  );
}
