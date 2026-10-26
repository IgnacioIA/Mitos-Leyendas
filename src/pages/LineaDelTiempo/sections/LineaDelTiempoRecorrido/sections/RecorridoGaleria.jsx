import { useEffect, useState } from "react";

import "../styles/RecorridoGaleria.css";

import useCarousel from "../../../../../components/carouselConEmbla/hooks/useCarousel";

// Tira de cartas con Embla (hook compartido useCarousel). Sin loop: las
// flechas se deshabilitan en los extremos. Arrastre con mouse/touch,
// flechas de a dos cartas (como el modelo) y ←/→ con el foco en la tira.
const OPCIONES = {
  loop: false,
  align: "start",
  containScroll: "trimSnaps",
  dragFree: true,
  slidesToScroll: 2,
};

export default function RecorridoGaleria({ titulo, formato, cartas }) {
  const { emblaRef, emblaApi, scrollPrev, scrollNext } = useCarousel(OPCIONES);

  const [limites, setLimites] = useState({ prev: false, next: false });

  useEffect(() => {
    if (!emblaApi) return undefined;

    const sincronizar = (api) => {
      setLimites({ prev: api.canScrollPrev(), next: api.canScrollNext() });
    };

    emblaApi.on("init", sincronizar);
    emblaApi.on("reInit", sincronizar);
    emblaApi.on("select", sincronizar);
    emblaApi.on("settle", sincronizar);

    // Embla ya está inicializado al llegar acá: primera lectura asíncrona.
    const frame = requestAnimationFrame(() => sincronizar(emblaApi));

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("init", sincronizar);
      emblaApi.off("reInit", sincronizar);
      emblaApi.off("select", sincronizar);
      emblaApi.off("settle", sincronizar);
    };
  }, [emblaApi]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    }
  };

  return (
    <div className="recorridoGaleria">

      <div className="recorridoGaleria-encabezado">
        <strong>{titulo}</strong>

        <div className="recorridoGaleria-flechas">
          <button
            type="button"
            aria-label="Mover galería a la izquierda"
            onClick={scrollPrev}
            disabled={!limites.prev}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Mover galería a la derecha"
            onClick={scrollNext}
            disabled={!limites.next}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="recorridoGaleria-viewport"
        ref={emblaRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carrusel"
        aria-label={`Galería ${formato}`}
        onKeyDown={onKeyDown}
      >
        <div className="recorridoGaleria-tira">
          {cartas.map((carta) => (
            <div className="recorridoGaleria-carta" key={carta.id}>
              <img
                src={carta.imagen}
                alt={carta.nombre}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
