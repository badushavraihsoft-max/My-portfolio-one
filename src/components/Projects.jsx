import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    category: 'fullstack',
    description: 'A real-time SaaS business intelligence platform featuring dynamic chart widgets, user activity tracking, and automated email notifications.',
    image: '/dashboard.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Co-Working Booking Hub',
    category: 'fullstack',
    description: 'An interactive desk-booking system with dynamic spatial floorplans, live occupancy tracking, and integrated Stripe payments.',
    image: '/booking.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'AI Content Workspace',
    category: 'frontend',
    description: 'A generative AI assistant workspace with pre-designed writing templates, text grammar checking, and history storage.',
    image: '/ai.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'DevChat Real-Time Application',
    category: 'fullstack',
    description: 'A collaboration tool with instant text messaging, typing indicator bubbles, presence states, and message search capabilities.',
    image: '/chat.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">My Featured Projects</h2>
          <p className="section-desc">
            A handpicked selection of production-ready applications, showing my capabilities in frontend, backend, and API architectures.
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {['all', 'fullstack', 'frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat === 'all' ? 'All Projects' : cat === 'fullstack' ? 'Full-Stack' : 'Frontend'}
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilterIndicator" 
                  className="filter-active-bg" 
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card glass-panel"
              >
                {/* Project Image */}
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="project-overlay-links">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="GitHub Repo">
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  
                  {/* Tech Badges */}
                  <div className="project-tech-badges">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Actions (for mobile compatibility too) */}
                  <div className="project-card-actions">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-action-btn">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-action-btn">
                      GitHub <GithubIcon size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
