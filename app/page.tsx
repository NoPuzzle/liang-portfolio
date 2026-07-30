const education = {
  code: "D.01",
  period: "2020.10—2024.10",
  degree: "PhD in Computing",
  school: "Imperial College London",
  detail:
    "Stream data processing, system optimization, and learned indexes. Supervisor: Thomas Heinis.",
  note: "United Kingdom",
};

const research = [
  {
    code: "R.01",
    title: "SWIX",
    topic: "Sliding-window learned index",
    venue: "SIGMOD 2024",
    description:
      "Introduces a flat, adaptive index for sliding-window streams, using 22–42% of the memory of leading alternatives while improving average query performance by 1.2–1.6× on the evaluated workloads.",
    href: "https://doi.org/10.1145/3639296",
    artifacts: [
      {
        label: "Code",
        href: "https://github.com/SWIXProject/SWIX",
      },
    ],
  },
  {
    code: "R.02",
    title: "LITune",
    topic: "AI for systems",
    venue: "SIGMOD 2025",
    description:
      "Introduces end-to-end learned-index tuning through deep reinforcement learning and an online updater, reaching up to 98% runtime reduction and 17× throughput over default settings in evaluation.",
    href: "https://doi.org/10.1145/3725257",
    artifacts: [
      {
        label: "Code",
        href: "https://github.com/Kevinwty0107/LITune_SIGMOD_25",
      },
      {
        label: "Project",
        href: "https://kevinwty0107.github.io/LITune_Open/",
      },
    ],
  },
  {
    code: "R.03",
    title: "HIRE",
    topic: "Intelligent infrastructure",
    venue: "SIGMOD 2026",
    description:
      "Combines balanced-tree robustness with learned prediction, delivering up to 41.7× higher throughput and up to 98% lower tail latency against the evaluated learned and traditional indexes.",
    href: "https://doi.org/10.1145/3786657",
    artifacts: [
      {
        label: "Open manuscript",
        href: "https://arxiv.org/abs/2511.21307",
      },
    ],
  },
];

const trajectory = [
  {
    marker: "SINCE 2026.01.05",
    title: "AI Frontier Technology Research Manager",
    organization:
      "China Mobile (Hong Kong) Innovation Research Institute · Innovation and R&D",
  },
  {
    marker: "2025.01—2025.12",
    title: "Data-intensive systems research",
    organization:
      "EPFL · Data-Intensive Applications and Systems Laboratory · Anastasia Ailamaki",
  },
  {
    marker: "2020.10—2024.10",
    title: "Stream processing and learned indexes",
    organization: "Imperial College London · Computing · Thomas Heinis",
  },
];

const engagements = [
  {
    marker: "2026.07",
    title: "AI for Good Global Summit 2026",
    detail: "Official speaker profile · Geneva",
    kind: "Speaker profile",
    href: "https://aiforgood.itu.int/speaker/liang-liang/",
  },
  {
    marker: "2026.07.10",
    title: "Advancing AI in Networks",
    detail: "Talk and panel · ITU-T SG13",
    kind: "Talk + panel",
    href: "https://aiforgood.itu.int/event/advancing-ai-in-networks/",
  },
  {
    marker: "2026.07.07",
    title: "Silk Road Intelligence",
    detail: "Selected case report and invited talk · Innovate for Impact",
    kind: "Selected case",
    href: "https://aiforgood.itu.int/event/innovate-for-impact/",
  },
];

const service = [
  "PVLDB / VLDB 2026 Reviewer",
  "VLDB 2025 Industry Track Reviewer",
  "IEEE TKDE 2025 Reviewer",
];

const publicProfiles = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/liang-liang-619631192",
    accessNote: "May request sign-in",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=97k8aygAAAAJ&hl=en",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-4566-6178",
  },
  {
    label: "Semantic Scholar",
    href: "https://www.semanticscholar.org/author/2087343695",
    accessNote: "May request browser verification",
  },
  {
    label: "ITU profile",
    href: "https://aiforgood.itu.int/speaker/liang-liang/",
  },
];

const primaryContact = publicProfiles[0];
const researchProfiles = publicProfiles.slice(1);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liang Liang",
  alternateName: "梁良",
  url: "https://nopuzzle.github.io/liang-portfolio/",
  jobTitle: "AI Frontier Technology Research Manager",
  worksFor: {
    "@type": "Organization",
    name: "China Mobile (Hong Kong) Innovation Research Institute",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Imperial College London",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "EPFL",
    },
  ],
  knowsAbout: [
    "Data-intensive systems",
    "Multilingual AI",
    "Low-resource language data",
    "Learned indexes",
    "Network-enabled intelligence",
  ],
  sameAs: publicProfiles.map((profile) => profile.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="site" id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
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

        <span className="status">INNOVATION AND R&amp;D · ACTIVE</span>
        </header>

        <main id="main-content">
        <section className="hero shell" id="profile" aria-labelledby="hero-title">
          <div className="identity-block">
            <div className="hero-copy">
              <p className="eyebrow">RESEARCH DOSSIER / HONG KONG / 2026</p>
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
                I work across low-resource language data, multilingual AI,
                data-intensive systems, and deployment-oriented AI services.
              </p>
              <div className="hero-actions">
                <a href="#research">Explore selected research</a>
                <a
                  className="primary-action"
                  href={primaryContact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Liang Liang on LinkedIn (opens in a new tab and may require sign-in)"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
              <div className="profile-links" aria-label="Research profile index">
                <span>RESEARCH INDEX</span>
                {researchProfiles.slice(0, 3).map((profile) => (
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.label} (opens in a new tab)`}
                    key={profile.label}
                  >
                    {profile.label} ↗
                  </a>
                ))}
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
                    rel="noopener noreferrer"
                    aria-label={`${item.title}: ${item.kind} (opens in a new tab)`}
                    key={`${item.marker}-${item.title}`}
                  >
                    <span>{item.marker}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <span className="activity-link">{item.kind} ↗</span>
                  </a>
                ))}
              </div>
            </section>

            <aside className="profile-stack" aria-label="Recent work and doctoral education">
              <article className="signal-panel" aria-label="Current research profile">
                <div className="signal-head">
                  <span>CURRENT POSITION</span>
                  <span>SINCE 2026.01.05</span>
                </div>
                <p className="signal-code">INNOVATION AND R&amp;D / AI</p>
                <h2>AI Frontier Technology Research Manager</h2>
                <p className="signal-org">
                  China Mobile (Hong Kong) Innovation Research Institute
                </p>
                <p className="signal-bio">
                  Low-resource language data management, AI data systems,
                  multilingual applications, and network-enabled intelligence.
                </p>
              </article>

              <article className="appointment-brief" aria-label="Previous research appointment">
                <div className="signal-head">
                  <span>PREVIOUS APPOINTMENT</span>
                  <span>2025.01—2025.12</span>
                </div>
                <p className="signal-code">DATA-INTENSIVE SYSTEMS</p>
                <h2>Postdoctoral Researcher</h2>
                <p>
                  EPFL · DIAS Laboratory · Anastasia Ailamaki
                </p>
              </article>

              <article className="degree-brief" aria-label="Doctoral education">
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
                  <p className="research-topic">{item.topic}</p>
                  <h3>{item.title}</h3>
                  <p className="research-description">{item.description}</p>
                </div>
                <div className="research-footer">
                  <a
                    className="research-card-main"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${item.title}, ${item.venue} (opens in a new tab; ACM may request browser verification)`}
                  >
                    <span>Open DOI ↗</span>
                    <small>ACM may request browser verification</small>
                  </a>
                  <div
                    className="research-artifacts"
                    aria-label={`${item.title} public materials`}
                  >
                    {item.artifacts.map((artifact) => (
                      <a
                        href={artifact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} ${artifact.label} (opens in a new tab)`}
                        key={artifact.label}
                      >
                        {artifact.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
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
              <p className="section-kicker">AI AND DATA SYSTEMS</p>
              <h2 id="trajectory-title">
                A trajectory through
                <br />
                world-class labs.
              </h2>
            </div>
            <p className="section-note">
              Systems research at Imperial and EPFL now informs applied AI work
              across multilingual data, intelligent services, and networks.
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
            <a
              className="contact-action"
              href={primaryContact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Liang Liang on LinkedIn (opens in a new tab and may require sign-in)"
            >
              <strong>Connect on LinkedIn ↗</strong>
              <small>{primaryContact.accessNote}</small>
            </a>
          </div>
          <div className="footer-links" aria-label="External profiles">
            {researchProfiles.map((profile) => (
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.label} (opens in a new tab)`}
                key={profile.label}
              >
                <span>{profile.label}</span>
                {"accessNote" in profile && profile.accessNote ? (
                  <small>{profile.accessNote}</small>
                ) : null}
              </a>
            ))}
          </div>
          <p>22.3193° N · 114.1694° E · HONG KONG</p>
        </footer>
      </div>
    </>
  );
}
