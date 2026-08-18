import "../styles/HeroBanListButton.css";

export default function HeroBanListButton({
  children,
  onClick,
}) {
  return (
    <button
      className="HeroBanListButton"
      onClick={onClick}
    >
      <span className="HeroBanListButton-text">
        {children}
      </span>

      <span className="HeroBanListButton-arrow" />

    </button>
  );
}
