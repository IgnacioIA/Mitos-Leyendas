import "./styles/HijosDeDaanaPagePresentacion.css";

import Novedades from "../../../../components/Novedades/Novedades";
import dataHijosDeDaanaPagePresentacion from "./data/dataHijosDeDaanaPagePresentacion";

export default function HijosDeDaanaPagePresentacion() {
  return (
    <div className="HijosDeDaanaPagePresentacion">
      <Novedades data={dataHijosDeDaanaPagePresentacion} />
    </div>
  );
}
