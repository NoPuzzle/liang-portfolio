import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liang Liang — Data-Intensive Systems Research",
  description:
    "Liang Liang is a postdoctoral researcher at EPFL working across learned indexes, vector databases, DB4AI, stream processing, and high-performance computing.",
};

const education = {
  code: "D.01",
  period: "2020—2024",
  degree: "PhD in Computing",
  school: "Imperial College London",
  detail: "Stream data processing, system optimization, and learned indexes.",
  note: "United Kingdom",
};

const research = [
  {
    code: "R.01",
    title: "SWIX",
    topic: "Sliding-window learned index",
    venue: "SIGMOD 2024",
    description:
      "A memory-efficient learned index designed for fast-moving time-series windows and evolving access patterns.",
    href: "https://doi.org/10.1145/3639296",
  },
  {
    code: "R.02",
    title: "LITune",
    topic: "AI for systems",
    venue: "SIGMOD 2025",
    description:
      "Reinforcement-learning-guided tuning that brings adaptive intelligence into practical data infrastructure.",
    href: "https://doi.org/10.1145/3725257",
  },
  {
    code: "R.03",
    title: "HIRE",
    topic: "Intelligent infrastructure",
    venue: "SIGMOD 2026",
    description:
      "Resource-efficient systems research connecting learned intelligence with deployable infrastructure.",
    href: "https://doi.org/10.1145/3786657",
  },
];

const trajectory = [
  {
    marker: "NOW",
    title: "Postdoctoral researcher",
    organization:
      "EPFL · Data-Intensive Applications and Systems Laboratory",
  },
  {
    marker: "PHD",
    title: "Stream processing and learned indexes",
    organization: "Imperial College London · Computing",
  },
];

const engagements = [
  {
    marker: "2026.07",
    title: "AI for Good Global Summit 2026",
    detail: "Speaker · Geneva",
    href: "https://aiforgood.itu.int/speaker/liang-liang/",
  },
  {
    marker: "ITU—T",
    title: "SG13 · Advancing AI in Networks",
    detail: "Speaker and panelist · Standards and industry dialogue",
    href: "https://aiforgood.itu.int/event/advancing-ai-in-networks/?topic=710",
  },
  {
    marker: "2024",
    title: "ACM SIGMOD / PODS",
    detail: "SWIX · Santiago",
    href: "https://doi.org/10.1145/3639296",
  },
];

const service = [
  "PVLDB / VLDB 2026 Reviewer",
  "VLDB 2025 Industry Track Reviewer",
  "IEEE TKDE 2025 Reviewer",
];

export default function Home() {
  return (
    <div className="site" id="top">
      <header className="topbar shell">
        <a className="brand" href="#top" aria-label="Liang Liang home">
          <span className="brand-mark">LL</span>
          <span>
            <strong>LIANG / LAB</strong>
            <small>RESEARCH NODE 01</small>
          </span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#education">Education</a>
          <a href="#research">Research</a>
          <a href="#trajectory">Trajectory</a>
        </nav>

        <span className="status">EPFL · RESEARCH ACTIVE</span>
      </header>

      <main>
        <section className="hero shell" id="profile" aria-labelledby="hero-title">
          <div className="identity-block">
            <div className="hero-copy">
              <p className="eyebrow">RESEARCH DOSSIER / EPFL / 2026</p>
              <h1 id="hero-title">
                <span>Liang Liang</span>
                Data-intensive systems,
                <br />
                <em>at scale.</em>
              </h1>
            </div>
            <div className="identity-summary">
              <p className="identity-label">ABSTRACT / 001</p>
              <p className="hero-intro">
                I work on data-intensive systems—from learned indexes and stream
                processing to vector databases, DB4AI, and scientific workflows.
              </p>
              <div className="hero-actions">
                <a href="#research">Explore selected research</a>
                <a href="#education">View doctoral record</a>
              </div>
            </div>
          </div>

          <div className="front-grid">
            <section className="recent-panel" aria-labelledby="recent-title">
              <div className="archive-heading">
                <div>
                  <span>FIELD NOTES / LATEST</span>
                  <h2 id="recent-title">Recent activity</h2>
                </div>
                <span>03 ENTRIES</span>
              </div>
              <div className="front-activity-list">
                {engagements.map((item) => (
                  <a
                    className="activity-item"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={`${item.marker}-${item.title}`}
                  >
                    <span>{item.marker}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <aside className="profile-stack" aria-label="Position and doctoral education">
              <article className="signal-panel" aria-label="Current research profile">
                <div className="signal-head">
                  <span>CURRENT POSITION</span>
                  <span>2026 / ACTIVE</span>
                </div>
                <p className="signal-code">EPFL / DIAS</p>
                <h2>Postdoctoral Researcher</h2>
                <p className="signal-org">
                  École polytechnique fédérale de Lausanne
                  <br />
                  Data-Intensive Applications and Systems Laboratory
                </p>
                <p className="signal-bio">
                  Learned indexes, vector databases, DB4AI, stream processing,
                  and high-performance scientific workflows.
                </p>
              </article>

              <article className="degree-brief">
                <div className="signal-head">
                  <span>DOCTORAL EDUCATION</span>
                  <span>{education.period}</span>
                </div>
                <p className="signal-code">IMPERIAL / COMPUTING</p>
                <h2>{education.degree}</h2>
                <p>{education.school}</p>
              </article>
            </aside>
          </div>
        </section>

        <section className="section shell" id="education" aria-labelledby="education-title">
          <div className="section-intro">
            <div className="section-index">
              <span>02</span>
              <p>EDUCATION ARCHIVE</p>
            </div>
            <div>
              <p className="section-kicker">DOCTORAL FOUNDATION</p>
              <h2 id="education-title">
                Doctoral work
                <br />
                in systems.
              </h2>
            </div>
            <p className="section-note">
              A PhD in Computing established the systems foundation for current
              research in learned indexes and data-intensive infrastructure.
            </p>
          </div>

          <div className="education-grid">
            <article className="degree-card">
              <div className="degree-meta">
                <span>{education.code}</span>
                <span>{education.period}</span>
              </div>
              <div className="degree-location">
                <p className="degree-place">{education.note}</p>
                <span>Doctoral record</span>
              </div>
              <div className="degree-primary">
                <h3>{education.degree}</h3>
                <strong>{education.school}</strong>
              </div>
              <p>{education.detail}</p>
            </article>
          </div>
        </section>

        <section className="section research-section shell" id="research" aria-labelledby="research-title">
          <div className="section-intro research-intro">
            <div className="section-index">
              <span>03</span>
              <p>SELECTED SYSTEMS</p>
            </div>
            <div>
              <p className="section-kicker">RESEARCH THAT SHIPS</p>
              <h2 id="research-title">
                Systems that learn,
                <br />
                adapt, and scale.
              </h2>
            </div>
            <p className="section-note">
              A focused body of work spanning memory-efficient indexes,
              learning-guided optimization, hybrid indexes, and data-intensive
              infrastructure.
            </p>
          </div>

          <div className="research-grid">
            {research.map((item) => (
              <article className={`research-card research-${item.code.slice(-1)}`} key={item.code}>
                <div className="research-meta">
                  <span>{item.code}</span>
                  <span>{item.venue}</span>
                </div>
                <div className="research-body">
                  <p>{item.topic}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Read the publication
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section trajectory-section shell" id="trajectory" aria-labelledby="trajectory-title">
          <div className="section-intro">
            <div className="section-index">
              <span>04</span>
              <p>FIELD LOG</p>
            </div>
            <div>
              <p className="section-kicker">DATA-INTENSIVE SYSTEMS</p>
              <h2 id="trajectory-title">
                A trajectory through
                <br />
                world-class labs.
              </h2>
            </div>
            <p className="section-note">
              Academic depth across data systems, HPC, and learned indexes now
              converges in an active research programme at EPFL.
            </p>
          </div>

          <div className="field-grid">
            <div className="trajectory-list" aria-label="Career trajectory">
              {trajectory.map((item, index) => (
                <article className="trajectory-item" key={item.marker}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{item.marker}</p>
                    <h3>{item.title}</h3>
                    <strong>{item.organization}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="activity-column">
              <section aria-labelledby="service-title">
                <div className="subsection-heading">
                  <h3 id="service-title">Academic service</h3>
                  <span>PEER REVIEW</span>
                </div>
                <div className="service-list">
                  {service.map((item, index) => (
                    <div className="service-item" key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <div className="footer-callout">
          <span>OPEN CHANNEL / 2026</span>
          <h2>Connect across research, systems, and standards.</h2>
        </div>
        <div className="footer-links" aria-label="External profiles">
          <a href="https://www.linkedin.com/in/liang-liang-619631192" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/NoPuzzle" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://orcid.org/0000-0002-4566-6178" target="_blank" rel="noreferrer">ORCID</a>
          <a href="https://aiforgood.itu.int/speaker/liang-liang/" target="_blank" rel="noreferrer">ITU profile</a>
        </div>
        <p>22.3193° N · 114.1694° E · HONG KONG</p>
      </footer>
    </div>
  );
}
