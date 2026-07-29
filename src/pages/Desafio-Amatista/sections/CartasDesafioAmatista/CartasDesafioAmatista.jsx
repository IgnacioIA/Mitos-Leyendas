import "./styles/CartasDesafioAmatista.css";

import CartaDeTres from "../../../../components/CartaDeTres/CartaDeTres";

import dataCartasDesafioAmatista from "./data/dataCartasDesafioAmatista";

export default function CartasDesafioAmatista() {
  const {
    fondo,
    encabezado,
    bloques,
  } = dataCartasDesafioAmatista;

  const {
    subtitulo,
    titulo,
    descripcion,
  } = encabezado;

  return (
    <section
      className="CartasDesafioAmatista"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="CartasDesafioAmatista-overlay" />

      <div className="CartasDesafioAmatista-content">

        <header className="CartasDesafioAmatista-header">

          <span className="CartasDesafioAmatista-subtitle">
            {subtitulo}
          </span>

          <h2 className="CartasDesafioAmatista-title">

            <span className="CartasDesafioAmatista-titleLine">
              {titulo.linea}
            </span>

            <span className="CartasDesafioAmatista-titleAccent">
              {titulo.destacado}
            </span>

          </h2>

          <p className="CartasDesafioAmatista-description">
            {descripcion}
          </p>

        </header>

    
    

      </div>

    </section>
  );
}