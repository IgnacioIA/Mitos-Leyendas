import "../styles/RecorridoFondo.css";

// Dos capas difuminadas que se funden durante el scroll. Su imagen y su
// opacidad las escribe useRecorridoScroll directo en el DOM.
export default function RecorridoFondo({ capaARef, capaBRef }) {
  return (
    <div className="recorridoFondo" aria-hidden="true">
      <div className="recorridoFondo-capa" ref={capaARef} />
      <div className="recorridoFondo-capa" ref={capaBRef} />
      <div className="recorridoFondo-vineta" />
      <div className="recorridoFondo-grano" />
    </div>
  );
}
