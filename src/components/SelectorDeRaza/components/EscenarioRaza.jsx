import "../styles/EscenarioRaza.css";

import PersonajeRaza from "./PersonajeRaza";

// Composición visual de la raza activa, en capas (orden definido en
// EscenarioRaza.css con las variables --capa-*):
//   fondo → logo / decoración → personaje
// El texto y la UI (capa 3) los aporta quien lo consume. No conoce selección,
// hover ni apertura: solo recibe la raza y la dibuja.
//
// Es un wrapper display:contents: sus capas se posicionan contra el
// contenedor que lo usa (Panel o Hero de la Ficha), que define el stacking
// context con isolation:isolate. Ese contenedor también escribe las variables
// de parallax por puntero (--esc-x/--esc-y/--esc-bx/--esc-by).
export default function EscenarioRaza({ razaId, raza, variacion, variante = "panel", fondo }) {
  const { edicion } = raza;

  return (
    <div className={`EscenarioRaza EscenarioRaza--${variante}`}>
      <div
        className="EscenarioRaza-Fondo"
        style={fondo ? { backgroundImage: `url("${fondo}")` } : undefined}
        aria-hidden="true"
      />

      {edicion.imagenSimbolo ? (
        <img
          className="EscenarioRaza-Logo EscenarioRaza-Logo--imagen"
          src={edicion.imagenSimbolo}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <div className="EscenarioRaza-Logo" aria-hidden="true">{raza.simbolo}</div>
      )}

      <div className="EscenarioRaza-Personaje" key={`personaje-${razaId}`}>
        <PersonajeRaza
          nombre={raza.nombre}
          simbolo={raza.simbolo}
          colorPrincipal={edicion.color}
          colorSecundario={edicion.colorSecundario}
          variacion={variacion}
          imagen={raza.imagenPersonaje}
        />
      </div>
    </div>
  );
}
