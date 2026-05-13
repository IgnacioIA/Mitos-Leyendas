import { useRef } from "react";
import "../../styles/ui/cartaMovible/FrameFX.css";

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
}