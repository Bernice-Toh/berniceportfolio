import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectFilter from "../components/Projects/ProjectFilter.jsx";
import ProjectModal from "../components/Projects/ProjectModal.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import { PROJECTS } from "../utils/portfolioData.js";

const ALL = "All";
const CATEGORIES = [ALL, ...new Set(PROJECTS.map((p) => p.category))];

const COUNTS = CATEGORIES.reduce((acc, c) => {
  acc[c] =
    c === ALL
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === c).length;
  return acc;
}, {});

export default function Projects() {
  const location = useLocation();
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState("");
  const [openSlug, setOpenSlug] = useState(null);

  /* deep links from QuickJump / Home spotlights: /projects#slug */
  useEffect(() => {
    if (!location.hash) return undefined;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return undefined;
    el.scrollIntoView({ block: "start" });
    el.classList.add("proj--flash");
    const t = setTimeout(() => el.classList.remove("proj--flash"), 1400);
    return () => clearTimeout(t);
  }, [location.hash]);

  const visible = useMemo(() => {
    const t = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (category !== ALL && p.category !== category) return false;
      if (!t) return true;
      return `${p.title} ${p.category} ${p.summary} ${p.tags.join(" ")}`
        .toLowerCase()
        .includes(t);
    });
  }, [category, query]);

  const openProject = PROJECTS.find((p) => p.slug === openSlug) ?? null;

  return (
    <div className="page">
      <SectionIntro
        display
        title="Ten files of work"
        lead="School modules, a capstone, competitions and a small business — each one opened below."
      />

      <div className="proj-layout">
        <ProjectFilter
          categories={CATEGORIES}
          active={category}
          onSelect={setCategory}
          query={query}
          onQuery={setQuery}
          counts={COUNTS}
        />

        <div className="proj-grid">
          {visible.map((p, i) => (
            <article
              className="proj"
              id={p.slug}
              key={p.slug}
              style={{ "--proj-i": i }}
            >
              <div
                className={`proj__media proj__media--${p.accent}`}
                aria-hidden="true"
              >
                <span className="proj__media-icon">✦</span>
              </div>

              <header className="proj__head">
                <span className={`chip chip--${p.accent}`}>{p.category}</span>
                <h2 className="proj__title">{p.title}</h2>
              </header>

              <p className="proj__summary">{p.summary}</p>
              <p className="proj__desc">{p.description[0]}</p>

              <button
                type="button"
                className="proj__open"
                onClick={() => setOpenSlug(p.slug)}
              >
                More about this project →
              </button>

              <footer className="proj__tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </footer>
            </article>
          ))}
          {visible.length === 0 ? (
            <p className="proj-empty">No projects match — try another term.</p>
          ) : null}
        </div>
      </div>

      {openProject ? (
        <ProjectModal project={openProject} onClose={() => setOpenSlug(null)} />
      ) : null}
    </div>
  );
}
