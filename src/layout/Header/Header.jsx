import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>

      <div className="site-header-container">

        <Link to="/Home" className="site-logo">
          Mitos y Leyendas
        </Link>

        <Navigation />

      </div>

    </header>
  );
}
