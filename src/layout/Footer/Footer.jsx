import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaDiscord } from "react-icons/fa";

import logo from "../../assets/Header/LOGO MYL ARGENTINA.webp";
import "./Footer.css";

// TODO: reemplazar por las URLs reales de cada red social
const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/myl_oficial_argentina/", Icon: FaInstagram },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61564778518712", Icon: FaFacebook },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@MitosyLeyendasArgentinaOficial", Icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="site-footer-container">

        <div className="site-footer-top">

          <Link to="/Home" className="site-footer-logo">
            <img src={logo} alt="Mitos y Leyendas Argentina" className="site-footer-logo__image" />
          </Link>

          <ul className="site-footer-social" role="list">
            {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  className="site-footer-social__link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

        </div>

        <hr className="site-footer-divider" />

        <div className="site-footer-bottom">
          <p>© 2026 Mitos y Leyendas</p>
          <p>© Sigma Diseños</p>
        </div>

      </div>

    </footer>
  );
}
