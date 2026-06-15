import "../styles/ContenidoInferior.css";

import CarrouselElastico from "../../../../../components/carrouselElastico/CarrouselElastico";

export default function ContenidoInferior({
  mazoColeccion,
}) {
  return (
    <div className="ContenidoInferior">

      <div className="ContenidoInferior-Top">

        <CarrouselElastico
          elementos={mazoColeccion}
        />

      </div>

      <div className="ContenidoInferior-Bottom">

        <button
          className="
            ContenidoInferior-Btn
            ContenidoInferior-BtnPrimary
          "
        >
          QUIERO MI MAZO DRAGÓN
        </button>

        <button
          className="
            ContenidoInferior-Btn
            ContenidoInferior-BtnSecondary
          "
        >
          TUTORIAL DEL MAZO
        </button>

      </div>

    </div>
  );
}