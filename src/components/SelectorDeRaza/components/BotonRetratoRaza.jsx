import PersonajeRaza from "./PersonajeRaza";

export default function BotonRetratoRaza({
  nombre,
  simbolo,
  colorRaza,
  colorRazaSecundario,
  nombreEdicion,
  imagenRetrato,
  variacion,
  esPreview,
  onMouseEnter,
  onFocus,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`RosterDeRazas-Boton${esPreview ? " is-preview" : ""}`}
      style={{ "--color-raza": colorRaza }}
      aria-label={nombre}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onClick={onClick}
    >
      <span className="RosterDeRazas-Sweep" aria-hidden="true" />
      <span className="RosterDeRazas-Corner" aria-hidden="true" />
      <span className="RosterDeRazas-EdicionDot" title={nombreEdicion} />
      <span className="RosterDeRazas-Mini">
        <PersonajeRaza
          nombre={nombre}
          simbolo={simbolo}
          colorPrincipal={colorRaza}
          colorSecundario={colorRazaSecundario}
          variacion={variacion}
          imagen={imagenRetrato}
        />
      </span>
      <span className="RosterDeRazas-Tag">{nombre}</span>
    </button>
  );
}
