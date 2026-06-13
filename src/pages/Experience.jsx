import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";

/* Experience: the NHG internship told as a scroll story. Three project
   "files" in the folder's own tab + sheet language, each with a small
   living vignette (pipeline, chat, draft fan) that plays as it scrolls
   into view. A timeline rail on the left fills with scroll progress. */

const STATS = [
  { value: "9", label: "months" },
  { value: "3", label: "major projects" },
  { value: "4", label: "AI chatbots" },
  { value: "1", label: "automated workflow" },
];

const LESSONS = [
  { label: "Workflow automation", accent: "blush" },
  { label: "Chatbot development", accent: "mint" },
  { label: "Stakeholder collaboration", accent: "peach" },
  { label: "Problem solving", accent: "rose" },
  { label: "Technical implementation", accent: "blush" },
  { label: "Teamwork", accent: "mint" },
];

/* mini "open file": same grammar as the folder + project modal */
function StoryFile({ tab, title, copy, children }) {
  return (
    <section className="xp-file">
      <span className="xp-file__tab" aria-hidden="true">
        {tab}
      </span>
      <div className="xp-file__sheet">
        <div className="xp-file__copy">
          <h2 className="xp-file__title">{title}</h2>
          {copy.map((para) => (
            <p key={para.slice(0, 24)} className="xp-file__text">
              {para}
            </p>
          ))}
        </div>
        <div className="xp-file__vignette">{children}</div>
      </div>
    </section>
  );
}

/* vignette 1 — the Plumber workflow, end to end */
function PipelineVignette() {
  return (
    <div className="pipeline">
      <div className="pipeline__step">
        <span className="pipeline__node pipeline__node--form" aria-hidden="true">
          ✉
        </span>
        <span className="pipeline__label">Form submitted</span>
      </div>
      <span className="pipeline__wire pipeline__wire--1" aria-hidden="true" />
      <div className="pipeline__step pipeline__step--mid">
        <span className="pipeline__node pipeline__node--gear" aria-hidden="true">
          ⚙
        </span>
        <span className="pipeline__label">Workflow fires</span>
      </div>
      <span className="pipeline__wire pipeline__wire--2" aria-hidden="true" />
      <div className="pipeline__step pipeline__step--last">
        <span className="pipeline__node pipeline__node--done" aria-hidden="true">
          ✓
        </span>
        <span className="pipeline__label">Emails sent</span>
      </div>
    </div>
  );
}

/* vignette 2 — MATAbot answering, iMessage style. The conversation
   plays out in time (typing dots, then the reply) once the vignette
   scrolls into view. Arming happens only when JS + IO are available,
   so without them the chat is simply fully visible. */
function TypingDots() {
  return (
    <span className="xp-chat__typing" aria-hidden="true">
      <i className="xp-chat__typing-dot" />
      <i className="xp-chat__typing-dot" />
      <i className="xp-chat__typing-dot" />
    </span>
  );
}

function ChatVignette() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [armed, setArmed] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (reduced || !el || typeof IntersectionObserver === "undefined") {
      return undefined;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`xp-chat ${armed ? "xp-chat--armed" : ""} ${
        play ? "xp-chat--play" : ""
      }`}
    >
      <div className="xp-chat__bubble xp-chat__bubble--user">
        Where do I find the MATA dashboard?
      </div>
      <div className="xp-chat__row">
        <span className="xp-chat__avatar" aria-hidden="true">
          M
        </span>
        <div className="xp-chat__bubble xp-chat__bubble--bot">
          Right here: MATA Hub → Dashboards. Want the process checklist too?
        </div>
        <TypingDots />
      </div>
      <div className="xp-chat__bubble xp-chat__bubble--user">
        Yes please, this month's.
      </div>
      <div className="xp-chat__row">
        <span className="xp-chat__avatar" aria-hidden="true">
          M
        </span>
        <div className="xp-chat__bubble xp-chat__bubble--bot">
          Pulling it up now ✦
        </div>
        <TypingDots />
      </div>
    </div>
  );
}

/* vignette 3 — three narrative drafts fanning out of one dataset.
   Purely decorative: pointer-transparent, drifting gently while the
   summary lines shimmer as if the bots are still writing. The outer
   sheet owns position + the scroll fan-out; the inner card owns the
   idle drift so the two transforms never fight. */
function DraftFanVignette() {
  return (
    <div className="fanstack" aria-hidden="true">
      {["Draft 01", "Draft 02", "Draft 03"].map((label) => (
        <div className="fanstack__sheet" key={label}>
          <div className="fanstack__card">
            <span className="fanstack__head">Narrative summary</span>
            <span className="fanstack__line fanstack__line--1" />
            <span className="fanstack__line fanstack__line--2" />
            <span className="fanstack__line fanstack__line--3" />
            <span className="fanstack__tag">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="page xp-story">
      <SectionIntro
        display
        title="More than you expect"
        lead="Nine months inside the National Healthcare Group's digital transformation team, told file by file."
      />

      <ul className="hero__meta xp-story__stats">
        {STATS.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong> {s.label}
          </li>
        ))}
      </ul>

      <div className="xp-story__flow">
        {/* timeline rail: track + scroll-progress fill + month marks */}
        <span className="xp-story__rail" aria-hidden="true" />
        <span className="xp-story__rail-fill" aria-hidden="true" />
        <span className="xp-month xp-month--start" aria-hidden="true">
          Oct '25
        </span>
        <span className="xp-month xp-month--mid" aria-hidden="true">
          Jan '26
        </span>
        <span className="xp-month xp-month--end" aria-hidden="true">
          May '26
        </span>

        <section className="xp-chapter xp-scene">
          <p className="xp-scene__line">
            October 2025. <span className="ink-pink">New badge, new desk,</span>{" "}
            and a team whose job is making healthcare run with less manual
            work.
          </p>
          <p className="xp-scene__text">
            I joined the National Healthcare Group as a Digital Transformation
            intern, building with GovTech's Plumber and Pair Chat. Over nine
            months, three projects went from idea to staff actually using
            them. These are their files.
          </p>
        </section>

        <StoryFile
          tab="Plumber"
          title="Onboarding, automated"
          copy={[
            "Staff onboarding and offboarding ran on manual checklists and reminder emails that someone had to remember to send.",
            "My Plumber workflow watches every form submission and sends the right emails at the right moment, instantly or on schedule, with no one chasing.",
          ]}
        >
          <PipelineVignette />
        </StoryFile>

        <StoryFile
          tab="Pair Chat"
          title="MATAbot answers first"
          copy={[
            "PCs kept asking the same questions about MATA processes and dashboards, and the answers lived in long email threads.",
            "MATAbot answers on the spot and points straight to the right dashboard, so the thread never starts.",
          ]}
        >
          <ChatVignette />
        </StoryFile>

        <StoryFile
          tab="Pair Chat × 3"
          title="Three bots that draft the report"
          copy={[
            "EOR narrative summaries started from a blank page every time: read the dataset, read the feedback, write it all up.",
            "I developed three chatbots that do the reading and produce the first draft, so the team edits instead of writes.",
          ]}
        >
          <DraftFanVignette />
        </StoryFile>

        <section className="xp-chapter xp-close">
          <h2 className="xp-close__title">What nine months taught me</h2>
          <p className="xp-close__text">
            Workflow automation, chatbot development and stakeholder
            collaboration, practised on real problems with real users. And the
            quieter skills: scoping a problem before solving it, asking the
            awkward questions early, and shipping things people actually use.
          </p>
          <ul className="skill-chips xp-close__chips">
            {LESSONS.map((l) => (
              <li className={`skill-chip skill-chip--${l.accent}`} key={l.label}>
                {l.label}
              </li>
            ))}
          </ul>
          <div className="xp-close__actions">
            <Link className="btn btn--primary" to="/testimonials">
              Read my supervisor's testimonial
            </Link>
            <Link className="btn btn--ghost" to="/skills">
              See the tools I picked up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
