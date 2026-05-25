import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Mail, Calendar, Award, Briefcase } from 'lucide-react';
import '../styles/about.css';

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const CoffeeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const UserIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: CodeIcon, label: 'Projects Built', value: 20, suffix: '+' },
  { icon: Briefcase, label: 'Years Experience', value: 2, suffix: '+' },
  { icon: Award, label: 'Certifications', value: 5, suffix: '+' },
  { icon: CoffeeIcon, label: 'Cups of Coffee', value: 999, suffix: '+' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-img-card">
              <div className="about-img-placeholder">S</div>
              <div className="about-img-badge">
                <Award size={14} />
                <span>Full Stack Dev</span>
              </div>
            </div>
            <div className="about-info-cards">
              <div className="info-chip"><MapPin size={14} /><span>Tamil Nadu, India</span></div>
              <div className="info-chip"><Mail size={14} /><span>Available for work</span></div>
              <div className="info-chip"><Calendar size={14} /><span>B.E. Computer Science</span></div>
            </div>
          </motion.div>

          <motion.div className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="section-tag"><UserIcon /> About Me</div>
            <h2 className="section-title">Crafting Digital<br />Experiences with Purpose</h2>
            <p className="about-text">
              I'm Surya Iyyappan, a passionate Full Stack Developer from Tamil Nadu, India.
              I specialize in building modern, high-performance web applications using the
              latest technologies and best practices.
            </p>
            <p className="about-text">
              My journey in software development started with curiosity and grew into a
              professional passion. I love turning complex problems into simple, elegant,
              and intuitive solutions that deliver real value.
            </p>

            <div className="about-stats">
              {stats.map(({ icon: Icon, label, value, suffix }) => (
                <div className="stat-card" key={label}>
                  <div className="stat-icon"><Icon /></div>
                  <div className="stat-number"><Counter target={value} suffix={suffix} /></div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); }}>
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}