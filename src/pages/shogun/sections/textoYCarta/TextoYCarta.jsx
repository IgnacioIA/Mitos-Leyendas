import ShowcaseSection from
"../../../../components/showcase-section/ShowcaseSection.jsx";

import "./style/TextoyCartasSectionShogun.css";

import Shogun1 from
"../../../../assets/shogun/textoYCarta/CartaGif.gif";


import backgroundImg from
"../../../../assets/shogun/textoYCarta/FONDO BUY A BOX.webp";

export default function MitosCardsSection() {

  return (

    <section className="mitos-cards-section">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="mitos-cards-section__background"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.10),
              rgba(0,0,100,0.10)
            ),
            url(${backgroundImg})
          `
        }}
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="mitos-cards-section__content">

        <ShowcaseSection
          image={Shogun1}
          title="cartas BUY A BOX"
          reverse
        >

          <p>
            Todas las unidades de Shogun 5: Onna-musha vol 1 y vol 2,
            vendrán con una exclusiva carta adicional como Buy a Box.
          </p>

          <p>
            Dentro del producto Shogun 5: Onna-musha vol 1
            encontraremos la carta Lady Calvaur, en cambio
            en el vol 2 encontraremos la carta Gea, ambas con
            un arte alternativo en estilo especial de anime.
          </p>

        </ShowcaseSection>

      </div>

    </section>
  );
}