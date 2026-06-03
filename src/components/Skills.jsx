import React from 'react';
import { motion } from 'framer-motion';

// Custom inline SVG icons for premium look and high performance
const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.582 11.351-.001.23-2.597L4.646 4.57l.692 7.77h8.339l-.35 3.512-3.327.9-3.325-.9-.212-2.378H3.882l.418 4.7 7.7 2.138 7.7-2.138.825-9.35H8.531z"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.582 11.351-.001.23-2.597L4.646 4.57l.692 7.77h11.026l-.42 4.72-3.567.96-3.566-.96-.228-2.562H3.693l.443 5.01 7.864 2.183 7.865-2.183 1.01-11.39H8.531z"/>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.788-1.778-2.222-2.222-1.127-.375-2.13-.532-2.13-1.18 0-.488.423-.788.99-.788.583 0 1.065.226 1.378.833.12.24.316.36.638.36h1.393c.137 0 .24-.103.21-.24-.482-2.278-2.115-3.08-3.66-3.08-1.996 0-3.35 1.107-3.35 2.875 0 2.21 2.014 2.586 3.52 3.124 1.185.42 1.57.733 1.57 1.303 0 .684-.615 1.047-1.393 1.047-.954 0-1.554-.447-1.89-1.197-.13-.285-.32-.423-.623-.423h-1.429c-.147 0-.25.128-.21.27.532 2.378 2.057 3.25 4.148 3.25 2.518 0 3.826-1.173 3.826-3.117zm-10.008-.435c-.105-.443-.443-.728-.968-.728-.517 0-.825.263-.825.683 0 .428.27.675.825.863l.72.247c1.785.608 2.52 1.485 2.52 3.105 0 1.995-1.575 3.015-3.69 3.015-2.31 0-3.645-1.065-4.14-2.977-.03-.135.075-.247.21-.247h1.41c.285 0 .465.135.54.405.345 1.155 1.08 1.635 1.995 1.635.81 0 1.365-.375 1.365-1.005 0-.585-.45-.87-1.2-.12l-.84-.285c-1.425-.48-2.295-1.305-2.295-2.925 0-1.86 1.455-2.85 3.39-2.85 1.83 0 3.09.84 3.555 2.58.045.165-.06.27-.225.27h-1.38c-.285 0-.465-.12-.555-.405z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M12 6.018C12 2.693 14.693 0 18.018 0c1.832 0 3.477.818 4.6 2.115C21.492 3.23 20.7 4.542 20.7 6.018c0 3.325-2.693 6.018-6.018 6.018-1.832 0-3.477-.818-4.6-2.115 1.128-1.115 1.92-2.427 1.92-3.903zm-10.3 12c0-3.325 2.693-6.018 6.018-6.018 1.832 0 3.477.818 4.6 2.115-1.128 1.115-1.92 2.427-1.92 3.903 0 3.325-2.693 6.018-6.018 6.018C2.508 24 1.7 22.688 1.7 21.212c0-1.476.818-2.788 1.92-3.903-.767-.887-1.92-1.291-1.92-3.291z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M11.758 0L2.83 5.156v10.312l8.928 5.156 8.927-5.156V5.156L11.758 0zm5.82 14.288l-5.82 3.36-5.82-3.36V7.57l5.82-3.36 5.82 3.36v6.718z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M2.4 4h19.2c1.33 0 2.4 1.07 2.4 2.4v11.2c0 1.33-1.07 2.4-2.4 2.4H2.4C1.07 22.4 0 21.33 0 20V6.4C0 5.07 1.07 4 2.4 4zm4.4 5.2h-2.4v5.6h2.4v-5.6zm1.2 0v5.6h4.4v-1.6h-2.4V12h2v-1.6h-2v-1.2h2.4V9.2H8zm6.8 0v5.6h2v-2.2l1.6 2.2h2.4l-2-2.8 1.8-2.8H18.2l-1.4 2.2V9.2h-2z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M12 0c-.39 0-.77.16-1.05.44C7.86 3.53 5.43 7.82 5.43 11.25c0 4.18 3.03 7.6 6.57 8.5v3.42c0 .46.38.83.83.83s.83-.37.83-.83v-3.42c3.54-.9 6.57-4.32 6.57-8.5 0-3.43-2.43-7.72-5.52-10.81C12.77.16 12.39 0 12 0zm.83 3.55c2.18 2.65 3.75 6.07 3.75 8.45 0 2.63-1.57 5.17-3.75 6.07V3.55z"/>
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M23.546 10.93L13.07.45a1.44 1.44 0 0 0-2.028 0L9.12 2.37l2.87 2.87a2.227 2.227 0 0 1 2.238.452 2.217 2.217 0 0 1 .454 2.259l2.89 2.89a2.227 2.227 0 0 1 2.238.452 2.223 2.223 0 0 1 0 3.136 2.223 2.223 0 0 1-3.136 0 2.215 2.215 0 0 1-.456-2.278l-2.85-2.85v3.03a2.227 2.227 0 0 1 .456 2.238 2.223 2.223 0 0 1-3.136 0 2.223 2.223 0 0 1 0-3.136 2.227 2.227 0 0 1 2.238-.456v-3.09l-2.86-2.86L.454 13.07a1.44 1.44 0 0 0 0 2.028l10.476 10.476a1.44 1.44 0 0 0 2.028 0l10.588-10.588a1.44 1.44 0 0 0 0-2.056z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: <HtmlIcon />, color: '#E34F26' },
    { name: 'CSS3', icon: <CssIcon />, color: '#1572B6' },
    { name: 'JavaScript', icon: <JsIcon />, color: '#F7DF1E' },
    { name: 'React', icon: <ReactIcon />, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <TailwindIcon />, color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', icon: <NodeIcon />, color: '#339933' },
    { name: 'Express', icon: <ExpressIcon />, color: '#000000' },
    { name: 'MongoDB', icon: <MongoIcon />, color: '#47A248' },
    { name: 'API Integration', icon: <ApiIcon />, color: '#6366F1' },
  ],
  tools: [
    { name: 'Git', icon: <GitIcon />, color: '#F05032' },
    { name: 'GitHub', icon: <GithubIcon />, color: '#181717' },
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">My Tech Stack</span>
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-desc">
            A list of languages, frameworks, databases, and design libraries I work with daily.
          </p>
        </div>

        <div className="skills-categories">
          {/* Frontend Category */}
          <div className="skills-category">
            <h3 className="category-title">Frontend Development</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="skills-grid"
            >
              {skillsData.frontend.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
                  className="skill-card glass-panel"
                  style={{ '--hover-color': skill.color }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Backend Category */}
          <div className="skills-category">
            <h3 className="category-title">Backend & Database</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="skills-grid"
            >
              {skillsData.backend.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
                  className="skill-card glass-panel"
                  style={{ '--hover-color': skill.color }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools Category */}
          <div className="skills-category">
            <h3 className="category-title">Tools & Version Control</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="skills-grid"
            >
              {skillsData.tools.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
                  className="skill-card glass-panel"
                  style={{ '--hover-color': skill.color }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
