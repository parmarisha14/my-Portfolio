/**
 * Learning Mode (X-Ray) — readable code snippets shown for each portfolio
 * section while X-Ray mode is on. Educational, simplified versions of the
 * real markup used on this page.
 */
export const xraySections = [
  {
    id: "hero",
    label: "Hero",
    blurb:
      "The opening screen: a full-viewport banner with the name, role and calls to action.",
    tabs: [
      {
        name: "HTML",
        code: `<section id="hero" class="hero">
  <span class="pill">● Open to Work</span>
  <h1>Parmar Isha <span class="grad">Miteshkumar</span></h1>
  <p id="role">Full Stack Developer</p>
  <a href="#projects" class="btn">View Projects</a>
  <a href="#contact" class="btn btn-outline">Hire Me</a>
</section>`,
      },
      {
        name: "CSS",
        code: `.hero {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
}

.grad {
  background: linear-gradient(100deg, #f59e0b, #fde68a);
  -webkit-background-clip: text;
  color: transparent;
}

@media (max-width: 640px) {
  .hero h1 { font-size: 2.5rem; }
}`,
      },
      {
        name: "React",
        code: `function Hero({ profile }) {
  return (
    <section id="hero">
      <span className="pill">● Open to Work</span>
      <h1>
        {profile.name.split(" ")[0]}{" "}
        <span className="grad">Parmar</span>
      </h1>
      <RoleTyper words={["Full Stack Developer"]} />
    </section>
  );
}`,
      },
    ],
  },
  {
    id: "about",
    label: "About",
    blurb:
      "A short story block: who Isha is, what she is studying, and what she is looking for.",
    tabs: [
      {
        name: "HTML",
        code: `<section id="about">
  <h2 class="eyebrow">01 — About</h2>
  <p>My name is Isha. I am currently completing a
     Full Stack Development course...</p>
  <ul class="facts">
    <li>BCA — Naran Lala College</li>
    <li>CGPA 7.36</li>
  </ul>
</section>`,
      },
      {
        name: "CSS",
        code: `#about {
  max-width: 72rem;
  margin-inline: auto;
  padding-block: 8rem;
}

.facts {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`,
      },
      {
        name: "React",
        code: `function About({ profile }) {
  return (
    <section id="about">
      <Reveal>
        <p>{profile.about}</p>
      </Reveal>
      <FactGrid facts={profile.education} />
    </section>
  );
}`,
      },
    ],
  },
  {
    id: "skills",
    label: "Skills",
    blurb:
      "Skill groups with animated progress bars that fill when they scroll into view.",
    tabs: [
      {
        name: "HTML",
        code: `<div class="skill">
  <header>
    <span>JavaScript</span>
    <span class="mono">82%</span>
  </header>
  <div class="bar"><div class="fill" style="--level: 82%"></div></div>
</div>`,
      },
      {
        name: "CSS",
        code: `.bar {
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.fill {
  height: 100%;
  width: var(--level);
  border-radius: inherit;
  background: linear-gradient(90deg, #f59e0b, #fde68a);
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}`,
      },
      {
        name: "React",
        code: `function SkillBar({ name, level, visible }) {
  return (
    <div className="skill">
      <header>
        <span>{name}</span>
        <span className="mono">{level}%</span>
      </header>
      <div className="bar">
        <div
          className="fill"
          style={{ "--level": visible ? level + "%" : "0%" }}
        />
      </div>
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    blurb:
      "A vertical timeline: BCA at Naran Lala College, the Full Stack course, HSC and SSC.",
    tabs: [
      {
        name: "HTML",
        code: `<ol class="timeline">
  <li class="current">
    <h3>BCA — Third Year</h3>
    <p>Naran Lala College, Navsari</p>
    <span class="badge">CGPA 7.36 · Ongoing</span>
  </li>
  <li>...</li>
</ol>`,
      },
      {
        name: "CSS",
        code: `.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(#f59e0b, transparent);
}`,
      },
      {
        name: "React",
        code: `function Education({ items }) {
  return (
    <ol className="timeline">
      {items.map((e) => (
        <li key={e.title} className={e.current ? "current" : ""}>
          <h3>{e.title}</h3>
          <p>{e.institute}</p>
          {e.detail && <span className="badge">{e.detail}</span>}
        </li>
      ))}
    </ol>
  );
}`,
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    blurb:
      "Featured cards from the resume plus live deployments pulled from GitHub.",
    tabs: [
      {
        name: "HTML",
        code: `<article class="card featured">
  <h3>Library Management System</h3>
  <ul class="stack">
    <li>React.js</li><li>Bootstrap</li>
  </ul>
  <p>Component-based design with basic CRUD...</p>
  <a href="...">Live demo ↗</a>
</article>`,
      },
      {
        name: "CSS",
        code: `.card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #f59e0b;
}`,
      },
      {
        name: "React",
        code: `function ProjectGrid({ projects }) {
  const featured = projects.filter((p) => p.featured);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {featured.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "myportfolio",
    label: "My Portfolio",
    blurb:
      "Live repositories, open source builds, and public deployments in the portfolio.",
    tabs: [
      {
        name: "JS",
        code: `// Fetch public profile stats from GitHub's REST API
const res = await fetch(
  "https://api.github.com/users/parmarisha14"
);
const user = await res.json();

console.log(user.public_repos); // 65`,
      },
      {
        name: "HTML",
        code: `<section id="myportfolio">
  <div class="stat">
    <span class="num">65</span>
    <span class="label">Public repos</span>
  </div>
  <a class="btn" href="https://github.com/parmarisha14">
    Visit profile ↗
  </a>
</section>`,
      },
      {
        name: "React",
        code: `function GitHubCard({ stats }) {
  return (
    <a className="stat" href={stats.url}>
      <span className="num">{stats.publicRepos}</span>
      <span className="label">Public repos</span>
    </a>
  );
}`,
      },
    ],
  },
  {
    id: "resume",
    label: "Resume",
    blurb:
      "Single-click download card with academic and experience highlights.",
    tabs: [
      {
        name: "HTML",
        code: `<section id="resume">
  <div class="resume-card">
    <h3>Isha Parmar — Resume (PDF)</h3>
    <a href="/Isha-Parmar-Resume.pdf" download class="btn-ember">
      Download PDF
    </a>
  </div>
</section>`,
      },
      {
        name: "CSS",
        code: `#resume .resume-card {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        name: "React",
        code: `export function ResumeSection() {
  return (
    <Section id="resume" eyebrow="Resume" title="One page, whole story.">
      <a href="/Isha-Parmar-Resume.pdf" download className="btn-ember">
        Download PDF
      </a>
    </Section>
  );
}`,
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    blurb:
      "A big call-to-action with email, phone and a mailto form-free contact link.",
    tabs: [
      {
        name: "HTML",
        code: `<section id="contact">
  <h2>Let's build something</h2>
  <a href="mailto:parmarisha744@gmail.com" class="btn">
    parmarisha744@gmail.com
  </a>
  <a href="tel:+919909315676">+91 99093 15676</a>
</section>`,
      },
      {
        name: "CSS",
        code: `#contact {
  text-align: center;
}

#contact .btn {
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}`,
      },
      {
        name: "React",
        code: `function Contact({ profile }) {
  return (
    <section id="contact">
      <h2>Let's build something</h2>
      <a className="btn" href={\`mailto:\${profile.email}\`}>
        {profile.email}
      </a>
    </section>
  );
}`,
      },
    ],
  },
];
