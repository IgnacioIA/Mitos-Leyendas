import "../../../styles/ui/buttons/Button.css";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  onClick,
}) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}