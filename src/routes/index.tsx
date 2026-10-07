import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState, type CSSProperties } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, X, Puzzle, Code2, CalendarDays, Users, Cpu, Sparkles, Compass, Wrench, FlaskConical, GitFork, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ai-builders-logo.png.asset.json";
import { HeroPuzzle } from "@/components/hero-puzzle";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AI Builders — Meet. Build. Begin." },
    { name: "description", content: "We learn AI by building. Meet AI Builders, the student-led community at Universal AI University under the AI Centre of Excellence." },
    { property: "og:title", content: "AI Builders — Meet. Build. Begin." },
    { property: "og:description", content: "Ideas → Real Builds. A student-led AI community at Universal AI University." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const links = [{ label: "Home", id: "home" }, { label: "About", id: "about" }, { label: "What We Do", id: "what-we-do" }, { label: "Projects", id: "projects" }, { label: "Events", id: "events" }, { label: "Team", id: "team" }];
const topics = ["AI", "MCP", "RAG", "LLM", "API", "GIT", "AGENTS", "MLOPS", "RESEARCH", "DATA"];

const aboutSteps = [
  { name: "Curiosity", icon: Sparkles, color: "blue" },
  { name: "Experimentation", icon: FlaskConical, color: "teal" },
  { name: "Projects", icon: Code2, color: "orange" },
  { name: "Real Impact", icon: Rocket, color: "purple" },
];

const initiatives = [
  { number: "01", name: "Explore AI & Emerging Tech", icon: Compass, color: "blue", text: "Sessions, reading groups, and demos on the tools and ideas moving fastest in AI." },
  { number: "02", name: "Build Practical Hands-on Projects", icon: Wrench, color: "teal", text: "Working prototypes built by student teams, not slideware or toy notebooks." },
  { number: "03", name: "Conduct Technical & Community Initiatives", icon: FlaskConical, color: "purple", text: "Studies, open initiatives, and campus experiments that give ideas somewhere to land." },
  { number: "04", name: "Organize Events & Learning Activities", icon: CalendarDays, color: "orange", text: "Workshops, hack hours, and demo days where anyone can show what they made." },
  { number: "05", name: "Collaborate Across Student Teams", icon: Users, color: "green", text: "Cross-year teams pairing design, data, and engineering skills on one build." },
  { number: "06", name: "Encourage Experimentation & Open-Source Contribution", icon: GitFork, color: "red", text: "Public repos, shared experiments, and real credit for contribution." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="club-site">
      <header className="site-header">
        <div className="nav-inner">
          <a href="#home" className="brand" aria-label="AI Builders home"><img src={logo.url} alt="AI Builders club logo" /><span>AI BUILDERS<span className="brand-caption">UNIVERSAL AI UNIVERSITY</span></span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.id} href={`#${link.id}`}>{link.label}</a>)}</nav>
          <div className="nav-actions"><Button asChild className="join-button"><a href="#join">Join Us <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="home-section grid-surface">
          <div className="page-width hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> AI BUILDERS · STUDENT-LED. BUILDER-DRIVEN.</div>
              <h1 className="hero-headline">We Learn AI<br />by <span className="build-word">Building.</span></h1>
              <p className="hero-description">A student-led AI community at Universal AI University, where ideas become real builds.</p>
              <div className="hero-actions"><Button asChild size="lg" className="hero-join"><a href="#join">Join the Club <ArrowUpRight /></a></Button><Button asChild size="lg" variant="outline" className="hero-projects"><a href="#projects">See Our Projects <ArrowUpRight /></a></Button></div>
              <p className="hero-tagline">Meet. Build. Begin.</p>
            </div>
            <div className="hero-art"><div className="coe-badge"><Cpu size={16} /><span>Under AI CoE · Universal AI University</span></div><HeroPuzzle /><div className="art-bottom"><span className="small-cross">+</span> IDEAS <span>→</span> REAL BUILDS <span className="small-cross">+</span></div></div>
          </div>
          <div className="page-width hero-bottom"><span>A place to start. A space to build.</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={14} /></a></div>
        </section>

        <div className="topic-strip" aria-label="Our areas of curiosity">{topics.map((topic, i) => <span key={topic} className={`topic topic-${i % 7}`}><Puzzle size={16} />{topic}</span>)}</div>

        <section id="about" className="about-section light-section">
          <div className="page-width">
            <div className="section-label">01 / ABOUT THE CLUB</div>
            <div className="about-layout">
              <h2>Why AI Builders<br />Exists</h2>
              <div className="about-copy">
                <Puzzle className="about-puzzle" size={34} />
                <p>AI Builders brings together students who are willing to explore emerging technologies, experiment with ideas, build meaningful projects, and learn by creating.</p>
                <p>Our focus is not limited to learning about technology. We create an environment where students turn curiosity into experimentation, experimentation into projects, and projects into real impact.</p>
                <span className="outline-label">Ideas → Real Builds <ArrowUpRight size={16} /></span>
              </div>
            </div>
            <div className="impact-flow" aria-label="Curiosity leads to experimentation, projects, and real impact">
              {aboutSteps.map((step, i) => (
                <Fragment key={step.name}>
                  <div className={`flow-step flow-${step.color}`}>
                    <span className="flow-index">0{i + 1}</span>
                    <span className="flow-node"><step.icon size={19} /></span>
                    <h3>{step.name}</h3>
                    <span aria-hidden="true" className="flow-bar" style={{ "--flow-fill": `${(i + 1) * 25}%` } as CSSProperties} />
                  </div>
                  {i < aboutSteps.length - 1 && <span aria-hidden="true" className="flow-arrow"><ArrowRight size={20} /></span>}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-do" className="content-section grid-surface">
          <div className="page-width">
            <div className="section-label">02 / WHAT WE DO</div>
            <div className="section-heading"><h2>Six ways<br />we build.</h2><span className="section-note">IDEAS → REAL BUILDS</span></div>
            <div className="activity-grid">
              {initiatives.map(item => (
                <article className={`activity-piece piece-${item.color}`} key={item.number}>
                  <span className="piece-number">{item.number}</span>
                  <item.icon size={26} />
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="ownership-banner"><span aria-hidden="true" className="banner-mark"><Puzzle size={19} /></span><p>Create an environment where students <em>take ownership.</em></p></div>
          </div>
        </section>

        {[{ id: "projects", number: "03", title: "Ideas, taking shape.", label: "PROJECTS", icon: Code2, text: "Our first builds are on the way." }, { id: "events", number: "04", title: "Let’s get together.", label: "EVENTS", icon: CalendarDays, text: "Upcoming meetups and workshops will appear here." }, { id: "team", number: "05", title: "The people behind the pieces.", label: "TEAM", icon: Users, text: "Meet the AI Builders team. Coming soon." }].map(section => <section id={section.id} className="placeholder-section" key={section.id}><div className="page-width placeholder-layout"><div><div className="section-label">{section.number} / {section.label}</div><h2>{section.title}</h2></div><div className="placeholder-content"><section.icon size={28} /><p>{section.text}</p><span className="coming-label">COMING SOON</span></div></div></section>)}

        <section id="join" className="join-section grid-surface"><div className="page-width join-layout"><div className="section-label">06 / JOIN US</div><Sparkles className="join-spark" size={34} /><h2>Your next idea<br />starts with <span>us.</span></h2><p>Curious about AI? You’re already one of us.</p><span className="join-pending"><span className="status-dot" /> MEMBERSHIP DETAILS COMING SOON</span></div></section>
      </main>
      <footer className="site-footer page-width"><a href="#home" className="footer-brand">AI BUILDERS<span>Meet. Build. Begin.</span></a><p>Student-led at Universal AI University.<br />Under the AI Centre of Excellence.</p><a href="#home" className="quiet-link">Back to top <ArrowUpRight size={16} /></a></footer>
    </div>
  );
}
