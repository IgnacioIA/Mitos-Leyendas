import "./style/DracoSidhe.css";
import DracoSidheHero from "./sections/DracoSidheHero/DracoSidheHero.jsx";
import DracoSidheProductosDobles from "./sections/DracoSidheProductosDobles/DracoSidheProductosDobles.jsx";
import DracoSidheKits from "./sections/DracoSidheKits/DracoSidheKits.jsx";
import DracoSidhePaquetitos from "./sections/DracoSidhePaquetitos/DracoSidhePaquetitos.jsx";
import Productos from "./sections/productos/Productos.jsx";



export default function DracoSidhe() {

  return (
    <div className="DracoSidhe-container">

        <DracoSidheHero/>
        <DracoSidheProductosDobles/>
        <DracoSidheKits/>
        <DracoSidhePaquetitos/>
        <Productos/>

    </div>
  );
}
