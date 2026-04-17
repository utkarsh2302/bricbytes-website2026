import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ProductPages.css';

export function PlotsPage() {
  const steps = [
    {
      num: '1',
      title: 'Upload your plot data',
      description: 'Share your site plan, GeoJSON boundaries or QGIS export. We handle the technical setup, terrain calibration and plot configuration.'
    },
    {
      num: '2',
      title: 'We build your digital showroom',
      description: 'Your 3D terrain map, plot data, 360° views, EMI calculator and AI chatbot — fully configured and live in 48 hours.'
    },
    {
      num: '3',
      title: 'Share one link with buyers',
      description: 'Every buyer, agent and broker gets the same link. Live data, zero confusion, zero app installs.'
    }
  ];

  return (
    <div className="product-page" data-page="plots">
      {/* Hero */}
      <section className="section section-padding hero-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">For Plotted Development Projects</p>
            <h1 className="section-title">Your site map, alive.</h1>
            <p className="section-subtitle">
              Upload your GeoJSON plot boundaries. In 48 hours, your buyers get a fully interactive 3D terrain map with live availability, AI assistance, and a complete digital buying journey — all in one link.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Demo for Plots <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-padding">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How it works
          </motion.h2>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Plots Different */}
      <section className="section section-padding bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Real terrain. Real boundaries. Real data.</h2>
            <p className="section-subtitle">
              Unlike generic property portals that show static images and estimated locations, BrickBytes uses your actual GeoJSON plot boundaries to render a 1:1 digital replica of your site. Every polygon is accurate to the centimetre. Every status reflects the real ground truth.
            </p>
            <p className="highlight-text">This is not a listing. It is a digital twin of your development.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to give your buyers a better experience?</h2>
            <p className="section-subtitle">
              Join the developers who've moved their sales digital. Setup takes under 48 hours.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Demo
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
