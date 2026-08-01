import "../styles/DracoSidheHeroButton.css";

export default function DracoSidheHeroButton({
  children,
  onClick,
}) {
  return (
    <button
      className="DracoSidheHeroButton"
      onClick={onClick}
    >
      <span className="DracoSidheHeroButton-text">
        {children}
      </span>

      <span className="DracoSidheHeroButton-arrow" />

    </button>
  );
}