import "./style/NovedadesShogun.css";

import NovedadesBackground from
"./components/NovedadesBackground.jsx";

import NovedadesHeader from
"./components/NovedadesHeader.jsx";

import NovedadesGallery from
"./components/NovedadesGallery.jsx";

import novedades from
"./data/novedades.data.js";

export default function NovedadesShogun() {

  return (

    <section className="novedades-shogun">

      <NovedadesBackground />

      <div className="novedades-shogun__container">

        <NovedadesHeader />

        <NovedadesGallery
          items={novedades}
        />

      </div>

    </section>
  );
}