import SkillsetHero from "../components/Skills/SkillsetHero.jsx";

const GROUPS = [
  {
    name: "Design & Creative",
    note: "Learnt in school",
    accent: "blush",
    items: [
      "Adobe Photoshop",
      "Adobe XD",
      "Adobe Lightroom",
      "Adobe Dreamweaver",
      "Adobe Premiere Pro",
      "Adobe Premiere Rush",
      "Canva",
      "CapCut",
      "Wix",
    ],
  },
  {
    name: "Productivity & Collaboration",
    note: "Learnt in school",
    accent: "peach",
    items: [
      "Microsoft Excel",
      "Microsoft Word",
      "PowerPoint",
      "Microsoft Teams",
      "Google Docs",
      "Google Slides",
    ],
  },
  {
    name: "Development & AI",
    note: "Learnt in school",
    accent: "mint",
    items: [
      "VS Code",
      "Jupyter",
      "Anaconda",
      "Scikit-Learn",
      "TensorFlow",
      "GitHub",
      "ChatGPT",
      "UiPath",
      "Cisco",
    ],
  },
  {
    name: "From the NHG internship",
    note: "Learnt on the job",
    accent: "rose",
    items: ["Pair Chat", "Plumber", "UiPath"],
  },
];

export default function Skills() {
  return (
    <div className="page skills-page">
      <SkillsetHero />

      <div className="skill-groups">
        {GROUPS.map((g) => (
          <section className="skill-group" key={g.name}>
            <header className="skill-group__head">
              <h2 className="skill-group__name">{g.name}</h2>
              <span className="skill-group__note">{g.note}</span>
            </header>
            <ul className="skill-chips">
              {g.items.map((item) => (
                <li className={`skill-chip skill-chip--${g.accent}`} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
