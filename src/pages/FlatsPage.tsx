import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ProductPages.css';

export function FlatsPage() {
  const steps = [
    {
      num: '1',
      title: 'Upload your tower floor plans',
      description: 'Share your building layouts, configurations, inventory, and unit-wise pricing. We handle the integration, mapping and interactive setup.'
    },
    {
      num: '2',
      title: 'We configure your digital showroom',
      description: 'Interactive floor plan grid, tower elevation navigator, 360° unit tours, possession tracker and AI sales assistant — all live in 48 hours.'
    },
    {
      num: '3',
      title: 'Buyers explore at their pace',
      description: 'Filter by BHK, floor, price, possession date. Compare 3 units side by side. Virtual tour before site visit. One link for all buyers, agents and brokers.'
    }
  ];

  return (
    <div className="product-page" data-page="flats">
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
            <p className="eyebrow">For Multi-Tower Residential Projects</p>
            <h1 className="section-title">Every unit, live.</h1>
            <p className="section-subtitle">
              Upload your tower floor plans and inventory. In 48 hours, your buyers get an interactive floor plan grid, 360° virtual tours per unit, real-time possession tracker, and a complete digital buying journey — all in one platform.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Demo for Flats <ArrowRight size={16} />
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

      {/* What Makes Flats Different */}
      <section className="section section-padding bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Filter. Compare. Decide.</h2>
            <p className="section-subtitle">
              BrickBytes transforms tower listings from static images into fully interactive experiences. Your buyers filter by BHK, floor, facing, price band and possession date in real time. Compare 3 units side by side. Virtual walk through their potential home. Get SMS/email updates on possession milestones.
            </p>
            <p className="highlight-text">No more site visits for unit discovery. No more back-and-forth calls on unit details.</p>
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
            <h2 className="section-title">Ready to sell flats faster?</h2>
            <p className="section-subtitle">
              Join 100+ developers launching their projects on BrickBytes. Setup takes 48 hours.
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
