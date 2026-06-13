import { useState } from "react";
import SectionIntro from "../components/SectionIntro.jsx";
import ProjectModal from "../components/Projects/ProjectModal.jsx";
import { PROJECTS } from "../utils/portfolioData.js";

const CRAFTED_PROJECT = PROJECTS.find((p) => p.slug === "crafted-artt");

const OTHER_AWARDS = [
  {
    year: "2024",
    title: "ITE Community Scholarship",
    text: "Awarded in recognition of outstanding academic performance as a top-performing student entering ITE. The scholarship supports students who demonstrate academic excellence, good conduct, and a commitment to achieving their educational goals.",
    pdf: "/pdfs/ite-community-scholarship-2024.pdf",
    accent: "rose",
  },
  {
    year: "2022",
    title: "Edusave Certificate of Academic Achievement",
    text: "Awarded for achieving strong academic results and demonstrating good character, reflecting continued commitment to academic excellence.",
    pdf: "/pdfs/edusave-academic-achievement-2022.pdf",
    accent: "peach",
  },
  {
    year: "2020",
    title: "Edusave Merit Bursary",
    text: "Awarded in recognition of good academic performance and consistent conduct, placing among the top-performing students in the cohort.",
    pdf: "/pdfs/edusave-merit-bursary-2020.pdf",
    accent: "mint",
  },
];

export default function Recognitions() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page">
      <SectionIntro
        mega
        title="Awards along the way."
        lead="Four recognitions — a startup challenge podium finish, a scholarship and two Edusave awards."
      />

      {/* The headline award: a startup challenge podium finish */}
      <article className="award-hero">
        <span className="award-hero__medal" aria-hidden="true">
          <span className="award-hero__medal-glyph">🏆</span>
        </span>
        <div className="award-hero__body">
          <span className="award-hero__place">3rd Place · $500 prize</span>
          <h2 className="award-hero__title">
            Crafted.artt
            <span className="award-hero__title-sub">Makers' Enterprise Challenge 2026</span>
          </h2>
          <p className="award-hero__text">
            Co-founded Crafted.artt, a real student business selling customised
            resin keychains, toploaders and phone charms. From business
            proposal and market research to production, marketing and sales,
            the venture earned Third Place in the startup challenge.
          </p>
          <button
            type="button"
            className="btn btn--primary award-hero__cta"
            onClick={() => setModalOpen(true)}
          >
            See the project →
          </button>
        </div>
      </article>

      <h2 className="award-list__head">Other awards</h2>
      <div className="award-list">
        {OTHER_AWARDS.map((a) => (
          <article className="award" key={a.title}>
            <span className={`chip chip--${a.accent} award__year`}>{a.year}</span>
            <div className="award__body">
              <h3 className="award__title">{a.title}</h3>
              <p className="award__text">{a.text}</p>
            </div>
            <a
              className="btn btn--ghost btn--small"
              href={a.pdf}
              target="_blank"
              rel="noreferrer"
            >
              View certificate ↗
            </a>
          </article>
        ))}
      </div>

      {modalOpen && (
        <ProjectModal
          project={CRAFTED_PROJECT}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
