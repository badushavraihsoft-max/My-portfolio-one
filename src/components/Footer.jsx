import React from 'react';
import { Terminal, ArrowUp, Globe } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="footer-logo">
              <span className="logo-icon"><Terminal size={18} /></span>
              <span className="logo-text">Alex<span className="text-gradient">.dev</span></span>
            </a>
            <p className="footer-brand-desc">
              Building high-performance, visually stunning web applications with modern design systems and clean architecture.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul className="footer-nav-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} badsha. All rights reserved.
          </p>

          <div className="footer-actions">
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><GithubIcon size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedinIcon size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><TwitterIcon size={18} /></a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Website"><Globe size={18} /></a>
            </div>

            <button
              onClick={handleScrollToTop}
              className="back-to-top-btn"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
