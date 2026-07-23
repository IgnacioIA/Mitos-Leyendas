import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../styles/MegaMenuPanel.css";

export default function MegaMenuPanel({ columns, open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="MegaMenuPanel"
          role="menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="MegaMenuPanel__inner">
            {columns.map((column, index) => (
              <div className="MegaMenuPanel__column" key={index}>

                {column.title && (
                  <h3 className="MegaMenuPanel__columnTitle">{column.title}</h3>
                )}

                {column.items.length > 0 ? (
                  <ul className="MegaMenuPanel__list">
                    {column.items.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          role="menuitem"
                          className={({ isActive }) =>
                            `MegaMenuPanel__link${isActive && item.path !== "#" ? " MegaMenuPanel__link--active" : ""}`
                          }
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  column.title && <p className="MegaMenuPanel__empty">Muy pronto</p>
                )}

              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
