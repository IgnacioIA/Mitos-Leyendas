import "../styles/HeaderTituloCuerpoChildren.css";

export default function HeaderTituloCuerpoChildren({
  title,
}) {
  return (
    <header className="HeaderTituloCuerpoChildren">
      <h2 className="HeaderTituloCuerpoChildren-Title">
        {title}
      </h2>
    </header>
  );
}
