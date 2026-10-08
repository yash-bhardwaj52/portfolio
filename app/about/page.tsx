import SiteNav from "@/components/site-nav";
import TypedHeading from "@/components/typed-heading";

export default function AboutPage() {
  return (
    <main className="inner-page">
      <SiteNav />

      <section className="about-page">
        <div className="page-eyebrow">ABOUT / 01</div>

        <div className="about-grid">
          <div>
            \<h1>
  <TypedHeading text="Building with curiosity." />
</h1>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I&apos;m Yash Bhardwaj, a BCA graduate and aspiring Software
              Developer focused on building modern, responsive and
              user-friendly web applications.
            </p>

            <p>
              I started my journey with HTML, CSS and JavaScript and gradually
              moved into React.js, TypeScript and modern frontend development.
              Alongside frontend development, I&apos;m strengthening my
              foundation in Java, DSA and software development concepts.
            </p>

            <div className="about-meta">
              <div>
                <span>EDUCATION</span>
                <strong>BCA</strong>
                <small>IP PG Campus 2, BSR</small>
                <small>2023 — 2026</small>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Software Development</strong>
                <small>Frontend · React · TypeScript</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}