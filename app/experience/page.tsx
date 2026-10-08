import SiteNav from "@/components/site-nav";
import TypedHeading from "@/components/typed-heading";

const experiences = [
  {
    number: "01",
    company: "Zetheta",
    role: "Front End Developer",
    period: "2026",
    type: "Remote · Project Experience",
    description:
      "Worked on frontend projects focused on building responsive interfaces and implementing modern React-based web experiences.",
    stack: "React · TypeScript · Tailwind CSS · Next.js",
  },
  {
    number: "02",
    company: "Auspify",
    role: "Frontend Development Intern",
    period: "2026",
    type: "Internship · Remote",
    description:
      "Built responsive frontend interfaces and practical web projects while working with modern HTML, CSS, JavaScript and React development workflows.",
    stack: "HTML · CSS · JavaScript · React.js · Vite",
  },
];

export default function ExperiencePage() {
  return (
    <main className="inner-page">
      <SiteNav />

      <section className="experience-page">
        <div className="page-eyebrow">EXPERIENCE / 04</div>

        <div className="experience-heading">
          <h1>
          <TypedHeading text="  Learning by building."/>
          </h1>

          <p>
            Practical experience gained through internships and real-world
            frontend development projects.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>
              <div className="experience-number">{experience.number}</div>

              <div className="experience-main">
                <div className="experience-meta">
                  <span>{experience.type}</span>
                  <span>{experience.period}</span>
                </div>

                <h2>{experience.company}</h2>

                <h3>{experience.role}</h3>

                <p>{experience.description}</p>

                <div className="experience-stack">
                  {experience.stack}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer">
          <span>NEXT CHAPTER</span>
          <strong>Software Development →</strong>
        </div>
      </section>
    </main>
  );
}