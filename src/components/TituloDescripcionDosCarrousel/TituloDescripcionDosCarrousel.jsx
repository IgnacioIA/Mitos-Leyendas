import "./styles/TituloDescripcionDosCarrousel.css";

import HeaderTituloDescripcionDosCarrousel from "./sections/HeaderTituloDescripcionDosCarrousel";
import DescripcionTituloDescripcionDosCarrousel from "./sections/DescripcionTituloDescripcionDosCarrousel";
import CarrouselTresTituloDescripcionDosCarrousel from "./sections/CarrouselTresTituloDescripcionDosCarrousel";
import CarrouselCuatroTituloDescripcionDosCarrousel from "./sections/CarrouselCuatroTituloDescripcionDosCarrousel";

export default function TituloDescripcionDosCarrousel({
  titulo,
  descripcion,
  tituloPrimerBloque,
  tituloSegundoBloque,
  children,
}) {
  const [primerContenido, segundoContenido] = Array.isArray(children)
    ? children
    : [children];

  return (
    <section className="TituloDescripcionDosCarrousel">

      <HeaderTituloDescripcionDosCarrousel
        titulo={titulo}
      />

      <DescripcionTituloDescripcionDosCarrousel
        descripcion={descripcion}
      />

      <CarrouselTresTituloDescripcionDosCarrousel
        titulo={tituloPrimerBloque}
      >
        {primerContenido}
      </CarrouselTresTituloDescripcionDosCarrousel>

      <CarrouselCuatroTituloDescripcionDosCarrousel
        titulo={tituloSegundoBloque}
      >
        {segundoContenido}
      </CarrouselCuatroTituloDescripcionDosCarrousel>

    </section>
  );
}
