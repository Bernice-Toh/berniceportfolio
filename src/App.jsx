import { lazy, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FolderShell from "./components/FolderShell.jsx";
import FolderGate from "./components/FolderGate.jsx";

/* Single dedicated routing file. Every page lives in /src/pages and is
   lazy-loaded so each route ships as its own chunk (faster first paint,
   no single giant bundle). */
const Home = lazy(() => import("./pages/Home.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Recognitions = lazy(() => import("./pages/Recognitions.jsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));
const Skills = lazy(() => import("./pages/Skills.jsx"));
const Education = lazy(() => import("./pages/Education.jsx"));

export default function App() {
  /* The cover gate only guards a fresh landing on "/". Deep links to any
     sub-page open straight into the folder. Stages: closed → opening → open;
     the shell mounts at "opening" so its mount-triggered entrance plays. */
  const [stage, setStage] = useState(() =>
    typeof window !== "undefined" && window.location.pathname === "/"
      ? "closed"
      : "open"
  );

  return (
    <BrowserRouter>
      {stage !== "open" && (
        <FolderGate
          stage={stage}
          onUnlock={() => {
            /* warm the Home chunk so its hero choreography is ready the
               instant the shell mounts under the zoom (no LoadingDots flash) */
            import("./pages/Home.jsx");
            setStage("opening");
          }}
          onOpened={() => setStage("open")}
        />
      )}
      {stage !== "closed" && (
        <Routes>
          <Route element={<FolderShell />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="recognitions" element={<Recognitions />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
