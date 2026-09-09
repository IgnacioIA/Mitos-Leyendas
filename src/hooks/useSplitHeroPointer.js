import { useEffect, useRef } from "react";

/**
 * Interacción del "hero dividido" (dos imágenes separadas por una línea que
 * sigue al puntero) que comparten HeroDesafioAmatista y
 * HeroToolkit2025JuicioVision — hasta ahora el mismo código duplicado 1:1
 * en los dos, solo con onMouseMove. Este hook centraliza esa lógica (el
 * suavizado con requestAnimationFrame/lerp se conserva tal cual, ya
 * producía el efecto correcto) y la expone a través de Pointer Events, que
 * unifican mouse/touch/pen en un solo flujo — el mismo enfoque que ya usa
 * FrameFX (src/components/ui/cartaMovible/FrameFX.jsx) para las cartas 3D.
 *
 * Con solo onMouseMove, en Mobile la interacción no respondía al touch de
 * forma fluida (el navegador solo emula mousemove en ciertos taps) y el
 * long-press quedaba libre para disparar el menú contextual/drag nativo de
 * imagen — de ahí que las reglas de touch-action/user-select vivan en el
 * CSS de cada hero (no acá), igual que en FrameFX.
 */
export default function useSplitHeroPointer() {
  const containerRef = useRef(null);

  const posRef = useRef(50);
  const targetRef = useRef(50);
  const mouseRef = useRef({
    x: 50,
    y: 50,
  });

  const updateTarget = (clientX, clientY) => {
    const el = containerRef.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    targetRef.current += (x - targetRef.current) * 0.35;

    mouseRef.current.x += (x - mouseRef.current.x) * 0.15;
    mouseRef.current.y += (y - mouseRef.current.y) * 0.15;
  };

  const handlePointerDown = (e) => {
    containerRef.current?.setPointerCapture(e.pointerId);

    updateTarget(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    updateTarget(e.clientX, e.clientY);
  };

  const handlePointerUp = (e) => {
    if (containerRef.current?.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  useEffect(() => {
    let raf;

    const animate = () => {
      const diff = targetRef.current - posRef.current;

      const resistance = 1 - Math.min(Math.abs(diff) / 50, 1);

      posRef.current += diff * (0.08 + resistance * 0.12);

      const el = containerRef.current;

      if (el) {
        el.style.setProperty("--pos", `${posRef.current}%`);
        el.style.setProperty("--mx", `${mouseRef.current.x}%`);
        el.style.setProperty("--my", `${mouseRef.current.y}%`);
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return {
    containerRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
