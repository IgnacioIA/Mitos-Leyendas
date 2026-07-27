import { useEffect, useRef, useState } from "react";

import navItems from "../data/navItems";
import MegaMenuPanel from "./MegaMenuPanel";
import "../styles/DesktopNav.css";

const CLOSE_DELAY_MS = 180;

function DesktopNavItem({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => clearCloseTimeout, []);

  if (item.type === "external") {
    return (
      <li className="DesktopNav__item">
        <a
          className="DesktopNav__link"
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      </li>
    );
  }

  return (
    <li
      className="DesktopNav__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`DesktopNav__link DesktopNav__trigger${open ? " DesktopNav__trigger--open" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.title}
        <span className="DesktopNav__chevron" aria-hidden="true">▾</span>
      </button>

      <MegaMenuPanel columns={item.columns} open={open} />
    </li>
  );
}

export default function DesktopNav() {
  return (
    <nav className="DesktopNav" aria-label="Navegación principal">
      <ul className="DesktopNav__list" role="list">
        {navItems.map((item) => (
          <DesktopNavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
