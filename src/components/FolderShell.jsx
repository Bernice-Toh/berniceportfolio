import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { QuickJumpProvider } from "../context/QuickJumpContext.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";
import { LINKS, SECTIONS } from "../utils/portfolioData.js";
import LoadingDots from "./LoadingDots.jsx";
import PetalCanvas from "./PetalCanvas.jsx";
import QuickJump from "./QuickJump.jsx";
import GravityPills from "./Skills/GravityPills.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

/* The folder itself: dark-pink tab toolbar popping above a light-pink
   face. Every page renders INSIDE the face (scrolling internally so the
   folder cut-out never changes shape). */
export default function FolderShell() {
  const location = useLocation();
  const railRef = useRef(null);
  const scrollRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const reduced = useReducedMotion();

  const activeSection =
    SECTIONS.find((s) => s.path === location.pathname) ?? SECTIONS[0];
  const isSkills = location.pathname === "/skills";

  useEffect(() => {
    document.title = `Bernice — ${activeSection.label}`;
  }, [activeSection]);

  /* new page: scroll the face content back to the top (hash deep-links
     are handled by the destination page itself) */
  useEffect(() => {
    if (!location.hash && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [location.pathname, location.hash]);

  /* the sliding pill behind the active tab — measured, then glided */
  useLayoutEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const measure = () => {
      const el = rail.querySelector('[aria-current="page"]');
      if (!el) return;
      setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
      /* keep the active tab visible when the rail scrolls (small screens) */
      const over =
        el.offsetLeft + el.offsetWidth - (rail.scrollLeft + rail.clientWidth);
      if (over > 0) rail.scrollLeft += over + 12;
      else if (el.offsetLeft < rail.scrollLeft)
        rail.scrollLeft = Math.max(0, el.offsetLeft - 12);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rail);
    return () => ro.disconnect();
  }, [location.pathname]);

  return (
    <QuickJumpProvider>
      <main className="desk">
        {/* ambient desk light: slow color fields + grain behind the folder */}
        <div className="desk__ambient" aria-hidden="true">
          <span className="desk__blob desk__blob--1" />
          <span className="desk__blob desk__blob--2" />
          <span className="desk__blob desk__blob--3" />
        </div>
        <div className="folder">
          <div className="folder__tools">
            <a
              className="folder-linkedin"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Bernice on LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <span className="folder__tools-sep" aria-hidden="true" />
            <ThemeToggle />
          </div>
          <nav className="tabs" aria-label="Portfolio sections">
            <div className="tabs__rail" ref={railRef}>
              <span
                className={`tabs__pill ${
                  pill.ready && !reduced ? "tabs__pill--animate" : ""
                }`}
                style={{
                  transform: `translateX(${pill.left}px)`,
                  width: `${pill.width}px`,
                  opacity: pill.ready ? 1 : 0,
                }}
                aria-hidden="true"
              />
              {SECTIONS.map((s, i) => (
                <NavLink
                  key={s.id}
                  to={s.path}
                  end={s.path === "/"}
                  className={({ isActive }) =>
                    `tab ${isActive ? "tab--active" : ""}`
                  }
                  style={{ "--tab-i": i }}
                >
                  {s.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <section className="sheet">
            <div className="sheet__art" aria-hidden="true">
              <PetalCanvas />
            </div>
            <div className="sheet__scroll" ref={scrollRef}>
              <Suspense fallback={<LoadingDots />}>
                <Outlet />
              </Suspense>
            </div>
            {/* physics pills live at the face level so they roam the whole
                folder and clip on its rounded corners (Skills route only) */}
            {isSkills ? <GravityPills /> : null}
            <QuickJump />
          </section>
        </div>
      </main>
    </QuickJumpProvider>
  );
}
