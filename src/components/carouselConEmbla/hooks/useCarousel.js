import useEmblaCarousel from "embla-carousel-react";

export default function useCarousel(options = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    ...options,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return {
    emblaRef,
    emblaApi,
    scrollPrev,
    scrollNext,
  };
}