import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle2, Globe, AlertCircle } from 'lucide-react';
import { sendEnquiry } from '../API/api';

// ─── Social Icons ─────────────────────────────────────────────────────────────
const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const [error, setError]               = useState('');

  const handleChange = (e) => {
    setError('');
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formState;
    if (!name || !email || !phone || !message) return;

    setIsSubmitting(true);
    setError('');

    try {
      // POST https://staging-api.raihsuite.com/v1/crm/enquiries/
      // Body: { name, mobile, email, message, tenant }
      await sendEnquiry({
        name,
        mobile:  phone,   // form field "phone" → API field "mobile"
        email,
        message,
      });

      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      // err.message comes from api.js: errorBody.message || errorBody.detail || `Server error (${status})`
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setError('');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc">
            Have a project in mind or want to talk about developer opportunities?
            Fill out the form or email me directly!
          </p>
        </div>

        <div className="contact-grid">

          {/* ── Left — contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="contact-left"
          >
            <h3>Contact Information</h3>
            <p className="contact-info-subtitle">
              Feel free to reach out. I try to reply to all messages within 24 hours.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-card glass-panel">
                <div className="contact-info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:alex.rivera@dev.com">alex.rivera@dev.com</a>
                </div>
              </div>

              <div className="contact-info-card glass-panel">
                <div className="contact-info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>

              <div className="contact-info-card glass-panel">
                <div className="contact-info-icon"><Clock size={20} /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Fri, 9 AM – 5 PM PST</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="social-links-row">
                <a href="https://github.com"   target="_blank" rel="noopener noreferrer" className="social-link-btn" title="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" title="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer" className="social-link-btn" title="Twitter">
                  <TwitterIcon size={20} />
                </a>
                <a href="https://example.com"  target="_blank" rel="noopener noreferrer" className="social-link-btn" title="Website">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="contact-right"
          >
            <div className="contact-form-wrapper glass-panel">
              <AnimatePresence mode="wait">

                {/* ── Success state ── */}
                {isSuccess ? (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="success-feedback"
                  >
                    <div className="success-icon-wrapper">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>
                      Thank you for reaching out. I've received your message
                      and will get back to you within 24 hours.
                    </p>
                    <button onClick={handleReset} className="btn btn-secondary success-btn">
                      Send Another Message
                    </button>
                  </motion.div>

                ) : (

                  /* ── Form state ── */
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* API error banner */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          className="contact-error-banner"
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -8, height: 0 }}
                          transition={{ duration: 0.22 }}
                        >
                          <AlertCircle size={15} />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Mobile Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows="5"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? <>Sending...</>
                        : <>Send Message <Send size={16} /></>
                      }
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>{/* /contact-grid */}
      </div>

      {/* ── Error banner styles (scoped) ── */}
      <style>{`
        .contact-error-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.10);
          border: 1px solid rgba(239, 68, 68, 0.30);
          color: #f87171;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13.5px;
          margin-bottom: 4px;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}