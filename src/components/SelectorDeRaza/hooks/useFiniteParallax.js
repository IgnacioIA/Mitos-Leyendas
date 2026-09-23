import { useEffect } from "react";

export default function useFiniteParallax(ref, variables, strengthX = 7, strengthY = 5) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const draw = () => {
      cx += (tx - cx) * 0.11;
      cy += (ty - cy) * 0.11;
      el.style.setProperty(variables.x, cx.toFixed(3));
      el.style.setProperty(variables.y, cy.toFixed(3));
      el.style.setProperty(variables.bx, (-cx * 0.55).toFixed(3));
      el.style.setProperty(variables.by, (-cy * 0.55).toFixed(3));

      if (Math.abs(tx - cx) > 0.03 || Math.abs(ty - cy) > 0.03) {
        raf = requestAnimationFrame(draw);
      } else {
        raf = 0;
      }
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      tx = Math.max(-1, Math.min(1, nx)) * strengthX;
      ty = Math.max(-1, Math.min(1, ny)) * strengthY;
      kick();
    };

    const handleLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, strengthX, strengthY, variables.bx, variables.by, variables.x, variables.y]);
}
