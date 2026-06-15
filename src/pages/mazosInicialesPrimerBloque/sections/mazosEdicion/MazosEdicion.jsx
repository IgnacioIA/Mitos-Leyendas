import "./styles/MazosEdicion.css";

import mazosEdicionData from "./data/MazosEdicionData";

import ContenidoSuperior from "./sections/ContenidoSuperior";
import ContenidoInferior from "./sections/ContenidoInferior";

export default function MazosEdicion() {
  return (
    <section className="Page-MazosEdicion-Section">

      {mazosEdicionData.map((mazo) => (

        <article
          key={mazo.id}
          className="Page-MazosEdicion-Item"
          style={{
            backgroundImage: `url(${mazo.background})`,
          }}
        >

          <div className="Page-MazosEdicion-Overlay">

            <ContenidoSuperior
              layout={mazo.layout}
              {...mazo.contenidoSuperior}
            />

            <ContenidoInferior
              {...mazo.contenidoInferior}
            />

          </div>

        </article>

      ))}

    </section>
  );
}