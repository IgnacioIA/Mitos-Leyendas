import "./style/RazasStyle.css";
import Hero from "./sections/HeroRazas/HeroRazas.jsx";
import RazasExplicacion from "./sections/RazasExplicacion/RazasExplicacion.jsx";


export default function Razas() {

  return (
    <div className="Razas-container">

        <Hero/>
        <RazasExplicacion/>
    </div>
  );
}
