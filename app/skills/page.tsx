    import SiteNav from "@/components/site-nav";
    import TypedHeading from "@/components/typed-heading";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Programming",
    skills: ["Java", "C++", "C", "OOP", "DSA"],
  },
  {
    number: "03",
    title: "Tools & Technologies",
    skills: ["Next.js", "Git", "GitHub", "Vite", "REST APIs", "VS Code"],
  },
];

export default function SkillsPage() {
  return (
    <main className="inner-page">
      <SiteNav />

      <section className="skills-page">
        <div className="page-eyebrow">SKILLS / 03</div>

        <div className="skills-heading">
         <h1 className="page-main-title">
              <TypedHeading text="Tools for building." />
          </h1>

          <p>
            Technologies and concepts I&apos;m using to build, understand and
            improve as a software developer.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <div className="skill-number">{group.number}</div>

              <div className="skill-content">
                <h2>{group.title}</h2>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span>CURRENTLY LEARNING</span>
          <strong>Java · DSA · TypeScript · Advanced React</strong>
        </div>
      </section>
    </main>
  );
}