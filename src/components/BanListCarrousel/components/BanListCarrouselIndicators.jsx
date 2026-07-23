import "../styles/BanListCarrouselIndicators.css";

export default function BanListCarrouselIndicators({ count, activeIndex, onSelect }) {
  return (
    <div className="BanListCarrouselIndicators" role="tablist" aria-label="Imágenes">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Ir a la imagen ${index + 1}`}
          className={`BanListCarrouselIndicators__dot${index === activeIndex ? " BanListCarrouselIndicators__dot--active" : ""}`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
