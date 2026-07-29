import "./styles/DesafioAmatista.css";

import HeroDesafioAmatista from "./sections/heroDesafio-Amatista/HeroDesafioAmatista.jsx";
import LoreDesafioAmatista from "./sections/LoreDesafioAmatista/LoreDesafioAmatista.jsx";
import BandoDesafioAmatista from "./sections/bandoDesafioAmatista/BandoDesafioAmatista.jsx";
import CartasSeccion from "./sections/CartasDesafioAmatista/CartasDesafioAmatista.jsx";

export default function DesafioAmatista() {
  return (
    <>
      <HeroDesafioAmatista />
      <LoreDesafioAmatista />
      <BandoDesafioAmatista />
      <CartasSeccion />
    </>
  );
}
