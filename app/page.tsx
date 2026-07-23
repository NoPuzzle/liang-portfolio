import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liang Liang — Frontier AI Research & Systems",
  description:
    "Liang Liang is an AI research and technology manager working across frontier AI, multilingual intelligence, data systems, and network-enabled AI.",
};

const education = [
  {
    code: "D.01",
    period: "2020—2024",
    degree: "PhD in Computing",
    school: "Imperial College London",
    detail:
      "Stream data processing, system optimization, and learned indexes.",
    note: "United Kingdom",
  },
  {
    code: "D.02",
    period: "2019—2020",
    degree: "MSc High Performance Computing with Data Science",
    school: "University of Edinburgh",
    detail: "Graduated with Distinction; scientific workflow optimization.",
    note: "United Kingdom",
  },
  {
    code: "D.03",
    period: "2017—2019",
    degree: "Master of Data Science",
    school: "Monash University",
    detail: "Graduated with High Distinction; parallel query processing.",
    note: "Australia",
  },
  {
    code: "D.04",
    period: "2012—2016",
    degree: "Law & Human Resource Management",
    school: "Tianjin Polytechnic University",
    detail: "Dual undergraduate disciplines spanning law and management.",
    note: "China",
  },
];

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
    title: "AI Frontier Technology Research Manager",
    organization:
      "China Mobile (Hong Kong) · Innovation Research Institute",
  },
  {
    marker: "POSTDOC",
    title: "Data-intensive systems research",
    organization: "EPFL · Data-Intensive Applications and Systems Laboratory",
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

        <span className="status">HKG · SIGNAL ACTIVE</span>
      </header>

      <main>
        <section className="hero shell" id="profile" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI RESEARCH &amp; TECHNOLOGY MANAGER / HONG KONG</p>
            <h1 id="hero-title">
              <span>Liang Liang</span>
              Frontier AI,
              <br />
              engineered for
              <br />
              <em>the field.</em>
            </h1>
            <p className="hero-intro">
              I work where research systems meet real-world deployment—across
              multilingual intelligence, AI data systems, and network-enabled AI.
            </p>
            <div className="hero-actions">
              <a href="#research">Explore selected research</a>
              <a href="#education">Trace the education path</a>
            </div>
          </div>

          <aside className="signal-panel" aria-label="Current research profile">
            <div className="signal-head">
              <span>CURRENT SIGNAL</span>
              <span>2026 / LIVE</span>
            </div>
            <p className="signal-code">CMHK / IRI</p>
            <h2>AI Frontier Technology Research Manager</h2>
            <p className="signal-org">
              China Mobile (Hong Kong)
              <br />
              Innovation Research Institute
            </p>
            <p className="signal-bio">
              Translating frontier research into deployment-oriented AI services,
              with a foundation in learned systems, stream processing, and
              high-performance computing.
            </p>
            <dl className="signal-metrics">
              <div>
                <dt>03</dt>
                <dd>Selected systems</dd>
              </div>
              <div>
                <dt>04</dt>
                <dd>Degree records</dd>
              </div>
              <div>
                <dt>01</dt>
                <dd>Active research node</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="profile-rail shell" aria-label="Profile highlights">
          <div>
            <span>01 / CURRENT</span>
            <strong>China Mobile Hong Kong</strong>
          </div>
          <div>
            <span>02 / FOCUS</span>
            <strong>Frontier &amp; multilingual AI</strong>
          </div>
          <div>
            <span>03 / SYSTEMS</span>
            <strong>Data intelligence at scale</strong>
          </div>
          <div>
            <span>04 / PATH</span>
            <strong>Imperial · EPFL · CMHK</strong>
          </div>
        </section>

        <section className="section shell" id="education" aria-labelledby="education-title">
          <div className="section-intro">
            <div className="section-index">
              <span>02</span>
              <p>EDUCATION ARCHIVE</p>
            </div>
            <div>
              <p className="section-kicker">A CROSS-DISCIPLINARY FOUNDATION</p>
              <h2 id="education-title">
                Built across law,
                <br />
                data, and systems.
              </h2>
            </div>
            <p className="section-note">
              Four academic chapters formed a trajectory from human systems to
              computational systems—and eventually to frontier AI deployment.
            </p>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="degree-card" key={item.code}>
                <div className="degree-meta">
                  <span>{item.code}</span>
                  <span>{item.period}</span>
                </div>
                <p className="degree-place">{item.note}</p>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
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
              learning-guided optimization, and deployable AI infrastructure.
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
              <p className="section-kicker">FROM RESEARCH TO DEPLOYMENT</p>
              <h2 id="trajectory-title">
                A trajectory through
                <br />
                world-class labs.
              </h2>
            </div>
            <p className="section-note">
              Academic depth, systems practice, and industry-scale AI now converge
              in one deployment-oriented research program.
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
              <section aria-labelledby="engagements-title">
                <div className="subsection-heading">
                  <h3 id="engagements-title">Recent engagements</h3>
                  <span>FIELD NOTES</span>
                </div>
                <div className="activity-list">
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
