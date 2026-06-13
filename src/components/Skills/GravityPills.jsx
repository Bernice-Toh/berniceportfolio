import { useRef, useState } from "react";

/* Gravity layer for the Skills page, mounted at the folder-face level
   (see FolderShell) so the pills roam the ENTIRE face and clip on its
   rounded corners. Pills drop from above on load (bouncy, staggered —
   outer wrapper owns the drop animation) and settle along the bottom
   edge, weighted toward the right where the page has open space. The
   layer floats over the page content but is pointer-transparent, so only
   the pills catch input: each body is grabbable and can be tossed
   anywhere inside the face; the dragged pill lifts above its siblings so
   they pile instead of clipping. Decorative only: aria-hidden.
   Reduced motion: the global prefers-reduced-motion rule collapses the
   drop, so pills simply appear at their resting spot. */
const PILLS = [
  /* one early lander on the left, the rest pile up on the right */
  { label: "CREATIVE", accent: "blush", x: 5, lift: 0, rot: -5, delay: 0 },
  { label: "✦", accent: "dot", x: 38, lift: 0, rot: 0, delay: 0.15 },
  { label: '"Hello World"', accent: "peach", x: 46, lift: 1.5, rot: -3, delay: 0.3 },
  { label: "SOFT SKILLS ●", accent: "mint", x: 58, lift: 0, rot: 4, delay: 0.45 },
  { label: "</>", accent: "rose", x: 70, lift: 2, rot: 6, delay: 0.6 },
  { label: "TECHNICAL SKILLS", accent: "paper", x: 74, lift: 0.5, rot: -2, delay: 0.75 },
  { label: "↓", accent: "dot", x: 91, lift: 0, rot: 0, delay: 0.9 },
];

function GravityPill({ pill, areaRef }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ px: 0, py: 0, ox: 0, oy: 0, bx: 0, by: 0, bw: 0, bh: 0 });

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const b = e.currentTarget.getBoundingClientRect();
    start.current = {
      px: e.clientX,
      py: e.clientY,
      ox: offset.x,
      oy: offset.y,
      /* the pill's rest rect (current rect with the live offset removed) */
      bx: b.left - offset.x,
      by: b.top - offset.y,
      bw: b.width,
      bh: b.height,
    };
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    let x = start.current.ox + (e.clientX - start.current.px);
    let y = start.current.oy + (e.clientY - start.current.py);
    const area = areaRef.current?.getBoundingClientRect();
    if (area) {
      /* keep the whole pill inside the folder face — it can roam every
         corner but never slips past an edge and out of reach; the face's
         rounded corners clip whatever overflows */
      const m = 6;
      x = Math.max(
        area.left - start.current.bx + m,
        Math.min(area.right - start.current.bx - start.current.bw - m, x)
      );
      y = Math.max(
        area.top - start.current.by + m,
        Math.min(area.bottom - start.current.by - start.current.bh - m, y)
      );
    }
    setOffset({ x, y });
  };

  const onPointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  return (
    <span
      className={`gravity-pill ${dragging ? "gravity-pill--lifted" : ""}`}
      style={{
        left: `${pill.x}%`,
        bottom: `${pill.lift - 0.5}rem`,
        "--pill-delay": `${pill.delay}s`,
      }}
    >
      <span
        className={`gravity-pill__body skillset-pill--${pill.accent} ${
          dragging ? "gravity-pill__body--dragging" : ""
        }`}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) rotate(${
            dragging ? 0 : pill.rot
          }deg)`,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {pill.label}
      </span>
    </span>
  );
}

export default function GravityPills() {
  const areaRef = useRef(null);

  return (
    <div className="gravity-pills" aria-hidden="true" ref={areaRef}>
      {PILLS.map((p) => (
        <GravityPill key={p.label} pill={p} areaRef={areaRef} />
      ))}
    </div>
  );
}
