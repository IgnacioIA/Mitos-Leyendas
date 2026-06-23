import ShowcaseSection from
"../../../../components/showcase-section/ShowcaseSection.jsx";

import "./style/Carta-texto.css";

import carta1 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS NUEVAS.png";

import carta2 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS PREMIUM.png";

import carta3 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS REWORK.png";

import carta4 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS FOIL ESPECIAL.png";

import carta5 from
"../../../../assets/mitos4.0/cartaYTexto/CARTAS EXCLUSIVAS.png";

import fondo from
"../../../../assets/mitos4.0/cartaYTexto/fondo.webp";

export default function CartaTexto() {

  return (

    <section className="carta-texto-theme">

      {/* =====================================================
          BACKGROUND LAYER
      ===================================================== */}

      <div
        className="carta-texto-background"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.10),
              rgba(0,0,100,0.10)
            ),
            url(${fondo})
          `
        }}
      />

      <div className="carta-texto-content">

        {/* =====================================================
            SECTION 1
        ===================================================== */}
        <section id="cartas-nuevas-section"></section>
        <ShowcaseSection
          image={carta1}
          title="Cartas Nuevas"
          reverse
        >
          
          <p>
            Una de las principales novedades de esta nueva versión
            de Leyendas PB 4.0, son las cartas completamente nuevas
            que se agregan al formato de Primer Bloque Extendido.
          </p>

          <p>
            Dentro de esta edición, tendremos 60 cartas nuevas
            que formarán parte de las ediciones Espada Sagrada,
            Helénica, Hijos de Daana o de Dominios de Ra, las que
            se podrán encontrar entre las frecuencias Mega Real,
            Real, Cortesano y Vasallo.
          </p>

        </ShowcaseSection>

        {/* =====================================================
            SECTION 2
        ===================================================== */}
        <section id="cartas-premium-section"></section>
        <ShowcaseSection
          image={carta2}
          title="Cartas Premium"
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

        {/* =====================================================
            SECTION 3
        ===================================================== */}
        <section id="cartas-rework-section"></section>
        <ShowcaseSection
          image={carta3}
          title="Cartas Rework"
          reverse
        >

          <p>
            Siguiendo con las novedades, los nuevos sobres
            de Leyendas Primer Bloque 4.0 agregan nuevas cartas
            clásicas con habilidades Rework, las que se incorporan
            al formato de Primer Bloque Extendido.
          </p>

          <p>
          Dentro de esta edición tendremos más de 40 nuevas
          cartas Rework, divididas entre las frecuencias Real,
          Cortesano y Vasallo, y que pertenecen a las ediciones
          de Espada Sagrada, Helénica, Hijos de Daana
          o Dominios de Ra.
          </p>

        </ShowcaseSection>

        {/* =====================================================
            SECTION 4
        ===================================================== */}
        <section id="cartas-foil-especial-section"></section>
        <ShowcaseSection
          image={carta4}
          title="Cartas Foil Especial"
        >

          <p>
            En esta nueva versión de Leyendas Primer Bloque 4.0
            agregaremos nuevas cartas de frecuencia Legendaria,
            conservando un estilo de aplicación de colores continuando
            este tipo de tratamiento de las cartas de esta frecuencia
            de las ediciones de Aniversario.
          </p>

          <p>
            Dentro de la edición existe un total de 09 nuevas cartas
            Legendarias, las que tienen una frecuencia de aparición
            de 1 de cada 72 sobres.
          </p>

        </ShowcaseSection>

        {/* =====================================================
            SECTION 5
        ===================================================== */}
        <section id="cartas-exclusivas-section"></section>
        <ShowcaseSection
          image={carta5}
          title="Cartas Exclusivas"
          reverse
        >

          <p>
            Finalmente, queremos mostrarles la última novedad
            de esta edición con las nuevas cartas Secretas.
          </p>

          <p>
            Existirán un total de 5 cartas del tipo Secreta dentro
            de Leyendas PB 4.0, las que tendrán una frecuencia
            de 1 de cada 3.000 sobres aproximadamente, siendo
            estas cartas un verdadero tesoro y una de las más
            raras de todo Mitos y Leyendas.
          </p>

        </ShowcaseSection>

      
      </div>

    </section>
  );
}