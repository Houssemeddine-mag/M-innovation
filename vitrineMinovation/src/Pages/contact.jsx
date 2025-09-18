import "../styles/teaching.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contactez-nous</h1>
        <p className="contact-lead">
          Nous sommes là pour vous accompagner et vous garantir la meilleure
          expérience possible. Notre équipe s'engage à répondre rapidement à vos
          besoins et à vous offrir un service personnalisé, professionnel et
          innovant. Votre satisfaction est notre priorité.
        </p>
      </section>

      <div className="contact-details-card">
        <h2>Informations de contact</h2>
        <ul className="contact-list">
          <li>
            <strong>Téléphone :</strong>{" "}
            <a href="tel:+213541529890" className="contact-link">
              +213 541 52 98 90
            </a>
          </li>
          <li>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:houssemeddinemagra@gmail.com"
              className="contact-link"
            >
              houssemeddinemagra@gmail.com
            </a>
          </li>
          <li>
            <strong>Localisation :</strong> Constantine, Algérie
          </li>
        </ul>
      </div>

      <div className="contact-extra-info">
        <h3>Pourquoi choisir Minovation ?</h3>
        <ul className="why-minnovation-list">
          <li>
            <span className="why-icon">✔️</span> Service personnalisé et réactif
          </li>
          <li>
            <span className="why-icon">✔️</span> Approche innovante et humaine
          </li>
          <li>
            <span className="why-icon">✔️</span> Satisfaction garantie
          </li>
        </ul>
      </div>
    </div>
  );
}
