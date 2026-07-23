import "./styles/BanListExplicacion.css";

import BanlistLibro from "../../../../components/BanlistLibro/BanlistLibro";
import BanListCarrousel from "../../../../components/BanListCarrousel/BanListCarrousel";

import { racialEdicion, racialLibre } from './data/paginas';



function BanListExplicacion() {

    return (
        <>

        <BanlistLibro

            titulo={
                <>
                    {" "}Actualización Banlist {" "}
                    <span className="ContenidoSuperiorLibro__tituloDestacado">
                         formato PRIMER BLOQUE 
                    </span>
                    
                </>
            }

            descripcion={
                <>
                    <span className="BanListAlbum__subtitulo">
                        Racial Edición
                    </span>

                    <div className="BanListAlbum__cambios">

                        <p className="BanListAlbum__cambio">
                            <strong>(Oro):</strong> Corona del Día se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Aliado):</strong> Zagreus se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Aliado):</strong> Amosis I se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Oro):</strong> Marmita Druida se puede utilizar por 2 copias (antes se permitía 1 copia)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Aliado):</strong> Lady Calvaur se puede utilizar por 2 copias (antes se permitían 3 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Oro):</strong> Herrero se puede utilizar por 2 copias (antes se permitían 3 copias)
                        </p>

                    </div>
                </>
            }
            
            ultimaActualizacion='Última actualiazación: Julio 2026'

        >

            <BanListCarrousel images={racialEdicion} />

        </BanlistLibro>


        <BanlistLibro

            descripcion={
                <>
                    <span className="BanListAlbum__subtitulo">
                        Racial Edición
                    </span>

                    <div className="BanListAlbum__cambios">

                        <p className="BanListAlbum__cambio">
                            <strong>(Aliado):</strong> Bruja Anis se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Oro):</strong> Corona de Arturo se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>

                        <p className="BanListAlbum__cambio">
                            <strong>(Oro):</strong> Corona del Día se puede utilizar por 3 copias (antes se permitían 2 copias)
                        </p>
                       

                    </div>
                </>
            }
            
            ultimaActualizacion='Última actualiazación: Julio 2026'

        >

            <BanListCarrousel images={racialLibre} />

        </BanlistLibro>

       </>     
    );

}

export default BanListExplicacion;