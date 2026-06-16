import { motion } from "framer-motion";

import "../styles/ContenidoSuperior.css";


export default function ContenidoSuperior({
  layout = "right",
  title,
  subtitle,
  imagenSubtitulo,
  description,
  description2,
  mazoPrincipal,
}) {

  const [primeraPalabra, ...restoTitulo] = title.split(" ");

  return (
    <section
      className={`
        ContenidoSuperior
        ${layout === "left"
          ? "ContenidoSuperior-Reverse"
          : ""}
      `}
    >

      <motion.div
        className="ContenidoSuperior-Left"
        initial={{
          opacity: 0,
          x: layout === "left" ? 50 : -50,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="ContenidoSuperior-TitleBlock">

          <h2>

            <span className="ContenidoSuperior-TitleWhite">
              {primeraPalabra}
            </span>

            {" "}

            <span className="ContenidoSuperior-TitleYellow">
              {restoTitulo.join(" ")}
            </span>

          </h2>

        </div>

        <div className="ContenidoSuperior-SubtitleBlock">

          <div className="ContenidoSuperior-SubtitleText">
            <h3>{subtitle}</h3>
          </div>

          <div className="ContenidoSuperior-SubtitleImage">
            <img
              src={imagenSubtitulo}
              alt={subtitle}
            />
          </div>

        </div>

        <motion.div
          className="ContenidoSuperior-DescriptionBlock"
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >

          <p>{description}</p>

          <p>{description2}</p>

        </motion.div>

      </motion.div>

      <motion.div
        className="ContenidoSuperior-Right"
        initial={{
          opacity: 0,
          x: layout === "left" ? -50 : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

  

          <div className="magic-card-alt">

            <img
              src={mazoPrincipal}
              alt={title}
              className="ContenidoSuperior-MazoPrincipal"
            />

          </div>

        

      </motion.div>

    </section>
  );
}