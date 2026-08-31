import "./styles/DominiosDeRaPaginaPaquetitos.css";

import { motion } from "framer-motion";

import dataDominiosDeRaPaginaPaquetitos from "./data/dataDominiosDeRaPaginaPaquetitos";

export default function DominiosDeRaPaginaPaquetitos() {
    const {
        titulo,
        descripcion,
        imagen,
    } = dataDominiosDeRaPaginaPaquetitos;

    return (
        <section className="DominiosDeRaPaginaPaquetitos">

            {/* TEXTO */}
            <div className="DominiosDeRaPaginaPaquetitos-left">

                <motion.h2
                    className="DominiosDeRaPaginaPaquetitos-title"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {titulo}
                </motion.h2>

                <motion.div
                    className="DominiosDeRaPaginaPaquetitos-textReveal"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    <p className="DominiosDeRaPaginaPaquetitos-text">
                        {descripcion}
                    </p>
                </motion.div>

            </div>

            {/* ILUSTRACIÓN */}
            <div className="DominiosDeRaPaginaPaquetitos-right">

                <div className="DominiosDeRaPaginaPaquetitos-ilustracion">

                    <img
                        src={imagen.src}
                        alt={imagen.alt}
                    />

                </div>

            </div>

        </section>
    );
}
