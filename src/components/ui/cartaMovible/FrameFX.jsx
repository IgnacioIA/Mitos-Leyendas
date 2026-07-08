{/*import { useRef } from "react";
import "../../../styles/ui/cartaMovible/FrameFX.css";

export default function FrameFX({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    ref.current.style.setProperty("--rotateX", `${rotateX}deg`);
    ref.current.style.setProperty("--rotateY", `${rotateY}deg`);

    ref.current.style.setProperty("--mouseX", `${x}px`);
    ref.current.style.setProperty("--mouseY", `${y}px`);
  };

  const reset = () => {
    ref.current.style.setProperty("--rotateX", `0deg`);
    ref.current.style.setProperty("--rotateY", `0deg`);
  };

  return (
    <div
      ref={ref}
      className="frame-fx"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}*/}import { useRef } from "react";

import "../../../styles/ui/cartaMovible/FrameFX.css";

export default function FrameFX({ children }) {

  const ref = useRef(null);

  const updateTilt = (clientX, clientY) => {

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      clientX - rect.left;

    const y =
      clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      -(y - centerY) / 15;

    const rotateY =
      (x - centerX) / 15;

    ref.current.style.setProperty(
      "--rotateX",
      `${rotateX}deg`
    );

    ref.current.style.setProperty(
      "--rotateY",
      `${rotateY}deg`
    );

    ref.current.style.setProperty(
      "--mouseX",
      `${x}px`
    );

    ref.current.style.setProperty(
      "--mouseY",
      `${y}px`
    );
  };

  const reset = () => {

    ref.current.style.setProperty(
      "--rotateX",
      `0deg`
    );

    ref.current.style.setProperty(
      "--rotateY",
      `0deg`
    );
  };

  // Pointer Events unifica mouse/touch/pen en un solo flujo.
  // El scroll se bloquea solo mientras el gesto ocurre sobre la carta
  // (touch-action: none en el CSS) y se recupera de inmediato al soltar,
  // ya que touch-action solo afecta gestos que empiezan en este elemento.

  const handlePointerMove = (e) => {
    updateTilt(e.clientX, e.clientY);
  };

  const handlePointerDown = (e) => {
    ref.current.setPointerCapture(e.pointerId);
    updateTilt(e.clientX, e.clientY);
  };

  const handlePointerUp = (e) => {

    if (ref.current.hasPointerCapture(e.pointerId)) {
      ref.current.releasePointerCapture(e.pointerId);
    }

    // El mouse solo resetea al salir del área (onPointerLeave),
    // igual que el comportamiento original con onMouseLeave.
    if (e.pointerType !== "mouse") {
      reset();
    }
  };

  return (
    <div
      ref={ref}
      className="frame-fx"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={reset}
      onContextMenu={(e) => e.preventDefault()}
    >

      {children}

      <div className="foil" />

    </div>
  );
}