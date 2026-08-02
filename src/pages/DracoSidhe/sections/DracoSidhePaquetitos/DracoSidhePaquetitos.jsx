import "./styles/DracoSidhePaquetitos.css";

import dataDracoSidhePaquetitos from "./data/dataDracoSidhePaquetitos";

export default function DracoSidhePaquetitos() {
  const {
    imagen,
    titulo,
    descripcion,
  } = dataDracoSidhePaquetitos;

  return (
    <section className="DracoSidhePaquetitosPrincipal" id="Seccion-DracoSidhePaquetitos">

      <div className="DracoSidhePaquetitosIzquierda">

        <div className="DracoSidhePaquetitosContenedorIzquierda">
          <img
            src={imagen.src}
            alt={imagen.alt}
            className="DracoSidhePaquetitosContenedorIzquierda-image"
          />
        </div>

      </div>

      <div className="DracoSidhePaquetitosDerecha">

        <h2 className="DracoSidhePaquetitosDerecha-titulo">
          {titulo}
        </h2>

        <p className="DracoSidhePaquetitosDerecha-descripcion">
          {descripcion}
        </p>

      </div>

    </section>
  );
}
