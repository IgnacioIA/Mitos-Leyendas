import { Link } from "react-router-dom";

export default function NavigationItem({
  title,
  path,
}) {
  return (
    <li className="navigation-item">

      <Link
        to={path}
        className="navigation-link"
      >
        {title}
      </Link>

    </li>
  );
}