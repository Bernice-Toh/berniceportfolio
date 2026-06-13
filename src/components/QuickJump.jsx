import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuickJump } from "../context/QuickJumpContext.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";
import { PROJECTS, SECTIONS } from "../utils/portfolioData.js";

/* how long the .qj--closing exit animation runs (see components.css) */
const CLOSE_MS = 240;

/* Slide-in quick-jump panel (design ref: combobox appearing at the side
   after the Home CTA). Searches every page and project; selecting an
   item navigates straight there. */
const ITEMS = [
  ...SECTIONS.map((s) => ({
    key: `page-${s.id}`,
    type: "Page",
    label: s.label,
    sub: "Page",
    path: s.path,
  })),
  ...PROJECTS.map((p) => ({
    key: `project-${p.slug}`,
    type: "Project",
    label: p.title,
    sub: p.category,
    path: `/projects#${p.slug}`,
    tags: p.tags.join(" "),
  })),
];

export default function QuickJump() {
  const { isOpen, close } = useQuickJump();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const inputRef = useRef(null);
  const closeTimer = useRef(0);
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  /* play the exit animation, then actually unmount */
  const requestClose = () => {
    if (closing) return;
    if (reduced) {
      close();
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setClosing(false);
      close();
    }, CLOSE_MS);
  };

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const results = useMemo(() => {
    const t = query.trim().toLowerCase();
    if (!t) return ITEMS;
    return ITEMS.filter((i) =>
      `${i.label} ${i.sub} ${i.type} ${i.tags ?? ""}`.toLowerCase().includes(t)
    );
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setIndex(0);
      setClosing(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  useEffect(() => setIndex(0), [query]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  if (!isOpen) return null;

  const go = (item) => {
    navigate(item.path);
    /* the panel slides out over the arriving page */
    requestClose();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      go(results[index]);
    }
  };

  return (
    <div
      className={`qj ${closing ? "qj--closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Quick jump"
    >
      <button
        type="button"
        className="qj__backdrop"
        aria-label="Close quick jump"
        onClick={requestClose}
        tabIndex={-1}
      />
      <div className="qj__panel" onKeyDown={onKeyDown}>
        <div className="qj__head">
          <p className="qj__title">Jump to a file</p>
          <button
            type="button"
            className="qj__close"
            onClick={requestClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <input
          ref={inputRef}
          className="qj__input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="qj-list"
          aria-label="Search pages and projects"
          placeholder="Search pages and projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="qj__list" id="qj-list" role="listbox">
          {results.map((item, i) => {
            const firstOfType =
              i === 0 || results[i - 1].type !== item.type;
            return (
              <li key={item.key}>
                {firstOfType ? (
                  <span
                    className={`qj__group ${
                      item.type === "Project" && i !== 0
                        ? "qj__group--divided"
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    {item.type === "Page" ? "Pages" : "Projects"}
                  </span>
                ) : null}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === index}
                  className={`qj__item ${i === index ? "qj__item--active" : ""}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => go(item)}
                >
                  <span className="qj__item-label">{item.label}</span>
                  <span className="qj__item-meta">{item.sub}</span>
                </button>
              </li>
            );
          })}
          {results.length === 0 ? (
            <li className="qj__empty">No matches — try “AI”, “video”, “kiosk”…</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
