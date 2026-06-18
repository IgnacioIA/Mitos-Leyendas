import { motion } from "framer-motion";

import "../styles/ContentHeader.css";

export default function ContentHeader({
  tituloPrimeraPalabra,
  tituloSegundaPalabra,
  descripcion,
}) {
  return (
    <div className="CartasNuevasEdicionLootbox-Header">

      <h2 className="CartasNuevasEdicionLootbox-Titulo">

        {tituloPrimeraPalabra}{" "}

        <span>
          {tituloSegundaPalabra}
        </span>

      </h2>

      <motion.div
        className="CartasNuevasEdicionLootbox-Descripcion"
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
  );
}