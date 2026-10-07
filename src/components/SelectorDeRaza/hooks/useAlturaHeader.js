import { useEffect } from "react";

// Publica la altura real del header sticky del sitio como --header-h en el
// elemento dado. El header cambia de alto al hacer scroll (estado compacto),
// por eso se observa en vez de medirlo una vez. Sin header (o sin
// ResizeObserver) la variable no se define y el CSS usa su fallback.
export default function useAlturaHeader(ref, selector = ".site-header") {
  useEffect(() => {
    const root = ref.current;
    const header = document.querySelector(selector);
    if (!root || !header || typeof ResizeObserver === "undefined") return undefined;

    const publicar = () => {
      root.style.setProperty("--header-h", `${header.getBoundingClientRect().height}px`);
    };

    publicar();

    const observer = new ResizeObserver(publicar);
    observer.observe(header);

    return () => {
      observer.disconnect();
      root.style.removeProperty("--header-h");
    };
  }, [ref, selector]);
}
