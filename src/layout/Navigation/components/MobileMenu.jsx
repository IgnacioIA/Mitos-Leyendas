import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import navItems from "../data/navItems";
import "../styles/MobileMenu.css";

function MobileMenuItem({ item, onClose }) {
  const [expanded, setExpanded] = useState(false);

  if (item.type === "external") {
    return (
      <li className="MobileMenu__item">
        <a
          className="MobileMenu__link"
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          {item.title}
        </a>
      </li>
    );
  }

  const visibleColumns = item.columns.filter((column) => column.items.length > 0);

  return (
    <li className="MobileMenu__item">
      <button
        className="MobileMenu__link MobileMenu__trigger"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {item.title}
        <span
          className={`MobileMenu__chevron${expanded ? " MobileMenu__chevron--open" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {expanded && (
        <div className="MobileMenu__sub">
          {visibleColumns.map((column, index) => (
            <div className="MobileMenu__subGroup" key={index}>
              {column.title && (
                <p className="MobileMenu__subTitle">{column.title}</p>
              )}

              <ul className="MobileMenu__subList">
                {column.items.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) =>
                        `MobileMenu__subLink${isActive && child.path !== "#" ? " MobileMenu__subLink--active" : ""}`
                      }
                      onClick={onClose}
                    >
                      {child.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <button
        className={`MobileMenu__hamburger${drawerOpen ? " MobileMenu__hamburger--open" : ""}`}
        onClick={() => setDrawerOpen((prev) => !prev)}
        aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={drawerOpen}
        aria-controls="mobile-drawer"
      >
        <span className="MobileMenu__bar" />
        <span className="MobileMenu__bar" />
        <span className="MobileMenu__bar" />
      </button>

      {/* Portados a document.body para no depender del containing
          block que crea el backdrop-filter del Header */}
      {createPortal(
        <>
          <div
            className={`MobileMenu__overlay${drawerOpen ? " MobileMenu__overlay--visible" : ""}`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          <nav
            id="mobile-drawer"
            className={`MobileMenu__drawer${drawerOpen ? " MobileMenu__drawer--open" : ""}`}
            aria-label="Menú móvil"
            aria-hidden={!drawerOpen}
          >
            <ul className="MobileMenu__list" role="list">
              {navItems.map((item) => (
                <MobileMenuItem key={item.id} item={item} onClose={closeDrawer} />
              ))}
            </ul>
          </nav>
        </>,
        document.body
      )}
    </>
  );
}
