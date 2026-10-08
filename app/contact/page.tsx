import SiteNav from "@/components/site-nav";
import TypedHeading from "@/components/typed-heading";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/yash-bhardwaj-1a14952a3/";

const GITHUB_URL = "https://github.com/yash-bhardwaj52";
const EMAIL = "mailto:yashb4846@gmail.com";

export default function ContactPage() {
  return (
    <main className="inner-page">
      <SiteNav />

      <section className="contact-page">
        <div className="page-eyebrow">CONTACT / 05</div>

        <div className="contact-content">
          <div>
            <h1>
            <TypedHeading text="Let&apos;s build something."/>
</h1>

            <p>
              I&apos;m open to software development opportunities, frontend
              roles, internships and interesting projects.
            </p>
          </div>

          <div className="contact-links">
            <a
              href={EMAIL}
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>yashb4846@gmail.com</strong>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>Connect with me</strong>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>yash-bhardwaj52</strong>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <span>YASH BHARDWAJ</span>
          <span>SOFTWARE DEVELOPER</span>
          <span>© 2026</span>
        </div>
      </section>
    </main>
  );
}