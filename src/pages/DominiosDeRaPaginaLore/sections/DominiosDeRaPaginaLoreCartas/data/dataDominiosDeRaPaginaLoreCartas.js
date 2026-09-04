// A diferencia de la referencia (dataHijosDeDaanaPageCartas.js, que arma 3
// secciones por bloque: Nuevas/Alter/Rework), acá cada bloque tiene 2
// secciones -las que permiten los assets disponibles por grupo-: las 6
// cartas nuevas (carrousel) y las 2 cartas Buy a Box (dos-imagenes). El
// patrón data-driven (tipo de sección -> renderer) se mantiene igual.

//Amanecer-------------------
import fondoAmanecer from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/FONDO AMANECER.webp";

import cartaAmanecer1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/1.webp";
import cartaAmanecer2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/2.webp";
import cartaAmanecer3 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/3.webp";
import cartaAmanecer4 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/4.webp";
import cartaAmanecer5 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/5.webp";
import cartaAmanecer6 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/6.webp";

import cartaAmanecerBuyABox1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/BUY A BOX 1.webp";
import cartaAmanecerBuyABox2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Amanecer/BUY A BOX 2.webp";

//Invasores-------------------
import fondoInvasores from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/FONDO INVASORES.webp";

import cartaInvasores1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/1.webp";
import cartaInvasores2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/2.webp";
import cartaInvasores3 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/3.webp";
import cartaInvasores4 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/4.webp";
import cartaInvasores5 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/5.webp";
import cartaInvasores6 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/6.webp";

import cartaInvasoresBuyABox1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/BUY A BOX 1.webp";
import cartaInvasoresBuyABox2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Invasores/BUY A BOX 2.webp";

//Sabiduria-------------------
import fondoSabiduria from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/FONDO SABIDURIA.webp";

import cartaSabiduria1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/1.webp";
import cartaSabiduria2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/2.webp";
import cartaSabiduria3 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/3.webp";
import cartaSabiduria4 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/4.webp";
import cartaSabiduria5 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/5.webp";
import cartaSabiduria6 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/6.webp";

import cartaSabiduriaBuyABox1 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/BUY A BOX 1.webp";
import cartaSabiduriaBuyABox2 from "../../../../../assets/DominiosDeRaPaginaLore/Cartas/Sabiduria/BUY A BOX 2.webp";

// Tipo de contenido de cada sección: define qué renderer usa el JSX.
// Agregar una sección nueva = agregar un objeto acá, no tocar el componente.
export const TIPOS_SECCION = {
  CARROUSEL: "carrousel",
  DOS_IMAGENES: "dos-imagenes",
};

const dataDominiosDeRaPaginaLoreCartas = {
  bloques: [
    {
      id: "invasores",
      fondo: fondoInvasores,

      encabezado: {
        subtitulo: "", // TODO

        titulo: {
          linea: "RELATOS DE DOMINIOS DE RA:", // TODO
          destacado: "INVASORES",
        },

        // TODO: confirmar texto definitivo de la bajada.
        descripcion: [
          "Relatos Dominios de Ra: Invasores aborda la invasión persa de Egipto bajo el mando de Jerjes I, quien, tras suceder a Darío I, reprimió duramente la rebelión egipcia. Como consecuencia, Egipto sufrió confiscaciones, destrucción de templos y perdió su condición de nación central, convirtiéndose en una provincia más del Imperio Persa.",

        ],

        colorDestacado: "#9b76b5",
        sombraDestacado: "0 0 25px #3b2c44",
      },

      secciones: [
        {
          id: "BUY-A-BOX-INVASORES",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "2 CARTAS REWORK BUY A BOX PARA MAZO FARAÓN",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaInvasoresBuyABox1, alt: "Carta Buy a Box 1 — Invasores" },
            { src: cartaInvasoresBuyABox2, alt: "Carta Buy a Box 2 — Invasores" },
          ],
        },
        {
          id: "NUEVAS-INVASORES",
          tipo: TIPOS_SECCION.CARROUSEL,
          tituloPrimeraPalabra: "12 CARTAS NUEVAS PARA MAZO FARAÓN",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaInvasores1, alt: "Carta Nueva 1 — Invasores" },
            { src: cartaInvasores2, alt: "Carta Nueva 2 — Invasores" },
            { src: cartaInvasores3, alt: "Carta Nueva 3 — Invasores" },
            { src: cartaInvasores4, alt: "Carta Nueva 4 — Invasores" },
            { src: cartaInvasores5, alt: "Carta Nueva 5 — Invasores" },
            { src: cartaInvasores6, alt: "Carta Nueva 6 — Invasores" },
          ],
        },
      ],
    },
    {
      id: "sabiduria",
      fondo: fondoSabiduria,

      encabezado: {
        subtitulo: "", // TODO

        titulo: {
          linea: "RELATOS DE DOMINIOS DE RA:", // TODO
          destacado: "SABIDURÍA",
        },

        // TODO: confirmar texto definitivo de la bajada.
        descripcion: [
          "Relatos Dominios de Ra: Sabiduría explora la mítica Biblioteca de Alejandría, uno de los grandes centros de conocimiento del mundo antiguo. El relato aborda su enorme legado en ciencia, filosofía, literatura y medicina, además de presentar a destacados sabios de la época ptolemaica como Licofrón, Zenódoto, Hipatia y Apolonio.",
        ],
        

        colorDestacado: "#C67171",
        sombraDestacado: "0 0 25px #873A3A",
      },

      secciones: [
        {
          id: "BUY-A-BOX-SABIDURIA",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "2 CARTAS REWORK BUY A BOX PARA MAZO SACERDOTE",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaSabiduriaBuyABox1, alt: "Carta Buy a Box 1 — Sabiduria" },
            { src: cartaSabiduriaBuyABox2, alt: "Carta Buy a Box 2 — Sabiduria" },
          ],
        },
        {
          id: "NUEVAS-SABIDURIA",
          tipo: TIPOS_SECCION.CARROUSEL,
          tituloPrimeraPalabra: "12 CARTAS NUEVAS PARA MAZO SACERDOTE",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaSabiduria1, alt: "Carta Nueva 1 — Sabiduria" },
            { src: cartaSabiduria2, alt: "Carta Nueva 2 — Sabiduria" },
            { src: cartaSabiduria3, alt: "Carta Nueva 3 — Sabiduria" },
            { src: cartaSabiduria4, alt: "Carta Nueva 4 — Sabiduria" },
            { src: cartaSabiduria5, alt: "Carta Nueva 5 — Sabiduria" },
            { src: cartaSabiduria6, alt: "Carta Nueva 6 — Sabiduria" },
          ],
        },
      ],
    },
    {
      id: "amanecer",
      fondo: fondoAmanecer,

      encabezado: {
        subtitulo: "", // TODO

        titulo: {
          linea: "RELATOS DE DOMINIOS DE RA:", // TODO
          destacado: "AMANECER",
        },

        // TODO: confirmar texto definitivo de la bajada.
        descripcion:
        [
          "Relatos Dominios de Ra: Amanecer explora la relación entre Horus y Hathor, vinculada al Sol, el cielo y el ciclo de renovación cósmica en la mitología egipcia. El relato también presenta figuras como Nun del Abismo, los Wadjet, Hauron y los Jueces del Maat.",
        ],

        colorDestacado: "#ffb347",
        sombraDestacado: "0 0 25px rgba(255, 179, 71, 0.45)",
      },

      secciones: [
        {
          id: "BUY-A-BOX-AMANECER",
          tipo: TIPOS_SECCION.DOS_IMAGENES,
          tituloPrimeraPalabra: "2 CARTAS REWORK BUY A BOX PARA MAZO SACERDOTE",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaAmanecerBuyABox1, alt: "Carta Buy a Box 1 — Amanecer" },
            { src: cartaAmanecerBuyABox2, alt: "Carta Buy a Box 2 — Amanecer" },
          ],
        },
        {
          id: "NUEVAS-AMANECER",
          tipo: TIPOS_SECCION.CARROUSEL,
          tituloPrimeraPalabra: "12 CARTAS NUEVAS PARA MAZO SACERDOTE",
          tituloSegundaPalabra: "",
          // TODO: confirmar texto definitivo.
          descripcion: [
            "",
          ],
          imagenes: [
            { src: cartaAmanecer1, alt: "Carta Nueva 1 — Amanecer" },
            { src: cartaAmanecer2, alt: "Carta Nueva 2 — Amanecer" },
            { src: cartaAmanecer3, alt: "Carta Nueva 3 — Amanecer" },
            { src: cartaAmanecer4, alt: "Carta Nueva 4 — Amanecer" },
            { src: cartaAmanecer5, alt: "Carta Nueva 5 — Amanecer" },
            { src: cartaAmanecer6, alt: "Carta Nueva 6 — Amanecer" },
          ],
        },
      ],
    },


  ],
};

export default dataDominiosDeRaPaginaLoreCartas;
