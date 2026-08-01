import "./style/RazasStyle.css";
import Hero from "./sections/HeroRazas/HeroRazas.jsx";
import RazasExplicacion from "./sections/RazasExplicacion/RazasExplicacion.jsx";
import RazasEdicionEspadaSagrada from "./sections/RazasEdicionEspadaSagrada/RazasEdicionEspadaSagrada.jsx";
import RazasEdicionHelenica from "./sections/RazasEdicionHelenica/RazasEdicionHelenica.jsx";
import RazasEdicionHijoDeDaana from "./sections/RazasEdicionHijoDeDaana/RazasEdicionHijoDeDaana.jsx";
import RazasEdicionDominiosDeRa from "./sections/RazasEdicionDominiosDeRa/RazasEdicionDominiosDeRa.jsx";
import AprenderAJugar from "../mazosInicialesPrimerBloque/sections/aprenderAJugar/AprenderAJugar.jsx";


export default function Razas() {

  return (
    <div className="Razas-container">

        <Hero/>
        <RazasExplicacion/>
        <RazasEdicionEspadaSagrada/>
        <RazasEdicionHelenica/>
        <RazasEdicionHijoDeDaana/>
        <RazasEdicionDominiosDeRa/>
        <AprenderAJugar/>

    </div>
  );
}
