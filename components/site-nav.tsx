"use client";
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/yash-bhardwaj-1a14952a3/";

export default function SiteNav() {
  return (
    <header className="gh-header">
      <nav className="gh-nav" aria-label="Primary">
        <a className="gh-brand" href="/" aria-label="Yash Bhardwaj, home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="10"
              fill="currentColor"
            />
            <path
              d="M9 9.5 L16 18 L23 9.5 M16 18 V24"
              fill="none"
              stroke="#edf5ff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="23.5" cy="23.5" r="1.7" fill="#edf5ff" />
          </svg>

          <span>Yash Bhardwaj</span>
        </a>

        <ul className="gh-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="gh-pill gh-cta"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}