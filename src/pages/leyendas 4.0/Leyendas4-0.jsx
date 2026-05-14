{/*import Hero from './sections/hero/Hero.jsx'*/}

import cartaMovible from './sections/cartaTexto/cartaMovible.jsx'
import HeroSection from './sections/hero/HeroSection.jsx'
import Lore from './sections/lore/ProductShowcaseSection.jsx'
import Novedades from './sections/novedades/Novedades.jsx'
import NovedadesB from './sections/novedadesB/NovedadesB.jsx'

export default function MazosInicialesPB() {

  return (
    <div className="mazosIniciales-container">

    <HeroSection/>
    <Lore/>
    <Novedades/>
    <NovedadesB/>


    </div>
  );
}