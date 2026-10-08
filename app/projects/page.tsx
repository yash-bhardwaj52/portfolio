import SiteNav from "@/components/site-nav";
import TypedHeading from "@/components/typed-heading";

const projects = [
  {
    number: "01",
    title: "Real-Time Stock Screener",
    description:
      "A high-performance stock screening interface built for fast filtering, virtualized tables and interactive market data.",
    tech: "Next.js · React · TypeScript · Zustand · TanStack",
    type: "Frontend / Performance",
    link: "https://github.com/yash-bhardwaj52",
  },
  {
    number: "02",
    title: "Zetheta Loan Application",
    description:
      "A multi-step loan application wizard with structured forms, validation, document upload and responsive UI.",
    tech: "React · TypeScript · Tailwind CSS · React Hook Form · Zod",
    type: "Frontend / Product UI",
    link: "https://github.com/yash-bhardwaj52",
  },
  {
    number: "03",
    title: "Weather App",
    description:
      "A responsive weather application that fetches real-time weather information through an external API.",
    tech: "React · Vite · JavaScript · Weather API",
    type: "Web Application",
    link: "https://github.com/yash-bhardwaj52",
  },
  {
    number: "04",
    title: "BuyWithUs",
    description:
      "A responsive e-commerce interface featuring product browsing, filtering, cart, wishlist and supporting pages.",
    tech: "HTML · CSS · JavaScript",
    type: "E-commerce",
    link: "https://github.com/yash-bhardwaj52",
  },
  {
    number: "05",
    title: "Library Management System",
    description:
      "A browser-based library management system with CRUD operations and local data persistence.",
    tech: "HTML · CSS · JavaScript · LocalStorage",
    type: "Web Application",
    link: "https://github.com/yash-bhardwaj52",
  },
  {
    number: "06",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio designed to showcase projects, skills and software development journey.",
    tech: "HTML · CSS · JavaScript",
    type: "Portfolio",
    link: "https://github.com/yash-bhardwaj52",
  },
];

export default function ProjectsPage() {
  return (
    <main className="inner-page">
      <SiteNav />

      <section className="projects-page">
        <div className="page-eyebrow">PROJECTS / 02</div>

        <div className="projects-heading">
          <h1 className="page-main-title">
             <TypedHeading text="Things I&apos;ve already built. "/>
          </h1>

          <p >
            A selection of projects exploring frontend development,
            
            performance, APIs and modern web technologies.
            
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <div className="project-top">
                  <span>{project.type}</span>
                  <span>{project.number}/06</span>
                </div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="project-bottom">
                  <span className="project-tech">{project.tech}</span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    VIEW →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}