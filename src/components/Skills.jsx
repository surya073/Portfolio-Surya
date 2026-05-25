import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/skills.css';

const CpuIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const icons = {
  Frontend: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Backend: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  Database: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  'Tools & DevOps': () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
};

const skillCategories = [
  { label: 'Frontend', skills: [{ name: 'React.js', level: 90 }, { name: 'JavaScript (ES6+)', level: 88 }, { name: 'HTML5 & CSS3', level: 95 }, { name: 'TypeScript', level: 72 }] },
  { label: 'Backend', skills: [{ name: 'Node.js', level: 82 }, { name: 'Express.js', level: 80 }, { name: 'Python', level: 75 }, { name: 'REST APIs', level: 88 }] },
  { label: 'Database', skills: [{ name: 'MongoDB', level: 78 }, { name: 'MySQL', level: 72 }, { name: 'PostgreSQL', level: 65 }, { name: 'Firebase', level: 70 }] },
  { label: 'Tools & DevOps', skills: [{ name: 'Git & GitHub', level: 90 }, { name: 'Docker', level: 60 }, { name: 'VS Code', level: 95 }, { name: 'Figma', level: 68 }] },
];

const techStack = ['React','Node.js','MongoDB','Express','TypeScript','Python','Git','Docker','MySQL','Firebase','Tailwind','Figma','Next.js','Redux','PostgreSQL','Linux'];

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="skill-bar-wrap" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-tag"><CpuIcon /> Skills</div>
          <h2 className="section-title">My Technical Arsenal</h2>
          <p className="section-subtitle">Technologies I use to bring ideas to life with precision and performance.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map(({ label, skills }, ci) => {
            const Icon = icons[label];
            return (
              <motion.div className="skill-category-card" key={label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: ci * 0.1 }}
              >
                <div className="skill-cat-header">
                  <div className="skill-cat-icon"><Icon /></div>
                  <h3 className="skill-cat-label">{label}</h3>
                </div>
                <div className="skill-bars">
                  {skills.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + i * 0.1} />)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="tech-stack"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="tech-stack-label">Full Tech Stack</p>
          <div className="tech-chips">
            {techStack.map((tech, i) => (
              <motion.span className="tech-chip" key={tech}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >{tech}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}