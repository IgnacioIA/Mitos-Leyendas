import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

/* =========================================================
   ESTRUCTURA DE RUTAS
   Mismo patrón que MTG: grupos con dropdown + links directos
========================================================= */

const NAV_ITEMS = [
  {
    id: "expansiones",
    title: "Expansiones",
    children: [
      { title: "Leyendas 4.0",    path: "/mitos4.0"      },
      { title: "Shogun 5",        path: "/Shogun"         },
      { title: "Edición PBX",     path: "/EdicionPBX"     },
      { title: "Mazos Iniciales", path: "/mazoInicialPB"  },
    ],
  },
  {
    id: "jugar",
    title: "Jugar",
    children: [
      { title: "Aprende a Jugar", path: "/Apj"      },
      { title: "Formatos",        path: "/Formatos"  },
      { title: "Ban List",        path: "/BanList"   },
    ],
  },
  {
    id: "explorar",
    title: "Explorar",
    children: [
      { title: "Historia MYL", path: "/HistoriaMYL" },
      { title: "Lore",         path: "/LorePage"    },
    ],
  },
  { id: "tiendas", title: "Tiendas", path: "/TiendasAmigas"  },
  { id: "teams",   title: "Teams",   path: "/TeamsOficiales" },
];

/* =========================================================
   DESKTOP — item con dropdown
========================================================= */

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li className="nav__item">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `nav__link${isActive ? " nav__link--active" : ""}`
          }
        >
          {item.title}
        </NavLink>
      </li>
    );
  }

  return (
    <li
      className="nav__item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`nav__link nav__trigger${open ? " nav__trigger--open" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.title}
        <span className="nav__chevron" aria-hidden="true">▾</span>
      </button>

      <div
        className={`nav__dropdown${open ? " nav__dropdown--visible" : ""}`}
        role="menu"
      >
        {item.children.map((child) => (
          <NavLink
            key={child.path}
            to={child.path}
            role="menuitem"
            className={({ isActive }) =>
              `nav__dropdown-link${isActive ? " nav__dropdown-link--active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {child.title}
          </NavLink>
        ))}
      </div>
    </li>
  );
}

/* =========================================================
   MOBILE — item con acordeón
========================================================= */

function MobileItem({ item, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li className="mob-nav__item">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `mob-nav__link${isActive ? " mob-nav__link--active" : ""}`
          }
          onClick={onClose}
        >
          {item.title}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="mob-nav__item">
      <button
        className="mob-nav__link mob-nav__trigger"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {item.title}
        <span
          className={`mob-nav__chevron${expanded ? " mob-nav__chevron--open" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {expanded && (
        <ul className="mob-nav__sub">
          {item.children.map((child) => (
            <li key={child.path}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `mob-nav__sub-link${isActive ? " mob-nav__sub-link--active" : ""}`
                }
                onClick={onClose}
              >
                {child.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* =========================================================
   NAVIGATION — raíz
========================================================= */

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="nav" aria-label="Navegación principal">
        <ul className="nav__list" role="list">
          {NAV_ITEMS.map((item) => (
            <DesktopItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>

      {/* HAMBURGER */}
      <button
        className={`hamburger${drawerOpen ? " hamburger--open" : ""}`}
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={drawerOpen}
        aria-controls="mobile-drawer"
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {/* OVERLAY + DRAWER — portados a document.body para no depender del
          containing block que crea el backdrop-filter del Header */}
      {createPortal(
        <>
          <div
            className={`nav__overlay${drawerOpen ? " nav__overlay--visible" : ""}`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          <nav
            id="mobile-drawer"
            className={`nav__drawer${drawerOpen ? " nav__drawer--open" : ""}`}
            aria-label="Menú móvil"
            aria-hidden={!drawerOpen}
          >
            <ul className="mob-nav__list" role="list">
              {NAV_ITEMS.map((item) => (
                <MobileItem key={item.id} item={item} onClose={closeDrawer} />
              ))}
            </ul>
          </nav>
        </>,
        document.body
      )}
    </>
  );
}
