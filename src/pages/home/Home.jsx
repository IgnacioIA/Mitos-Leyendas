import Hero from "./sections/hero/HeroHome";
import Baner from "./sections/baner/InstagramBanner";
import Interes from "./sections/interes/Interes";
import AprenderAJugar from "./sections/aprendeAJugar/AprenderAJugar";
import ProductosRecientes from "./sections/novedades/ProductosRecientes";

export default function Home() {

  return (
    <div className="Home-container">

    	< Hero />
      < Baner />
      < Interes />
      < AprenderAJugar />
      < ProductosRecientes />



      
    </div>
  );
}
