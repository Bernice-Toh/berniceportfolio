import RotatingTitle from "../components/Testimonials/RotatingTitle.jsx";

const TESTIMONIALS = [
  {
    name: "Jacqueline Lau",
    role: "Internship Supervisor · National Healthcare Group",
    initials: "JL",
    accent: "rose",
    pdf: "/pdfs/testimonial-jacqueline-lau-nhg.pdf",
    quote:
      "She proved to be a fast learner, picking up new concepts quickly and consistently approaching her tasks with an enthusiastic attitude.",
  },
  {
    name: "Ms Estebelle",
    role: "Senior Lecturer · ITE College Central",
    initials: "E",
    accent: "mint",
    pdf: "/pdfs/testimonial-estebelle-ite.pdf",
    quote:
      "She has consistently approached her learning with initiative and a genuine willingness to acquire new knowledge and skills.",
  },
  {
    name: "Charmaine Mong",
    role: "Lecturer · ITE College Central",
    initials: "CM",
    accent: "peach",
    pdf: "/pdfs/bernice%20testimonial.pdf",
    wide: true,
    quote:
      "Bernice is a highly motivated and enthusiastic learner with a passion for Artificial Intelligence, technology, and innovation.",
  },
];

export default function Testimonials() {
  return (
    <div className="page">
      <RotatingTitle />

      <div className="testi-grid">
        {TESTIMONIALS.map((t) => (
          <article
            className={`testi ${t.wide ? "testi--wide" : ""}`}
            key={t.name}
          >
            <span className="testi__mark" aria-hidden="true">
              “
            </span>
            <p className="testi__quote">{t.quote}</p>
            <footer className="testi__foot">
              <span className={`testi__avatar testi__avatar--${t.accent}`}>
                {t.initials}
              </span>
              <span className="testi__who">
                <span className="testi__name">{t.name}</span>
                <span className="testi__role">{t.role}</span>
              </span>
              <a
                className="btn btn--ghost btn--small"
                href={t.pdf}
                target="_blank"
                rel="noreferrer"
              >
                View the full testimonial ↗
              </a>
            </footer>
          </article>
        ))}

        <article className="testi testi--plain">
          <p className="testi__quote testi__quote--small">
            A signed testimonial from secondary school, scanned from the
            original letter.
          </p>
          <footer className="testi__foot">
            <span className="testi__avatar testi__avatar--peach">G</span>
            <span className="testi__who">
              <span className="testi__name">Greenridge Secondary School</span>
              <span className="testi__role">Signed testimonial · scanned copy</span>
            </span>
            <a
              className="btn btn--ghost btn--small"
              href="/pdfs/testimonial-greenridge-secondary.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View the full testimonial ↗
            </a>
          </footer>
        </article>
      </div>
    </div>
  );
}
