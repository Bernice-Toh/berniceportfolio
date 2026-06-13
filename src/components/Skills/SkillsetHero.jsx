/* Skills hero: oversized "SKILLSETS" wordmark + lead. The tag pills
   that used to scatter over the wordmark now live in GravityPills.jsx,
   a decorative layer that drops to the bottom of the page. */
export default function SkillsetHero() {
  return (
    <header className="skillset-hero">
      <h1 className="skillset-hero__word">SKILLSETS</h1>
      <p className="section-intro__lead skillset-hero__lead">
        Picked up across school modules and put to work during the
        internship. Watch the tags settle in below.
      </p>
    </header>
  );
}
