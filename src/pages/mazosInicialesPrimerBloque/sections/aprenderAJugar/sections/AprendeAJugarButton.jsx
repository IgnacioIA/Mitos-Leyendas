import { Link } from "react-router-dom";

import "../styles/AprendeAJugarButton-MazosInicialPB.css";

export default function AprendeAJugarButton({
  text,
  url,
}) {
  return (
    <Link
      to={url}
      className="AprendeAJugarButton-MazosInicialPB"
    >
      {text}
    </Link>
  );
}