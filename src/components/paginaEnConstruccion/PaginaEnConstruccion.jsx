import "./PaginaEnConstruccion.css";
import ImagenConstruccion from "../../assets/enConstruccion.webp";

export default function PaginaEnConstruccion({
  mensaje = "Página en construcción",
}) {
  return (
    <section className="PaginaEnConstruccion">
      <div className="PaginaEnConstruccion-Contenido">
        <img
          src={ImagenConstruccion}
          alt="Página en construcción"
          className="PaginaEnConstruccion-Imagen"
        />

        <h1 className="PaginaEnConstruccion-Titulo">
          {mensaje}
        </h1>
      </div>
    </section>
  );
}