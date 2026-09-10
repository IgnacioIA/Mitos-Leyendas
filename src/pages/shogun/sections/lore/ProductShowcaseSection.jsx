import LoreShowcase from "../../../../components/lore-showcase/LoreShowcase.jsx";

import fondoShogun from "../../../../assets/shogun/lore/FondoShogun.webp";
import productImage from "../../../../assets/shogun/lore/SHOGUN 5.webp";

export default function ProductShowcaseSection() {
  return (
    <LoreShowcase
      theme="dark"
      background={fondoShogun}
      title="ACERCA DEL"
      titleHighlight="PRODUCTO"
      paragraphs={[
        "Shogun 5: Onna-musha nos sumerge en un nuevo imaginario fantástico, donde personajes femeninos toman el rol principal de cartas de primer bloque, reimaginando algunos como hermosas y valientes doncellas.",
        "En este contexto, tendremos dos productos especiales, el Volumen 1 y el Volumen 2, donde podrás encontrar a personajes que ya conocemos de Primer Bloque como Lady Calvaur, Sir Agravain, Melisende, Nefertiti, Gea, Mago Merlin, Ramsés IX o Ceilican Seelie entre otros, los que fueron reinterpretados completamente en un estilo de arte que hace homenaje a la cultura japonesa con referencias al anime y el manga.",
      ]}
      image={productImage}
      imageAlt="Producto Shogun 5: Onna-musha"
      button={{
        label: "CONSEGUIR SHOGUN 5",
        url: "https://www.mylargentina.com/productos/shogun-5-onna-musha-volumen-2-primer-bloque-1-buy-a-box/",
      }}
    />
  );
}
