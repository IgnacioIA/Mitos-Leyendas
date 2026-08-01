import "./styles/PaquetesDoblesSection.css";

import { motion } from "framer-motion";

import dataPaquetesDoblesSection from "./data/dataPaquetesDoblesSection";

export default function PaquetesDoblesSection() {
    const {
        titulo,
        descripcion,
        imagen,
    } = dataPaquetesDoblesSection;

    return (
        <section className="PaquetesDoblesSection">

            {/* TEXTO */}
            <div className="PaquetesDoblesSection-left">

                <motion.h2
                    className="PaquetesDoblesSection-title"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {titulo}
                </motion.h2>

                <motion.div
                    className="PaquetesDoblesSection-textReveal"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    <p className="PaquetesDoblesSection-text">
                        {descripcion}
                    </p>
                </motion.div>

            </div>

            {/* ILUSTRACIÓN */}
            <div className="PaquetesDoblesSection-right">

                <div className="PaquetesDoblesSection-ilustracion">

                    <img
                        src={imagen.src}
                        alt={imagen.alt}
                    />

                </div>

            </div>

        </section>
    );
}