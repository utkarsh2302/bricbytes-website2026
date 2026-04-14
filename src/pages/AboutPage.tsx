import { motion } from 'framer-motion';
import './AboutPage.css';

export function AboutPage() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Company Story */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="about-story-content">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge">
                <span className="badge-dot" />
                Our Mission
              </span>
            </motion.div>

            <motion.h1
              className="about-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              Transform how real estate is{' '}
              <span className="text-gradient">discovered and sold</span>
            </motion.h1>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              BrickBytes reduces the friction between builders and buyers. We combine 3D terrain maps, AI assistance, and live inventory data to create immersive digital buying journeys. Developers close faster. Buyers make smarter decisions. Brokers track every lead.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-padding bg-light">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            style={{ marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {[
              {
                title: 'Radical Simplicity',
                description: 'No jargon. No friction. Every feature should answer a buyer question or help a developer close faster.'
              },
              {
                title: 'Data-Driven Everything',
                description: 'Every decision is backed by data. Real-time availability, lead attribution, conversion metrics. Transparency builds trust.'
              },
              {
                title: 'Human-First Design',
                description: 'Technology serves people. Our platform is built for non-technical users — agents, brokers, developers.'
              },
              {
                title: 'Uncompromising Quality',
                description: 'Real estate requires precision. Our 3D terrain maps are centimetre-accurate. Our data is live, not cached.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="about-founders section-padding">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            style={{ marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Meet the founders
          </motion.h2>
          <div className="founders-grid">
            {/* Founder 1 */}
            <motion.div
              className="founder-card base-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-strong)', transition: { duration: 0.2 } }}
            >
              <div className="founder-avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <h3 className="founder-name">{/* REPLACE */}Founder Name</h3>
              <p className="founder-role">{/* REPLACE */}Co-Founder & CEO</p>
              <p className="founder-bio">
                {/* REPLACE */}Brief bio about the founder, their vision, and what drives them to build BrickBytes.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              className="founder-card base-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-strong)', transition: { duration: 0.2 } }}
            >
              <div className="founder-avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <h3 className="founder-name">{/* REPLACE */}Founder Name</h3>
              <p className="founder-role">{/* REPLACE */}Co-Founder & CTO</p>
              <p className="founder-bio">
                {/* REPLACE */}Brief bio about the founder, their technical expertise, and their role in building the platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
