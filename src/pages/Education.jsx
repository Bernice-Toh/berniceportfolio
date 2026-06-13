import SectionIntro from "../components/SectionIntro.jsx";
/* Education: schools + achievements (a vertical timeline), then "Life at
   ITE" — the overseas trip as a featured highlight above a bento gallery
   of the talks, workshops and conferences sought out along the way.
   Deliberately a reflowing card grid, not another rail-and-vignette
   story, so it doesn't echo the Experience page. */

const SCHOOLS = [
  {
    school: "ITE College Central",
    course: "Higher Nitec in AI Applications",
    period: "2024 – Present",
    accent: "rose",
    achievements: [
      {
        title: "ITE Community Scholarship 2024",
        text: "Awarded in recognition of outstanding academic performance as a top-performing student entering ITE. The scholarship supports students who demonstrate academic excellence, good conduct, and a commitment to achieving their educational goals.",
      },
    ],
  },
  {
    school: "Greenridge Secondary School",
    course: null,
    period: "2020 – 2023",
    accent: "mint",
    achievements: [
      {
        title: "Edusave Merit Bursary 2020",
        text: "Awarded in recognition of good academic performance and consistent conduct, placing among the top-performing students in the cohort.",
      },
      {
        title: "Edusave Certificate of Academic Achievement 2022",
        text: "Awarded for achieving strong academic results and demonstrating good character, reflecting continued commitment to academic excellence.",
      },
    ],
  },
];

/* the overseas trip — the headline of life outside the syllabus */
const OSDP = {
  badge: "Overseas programme",
  title: "Overseas Service & Development · Chiang Mai",
  role: "Community Service · Wat Pracha Krasem Primary School · Jan 2025",
  text: "Eight days in Hangdong with 24 schoolmates — cleaning and repainting the school, then running AI activities for the kids, with culture and landmark visits in between.",
};

/* everything else I went to keep learning. accent maps to the shared
   skill-chip palette (blush / peach / mint / rose) so types read by colour */
const UPSKILLING = [
  {
    cat: "Conference",
    accent: "blush",
    title: "AI Festival Asia 2025",
    text: "Industry AI applications up close — left with a notebook full of ideas.",
    meta: "Suntec Convention Hall",
  },
  {
    cat: "Workshop",
    accent: "mint",
    title: "ASME-YOLO Launchpad × AWS",
    text: "Industry leaders on curiosity and grit, plus AWS upskilling paths.",
    meta: "Amazon Web Services",
  },
  {
    cat: "Workshop",
    accent: "mint",
    title: "GitHub 101",
    text: "Version control and collaboration, done the proper way.",
  },
  {
    cat: "Exhibition",
    accent: "peach",
    title: "SFA Food Security Roving Exhibition",
    text: "Singapore's food-security story, hands-on.",
  },
  {
    cat: "Workshop",
    accent: "mint",
    title: "AI for Everyone (AI4E)",
    text: "AI concepts made clear for non-technical minds.",
  },
  {
    cat: "Talk",
    accent: "rose",
    title: "Gen AI Talk — Irene Kreations",
    text: "Generative AI for social-media content creation.",
    meta: "Social Content Coach, SG",
  },
  {
    cat: "Workshop",
    accent: "mint",
    title: "Intro to ML & Reinforcement Learning",
    text: "First steps into ML and how agents learn by reward.",
  },
  {
    cat: "Talk",
    accent: "rose",
    title: "Live with Charlene",
    text: "Behind the scenes of being an influencer.",
    meta: "Double Up · Ah Girls Go Army · 3 Oct",
  },
  {
    cat: "Talk",
    accent: "rose",
    title: "The Role of AI in Ageing",
    text: "AI's place in ageing and healthcare.",
    meta: "Dr Kelvin Tan",
  },
];

export default function Education() {
  return (
    <div className="page">
      <SectionIntro
        title="Where I've studied."
        lead="From secondary school to specialising in AI applications."
      />

      <div className="edu-timeline">
        {SCHOOLS.map((s) => (
          <article className="edu" key={s.school}>
            <span className={`edu__dot edu__dot--${s.accent}`} aria-hidden="true" />
            <div className="edu__body">
              <header className="edu__head">
                <div>
                  <h2 className="edu__school">{s.school}</h2>
                  {s.course ? <p className="edu__course">{s.course}</p> : null}
                </div>
                <span className={`chip chip--${s.accent}`}>{s.period}</span>
              </header>
              <div className="edu__achievements">
                {s.achievements.map((a) => (
                  <div className="edu__achievement" key={a.title}>
                    <h3 className="edu__achievement-title">{a.title}</h3>
                    <p className="edu__achievement-text">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="edu-life">
        <header className="edu-life__head">
          <h2 className="edu-life__title">Life at ITE</h2>
          <p className="edu-life__lead">
            Beyond the syllabus — where I went to keep learning.
          </p>
        </header>

        <article className="edu-life__highlight">
          <span className="edu-life__badge">{OSDP.badge}</span>
          <h3 className="edu-life__highlight-title">{OSDP.title}</h3>
          <p className="edu-life__highlight-role">{OSDP.role}</p>
          <p className="edu-life__highlight-text">{OSDP.text}</p>
        </article>

        <div className="upskill-grid">
          {UPSKILLING.map((e, i) => (
            <article
              className={`upskill upskill--${e.accent}`}
              style={{ "--i": i }}
              key={e.title}
            >
              <span className="upskill__tag">{e.cat}</span>
              <h3 className="upskill__title">{e.title}</h3>
              <p className="upskill__text">{e.text}</p>
              {e.meta ? <span className="upskill__meta">{e.meta}</span> : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
