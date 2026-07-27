import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import logo from "../../assets/Header/LOGO MYL ARGENTINA.png";
import "./Header.css";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ENTER_THRESHOLD = 80;
    const EXIT_THRESHOLD = 40;

    const onScroll = () => {
      setScrolled((prev) => {
        if (prev) return window.scrollY > EXIT_THRESHOLD;
        return window.scrollY > ENTER_THRESHOLD;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>

      <div className="site-header-container">

        <Link to="/Home" className="site-logo">
          <img src={logo} alt="Mitos y Leyendas Argentina" className="site-logo__image" />
        </Link>

        <Navigation />

        {/* Placeholder estructural: reserva espacio para buscador/login futuros.
            Vacío a propósito — ver .site-header__actions en Header.css */}
        <div className="site-header__actions" aria-hidden="true" />

      </div>

    </header>
  );
}
