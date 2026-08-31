import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./styles/LoreIndexSeleccion.css";

import BackgroundCinematografico from "../../../../components/backgroundCinematografico/BackgroundCinematografico";

import { loreIndexSeleccionData } from "./data/loreIndexSeleccionData";

// Mismo criterio de navegación que InteresCard.jsx (src/pages/home/sections/interes):
// link externo si la ruta empieza con "http", interno (React Router) en cualquier otro caso.
function LoreIndexSeleccionItem({ item }) {
  const esExterno = item.path?.startsWith("http");

  const contenido = (
    <>
      <span className="loreIndexSeleccion-itemMarco">
        <img
          className="loreIndexSeleccion-itemImagen"
          src={item.imagen}
          alt={item.alt}
          loading="lazy"
        />
      </span>

      <span className="loreIndexSeleccion-itemTitulo">
        {item.titulo}
      </span>

      <span className="loreIndexSeleccion-itemDescripcion">
        {item.descripcion}
      </span>
    </>
  );

  if (esExterno) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="loreIndexSeleccion-item"
      >
        {contenido}
      </a>
    );
  }

  return (
    <Link
      to={item.path}
      className="loreIndexSeleccion-item"
    >
      {contenido}
    </Link>
  );
}

export default function LoreIndexSeleccion() {
  const { fondo, overlay, header, items } = loreIndexSeleccionData;

  return (
    <BackgroundCinematografico
      image={fondo}
      overlay={overlay}
      position="center center"
    >

      <div className="loreIndexSeleccion-content">

        {/* Aparición "entre niebla": mismo patrón que LoreDesafioAmatista.jsx
            (opacity + y + blur vía framer-motion, whileInView, once). */}
        <motion.div
          className="loreIndexSeleccion-header"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >

          {header.titulo && (
            <h2 className="loreIndexSeleccion-titulo">
              {header.titulo}
            </h2>
          )}

          {header.descripcion.map((parrafo, index) => (
            <motion.p
              key={index}
              className="loreIndexSeleccion-parrafo"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.35 + index * 0.25,
                ease: "easeOut",
              }}
            >
              {parrafo}
            </motion.p>
          ))}

        </motion.div>

        {items.length > 0 && (
          <div className="loreIndexSeleccion-grid">
            {items.map((item) => (
              <LoreIndexSeleccionItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}

      </div>

    </BackgroundCinematografico>
  );
}
