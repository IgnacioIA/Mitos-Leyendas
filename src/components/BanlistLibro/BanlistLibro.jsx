import "./BanlistLibro.css";

import ContenidoSuperiorLibro from "./components/ContenidoSuperiorLibro";
import SeparadorLibro from "./components/SeparadorLibro";

const BanlistLibro = ({ titulo, descripcion,ultimaActualizacion, children }) => {
    return (
        <section
        className={`BanlistLibro ${
            !titulo ? 'BanlistLibro--compacto' : ''
        }`}
        >

            <div className="BanlistLibro__contenidoSuperior">
                <ContenidoSuperiorLibro
                    titulo={titulo}
                    descripcion={descripcion}
                />
            </div>

            <div className="BanlistLibro__contenidoInferior">
                {children}
            </div>


            {ultimaActualizacion && (
                <div className='BanlistLibro__actualizacion'>
                <span>{ultimaActualizacion}</span>
                </div>
            )}

            <SeparadorLibro />

        </section>
    );
};

export default BanlistLibro;