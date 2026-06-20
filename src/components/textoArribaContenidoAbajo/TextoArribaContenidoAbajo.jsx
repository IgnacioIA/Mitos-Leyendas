import { motion } from "framer-motion";

import "./TextoArribaContenidoAbajo.css";

export default function TextoArribaContenidoAbajo({
  tituloPrimeraPalabra,
  tituloSegundaPalabra,
  descripcion,
  children,
}) {
  return (
    <section className="TextoArribaContenidoAbajo">

      <div className="TextoArribaContenidoAbajo-Header">

        <h2 className="TextoArribaContenidoAbajo-Titulo">
          {tituloPrimeraPalabra}{" "}
          <span>{tituloSegundaPalabra}</span>
        </h2>

        <motion.div
          className="TextoArribaContenidoAbajo-Descripcion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {descripcion.map((texto, index) => (
            <p key={index}>
              {texto}
            </p>
          ))}
        </motion.div>

      </div>

      <div className="TextoArribaContenidoAbajo-Contenido">
        {children}
      </div>

    </section>
  );
}