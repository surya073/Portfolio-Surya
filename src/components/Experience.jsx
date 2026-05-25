import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import '../styles/experience.css';

const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const experiences = [
  {
    role: 'Full Stack Developer Intern', company: 'Tech Startup', location: 'Chennai, India',
    duration: 'Jan 2024 – Present', type: 'Internship',
    responsibilities: ['Built and maintained responsive React.js web applications.','Developed RESTful APIs using Node.js and Express.','Integrated MongoDB databases and optimized query performance.','Collaborated with cross-functional teams in an Agile environment.'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    role: 'Frontend Developer', company: 'Freelance', location: 'Remote',
    duration: 'Jun 2023 – Dec 2023', type: 'Freelance',
    responsibilities: ['Designed and developed custom websites for 10+ clients.','Created pixel-perfect UI implementations from Figma designs.','Optimized web performance achieving 90+ Lighthouse scores.','Maintained client relationships and delivered projects on time.'],
    tech: ['React', 'CSS3', 'JavaScript', 'Figma'],
  },
  {
    role: 'Open Source Contributor', company: 'GitHub Community', location: 'Remote',
    duration: '2022 – 2023', type: 'Open Source',
    responsibilities: ['Contributed to open-source React component libraries.','Fixed bugs and implemented new features for community tools.','Wrote comprehensive documentation and unit tests.','Reviewed pull requests and collaborated with maintainers.'],
    tech: ['React', 'TypeScript', 'Jest', 'Git'],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-tag"><BriefcaseIcon /> Experience</div>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">My professional journey in software development.</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div className="timeline-item" key={i}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot"><BriefcaseIcon /></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-type-badge">{exp.type}</span>
                </div>
                <div className="exp-meta">
                  <span><MapPin size={13} /> {exp.location}</span>
                  <span><Calendar size={13} /> {exp.duration}</span>
                </div>
                <ul className="exp-list">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j}><span className="exp-bullet" />{r}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {exp.tech.map(t => <span className="exp-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}