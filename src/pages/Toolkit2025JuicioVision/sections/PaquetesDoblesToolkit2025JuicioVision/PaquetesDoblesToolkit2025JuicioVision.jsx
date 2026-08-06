import "./styles/PaquetesDoblesToolkit2025JuicioVision.css";

import { motion } from "framer-motion";

import dataPaquetesDoblesToolkit2025JuicioVision from "./data/dataPaquetesDoblesToolkit2025JuicioVision";

export default function PaquetesDoblesToolkit2025JuicioVision() {
    const {
        titulo,
        descripcion,
        imagen,
    } = dataPaquetesDoblesToolkit2025JuicioVision;

    return (
        <section className="PaquetesDoblesToolkit2025JuicioVision">

            {/* TEXTO */}
            <div className="PaquetesDoblesToolkit2025JuicioVision-left">

                <motion.h2
                    className="PaquetesDoblesToolkit2025JuicioVision-title"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {titulo}
                </motion.h2>

                <motion.div
                    className="PaquetesDoblesToolkit2025JuicioVision-textReveal"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    <p className="PaquetesDoblesToolkit2025JuicioVision-text">
                        {descripcion}
                    </p>
                </motion.div>

            </div>

            {/* ILUSTRACIÓN */}
            <div className="PaquetesDoblesToolkit2025JuicioVision-right">

                <div className="PaquetesDoblesToolkit2025JuicioVision-ilustracion">

                    <img
                        src={imagen.src}
                        alt={imagen.alt}
                    />

                </div>

            </div>

        </section>
    );
}