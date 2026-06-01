import ShowcaseSection from
"../../../../components/showcase-section/ShowcaseSection.jsx";

import "./style/TextoyCartasSectionShogun.css";

import Shogun2 from
"../../../../assets/shogun/textoYCartaSecreta/CartaSecretaGif.gif";

import backgroundImg from
"../../../../assets/shogun/textoYCartaSecreta/FONDO CARTAS SECRETAS.webp";

export default function MitosCardsSection() {

  return (

    <section className="mitos-cards-section-CartaSecreta">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="mitos-cards-section__background-CartaSecreta"
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
      <div className="mitos-cards-section__content-CartaSecreta">
        <ShowcaseSection
          image={Shogun2}
          title="cartas SECRETAS"
        >

          <p>
            Otra de las novedades de estos nuevos sobres con
            las nuevas cartas Ultra Raras o “Premium”, las que
            serán un poco menos frecuentes que las carta
            “Mega Real” apareciendo en 1 de cada 12 sobres*
            aproximadamente. Estas cartas añaden un nuevo
            diseño sin bordes y un Foil Premium de barniz
            trama especial.
          </p>

          <p>
            Dentro de esta edición, podrás encontrar 25 cartas
            del tipo “Premium” y al igual que las cartas Mega Real,
            podrán ser identificadas por su Foil Premium especial.
          </p>

        </ShowcaseSection>

      </div>

    </section>
  );
}