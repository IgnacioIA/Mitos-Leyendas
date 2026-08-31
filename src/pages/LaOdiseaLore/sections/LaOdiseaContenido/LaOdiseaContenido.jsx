import { motion } from "framer-motion";

import "./styles/LaOdiseaContenido.css";

import ParallaxBackgroundCinematografico from "../../../../components/parallaxBackgrounCinematografico/ParallaxBackgroundCinematografico";

// Separador ya existente, reutilizado tal cual (no se duplica ni se crea
// una versión parecida) — ver src/pages/mazosInicialesPrimerBloque/sections/tienda.
import TiendaDivider from "../../../mazosInicialesPrimerBloque/sections/tienda/sections/TiendaDivider.jsx";

import LaOdiseaContenidoBloque from "./sections/LaOdiseaContenidoBloque";

import { laOdiseaContenidoData } from "./data/laOdiseaContenidoData";

export default function LaOdiseaContenido() {
  const { fondo, overlay, header, bloques } = laOdiseaContenidoData;

  return (
    <ParallaxBackgroundCinematografico
      image={fondo}
      overlay={overlay}
      position="center center"
    >

      <div className="laOdiseaContenido-content">

        <header className="laOdiseaContenido-header">

          {header.subtitulo && (
            <span className="laOdiseaContenido-subtitulo">
              {header.subtitulo}
            </span>
          )}

          {header.titulo && (
            <h2 className="laOdiseaContenido-titulo">
              {header.titulo}
            </h2>
          )}

          {header.descripcion.length > 0 && (
            <motion.p
              className="laOdiseaContenido-descripcion"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              {header.descripcion.map((fragmento, index) => (
                <span
                  key={index}
                  className="laOdiseaContenido-fragmento"
                  style={
                    fragmento.color
                      ? { "--fragmentoColor": fragmento.color }
                      : undefined
                  }
                >
                  {fragmento.text}
                </span>
              ))}
            </motion.p>
          )}

          <TiendaDivider />

        </header>

        <div className="laOdiseaContenido-bloques">
          {bloques.map((bloque, index) => (
            <LaOdiseaContenidoBloque
              key={bloque.id}
              titulo={bloque.titulo}
              subtitulo={bloque.subtitulo}
              descripcion={bloque.descripcion}
              imagenes={bloque.imagenes}
              invertido={index % 2 === 1}
            />
          ))}
        </div>

      </div>

    </ParallaxBackgroundCinematografico>
  );
}
