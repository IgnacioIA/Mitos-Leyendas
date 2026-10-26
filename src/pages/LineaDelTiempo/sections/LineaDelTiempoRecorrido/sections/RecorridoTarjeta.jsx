import "../styles/RecorridoTarjeta.css";

import RecorridoGaleria from "./RecorridoGaleria";

export default function RecorridoTarjeta({ etapa, galeriaTitulo }) {
  const { formato, periodo, titulo, parrafos, cierre, banner, cartas } = etapa;

  return (
    <section className="recorridoTarjeta" aria-label={formato}>

      <div className="recorridoTarjeta-foto" style={{ "--foto": `url("${banner}")` }}>
        <img
          src={banner}
          alt={`Ilustración de ${formato}`}
          loading="lazy"
          draggable={false}
        />
        <div className="recorridoTarjeta-tag">{formato}</div>
      </div>

      <div className="recorridoTarjeta-contenido">
        <div className="recorridoTarjeta-anios">{periodo}</div>

        <h3 className="recorridoTarjeta-titulo">{titulo}</h3>

        {parrafos.map((parrafo) => (
          <p key={parrafo} className="recorridoTarjeta-parrafo">{parrafo}</p>
        ))}

        <p className="recorridoTarjeta-parrafo recorridoTarjeta-cierre">{cierre}</p>
      </div>

      <RecorridoGaleria titulo={galeriaTitulo} formato={formato} cartas={cartas} />

    </section>
  );
}
