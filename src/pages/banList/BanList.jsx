{/*import Hero from "./sections/hero/HeroHome";*/}


import "./style/BanList.css";
import PaginaEnConstruccion from "../../components/PaginaEnConstruccion/PaginaEnConstruccion";

import BanerBanList from "./sections/BanerBanList/BanerBanList.jsx";
import BanListExplicacion from "./sections/BanListExplicacion/BanListExplicacion.jsx";


export default function BanList() {
  return (
    <>
      <BanerBanList />
      <BanListExplicacion />
    </>
  );
}

