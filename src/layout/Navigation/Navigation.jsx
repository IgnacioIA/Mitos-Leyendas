import NavigationItem from "./NavigationItem";

import "./Navigation.css";

const items = [
  {
    title: "Inicio",
    path: "/Home",
  },

  {
    title: "Aprende",
    path: "/Apj",
  },

  {
    title: "Formatos",
    path: "/Formatos",
  },

  {
    title: "Lore",
    path: "/LorePage",
  },

  {
    title: "Tiendas",
    path: "/TiendasAmigas",
  },
];

export default function Navigation() {
  return (
    <nav className="navigation">

      <ul className="navigation-list">

        {items.map((item) => (
          <NavigationItem
            key={item.path}
            {...item}
          />
        ))}

      </ul>

    </nav>
  );
}