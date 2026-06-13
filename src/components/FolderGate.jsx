import { useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

/* The cover gate: a small CLOSED version of the pink folder + caption.
   Clicking it zooms the mini folder up while the real FolderShell mounts
   underneath, so the site's existing mount-triggered entrance choreography
   (folder-rise, tab-in, the hero rise-ins) plays as the reveal.

   Stage flow lives in App: closed → opening → open.
     closed   – idle mini folder, shell not yet mounted
     opening  – mini folder zooms out + shell mounts (cross-dissolve)
     open     – gate unmounted, shell only */
export default function FolderGate({ stage, onUnlock, onOpened }) {
  const reduced = useReducedMotion();
  const fallback = useRef(null);

  const unlock = () => {
    if (stage !== "closed") return;
    onUnlock();
    /* belt-and-suspenders: reveal even if animationend is ever missed
       (and an instant hand-off when motion is reduced) */
    fallback.current = window.setTimeout(onOpened, reduced ? 0 : 700);
  };

  /* the zoom is the only finite animation on the folder, so guard on it —
     the idle float / twinkle are infinite and never fire animationend */
  const handleAnimationEnd = (e) => {
    if (e.animationName !== "gate-zoom") return;
    window.clearTimeout(fallback.current);
    onOpened();
  };

  return (
    <div
      className={`gate ${stage === "opening" ? "gate--opening" : ""}`}
      aria-hidden={stage !== "closed"}
    >
      <button
        type="button"
        className="gate__folder"
        onClick={unlock}
        onAnimationEnd={handleAnimationEnd}
        aria-label="Unlock Bernice's Potential — open the portfolio folder"
      >
        <span className="gate__tab" aria-hidden="true" />
        <span className="gate__face" aria-hidden="true">
          <span className="gate__spark">✦</span>
        </span>
      </button>

      <p className="gate__caption">
        Click to unlock Bernice's Potential{" "}
        <span className="gate__star" aria-hidden="true">
          ✦
        </span>
      </p>
    </div>
  );
}
