import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/INovation1.png";
import "./TopBar.css";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="topbar-animated">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo M inovation" className="logo-clear" />
      </Link>

      <button
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="menu-icon"></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services Digitaux
          </Link>
        </li>
        <li className={location.pathname === "/teaching" ? "active" : ""}>
          <Link to="/teaching" onClick={() => setIsMenuOpen(false)}>
            Formation Anglais
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
