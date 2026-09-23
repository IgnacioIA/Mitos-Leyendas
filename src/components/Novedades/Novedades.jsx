import "./styles/Novedades.css";

import NovedadesHeader from "./components/NovedadesHeader";
import NovedadesGallery from "./components/NovedadesGallery";

export default function Novedades({
  data
}) {

  const {
    title,
    items = [],
    buttonText,
  } = data ?? {};

  return (
    <section className="Novedades">

      <div className="Novedades-HeaderContainer">

        <NovedadesHeader title={title} />

      </div>

      <NovedadesGallery items={items} buttonText={buttonText} />

    </section>
  );
}
