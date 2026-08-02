import "./styles/DracoSidheProductosDobles.css";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

import dataDracoSidheProductosDobles from "./data/dataDracoSidheProductosDobles";
export default function DracoSidheProductosDobles() {
  const {
    background,
    header,
    productos,
  } = dataDracoSidheProductosDobles;

  return (
    <ParallaxBackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >
      <section className="DracoSidheProductosDobles" id="Seccion-DracoSidheProductosDobles">

        {/* HEADER */}

        <header className="HeaderDracoSidheProductosDobles">

          <h2 className="HeaderDracoSidheProductosDobles-title">
            {header.titulo}
            <br />
            {header.subtitulo}{" "}
            <span className="DracoSidheProductosDobles-highlight">
              {header.destacado}
            </span>
          </h2>

        </header>

        {/* CONTENIDO */}

        <div className="ContenidoDracoSidheProductosDobles">

          <div className="contenedorContenidoContenidoDracoSidheProductosDobles">

            {productos.map((producto) => (
              <article
                key={producto.id}
                className="CardProductoDracoSidhe"
              >

                <img
                  src={producto.imagen}
                  alt={producto.alt}
                  className="CardProductoDracoSidhe-image"
                />

                <a
                  href={producto.explorar.href}
                  className="CardProductoDracoSidhe-button CardProductoDracoSidhe-button--explorar"
                >
                  {producto.explorar.texto}
                </a>

                <a
                  href={producto.comprar.href}
                  className="CardProductoDracoSidhe-button CardProductoDracoSidhe-button--comprar"
                >
                  {producto.comprar.texto}
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>
    </ParallaxBackgroundCinematografico>
  );
}