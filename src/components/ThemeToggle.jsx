import { useEffect, useState } from "react";

/* Manual light/dark toggle for the DESK AMBIENCE only (the folder
   keeps its light design — see theme.css). Sits fixed at the top
   right of the desk.

   - No saved choice -> follows the OS/browser setting
   - Click -> sets data-theme on <html> and persists to localStorage
   (index.html applies the saved choice pre-paint to avoid a flash) */

const STORAGE_KEY = "desk-theme";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function currentTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return systemPrefersDark() ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  /* keep following the OS setting while the user hasn't chosen */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!localStorage.getItem(STORAGE_KEY))
        setTheme(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  const dark = theme === "dark";

  /* Both icons stay mounted and crossfade/rotate via CSS transitions
     (interruptible — rapid clicks retarget smoothly, no remount pop). */
  return (
    <button
      type="button"
      className="theme-toggle"
      data-mode={dark ? "dark" : "light"}
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle__stage" aria-hidden="true">
        {/* sun (shown in dark mode -> tap for light) */}
        <svg
          className="theme-toggle__icon theme-toggle__icon--sun"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4.25" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M18.7 5.3l-1.55 1.55M6.85 17.15L5.3 18.7" />
        </svg>
        {/* moon (shown in light mode -> tap for dark) */}
        <svg
          className="theme-toggle__icon theme-toggle__icon--moon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.6 14.2a8.6 8.6 0 0 1-10.8-10.8A8.9 8.9 0 1 0 20.6 14.2Z" />
        </svg>
      </span>
    </button>
  );
}
