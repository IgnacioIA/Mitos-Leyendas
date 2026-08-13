import "./styles/Novedades.css";

import NovedadesHeader from "./components/NovedadesHeader";
import NovedadesGallery from "./components/NovedadesGallery";

export default function Novedades({
  data
}) {

  const {
    title,
    items = [],
  } = data ?? {};

  return (
    <section className="Novedades">

      <div className="Novedades-HeaderContainer">

        <NovedadesHeader title={title} />

      </div>

      <NovedadesGallery items={items} />

    </section>
  );
}
