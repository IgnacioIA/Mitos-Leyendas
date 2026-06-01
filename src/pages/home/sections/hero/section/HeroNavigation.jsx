import "../styles/HeroNavigation.css";

export default function HeroNavigation({
  onPrev,
  onNext
}) {

  return (

    <div className="hero-navigation">

      <button
        className="hero-arrow"
        onClick={onPrev}
      >
        ←
      </button>

      <button
        className="hero-arrow"
        onClick={onNext}
      >
        →
      </button>

    </div>

  );
}