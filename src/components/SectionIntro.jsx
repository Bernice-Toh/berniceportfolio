/* Shared page header: display title + lead paragraph.
   `display` renders the oversized variant used by Projects/Experience.
   `mega` renders the ~3x display variant used by Recognitions. */
export default function SectionIntro({ title, lead, display = false, mega = false }) {
  return (
    <header className="section-intro">
      <h1
        className={`section-intro__title ${
          display ? "section-intro__title--display" : ""
        } ${mega ? "section-intro__title--mega" : ""}`}
      >
        {title}
      </h1>
      {lead ? <p className="section-intro__lead">{lead}</p> : null}
    </header>
  );
}
