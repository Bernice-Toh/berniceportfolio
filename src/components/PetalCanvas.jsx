import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

/* Seeded, gently drifting petals — the decorative "art" layer of the
   Home hero, clipped inside the light-pink face. Same seed every visit
   so the composition is reproducible. Petals lean toward the right half
   so the hero text stays readable. Pauses when the tab is hidden, and
   renders a single static frame under prefers-reduced-motion. */
const SEED = 20260611;
const PETAL_COUNT = 30;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function readPalette() {
  const css = getComputedStyle(document.documentElement);
  const get = (name, fallback) => {
    const v = css.getPropertyValue(name).trim();
    return v || fallback;
  };
  return [
    get("--blush", "#ffcad4"),
    get("--rose", "#f4acb7"),
    get("--peach", "#ffe5d9"),
    get("--pink-300", "#efabbb"),
  ];
}

function makePetals(rand, palette) {
  return Array.from({ length: PETAL_COUNT }, () => ({
    bx: rand() < 0.62 ? 0.5 + rand() * 0.5 : rand() * 0.5,
    y: rand(),
    size: 5 + rand() * 9,
    fall: 0.012 + rand() * 0.02,
    swayAmp: 12 + rand() * 22,
    swayFreq: 0.25 + rand() * 0.45,
    phase: rand() * Math.PI * 2,
    rot: rand() * Math.PI * 2,
    rotSpeed: (rand() - 0.5) * 0.7,
    color: palette[Math.floor(rand() * palette.length)],
    alpha: 0.28 + rand() * 0.26,
  }));
}

function drawPetal(ctx, p, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(p.rot);
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = p.color;
  const s = p.size;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.quadraticCurveTo(s * 0.85, -s * 0.25, 0, s);
  ctx.quadraticCurveTo(-s * 0.85, -s * 0.25, 0, -s);
  ctx.fill();
  ctx.restore();
}

export default function PetalCanvas() {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    const rand = mulberry32(SEED);
    const petals = makePetals(rand, readPalette());

    let raf = 0;
    let running = false;
    let last = performance.now();
    let time = 0;
    let w = 0;
    let h = 0;

    const drawFrame = (dt) => {
      time += dt;
      ctx.clearRect(0, 0, w, h);
      for (const p of petals) {
        if (dt > 0) {
          p.y += p.fall * dt;
          p.rot += p.rotSpeed * dt;
          if (p.y > 1.05) {
            p.y = -0.05;
            p.bx = rand() < 0.62 ? 0.5 + rand() * 0.5 : rand() * 0.5;
          }
        }
        const x = p.bx * w + Math.sin(time * p.swayFreq + p.phase) * p.swayAmp;
        drawPetal(ctx, p, x, p.y * h);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) drawFrame(0);
    };

    const loop = (now) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      drawFrame(dt);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    if (reduced) {
      drawFrame(0);
    } else {
      start();
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      stop();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="petals" />;
}
