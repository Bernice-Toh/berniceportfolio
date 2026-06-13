/* Sticky left rail on the Projects page: a search box plus one button
   per project category. Stays put while the project grid scrolls. */
export default function ProjectFilter({
  categories,
  active,
  onSelect,
  query,
  onQuery,
  counts,
}) {
  return (
    <aside className="pfilter" aria-label="Filter projects">
      <input
        className="qj__input pfilter__search"
        type="search"
        aria-label="Search projects"
        placeholder="Search projects…"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <p className="pfilter__head">Sections</p>
      <ul className="pfilter__list">
        {categories.map((c) => (
          <li key={c}>
            <button
              type="button"
              className={`pfilter__item ${
                active === c ? "pfilter__item--active" : ""
              }`}
              aria-pressed={active === c}
              onClick={() => onSelect(c)}
            >
              <span>{c}</span>
              <span className="pfilter__count">{counts[c]}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
