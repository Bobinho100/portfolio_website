import React, { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { value: "4 yrs", label: "Design, content, and editing support" },
  { value: "6+", label: "Creative and technical disciplines" },
  { value: "360", label: "Builder, editor, evaluator, designer" }
];

const focusAreas = [
  "Software Engineering",
  "AI Evaluation",
  "Graphic Design",
  "Video Editing",
  "CAD",
  "Game Development"
];

const accentPalette = ["#ff7a59", "#4f7cff", "#18b7a7", "#f5b83f", "#b35cff", "#ef4f91"];

const experiences = [
  {
    company: "University of Calgary",
    meta: "4 years",
    role: "Graphic Designer, Content Manager, and Video Editor",
    description:
      "Managed content, created graphics, edited videos, and supported visual communication projects for 4 years.",
    accent: "#ff7a59"
  },
  {
    company: "Tairec Fire Consulting",
    meta: "Creative Support",
    role: "Graphic Designer / Creative Support",
    description:
      "Created visual content, design materials, and professional graphics for business and consulting needs.",
    accent: "#18b7a7"
  },
  {
    company: "Bobby FC",
    meta: "Sports Media",
    role: "Video Editor, Graphic Designer, and Content Creator",
    description:
      "Edited football/soccer videos, created match graphics, promotional visuals, highlight content, and social media posts.",
    accent: "#4f7cff"
  },
  {
    company: "Software Engineering Projects",
    meta: "Engineering",
    role: "Software Engineer",
    description:
      "Built and contributed to software projects involving web applications, backend systems, frontend interfaces, APIs, and technical problem-solving.",
    link: "GitHub: github.com/Bobinho100",
    href: "https://github.com/Bobinho100",
    accent: "#f5b83f"
  }
];

const skillGroups = [
  {
    title: "Video Editing",
    skills: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "iMovie",
      "CapCut",
      "Final Cut Pro",
      "Video captions",
      "Social media formatting",
      "Audio syncing"
    ],
    accent: "#ff7a59"
  },
  {
    title: "Graphic Design",
    skills: ["GIMP", "Canva", "Adobe tools", "Poster design", "Social media graphics", "Thumbnails"],
    accent: "#f5b83f"
  },
  {
    title: "Software Engineering",
    skills: ["Python", "JavaScript", "React", "TypeScript", "FastAPI", "GitHub", "APIs", "Web applications"],
    accent: "#4f7cff"
  },
  {
    title: "AI Evaluation",
    skills: ["AI response evaluation", "Annotation", "Model comparison", "Quality assessment", "Prompt evaluation"],
    accent: "#18b7a7"
  },
  {
    title: "Game Development",
    skills: ["Unity", "Roblox", "Game mechanics", "Level design", "Interactive prototypes"],
    accent: "#b35cff"
  },
  {
    title: "Other",
    skills: ["CAD", "Content management", "Social media content creation", "Digital asset management"],
    accent: "#ef4f91"
  }
];

const projects = [
  {
    title: "Bobby FC Instagram Channel",
    category: "Social Media / Sports Content",
    description:
      "Manage the Bobby FC Instagram presence, including football video edits, match graphics, promotional visuals, highlight content, captions, and social media posts.",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "GIMP", "Canva"],
    link: "https://www.instagram.com/bobbyfc.en/",
    action: "View Instagram",
    accent: "#ff7a59"
  },
  {
    title: "ACSA UCalgary Instagram Graphics",
    category: "Graphic Design / Content Management",
    description:
      "Create and manage graphics, image edits, announcements, promotional layouts, and content assets for the ACSA UCalgary Instagram channel.",
    tools: ["GIMP", "Canva", "Adobe tools", "Content management"],
    link: "https://www.instagram.com/acsauofc/",
    action: "View Instagram",
    accent: "#f5b83f"
  },
  {
    title: "Football Highlight Edit",
    category: "Video Editing",
    description:
      "Edited soccer highlight videos with transitions, music syncing, captions, pacing, color adjustments, and social media formatting.",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "CapCut"],
    link: "https://www.instagram.com/bobbyfc.en/",
    action: "View Work",
    accent: "#ef4f91"
  },
  {
    title: "Software Engineering Project",
    category: "Web Development",
    description: "Built a web application using modern frontend and backend technologies.",
    tools: ["React", "Python", "GitHub"],
    link: "https://github.com/Bobinho100",
    action: "View GitHub",
    accent: "#4f7cff"
  },
  {
    title: "AI Evaluation Work",
    category: "AI / Data Annotation",
    description:
      "Evaluated AI responses, compared model outputs, checked quality, and provided structured feedback.",
    tools: ["AI evaluation platforms", "Annotation tools"],
    link: "#contact",
    action: "Available upon request",
    accent: "#18b7a7"
  }
];

const contactLinks = [
  { label: "Email", value: "bernardaire@gmail.com", href: "mailto:bernardaire@gmail.com" },
  { label: "GitHub", value: "github.com/Bobinho100", href: "https://github.com/Bobinho100" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bernard-aire-125951233",
    href: "https://www.linkedin.com/in/bernard-aire-125951233"
  },
  {
    label: "Instagram - Bobby FC",
    value: "@bobbyfc.en",
    href: "https://www.instagram.com/bobbyfc.en/"
  },
  {
    label: "Instagram - ACSA UCalgary",
    value: "@acsauofc",
    href: "https://www.instagram.com/acsauofc/"
  }
];

function InteractiveCard({ children, className = "", accent = "#4f7cff" }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    });
  }

  return (
    <article
      className={`interactive-card ${className}`}
      onPointerMove={handlePointerMove}
      style={{ "--accent": accent, "--mx": `${position.x}%`, "--my": `${position.y}%` }}
    >
      {children}
    </article>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Bernard Aire home">
        BA
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ kicker, title, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="kicker">Creative and technical portfolio</p>
        <h1>Bernard Aire</h1>
        <p className="title-line">
          Software Engineer | AI Evaluator | Graphic Designer | CAD Specialist | Game Development
          Enthusiast | Senior Editor
        </p>
        <p className="intro">
          I am a multidisciplinary creative and technical professional with experience in software
          engineering, AI evaluation, graphic design, video editing, CAD, and game development. I
          create digital products, visual content, edited videos, graphics, and technical solutions
          for real-world use.
        </p>

        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button primary" href="#projects">
            View My Work
          </a>
          <a className="button secondary" href="#contact">
            Contact Me
          </a>
          <a className="button ghost" href="https://github.com/Bobinho100" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Creative technical workspace preview">
        <div className="image-shell">
          <img
            src="/assets/hero-workspace.png"
            alt="Modern desk workspace with software, design, video editing, CAD, and AI evaluation interfaces"
          />
          <div className="floating-chip chip-one">React</div>
          <div className="floating-chip chip-two">AI Review</div>
          <div className="floating-chip chip-three">Design</div>
        </div>
      </div>

      <div className="hero-strip" aria-label="Portfolio focus areas">
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading
        kicker="About"
        title="Technical problem-solving with creative production range."
      />
      <div className="about-layout">
        <InteractiveCard className="about-card" accent="#ff7a59">
          <p>
            I am Bernard Aire, a Software Engineer, AI Evaluator, Graphic Designer, CAD Specialist,
            Game Development enthusiast, and Senior Editor. I have experience creating software
            projects, evaluating AI systems, designing graphics, editing videos, and managing digital
            content. My background combines technical problem-solving with creative production,
            allowing me to build, design, and edit content across different platforms.
          </p>
        </InteractiveCard>

        <div className="stat-grid">
          {stats.map((stat) => (
            <InteractiveCard key={stat.label} className="stat-card" accent="#18b7a7">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        kicker="Experience"
        title="A portfolio built across media, engineering, content, and evaluation work."
      />
      <div className="card-grid">
        {experiences.map((item) => (
          <InteractiveCard key={item.company} className="experience-card" accent={item.accent}>
            <div className="card-top">
              <h3>{item.company}</h3>
              <span>{item.meta}</span>
            </div>
            <p className="role">{item.role}</p>
            <p>{item.description}</p>
            {item.link && (
              <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                {item.link}
              </a>
            )}
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        kicker="Tools & Skills"
        title="Organized skills that make the portfolio easy to expand."
        align="center"
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <InteractiveCard key={group.title} className="skill-card" accent={group.accent}>
            <div className="skill-title-row">
              <span />
              <h3>{group.title}</h3>
            </div>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        kicker="Projects"
        title="Editable project cards for video, design, engineering, and AI work."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <InteractiveCard key={project.title} className="project-card" accent={project.accent}>
            <div className="project-thumb">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{project.category}</p>
            </div>
            <div className="project-body">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tool-row">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <a className="button small" href={project.link} target="_blank" rel="noreferrer">
                {project.action}
              </a>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

function Confidential() {
  return (
    <section className="section confidential-section">
      <InteractiveCard className="confidential-card" accent="#b35cff">
        <div>
          <p className="kicker">Confidential Work</p>
          <h2>Professional work can still be discussed responsibly.</h2>
        </div>
        <p>
          Some client and company work cannot be shared publicly due to confidentiality agreements.
          However, I can discuss my role, tools used, and general responsibilities, including video
          editing, graphic design, content creation, AI evaluation, and software development.
        </p>
      </InteractiveCard>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading
        kicker="Contact"
        title="Ready for creative, technical, or editing opportunities."
        align="center"
      />
      <div className="contact-grid">
        {contactLinks.map((link, index) => (
          <InteractiveCard
            key={link.label}
            className="contact-card"
            accent={accentPalette[index % accentPalette.length]}
          >
            <a href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Confidential />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>(c) {new Date().getFullYear()} Bernard Aire.</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
