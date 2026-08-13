import fondoBeneficioCompra from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageBeneficioCompra/FONDO.webp";

import beneficio1 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageBeneficioCompra/1.webp";
import beneficio2 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageBeneficioCompra/2.webp";
import beneficio3 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageBeneficioCompra/3.webp";
import beneficio4 from "../../../../../assets/HijosDeDaanaPage/HijosDeDaanaPageBeneficioCompra/4.webp";

// TODO: completar textos definitivos de esta sección.
const dataHijosDeDaanaPageBeneficioCompra = {
  background: {
    image: fondoBeneficioCompra,
    overlay: 0.35,
    position: "center center",
  },

  texto: {
    tituloPrimeraPalabra: "BENEFICIO DE COMPRA", // TODO
    tituloSegundaPalabra: "", // TODO
    descripcion: [
      "Todos los jugadores que reserven 3 unidades sus Relatos de Hijos de Daana en periodo de reserva con Tienda o ciales, podrán optar a un regalo adicional, 2 Cartas Secretas al azar con ilustración de Hijos de Daana Aniversario, de un total de 4 modelos diferentes.", // TODO
    ],
  },

  carrousel: {
    elementos: [
      { id: "beneficio-compra-1", imagen: beneficio1 },
      { id: "beneficio-compra-2", imagen: beneficio2 },
      { id: "beneficio-compra-3", imagen: beneficio3 },
      { id: "beneficio-compra-4", imagen: beneficio4 },
    ],
  },
};

export default dataHijosDeDaanaPageBeneficioCompra;
