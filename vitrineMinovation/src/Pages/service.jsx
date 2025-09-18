import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/service.css";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top on page load
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Nos Services</h1>
        <p>Des solutions digitales sur-mesure adaptées au marché algérien</p>
      </section>

      <section id="web" className="service-section web-dev">
        <h2>Développement Web</h2>
        <div className="service-grid">
          <div className="service-card premium">
            <h3>Site Vitrine</h3>
            <div className="price">25 000 DA</div>
            <ul>
              <li>3-5 pages professionnelles</li>
              <li>Design moderne responsive</li>
              <li>Nom de domaine .com/.dz</li>
              <li>SSL & Sécurité de base</li>
              <li>Formulaire de contact sécurisé</li>
              <li>Formation administration</li>
              <li>Délai : 3 à 5 jours</li>
            </ul>
          </div>

          <div className="service-card premium">
            <h3>Blog / Magazine</h3>
            <div className="price">35 000 DA</div>
            <ul>
              <li>Design magazine professionnel</li>
              <li>Système de gestion d'articles</li>
              <li>Catégories & tags</li>
              <li>Moteur de recherche intégré</li>
              <li>Espace commentaires</li>
              <li>Panel administrateur complet</li>
              <li>Intégration réseaux sociaux</li>
              <li>Formation rédacteurs</li>
              <li>Délai : 2 à 3 semaines</li>
            </ul>
          </div>

          <div className="service-card premium">
            <h3>Site E-commerce</h3>
            <div className="price">80 000 DA</div>
            <ul>
              <li>Design e-commerce premium</li>
              <li>Catalogue produits illimité</li>
              <li>Gestion stocks </li>
              <li>Paiement à la livraison</li>
              <li>Multi-devises (DA, €, $)</li>
              <li>Factures automatiques</li>
              <li>Tableau de bord vendeur</li>
              <li>Rapports & statistiques</li>
              <li>Formation complète incluse</li>
              <li>Délai : 4 à 5 semaines</li>
            </ul>
          </div>

          <div className="service-card premium">
            <h3>Web App Personnalisée</h3>
            <div className="price">à partir de 120 000 DA</div>
            <ul>
              <li>Application web sur mesure</li>
              <li>Interface utilisateur intuitive</li>
              <li>Système de gestion avancé</li>
              <li>Base de données sécurisée</li>
              <li>Tableau de bord personnalisé</li>
              <li>Gestion des utilisateurs</li>
              <li>Documentation complète</li>
              <li>Déploiement sécurisé</li>
              <li>Support technique 1 mois</li>
              <li>Délai : selon projet</li>
            </ul>
          </div>

          <div className="service-card premium">
            <h3>Site Web + App Mobile</h3>
            <div className="price">à partir de 250 000 DA</div>
            <ul>
              <li>Site web adaptatif</li>
              <li>Application mobile native</li>
              <li>Synchronisation automatique</li>
              <li>Fonctionnement hors ligne</li>
              <li>Notifications mobiles</li>
              <li>Sécurité renforcée</li>
              <li>Performance optimisée</li>
              <li>Tests approfondis</li>
              <li>Documentation complète</li>
              <li>Formation utilisateurs</li>
              <li>Délai : selon le projet</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="design" className="service-section graphic-design">
        <h2>Design Graphique</h2>
        <div className="service-grid">
          <div className="service-card creative">
            <h3>Logo Professionnel</h3>
            <div className="price">5 000 DA</div>
            <ul>
              <li>2 propositions uniques</li>
              <li>Formats PNG, SVG, PDF</li>
              <li>Versions couleur et N&B</li>
              <li>Modifications illimitées</li>
              <li>Droits d'utilisation complets</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Carte de Visite</h3>
            <div className="price">2 000 DA</div>
            <ul>
              <li>Design recto-verso</li>
              <li>Format standard pro</li>
              <li>Prêt à imprimer</li>
              <li>1 révision gratuites</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Agenda & Notebook Design</h3>
            <div className="price">à partir de 4 500 DA</div>
            <ul>
              <li>Agenda personnalisé (couverture & pages intérieures)</li>
              <li>Carnet/Notebook design unique</li>
              <li>Formats et finitions au choix</li>
              <li>Prêt pour impression professionnelle</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Posters Réseaux Sociaux</h3>
            <div className="price">à partir de 800 DA</div>
            <ul>
              <li>Visuels pour Facebook, Instagram, LinkedIn...</li>
              <li>Format optimisé pour chaque plateforme</li>
              <li>Design attractif et professionnel</li>
              <li>Livraison rapide</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Bannières Publicitaires (verticales)</h3>
            <div className="price">à partir de 2 500 DA</div>
            <ul>
              <li>Bannières verticales pour stands, salons, événements</li>
              <li>Format roll-up, kakemono, X-banner, etc.</li>
              <li>Design professionnel et percutant</li>
              <li>Prêt pour impression grand format</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Panneaux Publicitaires</h3>
            <div className="price">à partir de 3 500 DA</div>
            <ul>
              <li>Billboards, affiches grand format</li>
              <li>Design haute résolution</li>
              <li>Prêt pour impression professionnelle</li>
              <li>Conseil sur le format</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Pack Logo + Carte visite</h3>
            <div className="price">6 000 DA</div>
            <ul>
              <li>Logo professionnel complet</li>
              <li>Carte de visite assortie</li>
              <li>Design cohérent</li>
              <li>Tous formats inclus</li>
              <li>Réduction pack -15%</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Pack identité</h3>
            <div className="price">8 000 DA</div>
            <ul>
              <li>Logo professionnel</li>
              <li>Carte de visite</li>
              <li>Agenda personnalisé</li>
              <li>notebook personnalisé</li>
              <li>Design coordonné</li>
              <li>Documentaion compléte</li>
              <li>Réduction pack -20%</li>
              <li>Support prioritaire</li>
            </ul>
          </div>

          <div className="service-card creative">
            <h3>Pack Bannière + Billboard</h3>
            <div className="price">à partir de 5 500 DA</div>
            <ul>
              <li>1 Bannière publicitaire verticale (roll-up, X-banner...)</li>
              <li>1 Panneau publicitaire (billboard, affiche grand format)</li>
              <li>Designs coordonnés et percutants</li>
              <li>Prêts pour impression professionnelle</li>
            </ul>
          </div>

           {/* break */}
          <div>
            <ul></ul>
          </div>
          {/* break */}

          <div className="service-card creative">
            <h3>Pack Entreprise</h3>
            <div className="price">à partir de 13 000 DA</div>
            <ul>
              <li>Logo professionnel</li>
              <li>Carte de visite</li>
              <li>3 posts réseaux sociaux</li>
              <li>1 bannière publicitaire verticale</li>
              <li>1 panneau publicitaire (billboard)</li>
              <li>Designs harmonisés pour l'identité de marque</li>
              <li>Réduction pack -25%</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="more" className="service-section additional">
        <h2>Services Supplémentaires</h2>
        <div className="service-grid">
          <div className="service-card support">
            <h3>Hébergement & Domaine</h3>
            <div className="price">6 000 DA/an + les frais</div>
            <ul>
              <li>Nom de domaine .com/.dz</li>
              <li>Hébergement SSD rapide</li>
              <li>5 emails professionnels</li>
            </ul>
          </div>

          {/* <div className="service-card support">
            <h3>SEO Base</h3>
            <div className="price">5 000 DA</div>
            <ul>
              <li>Optimisation on-page</li>
              <li>Mots-clés recherchés</li>
              <li>Meta descriptions</li>
              <li>Structure optimisée</li>
              <li>Rapport d'optimisation</li>
            </ul>
          </div> */}

          <div className="service-card support">
            <h3>Traduction FR/EN/AR</h3>
            <div className="price">3 000 DA</div>
            <ul>
              <li>Par page/document</li>
              <li>Traduction professionnelle</li>
              <li>Révision linguistique</li>
              <li>Adaptation culturelle</li>
              <li>Format source préservé</li>
            </ul>
          </div>

          <div className="service-card support">
            <h3>Maintenance</h3>
            <div className="price">6 000 DA/mois</div>
            <ul>
              <li>Mises à jour régulières</li>
              <li>Sauvegardes quotidiennes</li>
              <li>Sécurité renforcée</li>
              <li>Modifications mineures</li>
              <li>Support prioritaire</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="service-section coming-soon">
        <h2>Plus de services à venir !</h2>
        <div className="coming-soon-message">
          <p>
            Restez connectés, de nouveaux services innovants seront ajoutés
            prochainement pour répondre à tous vos besoins digitaux !
          </p>
        </div>
      </section>

      <div className="contact-cta">
        <h2>Vous avez un projet en tête ?</h2>
        <p>Contactez-nous pour un devis personnalisé adapté à vos besoins</p>
        <Link to="/contact" className="cta-button">
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
