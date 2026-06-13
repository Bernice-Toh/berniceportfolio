import { useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

/* Primary CTA with a small celebratory particle burst on click
   (design ref: particle button). The burst is decorative: the action
   itself fires immediately, and nothing blocks while particles play. */
const PARTICLE_CLASSES = [
  "particle--rose",
  "particle--blush",
  "particle--peach",
  "particle--mint",
];

export default function ParticleButton({ children, onClick }) {
  const [bursts, setBursts] = useState([]);
  const reduced = useReducedMotion();
  const idRef = useRef(0);

  const spawn = () => {
    if (reduced) return;
    const id = ++idRef.current;
    const parts = Array.from({ length: 12 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.6;
      const dist = 26 + Math.random() * 38;
      return {
        i,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist * 0.8,
        dur: 380 + Math.random() * 160,
        cls: PARTICLE_CLASSES[i % PARTICLE_CLASSES.length],
        star: i % 5 === 0,
      };
    });
    setBursts((b) => [...b, { id, parts }]);
    window.setTimeout(
      () => setBursts((b) => b.filter((x) => x.id !== id)),
      650
    );
  };

  return (
    <button
      type="button"
      className="btn btn--primary particle-btn"
      onClick={(e) => {
        spawn();
        onClick?.(e);
      }}
    >
      <span className="particle-btn__label">{children}</span>
      {bursts.map((b) => (
        <span key={b.id} className="particle-btn__burst" aria-hidden="true">
          {b.parts.map((p) => (
            <span
              key={p.i}
              className={`particle ${p.cls} ${p.star ? "particle--star" : ""}`}
              style={{
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                "--dur": `${p.dur}ms`,
              }}
            >
              {p.star ? "✦" : ""}
            </span>
          ))}
        </span>
      ))}
    </button>
  );
}
