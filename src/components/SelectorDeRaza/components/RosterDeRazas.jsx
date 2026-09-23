import "../styles/RosterDeRazas.css";

import BotonRetratoRaza from "./BotonRetratoRaza";

export default function RosterDeRazas({
  razas,
  ordenRazas,
  razaEnPreview,
  onPreview,
  onAbrir,
}) {
  return (
    <div className="RosterDeRazas">
      {ordenRazas
        .filter((razaId) => razas[razaId])
        .map((razaId, index) => {
          const raza = razas[razaId];

          return (
            <BotonRetratoRaza
              key={razaId}
              nombre={raza.nombre}
              simbolo={raza.simbolo}
              colorRaza={raza.edicion.color}
              colorRazaSecundario={raza.edicion.colorSecundario}
              nombreEdicion={raza.edicion.nombre}
              imagenRetrato={raza.imagenRetrato}
              variacion={index}
              esPreview={razaId === razaEnPreview}
              onMouseEnter={() => onPreview(razaId)}
              onFocus={() => onPreview(razaId)}
              onClick={() => onAbrir(razaId)}
            />
          );
        })}
    </div>
  );
}
