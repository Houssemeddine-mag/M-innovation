import { Link } from "react-router-dom";
import logo from "../assets/INovation.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo M inovation" className="footer-logo-img" />
        </div>

        <div className="footer-sections">
          <div className="footer-nav">
            <h3>Navigation</h3>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Accueil
            </Link>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              Services Digitaux
            </Link>
            <Link to="/teaching" onClick={() => window.scrollTo(0, 0)}>
              Formation Anglais
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </Link>
          </div>

          <div className="footer-services">
            <h3>Nos Services</h3>
            <Link to="/services#web" onClick={() => window.scrollTo(0, 0)}>
              Développement Web
            </Link>
            <Link to="/services#design" onClick={() => window.scrollTo(0, 0)}>
              Design Graphique
            </Link>
            <Link to="/teaching" onClick={() => window.scrollTo(0, 0)}>
              Cours d'Anglais
            </Link>
            <Link to="/services#more" onClick={() => window.scrollTo(0, 0)}>
              Autres Services
            </Link>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Constantine, Algerie</p>
            <p>Tél: +213 541 52 98 90</p>
            <p>Email: houssemeddinemagra@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 M innovation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
