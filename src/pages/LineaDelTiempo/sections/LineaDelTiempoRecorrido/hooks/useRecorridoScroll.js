import { useCallback, useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

// Coordina todo lo que depende del scroll vertical del recorrido, con los
// mismos criterios que el modelo v10:
//
// - Marcador: un punto al 53% del alto de la ventana. Es la referencia
//   común del progreso del eje, la etapa activa y la mezcla de fondos.
// - Progreso del eje: (marcador - top del eje) / alto del eje, suavizado
//   con useSpring. Es un MotionValue: no pasa por el estado de React.
// - Etapa activa: la última etapa cuyo top quedó por encima del marcador,
//   con histéresis según la dirección del scroll. Es estado de React, pero
//   solo se actualiza cuando cambia de etapa (marcador de años, navegador).
// - Fondo y color de acento: interpolación con smoothstep entre los centros
//   de dos etapas consecutivas. Se escriben directo en el DOM (opacidad,
//   background-image y --accent) en cada cuadro, sin re-render.
//
// Las posiciones de las etapas se miden con getBoundingClientRect y se
// vuelven a medir al redimensionar la ventana o cuando cambia el alto del
// eje (ResizeObserver: carga de fuentes, cambios de breakpoint, etc.).

const MARCADOR = 0.53;
const CENTRO_ETAPA = 0.48;
const OPACIDAD_FONDO = 0.94;

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function mezclarColor(a, b, t) {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  const canal = (x, y) =>
    Math.max(0, Math.min(255, Math.round(x + (y - x) * t)))
      .toString(16)
      .padStart(2, "0");

  return `#${canal(ca.r, cb.r)}${canal(ca.g, cb.g)}${canal(ca.b, cb.b)}`;
}

function smoothstep(t) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function fondoDeEtapa(etapa) {
  return `linear-gradient(115deg, ${etapa.color}c2 0%, ${etapa.color}72 42%, transparent 95%), url("${etapa.banner}")`;
}

export default function useRecorridoScroll(etapas) {
  const rootRef = useRef(null);
  const ejeRef = useRef(null);
  const etapasRef = useRef([]);
  const capaARef = useRef(null);
  const capaBRef = useRef(null);

  const [etapaActiva, setEtapaActiva] = useState(0);
  const [navegadorVisible, setNavegadorVisible] = useState(false);

  const reducirMovimiento = useReducedMotion();

  // Mediciones y valores "vivos" que se leen en cada cuadro.
  const estado = useRef({
    tops: [],
    centros: [],
    activa: 0,
    ultimoY: 0,
    direccion: 1,
    navegador: false,
    etapaCapaA: null,
    etapaCapaB: null,
  });

  const { scrollY } = useScroll();

  // (marcador - top del eje) / alto del eje, recortado a [0, 1].
  const progresoEje = useMotionValue(0);

  // El modelo suaviza con 1 - exp(-dt / 88ms); un resorte críticamente
  // amortiguado con la misma constante de tiempo da el mismo "arrastre".
  const progresoSuave = useSpring(progresoEje, {
    stiffness: 130,
    damping: 23,
    restDelta: 0.00002,
  });

  const progreso = reducirMovimiento ? progresoEje : progresoSuave;

  const medir = useCallback(() => {
    const y = window.scrollY;
    const elementos = etapasRef.current.filter(Boolean);

    estado.current.tops = elementos.map((el) => el.getBoundingClientRect().top + y);
    estado.current.centros = elementos.map(
      (el, i) => estado.current.tops[i] + el.offsetHeight * CENTRO_ETAPA
    );
  }, []);

  const pintarCapa = useCallback((capa, clave, etapa) => {
    if (!capa || estado.current[clave] === etapa.id) return;

    estado.current[clave] = etapa.id;
    capa.style.backgroundImage = fondoDeEtapa(etapa);
  }, []);

  const actualizar = useCallback(() => {
    const s = estado.current;
    const { tops, centros } = s;
    if (!centros.length) return;

    const y = window.scrollY;
    const dy = y - s.ultimoY;

    if (Math.abs(dy) > 0.5) {
      s.direccion = dy > 0 ? 1 : -1;
      s.ultimoY = y;
    }

    const marcador = y + window.innerHeight * MARCADOR;

    // Etapa activa (con histéresis por dirección, como el modelo).
    let siguiente = 0;
    for (let i = 0; i < tops.length; i++) {
      if (tops[i] <= marcador) siguiente = i;
      else break;
    }

    const activa = s.direccion >= 0
      ? Math.max(s.activa, siguiente)
      : Math.min(s.activa, siguiente);

    if (activa !== s.activa) {
      s.activa = activa;
      setEtapaActiva(activa);
    }

    // Fondo + acento: mezcla entre la etapa i y la i + 1.
    const ultima = centros.length - 1;
    let i = 0;
    while (i < ultima - 1 && marcador > centros[i + 1]) i++;

    const j = Math.min(i + 1, ultima);
    let t = j === i ? 0 : smoothstep((marcador - centros[i]) / Math.max(1, centros[j] - centros[i]));

    if (marcador <= centros[0]) {
      i = 0;
      t = 0;
    }

    if (marcador >= centros[ultima]) {
      i = ultima;
      t = 0;
    }

    const etapaA = etapas[i];
    const etapaB = etapas[Math.min(i + 1, ultima)];

    pintarCapa(capaARef.current, "etapaCapaA", etapaA);
    pintarCapa(capaBRef.current, "etapaCapaB", etapaB);

    if (capaARef.current) capaARef.current.style.opacity = (OPACIDAD_FONDO * (1 - t)).toFixed(3);
    if (capaBRef.current) capaBRef.current.style.opacity = (OPACIDAD_FONDO * t).toFixed(3);

    rootRef.current?.style.setProperty("--accent", mezclarColor(etapaA.color, etapaB.color, t));

    const root = rootRef.current;
    const eje = ejeRef.current;

    if (root && eje) {
      const cajaEje = eje.getBoundingClientRect();

      progresoEje.set(
        Math.max(0, Math.min(1, (window.innerHeight * MARCADOR - cajaEje.top) / Math.max(1, cajaEje.height)))
      );

      // Navegador: visible desde que el recorrido pasa el 55% de la
      // ventana (el Hero ya salió) hasta que el eje sale por arriba.
      const visible =
        root.getBoundingClientRect().top < window.innerHeight * 0.55 &&
        cajaEje.bottom > 0;

      if (visible !== s.navegador) {
        s.navegador = visible;
        setNavegadorVisible(visible);
      }
    }
  }, [etapas, pintarCapa, progresoEje]);

  useMotionValueEvent(scrollY, "change", actualizar);

  useEffect(() => {
    estado.current.ultimoY = window.scrollY;

    const remedir = () => {
      medir();
      actualizar();
    };

    // Primera pintura en el próximo cuadro: el layout ya está resuelto.
    const frame = requestAnimationFrame(remedir);

    window.addEventListener("resize", remedir);

    let observer;
    if (typeof ResizeObserver !== "undefined" && ejeRef.current) {
      observer = new ResizeObserver(remedir);
      observer.observe(ejeRef.current);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", remedir);
      observer?.disconnect();
    };
  }, [medir, actualizar]);

  const registrarEtapa = useCallback((index) => (el) => {
    etapasRef.current[index] = el;
  }, []);

  return {
    rootRef,
    ejeRef,
    capaARef,
    capaBRef,
    registrarEtapa,
    progreso,
    etapaActiva,
    navegadorVisible,
    reducirMovimiento,
  };
}
