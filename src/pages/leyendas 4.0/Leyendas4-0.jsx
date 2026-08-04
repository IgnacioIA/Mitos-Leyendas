import HeroSection from './sections/hero/HeroSection.jsx'
import Lore from './sections/lore/ProductShowcaseSection.jsx'
import NovedadesB from './sections/novedadesB/NovedadesB.jsx'
import TextoYCartaSection from './sections/textoYCarta/TextoYCartaSection.jsx'
import BuyABox from './sections/buyABox/BuyABox.jsx'
import Productos from './sections/productos/Productos.jsx'

export default function Leyendas() {
  return (
    <div className="page-leyendas-4-0">

      <HeroSection />
      <Lore />
      <NovedadesB />
      <BuyABox />
      <TextoYCartaSection />
      <Productos />

    </div>
  );
}
