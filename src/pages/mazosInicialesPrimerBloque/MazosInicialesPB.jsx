import Hero from './sections/hero/Hero.jsx'
import Gallery from './sections/galeria/Gallery.jsx'
import Tienda from './sections/tienda/Tienda.jsx'
import MazosEdicion from './sections/mazosEdicion/MazosEdicion.jsx'

import Lore from './sections/lore/Lore.jsx'
import AprendeAJugar from './sections/aprenderAJugar/AprenderAJugar.jsx'
import Final from './sections/Final/RibbonSection.jsx'

export default function MazosInicialesPB() {

  return (
    <div className="mazosIniciales-container">

      <Hero />
      <Tienda />

      <MazosEdicion/>

      <AprendeAJugar/>
      {/*<Lore />*/}
      {/*<Gallery />*/}
      {/*<Final/>*/}

    </div>
  );
}