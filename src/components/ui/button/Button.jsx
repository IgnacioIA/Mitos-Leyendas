import "../../../styles/ui/buttons/Button.css";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}