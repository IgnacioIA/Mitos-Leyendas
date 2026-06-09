import "../styles/HeroNavigation.css";

export default function HeroNavigation({
  onPrev,
  onNext
}) {

  return (

    <div className="hero-navigation-Home">

      <button
        className="hero-arrow-Home"
        onClick={onPrev}
      >
        ←
      </button>

      <button
        className="hero-arrow-Home"
        onClick={onNext}
      >
        →
      </button>

    </div>

  );
}