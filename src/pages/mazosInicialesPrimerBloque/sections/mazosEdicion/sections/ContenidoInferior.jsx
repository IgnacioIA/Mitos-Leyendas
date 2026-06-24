import "../styles/ContenidoInferior.css";
import CarrouselElastico from "../../../../../components/carrouselElastico/CarrouselElastico";

export default function ContenidoInferior({
  mazoColeccion,
  botones,
}) {
  return (
    <div className="ContenidoInferior">

      <div className="ContenidoInferior-Top">
        <CarrouselElastico elementos={mazoColeccion} />
      </div>

      <div className="ContenidoInferior-Bottom">

        <a
          href={botones.primary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            ContenidoInferior-Btn
            ContenidoInferior-BtnPrimary
          "
        >
          {botones.primary.label}
        </a>

        <a
          href={botones.secondary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            ContenidoInferior-Btn
            ContenidoInferior-BtnSecondary
          "
        >
          {botones.secondary.label}
        </a>

      </div>

    </div>
  );
}