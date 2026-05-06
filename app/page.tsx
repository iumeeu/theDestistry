import { FaFacebook, FaFacebookF, FaInstagram, FaLine } from 'react-icons/fa';

const cards = [
  {
    title: "Redefining Functional\nAesthetics",
    image: "/images/card-aesthetics.png",
    body: "We believe beauty should go hand in hand with optimal oral health. Our personalized smile design approach considers both function and phonetics, so you can live confidently every day.",
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace.jpg",
    body: "We provide treatment plans guided by clear clinical rationale and measurable outcomes. Patients are fully informed at every stage and can confidently participate in choosing the most suitable treatment options.",
  },
  {
    title: "Technically Precise",
    image: "/images/card-precise.jpg",
    body: "A new standard in dental care for aesthetics and oral health, featuring world-class dental technologies combined with the expertise of continuously trained dentists to deliver precise, refined, and exceptional results in every dimension.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__topbar">
          <div className="hero__logo">
            <span className="hero__brand__left">
              <span className="accent__left"></span>
            </span>
          </div>
          <div className="hero__brand">
            The<span className="accent"></span>entistry
          </div>
        </div>
        <div className="hero__divider" />
        <h1 className="hero__title">
          A complete destination
          <br />
          for precision technology
          <br />
          and expert dental care
        </h1>
      </section>

      <section className="cards">
        {cards.map((c) => (
          <article
            key={c.title}
            className="card"
            style={{ backgroundImage: `url(${c.image})` }}
          >
            <div
              className="card__image"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div className="card__overlay" />
            <h3 className="card__title">
              {c.title.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </h3>
            <p className="card__body">{c.body}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__contact">
            Contact us : info@thedentistrygroup.com
          </div>
          <div className="footer__social">
            <a
              className="footer__icon footer__icon--fb"
              aria-label="Facebook"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="footer__icon footer__icon--ig"
              aria-label="Instagram"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="footer__icon footer__icon--line"
              aria-label="LINE"
              href="#"
            >
              <FaLine />
            </a>
            <span>The Dentistry Clinic</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
