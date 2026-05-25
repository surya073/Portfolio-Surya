import { motion } from 'framer-motion';
import '../styles/services.css';

const ZapIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const services = [
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Frontend Development',
    desc: 'Building stunning, responsive, and high-performance user interfaces using React and modern CSS.',
    features: ['React.js / Next.js', 'Responsive Design', 'Performance Optimization', 'Animation & UI/UX'],
  },
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'Backend Development',
    desc: 'Designing scalable server-side applications, RESTful APIs, and database architectures.',
    features: ['Node.js & Express', 'REST API Design', 'MongoDB & SQL', 'Authentication & Security'],
  },
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Full Stack Solutions',
    desc: 'End-to-end web application development from concept to deployment with modern tech stacks.',
    features: ['MERN Stack', 'Full Deployment', 'CI/CD Pipelines', 'Cloud Services'],
  },
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    title: 'UI/UX Design',
    desc: 'Creating beautiful, intuitive interfaces with a strong focus on user experience and accessibility.',
    features: ['Figma Design', 'Prototyping', 'Design Systems', 'Accessibility'],
  },
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Performance Audit',
    desc: 'Analyzing and optimizing web applications for maximum speed, SEO, and core web vitals.',
    features: ['Lighthouse Audit', 'Core Web Vitals', 'SEO Optimization', 'Load Time Reduction'],
  },
  {
    icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Code Review',
    desc: 'Comprehensive code reviews to ensure quality, maintainability, and security best practices.',
    features: ['Security Review', 'Best Practices', 'Refactoring', 'Documentation'],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-tag"><ZapIcon /> Services</div>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">Comprehensive development services tailored to your needs and goals.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div className="service-card" key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon-wrap">
                <s.icon />
                <div className="service-icon-glow" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}><span className="service-check">✓</span>{f}</li>
                ))}
              </ul>
              <div className="service-border-gradient" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}