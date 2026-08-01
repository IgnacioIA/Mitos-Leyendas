import "./styles/DesafioAmatista.css";

import HeroDesafioAmatista from "./sections/heroDesafio-Amatista/HeroDesafioAmatista.jsx";
import LoreDesafioAmatista from "./sections/LoreDesafioAmatista/LoreDesafioAmatista.jsx";
import BandoDesafioAmatista from "./sections/bandoDesafioAmatista/BandoDesafioAmatista.jsx";
import CartasSeccion from "./sections/CartasDesafioAmatista/CartasDesafioAmatista.jsx";
import PaquetesDobles from "./sections/PaquetesDoblesSections/PaquetesDoblesSections.jsx";
import CartasSecretas from "./sections/CartaSecretaSection/CartasSecretasSections.jsx";

export default function DesafioAmatista() {
  return (
    <>
    
      <HeroDesafioAmatista />
      <LoreDesafioAmatista />
      <BandoDesafioAmatista />
      <CartasSeccion />
      <CartasSecretas />
      <PaquetesDobles />
      
    </>
  );
}
