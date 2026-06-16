import Hero from './sections/hero/Hero.jsx'
import Tienda from './sections/tienda/Tienda.jsx'
import MazosEdicion from './sections/mazosEdicion/MazosEdicion.jsx'
import AprendeAJugar from './sections/aprenderAJugar/AprenderAJugar.jsx'

export default function MazosInicialesPB() {

  return (
    <div className="mazosIniciales-container">
        
      <Hero />
      <Tienda />
      <MazosEdicion/>
      <AprendeAJugar/>
      
    </div>
  );
}