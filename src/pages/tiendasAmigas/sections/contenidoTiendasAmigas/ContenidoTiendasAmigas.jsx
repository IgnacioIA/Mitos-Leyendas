import "./styles/ContenidoTiendasAmigas.css";

import TiendasAmigasTarjeta from "./sections/TiendasAmigasTarjeta";

import { dataContenidoTiendasAmigas } from "./data/dataContenidoTiendasAmigas";

export default function ContenidoTiendasAmigas() {
  const { secciones } = dataContenidoTiendasAmigas;

  return (
    <section className="tiendasAmigasContenido">

      {secciones.map((seccion) => (

        <div
          className="tiendasAmigasSeccion"
          key={seccion.id}
        >

          <h2 className="tiendasAmigasSeccion-titulo">
            {seccion.titulo}
          </h2>

          <div className="tiendasAmigasSeccion-grid">

            {seccion.tarjetas.map((tarjeta) => (
              <TiendasAmigasTarjeta
                key={tarjeta.id}
                logo={tarjeta.logo}
                titulo={tarjeta.titulo}
                descripcion={tarjeta.descripcion}
                botones={tarjeta.botones}
              />
            ))}

          </div>

        </div>

      ))}

    </section>
  );
}
