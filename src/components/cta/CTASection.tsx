import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SparklesCore } from '../ui/sparkles';
import './CTASection.css';

export function CTASection() {
  return (
    <section className="cta-section section-padding">
      {/* Gold particles background */}
      <div className="cta-sparkles">
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={150}
          particleColor="#D6C29C"
          speed={0.8}
        />
      </div>

      <div className="container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-text">
            <motion.p
              className="cta-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get Started
            </motion.p>
            <motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Ready to digitize your <em>real estate</em> sales?
            </motion.h2>
            <motion.p
              className="cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Join developers and builders already using BrickBytes to sell faster, smarter, and at lower cost.
            </motion.p>
            <p className="cta-note">No commitment required · Setup in 48 hours</p>
          </div>

          <motion.div
            className="cta-actions"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="cta-btn-primary">
                Book a Demo <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://brickbytes360-bd9c.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-secondary"
              >
                <Play size={13} /> Try Live Demo
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
