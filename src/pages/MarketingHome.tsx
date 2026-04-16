import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, TrendingUp } from 'lucide-react';
import { Hero } from '../components/hero/Hero';
import { ExpandableCard } from '../components/marketing/ExpandableCard';
import './MarketingHome.css';

export function MarketingHome() {
  const problemCards = [
    {
      icon: <MapPin size={24} />,
      title: 'Outdated Site Maps',
      summary: 'Static PDFs & WhatsApp photos...',
      content: 'Static PDFs, printed brochures, WhatsApp photos. Buyers get confused, call repeatedly, and walk away before they\'ve even seen the right plot.'
    },
    {
      icon: <Users size={24} />,
      title: 'Zero Transparency',
      summary: 'Buyers don\'t know availability...',
      content: 'Buyers don\'t know which plots are actually available. Sold plots show as available. Trust erodes. Your sales team spends hours clarifying basics.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Broker Chaos',
      summary: 'No referral tracking...',
      content: 'No way to track referrals. Brokers push competing projects. Commissions are disputed. The buyer you paid to acquire ends up walking to a competitor.'
    }
  ];

  const featureTiles = [
    {
      icon: '🗺️',
      title: '3D Interactive Site Map',
      description: 'Rotate, zoom, tap any plot for live pricing and specs.'
    },
    {
      icon: '⚡',
      title: 'Real-time Availability',
      description: 'Sold is sold. The moment a deal closes, it reflects everywhere.'
    },
    {
      icon: '360️',
      title: '360° & Drone Views',
      description: 'Every plot with a panoramic view and aerial footage.'
    },
    {
      icon: '🤖',
      title: 'AI Sales Assistant',
      description: 'Answers every buyer question instantly, 24/7.'
    },
    {
      icon: '💰',
      title: 'EMI Calculator',
      description: 'Remove the biggest mental block. Monthly payments in seconds.'
    },
    {
      icon: '📊',
      title: 'Broker Affiliate Portal',
      description: 'Trackable links, QR codes, performance dashboards per partner.'
    }
  ];

  const products = [
    {
      label: 'Plotted Developments',
      title: 'BrickBytes for Plots',
      description: 'The complete digital showroom for plotted layout projects. 3D terrain maps, polygon plot boundaries, GeoJSON integration, booking pipeline and broker tracking — purpose-built for plotted sales.'
    },
    {
      label: 'Apartment & Flat Projects',
      title: 'BrickBytes for Flats',
      badge: 'Coming Q3 2026',
      description: 'Take apartment sales digital. Interactive floor plans, unit-level availability grids, tower views, flat comparison and virtual tours — all in one buyer link.'
    }
  ];

  const adminFeatures = [
    'Live lead inbox with stage tracking',
    'Client CRM — docs, payment timeline, booking status',
    'Payment ledger with receipt generation',
    'Broker portal management — approve, invite, track',
    'Broadcast messages to leads and buyers',
    'Project-level analytics'
  ];

  const stats = [
    { number: '65+', label: 'Townships Listed' },
    { number: '11,000+', label: 'Buyers Served' },
    { number: '₹500 Cr+', label: 'In Plots Tracked' },
    { number: '4', label: 'Cities Active' }
  ];

  return (
    <>
      <Hero />

      {/* Architecture Hero Divider */}
      <section
        className="section section-padding bg-architecture"
        style={{ backgroundImage: 'url(/images/architecture-01.jpg)' }}
      >
        <div className="container"></div>
      </section>

      {/* Problem Section */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">The old way of selling plots is broken.</h2>
          </motion.div>

          <div className="problem-grid">
            {problemCards.map((card, idx) => (
              <ExpandableCard key={idx} {...card} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo Section */}
      <section className="section section-padding bg-secondary">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">The BrickBytes Platform</p>
            <h2 className="section-title">One link. The entire buying journey.</h2>
            <p className="section-subtitle">
              Share a single URL with your buyers and they get everything — without downloading anything.
            </p>
          </motion.div>

          <div className="feature-grid">
            {featureTiles.map((tile, idx) => (
              <motion.div
                key={idx}
                className="feature-tile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="tile-icon">{tile.icon}</div>
                <h3 className="tile-title">{tile.title}</h3>
                <p className="tile-description">{tile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Products Section */}
      <section className="section section-padding">
        <div className="container">
          <div className="products-grid">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="product-header">
                  <span className="product-label">{product.label}</span>
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <motion.a
                  href="#"
                  className="product-cta"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {idx === 0 ? 'Explore Plots Product' : 'Join Waitlist'} <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Divider 2 */}
      <section
        className="section section-padding bg-architecture"
        style={{ backgroundImage: 'url(/images/architecture-03.jpg)' }}
      >
        <div className="container"></div>
      </section>

      {/* Admin Panel Section */}
      <section className="section section-padding bg-secondary">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Your entire sales operation. One dashboard.</h2>
            <p className="section-subtitle">
              The BrickBytes Admin Panel gives your team full control — leads, payments, bookings, clients and channel partners, all in one place.
            </p>
          </motion.div>

          <div className="admin-features">
            {adminFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="admin-feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="checkmark">✓</div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Divider 3 */}
      <section
        className="section section-padding bg-architecture"
        style={{ backgroundImage: 'url(/images/architecture-04.jpg)' }}
      >
        <div className="container"></div>
      </section>

      {/* Stats Section */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Builders trust BrickBytes.</h2>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser CTA */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Simple, honest pricing.</h2>
            <p className="section-subtitle">
              No hidden fees. No per-seat charges. One flat subscription per project. Cancel anytime.
            </p>
            <motion.a
              href="#pricing"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Pricing <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-padding bg-dark">
        <div className="container">
          <motion.div
            className="section-header text-center text-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title section-title-light">Ready to give your buyers a better experience?</h2>
            <p className="section-subtitle section-subtitle-light">
              Join the developers who've moved their sales digital. Setup takes under 48 hours.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Free Demo
              </motion.a>
              <motion.a
                href="tel:+919876500000"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Or call us: +91 98765 00000
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
