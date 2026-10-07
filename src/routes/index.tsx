import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowDown, Menu, X, Puzzle, Code2, CalendarDays, Users, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ai-builders-logo.png.asset.json";

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
              <div className="eyebrow"><span className="status-dot" /> STUDENT-LED. BUILDER-DRIVEN.</div>
              <h1>AI Builders<span className="hero-tagline">Meet.<br /><span className="build-word">Build.</span> Begin.</span></h1>
              <p className="hero-description">We learn AI by building.<br />A community of curious minds turning<br className="desktop-break" /> ideas into real builds.</p>
              <div className="hero-actions"><Button asChild size="lg"><a href="#join">Find your people <ArrowUpRight /></a></Button><a className="quiet-link" href="#what-we-do">Explore the club <ArrowDown size={16} /></a></div>
              <div className="affiliation"><span className="affiliation-line" /><p>Universal AI University<span>Under the AI Centre of Excellence</span></p></div>
            </div>
            <div className="hero-art"><div className="art-caption"><Puzzle size={15} /> ONE PIECE AT A TIME</div><img src={logo.url} alt="A robotic arm assembling colorful AI puzzle pieces" /><div className="art-bottom"><span className="small-cross">+</span> IDEAS <span>→</span> REAL BUILDS <span className="small-cross">+</span></div></div>
          </div>
          <div className="page-width hero-bottom"><span>A place to start. A space to build.</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={14} /></a></div>
        </section>

        <div className="topic-strip" aria-label="Our areas of curiosity">{topics.map((topic, i) => <span key={topic} className={`topic topic-${i % 7}`}><Puzzle size={16} />{topic}</span>)}</div>

        <section id="about" className="about-section light-section">
          <div className="page-width about-layout"><div><div className="section-label">01 / ABOUT THE CLUB</div><h2>Curiosity is the<br />first piece.</h2></div><div className="about-copy"><Puzzle className="about-puzzle" size={34} /><p>We’re <strong>AI Builders</strong>, a student-led AI community at Universal AI University, under the AI Centre of Excellence.</p><p className="secondary-copy">A shared space to meet, explore, and build together.</p><span className="outline-label">Ideas → Real Builds <ArrowUpRight size={16} /></span></div></div>
        </section>

        <section id="what-we-do" className="content-section"><div className="page-width"><div className="section-label">02 / WHAT WE DO</div><div className="section-heading"><h2>Less watching.<br />More building.</h2><span className="section-note">THE PIECES ARE COMING TOGETHER</span></div><div className="activity-grid">{[{ name: "Learn together", icon: Cpu, text: "Workshops & learning sessions", color: "blue" }, { name: "Build something", icon: Code2, text: "Hands-on projects & experiments", color: "teal" }, { name: "Find your people", icon: Users, text: "Community & collaboration", color: "purple" }].map(item => <article className={`activity-piece piece-${item.color}`} key={item.name}><item.icon size={28} /><h3>{item.name}</h3><p>{item.text}</p><span className="coming-label">COMING SOON <ArrowUpRight size={15} /></span></article>)}</div></div></section>

        {[{ id: "projects", number: "03", title: "Ideas, taking shape.", label: "PROJECTS", icon: Code2, text: "Our first builds are on the way." }, { id: "events", number: "04", title: "Let’s get together.", label: "EVENTS", icon: CalendarDays, text: "Upcoming meetups and workshops will appear here." }, { id: "team", number: "05", title: "The people behind the pieces.", label: "TEAM", icon: Users, text: "Meet the AI Builders team. Coming soon." }].map(section => <section id={section.id} className="placeholder-section" key={section.id}><div className="page-width placeholder-layout"><div><div className="section-label">{section.number} / {section.label}</div><h2>{section.title}</h2></div><div className="placeholder-content"><section.icon size={28} /><p>{section.text}</p><span className="coming-label">COMING SOON</span></div></div></section>)}

        <section id="join" className="join-section grid-surface"><div className="page-width join-layout"><div className="section-label">06 / JOIN US</div><Sparkles className="join-spark" size={34} /><h2>Your next idea<br />starts with <span>us.</span></h2><p>Curious about AI? You’re already one of us.</p><span className="join-pending"><span className="status-dot" /> MEMBERSHIP DETAILS COMING SOON</span></div></section>
      </main>
      <footer className="site-footer page-width"><a href="#home" className="footer-brand">AI BUILDERS<span>Meet. Build. Begin.</span></a><p>Student-led at Universal AI University.<br />Under the AI Centre of Excellence.</p><a href="#home" className="quiet-link">Back to top <ArrowUpRight size={16} /></a></footer>
    </div>
  );
}
