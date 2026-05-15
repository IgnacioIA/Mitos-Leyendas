import ShowcaseSection from
"../../../../components/showcase-section/ShowcaseSection.jsx";

import carta1 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS NUEVAS.png";

export default function TextoYCarta() {

  return (

    <ShowcaseSection
      image={carta1}
      title="Cartas Secretas del producto"
      highlight="Cartas Secretas"
      background="bg-dark"
    >

      <p>
        Como sorpresa adicional, dentro de las
        Toolkit PB 2026 podrán aparecer cartas
        del producto en versión Secreta.
      </p>

      <p>
        Aproximadamente en el 50% de la producción
        total podrá aparecer una carta adicional
        con arte alternativo premium.
      </p>



    </ShowcaseSection>





  );
}