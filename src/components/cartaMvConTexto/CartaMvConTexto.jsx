import { motion } from "framer-motion";

import "./styles/CartaMvConTexto.css";

export default function CartaMvConTexto({
  titulo,
  subtitulo,
  parrafo1,
  parrafo2,
  imagen,
  alt = "",
  invertido = false,
}) {
  return (
    <section
      className={`CartaMvConTexto ${
        invertido ? "CartaMvConTexto-Invertido" : ""
      }`}
    >
      <div className="CartaMvConTexto-ContenidoTexto">

        <h2 className="CartaMvConTexto-Titulo">
          {titulo}
        </h2>

        <h3 className="CartaMvConTexto-Subtitulo">
          {subtitulo}
        </h3>

        <motion.p
          className="CartaMvConTexto-Parrafo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {parrafo1}
        </motion.p>

        <motion.p
          className="CartaMvConTexto-Parrafo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {parrafo2}
        </motion.p>

      </div>

      <div className="CartaMvConTexto-ContenidoImg">

        <img
          src={imagen}
          alt={alt}
          className="CartaMvConTexto-Imagen"
        />

      </div>
    </section>
  );
}