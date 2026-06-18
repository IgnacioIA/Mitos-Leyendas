import "./ComponenteFondoParticulasMyL.css";

export default function ComponenteFondoParticulasMyL({
  backgroundDesktop,
  backgroundMobile,
  children,
}) {
  return (
    <section className="ComponenteFondoParticulasMyL">

      <picture className="ComponenteFondoParticulasMyL-Background">
        <source
          media="(max-width: 768px)"
          srcSet={backgroundMobile}
        />

        <img
          src={backgroundDesktop}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="ComponenteFondoParticulasMyL-Overlay" />

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