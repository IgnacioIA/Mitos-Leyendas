import Navigation from "../Navigation/Navigation";

import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">

      <div className="site-header-container">

        <div className="site-logo">

          <h1>Mitos y Leyendas</h1>

        </div>

        <Navigation />

      </div>

    </header>
  );
}