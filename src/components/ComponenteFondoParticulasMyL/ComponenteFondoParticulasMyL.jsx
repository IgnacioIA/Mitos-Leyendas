import "./ComponenteFondoParticulasMyL.css";

export default function ComponenteFondoParticulasMyL({
  backgroundDesktop,
  backgroundMobile,
  backgroundColor,
  children,
}) {
  const usarColor = Boolean(backgroundColor);

  return (
    <section
      className="ComponenteFondoParticulasMyL"
      style={usarColor ? { backgroundColor } : undefined}
    >
      {/* Renderizar imagen SOLO si no hay color */}
      {!usarColor && backgroundDesktop && (
        <picture className="ComponenteFondoParticulasMyL-Background">
          {backgroundMobile && (
            <source media="(max-width: 768px)" srcSet={backgroundMobile} />
          )}

          <img
            src={backgroundDesktop}
            alt=""
            aria-hidden="true"
          />
        </picture>
      )}

      {/* overlay solo si hay imagen */}
      {!usarColor && (
        <div className="ComponenteFondoParticulasMyL-Overlay" />
      )}

      <div className="ComponenteFondoParticulasMyL-Particulas">
        {[...Array(25)].map((_, index) => (
          <span
            key={index}
            className="ComponenteFondoParticulasMyL-Particula"
          />
        ))}
      </div>

      <div className="ComponenteFondoParticulasMyL-Content">
        {children}
      </div>
    </section>
  );
}