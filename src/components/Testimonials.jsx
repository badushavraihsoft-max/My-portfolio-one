import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager, Apex Media',
    content: 'Alex is an outstanding engineer. He redesigned our workflow dashboard, which boosted operational throughput by 30%. His attention to interface micro-interactions is rare.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'David Chen',
    role: 'CTO, LaunchPad Ventures',
    content: 'Working with Alex was a game-changer. He developed our core booking backend and API integrations, delivering 2 weeks ahead of schedule with flawless documentation.',
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'Emily Watson',
    role: 'Creative Director, Studio 9',
    content: 'Alex bridges the gap between layout design and frontend engineering. He turned our Figma mockups into interactive React layouts with absolute fidelity.',
    rating: 5,
    initials: 'EW',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-desc">
            Feedback from products and teams I have collaborated with over the past years.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="testimonials-grid"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="testimonial-card glass-panel"
            >
              {/* Quote Mark Decoration */}
              <div className="testimonial-quote-decor">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="star-icon" />
                ))}
              </div>

              {/* Content */}
              <p className="testimonial-content">"{test.content}"</p>

              {/* Author Info */}
              <div className="testimonial-author">
                <div className="author-avatar-wrapper">
                  <span className="author-avatar">{test.initials}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{test.name}</h4>
                  <p className="author-role">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
