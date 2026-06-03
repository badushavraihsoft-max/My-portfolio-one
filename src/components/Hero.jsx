import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section">
      {/* Premium Floating Blur Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Available for Freelance & Full-time Roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="text-gradient">Badsha</span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Full-Stack Software Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="hero-tagline">
            I craft clean, scalable, and responsive web applications with a focus on exceptional user experience and modern, premium design aesthetics.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="hero-actions">
            <button 
              onClick={() => handleScrollTo('#projects')} 
              className="btn btn-primary hero-btn"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => handleScrollTo('#contact')} 
              className="btn btn-secondary hero-btn"
            >
              Contact Me <MessageSquare size={18} />
            </button>
          </motion.div>

          {/* Tech stack brief icons in Hero */}
          <motion.div variants={itemVariants} className="hero-brief-tech">
            <span className="tech-label">Specializing in:</span>
            <div className="tech-pills">
              <span className="tech-pill">React</span>
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">CSS3</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">MySQL</span>
              <span className="tech-pill">Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="scroll-down"
        onClick={() => handleScrollTo('#about')}
      >
        <span className="mouse-wheel"></span>
        <span className="mouse-text">Scroll Down</span>
      </motion.div>
    </section>
  );
}
