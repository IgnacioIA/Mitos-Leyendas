import "./styles/HijosDeDaanaPageCartaMv.css";

import BackgroundCinematografico from "../../../../components/backgroundCinematografico/BackgroundCinematografico";
import CartaMvConTexto from "../../../../components/CartaMvConTexto/CartaMvConTexto";

import dataHijosDeDaanaPageCartaMv from "./data/dataHijosDeDaanaPageCartaMv";

export default function HijosDeDaanaPageCartaMv() {
  const { background, carta } = dataHijosDeDaanaPageCartaMv;

  return (
    <BackgroundCinematografico
      image={background.image}
      overlay={background.overlay}
      position={background.position}
    >
      <section className="HijosDeDaanaPageCartaMv">
        <CartaMvConTexto {...carta} />
      </section>
    </BackgroundCinematografico>
  );
}
