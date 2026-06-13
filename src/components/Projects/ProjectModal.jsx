import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useReducedMotion from "../../hooks/useReducedMotion.js";

/* how long the .pmodal--closing exit animation runs (see pages.css) */
const CLOSE_MS = 240;

/* Project file modal: a big "open file" styled like the folder.
   Portaled INTO the folder's .sheet so the dimming backdrop is
   clipped by the sheet's rounded corners (overflow: hidden) — the
   shade never overlaps the folder's curves on any screen size. */
export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const closeTimer = useRef(0);
  const [closing, setClosing] = useState(false);
  const reduced = useReducedMotion();
  /* lazy init: .sheet always exists by the time a page renders
     (FolderShell wraps every route) */
  const [host] = useState(() => document.querySelector(".sheet"));

  /* play the exit animation, then hand control back to the opener */
  const requestClose = () => {
    if (closing) return;
    if (reduced) {
      onClose();
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(onClose, CLOSE_MS);
  };

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  if (!project || !host) return null;

  return createPortal(
    <div
      className={`pmodal ${closing ? "pmodal--closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <button
        type="button"
        className="pmodal__backdrop"
        aria-label="Close project"
        onClick={requestClose}
        tabIndex={-1}
      />
      <article className="pmodal__file">
        <span className="pmodal__tab" aria-hidden="true">
          {project.category}
        </span>
        <div className="pmodal__sheet">
          <button
          ref={closeRef}
          type="button"
          className="pmodal__close"
          onClick={requestClose}
          aria-label="Close project"
        >
          ×
        </button>

        <div className="pmodal__grid">
          <div className="pmodal__side">
            <div
              className={`proj__media proj__media--${project.accent} pmodal__media`}
              aria-hidden="true"
            >
              <span className="proj__media-icon">✦</span>
            </div>

            <h2 className="pmodal__title">{project.title}</h2>
            <p className="pmodal__summary">{project.summary}</p>

            <dl className="pmodal__facts">
              <div className="pmodal__fact">
                <dt>Category</dt>
                <dd>
                  <span className={`chip chip--${project.accent}`}>
                    {project.category}
                  </span>
                </dd>
              </div>
              <div className="pmodal__fact">
                <dt>Built with</dt>
                <dd className="pmodal__tags">
                  {project.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="pmodal__story">
            <h3 className="pmodal__story-head">The story</h3>
            {project.description.map((para) => (
              <p key={para.slice(0, 32)} className="pmodal__para">
                {para}
              </p>
            ))}
            {project.highlights.length > 0 ? (
              <>
                <h3 className="pmodal__story-head">What I did</h3>
                <ul className="proj__points">
                  {project.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
        </div>
      </article>
    </div>,
    host
  );
}
