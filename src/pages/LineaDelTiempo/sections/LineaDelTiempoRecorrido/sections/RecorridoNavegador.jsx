import "../styles/RecorridoNavegador.css";

// Puntos laterales para saltar a una etapa. Visible solo durante el
// recorrido (isVisible lo calcula useRecorridoScroll); oculto en mobile.
export default function RecorridoNavegador({ etapas, etapaActiva, isVisible, onSeleccionar }) {
  return (
    <nav
      className={`recorridoNavegador${isVisible ? " is-visible" : ""}`}
      aria-label="Saltar a un formato"
    >
      {etapas.map((etapa, index) => (
        <button
          key={etapa.id}
          type="button"
          className={index === etapaActiva ? "is-active" : undefined}
          aria-label={`Ir a ${etapa.formato}`}
          aria-current={index === etapaActiva ? "step" : undefined}
          onClick={() => onSeleccionar(etapa.id)}
        >
          <span aria-hidden="true">{etapa.formato} · {etapa.periodo}</span>
        </button>
      ))}
    </nav>
  );
}
