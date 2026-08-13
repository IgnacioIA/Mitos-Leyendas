import "./styles/HijosDeDaanaPagePaquetitos.css";

import dataHijosDeDaanaPagePaquetitos from "./data/dataHijosDeDaanaPagePaquetitos";

export default function HijosDeDaanaPagePaquetitos() {
  const {
    imagen,
    titulo,
    descripcion,
  } = dataHijosDeDaanaPagePaquetitos;

  return (
    <section className="HijosDeDaanaPagePaquetitosPrincipal" id="Seccion-HijosDeDaanaPagePaquetitos">

      <div className="HijosDeDaanaPagePaquetitosIzquierda">

        <div className="HijosDeDaanaPagePaquetitosContenedorIzquierda">
          <img
            src={imagen.src}
            alt={imagen.alt}
            className="HijosDeDaanaPagePaquetitosContenedorIzquierda-image"
          />
        </div>

      </div>

      <div className="HijosDeDaanaPagePaquetitosDerecha">

        <h2 className="HijosDeDaanaPagePaquetitosDerecha-titulo">
          {titulo}
        </h2>

        <p className="HijosDeDaanaPagePaquetitosDerecha-descripcion">
          {descripcion}
        </p>

      </div>

    </section>
  );
}
