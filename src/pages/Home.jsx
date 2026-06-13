import { Link } from "react-router-dom";
import ParticleButton from "../components/ParticleButton.jsx";
import { useQuickJump } from "../context/QuickJumpContext.jsx";
import { LINKS, PROJECTS } from "../utils/portfolioData.js";

const SPOTLIGHTS = [
  {
    label: "Capstone",
    title: "ThreatVision",
    line: "Real-time AI weapon detection with YOLOv11s on a Raspberry Pi body cam.",
    to: "/projects#capstone-threatvision",
  },
  {
    label: "Internship",
    title: "NHG · 9 months",
    line: "Chatbots and workflow automation with GovTech tools, end to end.",
    to: "/experience",
  },
  {
    label: "3rd Place",
    title: "Crafted.artt",
    line: "A real student business: customised resin keychains and charms.",
    to: "/projects#crafted-artt",
  },
];

/* hand-drawn underline beneath a single phrase of the motto */
function Underline({ children }) {
  return (
    <span className="motto__mark">
      {children}
      <svg
        className="motto__underline"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M1,5.5 Q 18,1.5 36,4.5 T 70,3.5 T 99,4.5" pathLength="1" />
      </svg>
    </span>
  );
}

export default function Home() {
  const { open } = useQuickJump();

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title hero__title--big">
            <span className="ink-pink hero__word">Bernice's</span>{" "}
            <span className="hero__word">Folder</span>
          </h1>

          <p className="motto motto--big">
            <span className="motto__text">
              Anything Is <Underline>Possible</Underline> When You{" "}
              <Underline>Give It Your All.</Underline>
            </span>
          </p>

          <div className="hero__actions">
            <ParticleButton onClick={open}>View work ✦</ParticleButton>
            <a
              className="btn btn--ghost"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <strong>{PROJECTS.length}</strong> projects
            </li>
            <li>
              <strong>9 mo</strong> internship
            </li>
            <li>
              <strong>4</strong> awards
            </li>
            <li>
              <strong>SG</strong> based
            </li>
          </ul>
        </div>

        <div className="hero__right hero__right--photo">
          <img
            className="hero__photo"
            src="/images/bernice.png"
            alt="Bernice Toh Jiayi"
          />
        </div>
      </div>

      <div className="spotlights">
        {SPOTLIGHTS.map((s) => (
          <Link key={s.title} to={s.to} className="spotlight">
            <span className="spotlight__label">{s.label}</span>
            <span className="spotlight__title">{s.title}</span>
            <span className="spotlight__line">{s.line}</span>
            <span className="spotlight__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
