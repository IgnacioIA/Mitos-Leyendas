import { FaInstagram, FaWhatsapp, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

import "../styles/TiendasAmigasBoton.css";

// Ícono + color por tipo: es sistema de diseño (fijo), no contenido —
// el data de cada tarjeta solo dice "tipo" + "url" (ver
// dataContenidoTiendasAmigas.js), nunca el color ni el ícono.
const TIPOS_BOTON = {
  instagram: { Icon: FaInstagram, color: "#c11bbd", label: "Instagram" },
  whatsapp: { Icon: FaWhatsapp, color: "#00a017", label: "WhatsApp" },
  web: { Icon: FaGlobe, color: "#1230b2", label: "Sitio web" },
  maps: { Icon: FaMapMarkerAlt, color: "#a00b1d", label: "Cómo llegar" },
};

export default function TiendasAmigasBoton({ tipo, url }) {
  const config = TIPOS_BOTON[tipo];

  if (!config) return null;

  const { Icon, color, label } = config;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tiendasAmigasBoton"
      style={{ "--tiendasAmigasBoton-color": color }}
      aria-label={label}
    >
      <Icon aria-hidden="true" />
    </a>
  );
}
