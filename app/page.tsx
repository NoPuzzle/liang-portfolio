import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liang Liang — AI Research & Technology Manager",
  description:
    "Research and technology leadership across frontier AI, multilingual intelligence, AI data systems, and network-enabled AI.",
};

const research = [
  {
    index: "R.01",
    title: "SWIX",
    topic: "Data systems",
    venue: "SIGMOD 2024",
    description:
      "A memory-efficient sliding-window learned index for high-velocity time-series workloads.",
    href: "https://doi.org/10.1145/3639296",
  },
  {
    index: "R.02",
    title: "LITune",
    topic: "AI for systems",
    venue: "SIGMOD 2025",
    description:
      "Learning-guided systems research connecting intelligent optimization with practical data infrastructure.",
    href: "https://doi.org/10.1145/3725257",
  },
  {
    index: "R.03",
    title: "HIRE",
    topic: "Intelligent infra",
    venue: "SIGMOD 2026",
    description:
      "Resource-efficient systems research that turns learned intelligence into deployable infrastructure.",
    href: "https://doi.org/10.1145/3786657",
  },
];

const engagements = [
  {
    marker: "2026",
    title: "AI for Good Global Summit",
    detail: "Speaker · Geneva",
    href: "https://aiforgood.itu.int/speaker/liang-liang/",
  },
  {
    marker: "ITU–T",
    title: "SG13 · Advancing AI in Networks",
    detail: "Speaker and panelist · AI-network dialogue",
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
          <span className="brand-primary">LIANG</span>
          <span className="brand-secondary">/ AI RESEARCH</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#research">Research</a>
          <a href="#engagements">Engagements</a>
          <a href="#service">Service</a>
        </nav>
        <span className="status">HONG KONG · ACTIVE</span>
      </header>

      <main>
        <section className="hero shell" id="profile" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Frontier AI systems · Research to deployment</p>
            <h1 id="hero-title">
              <span>Liang Liang—</span>
              AI Research &amp;
              <br />
              Technology Manager
            </h1>
            <p className="focus-line">
              Frontier AI · Multilingual Intelligence · AI Data Systems ·
              Network-enabled AI
            </p>
          </div>

          <aside className="bio-panel" aria-label="Profile summary">
            <div className="panel-meta">
              <div>
                <p className="meta-label">Current role</p>
                <p className="meta-value">AI Frontier Technology Research Manager</p>
              </div>
              <span className="role-code">CMHK / IRI</span>
            </div>
            <p className="institution">
              China Mobile (Hong Kong)
              <br />
              Innovation Research Institute
            </p>
            <p className="bio">
              I work across frontier AI, low-resource language intelligence,
              AI data systems, and deployment-oriented services. My research
              path includes a PhD from Imperial College London and
              postdoctoral work at EPFL.
            </p>
          </aside>
        </section>

        <div className="content-grid shell">
          <section id="research" aria-labelledby="research-title">
            <div className="section-heading">
              <p className="section-kicker" id="research-title">Selected research</p>
              <span>02 / SYSTEMS</span>
            </div>
            <div className="research-grid">
              {research.filter((item) => item.title !== "LITune").map((item) => (
                <article className="research-card" key={item.title}>
                  <div className="card-meta">
                    <span>{item.index}</span>
                    <span className="topic">{item.topic}</span>
                  </div>
                  <div>
                    <p className="venue">{item.venue}</p>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Read publication
                  </a>
                </article>
              ))}
            </div>
            <a
              className="additional-research"
              href="https://doi.org/10.1145/3725257"
              target="_blank"
              rel="noreferrer"
            >
              <span>R.02 · SIGMOD 2025</span>
              <strong>LITune · Learning-guided systems optimization</strong>
            </a>
          </section>

          <div className="activity-column">
            <section id="engagements" aria-labelledby="engagements-title">
              <div className="section-heading">
                <p className="section-kicker" id="engagements-title">Recent engagements</p>
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
                    <span className="activity-marker">{item.marker}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section id="service" aria-labelledby="service-title">
              <div className="section-heading">
                <p className="section-kicker" id="service-title">Academic service</p>
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
      </main>

      <footer className="footer shell">
        <div className="social" aria-label="External profiles">
          <a href="https://www.linkedin.com/in/liang-liang-619631192" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/NoPuzzle" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://orcid.org/0000-0002-4566-6178" target="_blank" rel="noreferrer">ORCID</a>
          <a href="https://aiforgood.itu.int/speaker/liang-liang/" target="_blank" rel="noreferrer">ITU profile</a>
        </div>
        <p>22.3193° N · 114.1694° E · PORTFOLIO / 2026</p>
      </footer>
    </div>
  );
}
