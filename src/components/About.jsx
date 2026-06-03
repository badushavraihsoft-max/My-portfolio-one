import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Award, Coffee } from 'lucide-react';

const stats = [
  { icon: <Award size={20} />, value: '2+', label: 'Years Experience' },
  { icon: <Code size={20} />, value: '10+', label: 'Projects Built' },
  { icon: <Coffee size={20} />, value: '1,200+', label: 'Coffee Cups' },
];

export default function About() {
  const codeSnippet = `{
  "name": "Badsha",
  "role": "Full-Stack Developer",
  "skills": [
    "React", "HTML", "CSS", "Node.js",
    "MySQL", "JavaScript", "REST API"
  ],
  "passion": "Building scalable web products",
  "status": "Ready for new challenges"
}`;

  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">My Journey & Background</h2>
          <p className="section-desc">
            Passionate full-stack developer based in San Francisco, specialized in crafting modern web solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Mock IDE Window */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="about-left"
          >
            <div className="ide-window glass-panel">
              <div className="ide-header">
                <div className="ide-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="ide-tab">profile.json</div>
              </div>
              <div className="ide-content">
                <pre>
                  <code>
                    {codeSnippet.split('\n').map((line, idx) => (
                      <div key={idx} className="ide-line">
                        <span className="line-number">{idx + 1}</span>
                        <span className="line-text">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-right"
          >
            <div className="about-bio">
              <h3>Who is Badsha?</h3>
              <p>
                I am a dedicated software developer who thrives on solving complex challenges and creating elegant user interfaces. With a solid foundation in both frontend and backend technologies, I build application architectures that perform exceptionally at scale.
              </p>
              <p>
                My developer journey started 5 years ago, and since then, I have designed and delivered web systems for startups and mid-sized enterprises. I focus on clean code, testability, and beautiful typography.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="stat-card glass-panel"
                >
                  <div className="stat-icon-wrapper">{stat.icon}</div>
                  <h4 className="stat-value text-gradient">{stat.value}</h4>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
