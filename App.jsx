import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Sparkles, Smartphone, Globe, Send
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Studio North",
    category: "Brand & Website",
    year: "2026",
    description: "Website editorial untuk studio kreatif dengan layout berani dan detail interaksi yang halus.",
    tags: ["React", "CSS", "Motion"],
    theme: "project-art project-art--lime",
    shape: "north",
    link: "https://github.com/"
  },
  {
    number: "02",
    title: "Orbit Finance",
    category: "Dashboard UI",
    year: "2026",
    description: "Eksplorasi dashboard finansial yang menata data kompleks menjadi pengalaman yang mudah dipahami.",
    tags: ["UI Design", "JavaScript", "Responsive"],
    theme: "project-art project-art--purple",
    shape: "orbit",
    link: "https://github.com/"
  },
  {
    number: "03",
    title: "Field Notes",
    category: "Digital Experience",
    year: "2025",
    description: "Konsep platform jurnal perjalanan dengan fokus pada tipografi, foto, dan navigasi yang sederhana.",
    tags: ["React", "UX", "Animation"],
    theme: "project-art project-art--orange",
    shape: "field",
    link: "https://github.com/"
  }
];

const skills = [
  { icon: Code2, title: "Frontend", items: "React.js · JavaScript · HTML" },
  { icon: Layers3, title: "Styling", items: "CSS · Responsive UI · Design systems" },
  { icon: Sparkles, title: "Motion", items: "Framer Motion · Micro-interactions" },
  { icon: Globe, title: "Workflow", items: "Git · GitHub · Deployment" },
];

function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Navigasi utama">
        <a className="brand" href="#home" onClick={close} aria-label="Kembali ke beranda">
          <span className="brand-mark">P.</span><span>PORTOFOLIO<span className="brand-dot">®</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          <a href="#about" onClick={close}>Tentang</a>
          <a href="#work" onClick={close}>Proyek</a>
          <a href="#skills" onClick={close}>Keahlian</a>
          <a className="nav-contact" href="#contact" onClick={close}>Hubungi saya <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="hero-topline">
        <span><span className="status-dot" /> TERBUKA UNTUK PELUANG</span>
        <span>BERBASIS DI INDONESIA · WIB</span>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            HALO, SAYA SEORANG CREATIVE DEVELOPER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Membuat ide<br />menjadi <span className="headline-accent">digital.</span>
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
            Saya merancang dan membangun pengalaman web yang terasa sederhana, punya karakter, dan menyenangkan untuk digunakan.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            <a className="button button--primary" href="#work">Lihat proyek <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#contact">Mari ngobrol <ArrowUpRight size={16} /></a>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, duration: 0.9 }}>
          <div className="visual-grid" />
          <div className="visual-orbit visual-orbit--one" />
          <div className="visual-orbit visual-orbit--two" />
          <div className="visual-core"><span>IDE</span><span>→</span><span>REALITA</span></div>
          <div className="visual-label visual-label--top">KREATIVITAS / 001</div>
          <div className="visual-label visual-label--bottom">DESAIN DENGAN TUJUAN.</div>
          <div className="visual-star">✳</div>
        </motion.div>
      </div>
      <div className="hero-bottomline">
        <span>DESAIN YANG DIPIKIRKAN.</span><span>KODE YANG DIBANGUN DENGAN TELITI.</span>
        <a href="#about" aria-label="Gulir ke bagian tentang"><ArrowDownRight size={19} /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section shell" id="about">
      <Reveal><div className="section-heading"><span className="section-index">01 / TENTANG</span><span className="section-note">SEDIKIT TENTANG SAYA</span></div></Reveal>
      <div className="about-grid">
        <Reveal><h2>Saya suka mengubah masalah menjadi <span className="muted">pengalaman yang terasa tepat.</span></h2></Reveal>
        <Reveal delay={0.12}>
          <div className="about-copy">
            <p>Saya adalah kreator digital yang tertarik pada desain, teknologi web, dan detail kecil yang membuat sebuah produk terasa istimewa.</p>
            <p>Mulai dari menyusun ide, merancang antarmuka, hingga membangun website yang responsif, saya percaya pengalaman yang baik lahir dari perpaduan fungsi dan rasa.</p>
            <a className="text-link" href="#contact">Kenalan lebih lanjut <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
      </div>
      <div className="principles">
        <div><span>01</span><strong>Jelas, bukan rumit.</strong></div>
        <div><span>02</span><strong>Detail punya tujuan.</strong></div>
        <div><span>03</span><strong>Selalu terus belajar.</strong></div>
      </div>
    </section>
  );
}

function ProjectArt({ project }) {
  return (
    <div className={project.theme} aria-label={`Ilustrasi visual ${project.title}`} role="img">
      {project.shape === "north" && <><div className="north-card"><span>STUDIO</span><b>NORTH®</b><small>INDEPENDENT CREATIVE STUDIO</small></div><div className="north-orb" /></>}
      {project.shape === "orbit" && <><div className="orbit-circle orbit-circle--a" /><div className="orbit-circle orbit-circle--b" /><div className="orbit-circle orbit-circle--c" /><span className="orbit-label">MOVE WITH INTENT ↗</span></>}
      {project.shape === "field" && <><div className="field-sun" /><div className="field-hill field-hill--back" /><div className="field-hill field-hill--front" /><div className="field-title">FIELD<br /><i>notes.</i></div><span className="field-coord">06°12' S / 106°49' E</span></>}
      <span className="art-corner">SELECTED WORK — {project.number}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="section shell" id="work">
      <Reveal><div className="section-heading"><span className="section-index">02 / PROYEK PILIHAN</span><span className="section-note">KONSEP & EKSPERIMEN</span></div></Reveal>
      <div className="projects-intro">
        <Reveal><h2>Beberapa hal<br />yang <span className="muted">saya buat.</span></h2></Reveal>
        <Reveal delay={0.1}><p>Eksplorasi desain dan pengembangan web. Proyek di bawah adalah contoh konsep yang bisa kamu ganti dengan karya aslimu.</p></Reveal>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.07}>
            <motion.article className="project-card" whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
              <a className="project-art-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Buka tautan proyek ${project.title}`}>
                <ProjectArt project={project} />
              </a>
              <div className="project-meta">
                <div className="project-title-wrap"><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><span className="project-category">{project.category} · {project.year}</span></div></div>
                <a className="project-arrow" href={project.link} target="_blank" rel="noreferrer" aria-label={`Lihat ${project.title}`}><ArrowUpRight size={20} /></a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <p className="project-disclaimer">Catatan: nama proyek, deskripsi, dan tautan masih berupa contoh. Ganti dengan proyek serta tautan milikmu sendiri.</p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section shell" id="skills">
      <Reveal><div className="section-heading"><span className="section-index">03 / KEAHLIAN</span><span className="section-note">ALAT YANG SAYA GUNAKAN</span></div></Reveal>
      <div className="skills-heading"><Reveal><h2>Proses kreatif.<br /><span className="muted">Fondasi teknis.</span></h2></Reveal><Reveal delay={0.1}><p>Teknologi yang membantu membawa ide dari sketsa menuju pengalaman digital yang bisa digunakan.</p></Reveal></div>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return <Reveal key={skill.title} delay={index * 0.07}><div className="skill-card"><div className="skill-icon"><Icon size={20} strokeWidth={1.6} /></div><h3>{skill.title}</h3><p>{skill.items}</p><span className="skill-index">0{index + 1}</span></div></Reveal>;
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-inner">
        <Reveal><div className="section-heading"><span className="section-index">04 / KONTAK</span><span className="section-note">PUNYA IDE MENARIK?</span></div></Reveal>
        <Reveal><h2>Mari buat sesuatu<br /><span>yang berarti.</span></h2></Reveal>
        <Reveal delay={0.1}><p>Punya proyek, kolaborasi, atau sekadar ingin menyapa? Saya terbuka untuk mendengar idemu.</p></Reveal>
        <Reveal delay={0.15}><a className="button button--primary contact-button" href="mailto:hello@example.com">Kirim email <Send size={16} /></a></Reveal>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
          <a href="mailto:hello@example.com"><Mail size={17} /> Email <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer shell"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>PORTOFOLIO<span className="brand-dot">®</span></span></a><span>DIBUAT DENGAN RASA INGIN TAHU & KODE.</span><span>© {new Date().getFullYear()} — PORTOFOLIO</span></footer>;
}

export default function App() {
  return <><Navbar /><main><Hero /><About /><Projects /><Skills /><Contact /></main><Footer /></>;
}