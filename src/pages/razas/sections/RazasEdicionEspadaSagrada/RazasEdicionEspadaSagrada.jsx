import "./styles/RazasEdicionEspadaSagrada.css";

import dataRazasEdicionEspadaSagrada from "./data/dataRazasEdicionEspadaSagrada";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";
import TituloCuerpoChildren from "../../../../components/TituloCuerpoChildren/TituloCuerpoChildren";
import CarrouselResponsiveDeCinco from "../../../../components/CarrouselResponsiveDeCinco/CarrouselResponsiveDeCinco";


export default function RazasEdicionEspadaSagrada() {
    const {
        titulo,
        background,
        bloques,
    } = dataRazasEdicionEspadaSagrada;

    return (
        <ParallaxBackgroundCinematografico
            image={background}
            position= "Center top"
            overlay={0.45}
            showDivider
        >
            <section className="RazasEdicionEspadaSagrada" id="espadaSagradaSection">

                <div className="container RazasEdicionEspadaSagrada-Container">

                    <h2 className="RazasEdicionEspadaSagrada-Title">
                        {titulo.texto}{" "}
                        <span>{titulo.destacado}</span>
                    </h2>

                    {bloques.map((bloque) => (
                        <TituloCuerpoChildren
                            key={bloque.id}
                            title={bloque.titulo}
                            description={bloque.descripcion}
                        >
                            <CarrouselResponsiveDeCinco
                                items={bloque.cartas}
                                showButtons={false}
                                renderItem={(item) => (
                                    <img
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className="RazasEdicionEspadaSagrada-CardImage"
                                        loading="lazy"
                                    />
                                )}
                            />
                        </TituloCuerpoChildren>
                    ))}

                </div>

            </section>
        </ParallaxBackgroundCinematografico>
    );
}