import "./BannerTextoImagenBoton.css";

export default function BannerTextoImagenBoton({
  imagen,
  imagenAlt = "",
  tituloLinea1 = "¿ESTÁS LISTO PARA",
  tituloLinea2 = "SUMARTE, GLADIADOR?",
  textoBoton = "QUIERO LA LOOTBOX",
  onBotonClick,
  href,
  imagenPrimero = true,
}) {
  // Si viene href, el botón es un <a> (navegación);
  // si no, es un <button> (acción/onClick, ej. abrir modal o scrollear).
  const Boton = href ? "a" : "button";

  return (
    <section className="BannerTextoImagenBoton">
      <div className="BannerTextoImagenBoton-contenedor">
        <div
          className={`BannerTextoImagenBoton-contenidoSuperior ${
            imagenPrimero ? "" : "BannerTextoImagenBoton-contenidoSuperior--invertido"
          }`}
        >
          <div className="BannerTextoImagenBoton-contenidoImagen">
            <img
              className="BannerTextoImagenBoton-imagen"
              src={imagen}
              alt={imagenAlt}
            />
          </div>

          <div className="BannerTextoImagenBoton-contenidoTexto">
            <h2 className="BannerTextoImagenBoton-titulo">
              <span className="BannerTextoImagenBoton-tituloLinea">
                {tituloLinea1}
              </span>
              <span className="BannerTextoImagenBoton-tituloLinea BannerTextoImagenBoton-tituloDestacado">
                {tituloLinea2}
              </span>
            </h2>
          </div>
        </div>

        <div className="BannerTextoImagenBoton-contenidoInferior">
          <Boton
            className="BannerTextoImagenBoton-boton"
            href={href}
            onClick={onBotonClick}
          >
            {textoBoton}
          </Boton>
        </div>
      </div>
    </section>
  );
}