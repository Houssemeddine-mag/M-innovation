import { Link } from "react-router-dom";
import "../styles/teaching.css";

export default function Teaching() {
  return (
    <div className="teaching-container">
      <section className="teaching-hero">
        <div className="hero-content">
          <h1>Apprenez l'anglais avec confiance</h1>
          <p>
            Découvrez une méthode d'apprentissage innovante et personnalisée,
            alignée sur les standards européens CECRL. Des cours adaptés à tous
            les niveaux, du débutant au plus avancé.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Niveaux de progression</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Taux de réussite garantie</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">CECRL</div>
              <div className="stat-label">
                Formation structuré avec une equipe performante
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cecrl-levels">
        <h2>Présentation générale du cadre CECRL</h2>
        <div className="levels-table">
          <table>
            <thead>
              <tr>
                <th>Niveau</th>
                <th>Intitulé</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A1</td>
                <td>Débutant</td>
                <td>Expressions simples, présentation personnelle.</td>
              </tr>
              <tr>
                <td>A2</td>
                <td>Élémentaire</td>
                <td>Communication simple dans des situations familières.</td>
              </tr>
              <tr>
                <td>B1</td>
                <td>Intermédiaire</td>
                <td>Compréhension de sujets courants, discours simple.</td>
              </tr>
              <tr>
                <td>B2</td>
                <td>Intermédiaire supérieur</td>
                <td>Compréhension de textes complexes, conversation fluide.</td>
              </tr>
              <tr>
                <td>C1</td>
                <td>Avancé</td>
                <td>Expression fluide et efficace, compréhension fine.</td>
              </tr>
              <tr>
                <td>C2</td>
                <td>Maîtrise</td>
                <td>Compréhension totale, expression nuancée.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="program-details">
          <div className="levels-division">
            <h3 style={{ color: "#00bfff" }}>
              Division des niveaux selon le programme adulte
            </h3>
            <p className="level-info">
              Les niveaux A1 à B2 sont divisés en 3 sous-niveaux chacun sauf les
              niveaux avancés (C1, C2)
            </p>

            <div className="sub-levels-grid">
              <div className="sub-level-card">
                <h4>Niveau A1 (Débutant)</h4>
                <ul>
                  <li>A1-1 </li>
                  <li>A1-2 </li>
                  <li>A1-3 </li>
                </ul>
              </div>
              <div className="sub-level-card">
                <h4>Niveau A2 (Élémentaire)</h4>
                <ul>
                  <li>A2-1 </li>
                  <li>A2-2 </li>
                  <li>A2-3 </li>
                </ul>
              </div>
              <div className="sub-level-card">
                <h4>Niveau B1 (Pré-Intermédiaire)</h4>
                <ul>
                  <li>B1-1 </li>
                  <li>B1-2 </li>
                  <li>B1-3 </li>
                </ul>
              </div>
              <div className="sub-level-card">
                <h4>Niveau B2 (Intermédiaire)</h4>
                <ul>
                  <li>B2-1 </li>
                  <li>B2-2 </li>
                  <li>B2-3 </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="session-organization">
            <h3>On couvrera tout les aspects necessaire</h3>
            <div className="competences-list">
              <div className="competence-item">Compréhension orale</div>
              <div className="competence-item">Expression orale</div>
              <div className="competence-item">Compréhension écrite</div>
              <div className="competence-item">Expression écrite</div>
              <div className="competence-item">Grammaire et vocabulaire</div>
            </div>

            <div className="duration-info">
              <h3>Durée recommandée</h3>
              <div className="duration-cards">
                <div className="duration-card">
                  <h4>Niveaux A1 à B2</h4>
                  <ul>
                    <li>8 à 10 semaines par niveau</li><br/>
                    <li>60 Heures par niveau</li><br/>
                    <li>2 à 3 séances hebdomadaires</li><br/>
                    <li>6h par semaine</li><br/>
                  </ul>
                </div>
                <div className="duration-card">
                  <h4>Niveaux C1 et C2</h4>
                  <ul>
                    <li>14 à 16 semaines par niveau</li><br/>
                    <li>96 Heures par niveau</li><br/>
                    <li>2 séances hebdomadaires</li><br/>
                    <li>6h par semaine</li><br/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="prices-cta">
        <h2>
          Besoin de notre formation ? <br /> contactez nous{" "}
        </h2>
        <Link to="/contact" className="cta-button">
          Nous Contacter
        </Link>
      </div>
      <br />

      <section className="kids-program">
        <h2>Programme d'anglais pour enfant (6 à 13 ans)</h2>
        <div className="kids-content">
          <h3>Objectif</h3>
          <p>
            Ce programme est destiné aux enfants de 6 à 13 ans afin de leur
            offrir une première exposition structurée et progressive à
            l'anglais. Il vise le développement des compétences orales et la
            familiarisation avec le vocabulaire de base, à travers une approche
            ludique, visuelle et participative.
          </p>

          <h3>Répartition par test de competance</h3>
          <div className="age-groups">
            <div className="age-group">
              <h4>A</h4>
              <p>
                Compréhension orale, mémorisation de vocabulaire, participation
                aux chansons et jeux
              </p>
            </div>
            <div className="age-group">
              <h4>B</h4>
              <p>
                Premières phrases orales complètes, écriture guidée, lecture de
                mots simples
              </p>
            </div>
            <div className="age-group">
              <h4>C</h4>
              <p>
                Production autonome orale et écrite, dialogues, lectures
                courtes, mini-projets
              </p>
            </div>
          </div>

          <div className="kids-methodology">
            <h3>Méthode d'enseignement</h3>
            <ul>
              <li>
                Livres : manuel de l'élève, cahier d'activités, posters visuels
              </li>
              <li>
                Ressources audio et vidéo pour chansons, histoires et exercices
              </li>
              <li>Flashcards, coloriages, jeux interactifs, marionnettes</li>
            </ul>

            <h3>Contenus abordés (progressivement)</h3>
            <div className="content-topics">
              <p>
                <strong>Vocabulaire :</strong> les couleurs, les chiffres, les
                objets scolaires, les parties du corps, les vêtements, les
                aliments, la famille, la météo, les animaux
              </p>
              <p>
                <strong>Structures :</strong> What's this? It's a..., I like...,
                I have..., Can you...? Where is...? My name is...
              </p>
              <p>
                <strong>Thèmes :</strong> école, maison, jeux, animaux, saisons,
                fêtes, émotions, routines
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="prices-cta">
        <h2>
          Besoin de notre formation ? <br /> contactez nous{" "}
        </h2>
        <Link to="/contact" className="cta-button">
          Nous Contacter
        </Link>
      </div>
      <br />
    </div>
  );
}
