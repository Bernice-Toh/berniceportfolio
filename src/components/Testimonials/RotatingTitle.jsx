import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion.js";

/* Testimonials header: "Testimonial from" with a pill that rotates the
   source every 4 seconds. The swap is a vertical roll — the outgoing
   source lifts off the top and dissolves while the incoming one rolls up
   from below and settles with a soft spring (design ref: "Vouched by …
   from [pill]"). Reduced motion swaps instantly (no outgoing layer; the
   global reduce rule zeroes the roll keyframes). */
const SOURCES = [
  { label: "Internship Supervisor", accent: "rose" },
  { label: "ITE Lecturer", accent: "mint" },
  { label: "Secondary School", accent: "peach" },
];

const SWAP_MS = 500; // a touch past the longest roll keyframe (see pages.css)

export default function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null); // outgoing source while a swap rolls
  const indexRef = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      const cur = indexRef.current;
      const next = (cur + 1) % SOURCES.length;
      indexRef.current = next;
      if (!reduced) setPrev(cur);
      setIndex(next);
    }, 4000);
    return () => clearInterval(t);
  }, [reduced]);

  /* drop the outgoing layer once its exit roll has finished */
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), SWAP_MS);
    return () => clearTimeout(t);
  }, [prev]);

  const source = SOURCES[index];
  const leaving = prev !== null ? SOURCES[prev] : null;

  return (
    <header className="section-intro testi-head">
      <h1 className="section-intro__title section-intro__title--display">
        Testimonial from
      </h1>
      <span className="testi-head__rotor" aria-live="polite">
        {leaving ? (
          <span
            key={`out-${prev}`}
            className={`testi-head__pill testi-head__pill--${leaving.accent} testi-head__pill--out`}
            aria-hidden="true"
          >
            <span className="eyebrow__dot" aria-hidden="true" />
            {leaving.label}
          </span>
        ) : null}
        <span
          key={`in-${index}`}
          className={`testi-head__pill testi-head__pill--${source.accent} ${
            leaving ? "testi-head__pill--in" : ""
          }`}
        >
          <span className="eyebrow__dot" aria-hidden="true" />
          {source.label}
        </span>
      </span>
      <p className="section-intro__lead">
        What supervisors, lecturers and teachers have written — each with the
        original letter, viewable right in the browser.
      </p>
    </header>
  );
}
