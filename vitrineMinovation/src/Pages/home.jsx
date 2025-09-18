import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero left-align hero-flex">
        <div className="hero-content">
          <h1 className="wavy-title">
            <span className="brand">M-innovation</span>
          </h1>
          <p className="subtitle">Votre partenaire digital créatif et fiable</p>
          <p className="desc">
            Des solutions sur-mesure, une équipe passionnée, et des résultats
            qui font la différence.
          </p>
        </div>
      </section>

      <section className="services-section modern-services">
        <div className="services-list centered-services">
          <Link
            to="/services#web"
            onClick={() => window.scrollTo(0, 0)}
            className="service-card stylish-gradient clickable-card"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/device-desktop.svg"
              alt="Web"
              className="service-icon"
            />
            <h3>Création de sites web</h3>
            <p>
              Sites vitrines, e-commerce, blogs, portfolios, solutions
              sur-mesure et évolutives.
              <br />
              Sécurité renforcée, design responsive et gestion
              facile.
            </p>
          </Link>
          <Link
            to="/services#design"
            onClick={() => window.scrollTo(0, 0)}
            className="service-card stylish-gradient clickable-card"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/brush.svg"
              alt="Design"
              className="service-icon"
            />
            <h3>Design graphique</h3>
            <p>
              Création de logos, chartes graphiques, flyers, affiches, cartes de
              visite, réseaux sociaux.
              <br />
              Outils professionnels, créativité, cohérence visuelle et impact
              garanti.
            </p>
          </Link>
          <Link
            to="/teaching"
            onClick={() => window.scrollTo(0, 0)}
            className="service-card stylish-gradient clickable-card"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/book.svg"
              alt="English"
              className="service-icon"
            />
            <h3>Enseignement de l'anglais (CECRL)</h3>
            <p>
              Cours individuels ou en groupe, préparation aux certifications,
              ateliers interactifs.
              <br />
              Méthodes modernes, progression rapide, suivi personnalisé et
              résultats concrets.
            </p>
          </Link>
          <Link
            to="/services#more"
            onClick={() => window.scrollTo(0, 0)}
            className="service-card stylish-gradient and-more clickable-card"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/rocket.svg"
              alt="More"
              className="service-icon"
            />
            <h3>...et bien plus</h3>
            <p>
              Conseils en stratégie digitale, maintenance, accompagnement
              technique, formation sur-mesure.
              <br />
              Innovation, réactivité, expertise et solutions personnalisées pour
              chaque projet.
            </p>
          </Link>
        </div>
        <div
          className="section-separator stylish-separator"
          aria-hidden="true"
        ></div>
        <section className="why-choose-us-section">
          <h2 className="why-title">Pourquoi choisir M innovation ?</h2>
          <p className="why-intro">
            Parce que votre projet mérite l'excellence, l'écoute et l'innovation
            à chaque étape.
          </p>
          <div className="why-features-row">
            <div className="why-feature">
              <img
                src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/clock.svg"
                alt="Rapidité"
                className="why-icon"
              />
              <span>Livraison rapide</span>
              <p className="why-detail">
                Respect strict des délais, suivi transparent et engagement sur
                la date de livraison.
              </p>
            </div>
            <div className="why-feature">
              <img
                src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/user-heart.svg"
                alt="Accompagnement humain"
                className="why-icon"
              />
              <span>Accompagnement humain</span>
              <p className="why-detail">
                Conseils personnalisés, écoute active, disponibilité et suivi
                tout au long du projet.
              </p>
            </div>
            <div className="why-feature">
              <img
                src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/sparkles.svg"
                alt="Créativité"
                className="why-icon"
              />
              <span>Créativité & innovation</span>
              <p className="why-detail">
                Solutions originales, design moderne, technologies innovantes et
                idées sur-mesure.
              </p>
            </div>
            <div className="why-feature">
              <img
                src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/shield-check.svg"
                alt="Fiabilité"
                className="why-icon"
              />
              <span>Fiabilité & confiance</span>
              <p className="why-detail">
                Transparence, sécurité, respect des engagements et satisfaction
                garantie.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-wide-section">
          <div className="cta-content">
            <h2 className="cta-question">
              Prêt à transformer votre présence digitale ?
            </h2>
            <p className="cta-sub">
              Découvrez nos services innovants et démarquez-vous dès aujourd'hui
              !
            </p>
            <a href="/services" className="cta-explore-btn">
              Explorer nos services
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
