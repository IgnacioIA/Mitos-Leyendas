const SILUETAS_CONCEPTO = [
  "M185 170l42-50 46 50 35-27 22 51-22 55-37 29-44-9-35-39Z",
  "M169 160l35-52 24 36 25-50 31 50 35-36 19 55-21 57-52 47-56-17-32-45Z",
  "M174 164l28-38 35 23 36-23 33 38 31-16 3 61-25 54-50 20-59-18-34-47Z",
  "M160 168l41-46 28 21 28-51 29 51 43-21 31 48-16 63-58 45-55-8-54-39Z",
  "M170 166l41-54 39 34 40-34 39 54 21 11-20 58-49 42-62-3-49-39Z",
  "M166 161l44-49 39 33 42-33 38 49 25 21-23 52-48 39-62-3-49-40Z",
];

// Silueta genérica de reemplazo cuando la raza todavía no tiene arte real.
// Se elige por índice (no por id) para que el componente no dependa de qué
// razas existen en el proyecto que lo consume.
function PersonajeConcepto({ nombre, simbolo, colorPrincipal, colorSecundario, variacion = 0 }) {
  const gradientId = `SelectorDeRaza-cuerpo-${variacion}`;
  const clothId = `SelectorDeRaza-tela-${variacion}`;
  const cara = SILUETAS_CONCEPTO[variacion % SILUETAS_CONCEPTO.length];

  return (
    <svg viewBox="0 0 520 720" xmlns="http://www.w3.org/2000/svg" aria-label={`Representante ${nombre}`}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={colorSecundario} />
          <stop offset="1" stopColor={colorPrincipal} />
        </linearGradient>
        <linearGradient id={clothId} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#3a413a" />
          <stop offset="1" stopColor="#171a17" />
        </linearGradient>
      </defs>
      <path d="M64 697c4-133 34-234 102-292 21-18 46-34 73-42v-38c-51-17-84-68-84-128 0-86 48-142 105-142 58 0 106 56 106 142 0 60-34 111-84 128v38c26 8 51 24 72 42 68 58 99 159 103 292H64Z" fill={`url(#${gradientId})`} stroke="#232823" strokeWidth="10" />
      <path d={cara} fill="#262b26" stroke="#232823" strokeWidth="7" />
      <path d="M186 194c19 18 45 27 74 27 28 0 54-9 73-27-5 71-31 116-73 116-43 0-69-45-74-116Z" fill="#eee1c9" stroke="#232823" strokeWidth="8" />
      <circle cx="226" cy="234" r="8" fill="#252922" />
      <circle cx="294" cy="234" r="8" fill="#252922" />
      <path d="M231 270q29 20 58 0" fill="none" stroke="#252922" strokeWidth="7" strokeLinecap="round" />
      <path d="M165 398l-70 89 78 49 87-67 87 67 78-49-70-89-95 58Z" fill={`url(#${clothId})`} stroke="#232823" strokeWidth="10" />
      <circle cx="260" cy="520" r="76" fill={colorPrincipal} stroke="#232823" strokeWidth="10" />
      <text x="260" y="555" textAnchor="middle" fontSize="105" fontWeight="1000" fill={colorSecundario}>{simbolo}</text>
    </svg>
  );
}

export default function PersonajeRaza({
  nombre,
  simbolo,
  colorPrincipal,
  colorSecundario,
  variacion,
  imagen,
}) {
  if (imagen) {
    return <img src={imagen} alt={`Representante ${nombre}`} draggable="false" />;
  }

  return (
    <PersonajeConcepto
      nombre={nombre}
      simbolo={simbolo}
      colorPrincipal={colorPrincipal}
      colorSecundario={colorSecundario}
      variacion={variacion}
    />
  );
}
