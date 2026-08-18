import "./style/BanList.css";
import PaginaEnConstruccion from "../../components/PaginaEnConstruccion/PaginaEnConstruccion";

import HeroBanList from "./sections/HeroBanList/HeroBanList.jsx";
import BanerBanList from "./sections/BanerBanList/BanerBanList.jsx";
import BanListExplicacion from "./sections/BanListExplicacion/BanListExplicacion.jsx";
import CartasBanList from "./sections/cartasBanList/CartasBanList.jsx";
import BotonesBanList from "./sections/BotonesBanList/BotonesBanList.jsx";


export default function BanList() {
  return (
    <>
      <HeroBanList />
      {/*<BanerBanList />
      <BanListExplicacion />*/}
      <CartasBanList />
      <BotonesBanList />
    </>
  );
}

