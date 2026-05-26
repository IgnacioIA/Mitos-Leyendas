import "./styles/Shogun.css";

import Hero from "./sections/hero/HeroSection.jsx";
import Lore from "./sections/lore/ProductShowcaseSection.jsx";
{/*import Novedades from "./sections/novedades/Novedades.jsx";*/}
import BuyABox from "./sections/buyABox/BuyABox.jsx";
import TextoYCarta from "./sections/textoYCarta/TextoYCarta.jsx";
import Productos from "./sections/productos/Productos.jsx";

export default function Shogun() {

  return (
    <div className="shogun-container">


    	{/*<Hero/>*/}
    	<Lore/>
    	{/*<Novedades/>*/}
    	<BuyABox/>
    	<TextoYCarta/>
    	<Productos/>


    </div>
  );
}