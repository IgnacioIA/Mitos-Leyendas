import "./styles/HijosDeDaanaPage.css";

import HijosDeDaanaPageHero from "./sections/HijosDeDaanaPageHero/HijosDeDaanaPageHero.jsx";
import HijosDeDaanaPageLore from "./sections/HijosDeDaanaPageLore/HijosDeDaanaPageLore.jsx";
import HijosDeDaanaPagePresentacion from "./sections/HijosDeDaanaPagePresentacion/HijosDeDaanaPagePresentacion.jsx";
import HijosDeDaanaPageCartas from "./sections/HijosDeDaanaPageCartas/HijosDeDaanaPageCartas.jsx";
import HijosDeDaanaPageCartasAzar from "./sections/HijosDeDaanaPageCartasAzar/HijosDeDaanaPageCartasAzar.jsx";
import HijosDeDaanaPageCartaMv from "./sections/HijosDeDaanaPageCartaMv/HijosDeDaanaPageCartaMv.jsx";
import HijosDeDaanaPageBeneficioCompra from "./sections/HijosDeDaanaPageBeneficioCompra/HijosDeDaanaPageBeneficioCompra.jsx";
import HijosDeDaanaPagePaquetitos from "./sections/HijosDeDaanaPagePaquetitos/HijosDeDaanaPagePaquetitos.jsx";

export default function HijosDeDaanaPage() {
  return (
    <>
    < HijosDeDaanaPageHero/>
    < HijosDeDaanaPageLore/>
    < HijosDeDaanaPagePresentacion/>
    < HijosDeDaanaPageCartas/>
    < HijosDeDaanaPageCartasAzar/>
    < HijosDeDaanaPageCartaMv/>
    < HijosDeDaanaPageBeneficioCompra/>
    < HijosDeDaanaPagePaquetitos/>
    </>
  );
}
