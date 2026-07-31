import "./styles/CartasDesafioAmatista.css";

import TextoArribaContenidoAbajo from "../../../../components/textoArribaContenidoAbajo/TextoArribaContenidoAbajo";
import CarrouselResponsive from "../../../../components/CarrouselResponsive/CarrouselResponsive";
import FrameFX from "../../../../components/ui/cartaMovible/FrameFX";

import dataCartasDesafioAmatista, {
    TIPOS_SECCION,
} from "./data/dataCartasDesafioAmatista";

import Paralax from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico.jsx";
// Definido fuera del componente: no se recrea en cada render
// y queda fácil de extender con nuevos tipos de sección sin tocar el switch.

const RENDERERS = {
    [TIPOS_SECCION.CARROUSEL]: (seccion) => (
        <CarrouselResponsive
            items={seccion.imagenes}
            renderItem={({ src, alt }) => (
                <img
                    className="CartasDesafioAmatista-Carta"
                    src={src}
                    alt={alt}
                />
            )}
        />
    ),
    [TIPOS_SECCION.DOS_IMAGENES]: (seccion) => (
        <div className="CartasDesafioAmatista-DosImagenes">
            {seccion.imagenes.map(({ src, alt }, index) => (
                <FrameFX key={index}>
                    <img src={src} alt={alt} />
                </FrameFX>
            ))}
        </div>
    ),
};

function renderContenido(seccion) {
    const render = RENDERERS[seccion.tipo];
    return render ? render(seccion) : null;
}

export default function CartasDesafioAmatista() {
    const {
        fondo,
        encabezado,
        secciones,
    } = dataCartasDesafioAmatista;

    const {
        subtitulo,
        titulo,
        descripcion,
    } = encabezado;

    return (
        <section className="CartasDesafioAmatista">

            <Paralax image={fondo} overlay={0.0} position="center center">

                <div className="CartasDesafioAmatista-content">

                    <header className="CartasDesafioAmatista-header">

                        <span className="CartasDesafioAmatista-subtitle">
                            {subtitulo}
                        </span>

                        <h2 className="CartasDesafioAmatista-title">

                            <span className="CartasDesafioAmatista-titleLine">
                                {titulo.linea}
                            </span>

                            <span className="CartasDesafioAmatista-titleAccent">
                                {titulo.destacado}
                            </span>

                        </h2>

                        <p className="CartasDesafioAmatista-description">
                            {descripcion}
                        </p>

                    </header>

                    {secciones.map((seccion) => (
                        <TextoArribaContenidoAbajo
                            key={seccion.id}
                            tituloPrimeraPalabra={seccion.tituloPrimeraPalabra}
                            tituloSegundaPalabra={seccion.tituloSegundaPalabra}
                            descripcion={seccion.descripcion}
                        >
                            {renderContenido(seccion)}
                        </TextoArribaContenidoAbajo>
                    ))}

                </div>

            </Paralax>

            <Paralax image={fondo} overlay={0.0} position="center center">

                <div className="CartasDesafioAmatista-content">
                    {secciones.map((seccion) => (
                        <TextoArribaContenidoAbajo
                            key={seccion.id}
                            tituloPrimeraPalabra={seccion.tituloPrimeraPalabra}
                            tituloSegundaPalabra={seccion.tituloSegundaPalabra}
                            descripcion={seccion.descripcion}
                        >
                            {renderContenido(seccion)}
                        </TextoArribaContenidoAbajo>
                    ))}

                </div>

            </Paralax>

        </section>
    );
}
