import { useEffect, useState } from "react";

/**
 * Cuántos slides debe avanzar Embla por swipe/flecha, según el ancho actual
 * de la ventana.
 *
 * Los tres carruseles Embla del proyecto (CarrouselResponsiveDeCinco,
 * CarrouselResponsiveDeTres, CarrouselResponsive) fijaban `slidesToScroll`
 * al número de cartas visibles en Desktop y nunca lo recalculaban: en
 * Mobile el CSS reduce las cartas visibles a 1 o 2, pero cada swipe seguía
 * pidiéndole a Embla saltar 3, 4 o 5. Este hook resuelve eso una sola vez
 * para los tres, sin tocar Desktop.
 *
 * `breakpoints` es un array ordenado de mayor a menor `maxWidth` — los
 * MISMOS anchos que ya definen, en el CSS de cada carrusel, cuántas cartas
 * se ven (evita tener un breakpoint distinto en JS y en CSS para el mismo
 * comportamiento). El primer breakpoint cuyo `maxWidth` sea mayor o igual
 * al ancho actual gana; si ninguno matchea, se usa `defaultSlides` (el
 * valor de Desktop, sin cambios).
 */
export default function useResponsiveSlidesToScroll(
  breakpoints,
  defaultSlides
) {
  const getSlides = () => {
    if (typeof window === "undefined") return defaultSlides;

    const width = window.innerWidth;
    const match = breakpoints.find((bp) => width <= bp.maxWidth);

    return match ? match.slides : defaultSlides;
  };

  const [slidesToScroll, setSlidesToScroll] = useState(getSlides);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToScroll(getSlides());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

    // Los breakpoints de cada carrusel son estáticos (constantes definidas
    // en el propio componente): no hace falta re-suscribirse si cambia la
    // referencia del array entre renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return slidesToScroll;
}
