import fondo1 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/FONDO PRODUCTO 1.webp";
import fondo2 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/FONDO PRODUCTO 2.webp";
import fondo3 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/FONDO PRODUCTO 3.webp";

import producto1 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 1.webp";
import producto2 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 2.webp";
import producto3 from "../../../../../assets/DominiosDeRaPaginaLore/Productos/CAJA 3.webp";

// TODO: completar títulos y subtítulos reales de cada producto. Los
// valores de abajo son placeholders seguros (no rompen el render) para que
// solo haga falta reemplazarlos por el contenido definitivo.
//
// "url" de cada item lleva a la sección correspondiente dentro de
// DominiosDeRaPaginaLoreCartas (los ids "invasores"/"sabiduria"/"amanecer"
// están definidos en ese componente's data, dataDominiosDeRaPaginaLoreCartas.js).
const dataDominiosDeRaPaginaLoreProductos = {

  title: "",

  buttonText: "EXPLORAR",

  items: [
    {
      id: 1,
      title: "INVASORES",
      subtitle: "KIT FARAÓN",
      background: fondo1,
      product: producto1,
      url: "#invasores",
    },
    {
      id: 2,
      title: "SABIDURÍA",
      subtitle: "KIT SACERDOTA",
      background: fondo2,
      product: producto2,
      url: "#sabiduria",
    },
    {
      id: 3,
      title: "AMANECER",
      subtitle: "KIT ETERNO",
      background: fondo3,
      product: producto3,
      url: "#amanecer",
    },
  ],

};

export default dataDominiosDeRaPaginaLoreProductos;
