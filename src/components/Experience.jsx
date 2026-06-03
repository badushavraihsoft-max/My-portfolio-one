import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechHive Solutions',
    period: '2023 - Present',
    description: 'Lead a team of 4 engineers to design and build a multi-tenant business intelligence SaaS platform. Optimized database queries in MongoDB to reduce load times by 40%.',
  },
  {
    role: 'Software Engineer',
    company: 'Quantum Core Systems',
    period: '2021 - 2023',
    description: 'Spearheaded frontend refactoring to React and designed reusable UI components. Built Express APIs and microservices to support high-throughput payment integrations.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'PixelForge Studios',
    period: '2020 - 2021',
    description: 'Developed highly interactive landing pages and custom web graphics using Framer Motion. Managed API integrations and ensured fully responsive layouts.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">My Timeline</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            A history of my professional roles and engineering contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="timeline-item"
            >
              {/* Timeline Node */}
              <div className="timeline-node">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <div className="timeline-content-card glass-panel">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company text-gradient">{exp.company}</h4>
                  </div>
                  <div className="timeline-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
