import { motion } from 'framer-motion';
import '../styles/projects.css';

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);

const projects = [
  { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce app with cart, payments, and admin dashboard. Built with React, Node.js, and MongoDB.', tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'], demo: '#', github: 'https://github.com/surya073', featured: true, color: '#6c63ff' },
  { title: 'Task Management App', desc: 'Kanban-style task manager with real-time updates, drag-and-drop, and team collaboration features.', tech: ['React', 'Firebase', 'Tailwind', 'DnD Kit'], demo: '#', github: 'https://github.com/surya073', featured: true, color: '#f59e0b' },
  { title: 'AI Chat Interface', desc: 'Modern ChatGPT-like interface with streaming responses, conversation history, and multi-model support.', tech: ['React', 'OpenAI API', 'Node.js', 'WebSockets'], demo: '#', github: 'https://github.com/surya073', featured: false, color: '#10b981' },
  { title: 'Portfolio Website', desc: 'Premium personal portfolio built with React and Vite, featuring dark/light mode and custom theming.', tech: ['React', 'Vite', 'Framer Motion', 'CSS3'], demo: '#', github: 'https://github.com/surya073', featured: false, color: '#ec4899' },
  { title: 'Weather Dashboard', desc: 'Beautiful weather app with 7-day forecasts, location search, and animated weather visualizations.', tech: ['React', 'OpenWeather API', 'Chart.js', 'Axios'], demo: '#', github: 'https://github.com/surya073', featured: false, color: '#06b6d4' },
  { title: 'Blog Platform', desc: 'Full-featured blog platform with Markdown editor, SEO optimization, and comment system.', tech: ['Next.js', 'MongoDB', 'NextAuth', 'MDX'], demo: '#', github: 'https://github.com/surya073', featured: false, color: '#8b5cf6' },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-tag"><LayersIcon /> Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">A collection of projects that showcase my skills and passion for building great products.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div className={`project-card${project.featured ? ' featured' : ''}`} key={project.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-color-bar" style={{ background: project.color }} />
              <div className="project-body">
                {project.featured && (
                  <div className="project-featured-badge">★ Featured</div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-ghost">
                  <GithubIcon /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="proj-btn proj-btn-primary">
                  <ExternalLinkIcon /> Live Demo
                </a>
              </div>
              <div className="project-glow" style={{ background: project.color }} />
            </motion.div>
          ))}
        </div>

        <motion.div className="projects-cta"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        >
          <a href="https://github.com/surya073" target="_blank" rel="noreferrer" className="btn btn-outline">
            <GithubIcon /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}