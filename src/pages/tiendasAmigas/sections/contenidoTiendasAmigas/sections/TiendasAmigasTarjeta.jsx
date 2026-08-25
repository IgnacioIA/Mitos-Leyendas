import "../styles/TiendasAmigasTarjeta.css";

import TiendasAmigasBoton from "./TiendasAmigasBoton";

export default function TiendasAmigasTarjeta({
  logo,
  titulo,
  descripcion,
  botones = [],
}) {
  return (
    <article className="tiendasAmigasTarjeta">

      <img
        className="tiendasAmigasTarjeta-logo"
        src={logo}
        alt={titulo ? `Logo de ${titulo}` : ""}
        loading="lazy"
      />

      <div className="tiendasAmigasTarjeta-texto">

        <h3 className="tiendasAmigasTarjeta-titulo">
          {titulo}
        </h3>

        <p className="tiendasAmigasTarjeta-descripcion">
          {descripcion.texto}{" "}
          <span className="tiendasAmigasTarjeta-localidad">
            {descripcion.localidad}
          </span>
        </p>

      </div>

      {/* Máximo 4 botones por tarjeta (ver dataContenidoTiendasAmigas.js) */}
      {botones.length > 0 && (
        <div className="tiendasAmigasTarjeta-botones">
          {botones.slice(0, 4).map((boton, index) => (
            <TiendasAmigasBoton
              key={`${boton.tipo}-${index}`}
              tipo={boton.tipo}
              url={boton.url}
            />
          ))}
        </div>
      )}

    </article>
  );
}
