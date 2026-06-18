import "./styles/CartasYTextoEdicionPBX2025.css";

import BackGround from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico.jsx";
import CartaMvConTexto from "../../../../components/cartaMvConTexto/CartaMvConTexto.jsx";

import CartaYTextoData, {
  background,
} from "./data/CartasYTextoEdicionPBX2025Data.jsx";

export default function CartasYTextoEdicionPBX2025() {
  return (
    <section className="CartasYTextoEdicionPBX2025">

      <BackGround
        image={background}
        overlay={0.2}
        position="center top"
      >
        <div className="CartasYTextoEdicionPBX2025-Container">

          {CartaYTextoData.map((carta, index) => (
            <CartaMvConTexto
              key={index}
              titulo={carta.titulo}
              subtitulo={carta.subTitulo}
              parrafo1={carta.parrafo1}
              parrafo2={carta.parrafo2}
              imagen={carta.imagen}
              alt={carta.titulo}
              invertido={index % 2 !== 0}
            />
          ))}

        </div>
      </BackGround>

    </section>
  );
}