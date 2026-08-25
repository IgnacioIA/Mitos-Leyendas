import "../styles/CronologiaLigaTarjeta.css";

// A diferencia de TiendasAmigasTarjeta, acá no hay título/descripción/
// localidad/botones: la tarjeta es únicamente la imagen de la fecha.
export default function CronologiaLigaTarjeta({ imagen }) {
  return (
    <article className="cronologiaLigaTarjeta">
      <img
        className="cronologiaLigaTarjeta-imagen"
        src={imagen}
        alt=""
        loading="lazy"
      />
    </article>
  );
}
