import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Server, Link, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    desc: 'Creating robust, end-to-end full-stack web solutions tailored to scale business needs.',
    features: ['SaaS Development', 'CMS Integrations', 'E-commerce Platforms'],
  },
  {
    icon: <Layout size={28} />,
    title: 'Frontend Development',
    desc: 'Building responsive, high-performance user interfaces with clean modular components.',
    features: ['React & NextJS', 'State Management', 'Complex Animations'],
  },
  {
    icon: <Server size={28} />,
    title: 'Backend Development',
    desc: 'Engineering secure database schemas, authorization filters, and scalable servers.',
    features: ['Node.js & Express', 'MongoDB & SQL', 'Security Best Practices'],
  },
  {
    icon: <Link size={28} />,
    title: 'API Integration',
    desc: 'Connecting external services, payment gateways, and third-party developer APIs seamlessly.',
    features: ['RESTful & GraphQL', 'Webhooks Handling', 'Stripe & PayPal SDKs'],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Responsive Design',
    desc: 'Structuring mobile-first viewport designs that display elegantly across all device screen layouts.',
    features: ['Flexbox & Grid Layouts', 'Cross-Browser Tuning', 'Adaptive Assets'],
  },
  {
    icon: <PenTool size={28} />,
    title: 'UI/UX Prototyping',
    desc: 'Drafting modern wireframes, interactive user flows, and aesthetic layouts before coding.',
    features: ['Interactive Prototypes', 'Brand Theme Design', 'Component Design System'],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">My Professional Services</h2>
          <p className="section-desc">
            Combining engineering standards and modern aesthetics to deliver digital solutions that stand out.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="service-card glass-panel"
            >
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              
              <ul className="service-features">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="service-feature-item">
                    <span className="feature-bullet">•</span> {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
