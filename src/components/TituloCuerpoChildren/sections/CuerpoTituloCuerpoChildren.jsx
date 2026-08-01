import "../styles/CuerpoTituloCuerpoChildren.css";

export default function CuerpoTituloCuerpoChildren({
  description,
}) {
  return (
    <div className="CuerpoTituloCuerpoChildren">
      <p className="CuerpoTituloCuerpoChildren-Description">
        {description}
      </p>
    </div>
  );
}
