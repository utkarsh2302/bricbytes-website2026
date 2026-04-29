import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { AnimatedLines } from '../components/motion-graphics/AnimatedLines';
import { AnimatedParticles } from '../components/motion-graphics/AnimatedParticles';
import './ContactPage.css';

export function ContactPage() {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <section className="contact-section section-padding relative">
        <AnimatedLines />
        <AnimatedParticles />
        <div className="container relative z-10">
          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge">
                <span className="badge-dot" />
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              className="contact-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's build something{' '}
              <span className="text-gradient">extraordinary</span>
            </motion.h1>

            <motion.p
              className="contact-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Ready to transform your real estate sales? Reach out and let's
              discuss how BrickBytes can digitize your projects.
            </motion.p>

            <motion.div
              className="contact-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '2rem' }}
            >
              <motion.a
                href="https://wa.me/919507321260?text=Hi%20BrickBytes%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card base-card"
                whileHover={{ y: -3, boxShadow: 'var(--shadow-md)', borderColor: 'var(--border-strong)' }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="contact-card-icon whatsapp">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3>Chat on WhatsApp</h3>
                  <p>Get a response within minutes</p>
                </div>
                <ArrowUpRight size={20} className="contact-card-arrow" />
              </motion.a>

              <motion.a
                href="mailto:business@brickbytes.in"
                className="contact-card base-card"
                whileHover={{ y: -3, boxShadow: 'var(--shadow-md)', borderColor: 'var(--border-strong)' }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="contact-card-icon email">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Send us an email</h3>
                  <p>hello@brickbytes.in</p>
                </div>
                <ArrowUpRight size={20} className="contact-card-arrow" />
              </motion.a>
            </motion.div>

            {/* Address & Legal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                maxWidth: '600px',
                margin: '3rem auto 0'
              }}
            >
              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', color: '#ffffff' }}>
                Our Office
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Khushi Sansar, Lakshmi Nikunjn<br/>
                Rampura Road, Mohanpura<br/>
                Jaipur, Rajasthan 302020<br/>
                India
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '1rem', marginBottom: 0 }}>
                BRICKNOVA TECHNOLOGIES PRIVATE LIMITED<br/>
                CIN: U62011RJ2026PTC113544 | GSTIN: 08AAOCB6672J1Z2
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
