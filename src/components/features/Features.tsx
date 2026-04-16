import { Map, Eye, Bot, Activity } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { TiltCard } from '../ui/TiltCard';
import './Features.css';

const features = [
  { num: '01', icon: Map,      title: '3D Interactive Maps',           desc: 'Buyers explore plots and flats in a fully rotatable 3D environment. Click any unit for instant pricing, specs, and availability — no site visit needed.', tag: 'Visualization' },
  { num: '02', icon: Eye,      title: '360° Virtual Tours',            desc: 'Immersive drone footage and interior walkthroughs give buyers the full experience remotely. Reduce site visits by 80%.', tag: 'Immersion' },
  { num: '03', icon: Bot,      title: 'AI Sales Assistant',            desc: 'Your AI-powered chatbot handles buyer inquiries 24/7, qualifies leads, calculates EMIs, and guides prospects through the entire purchase journey.', tag: 'Automation' },
  { num: '04', icon: Activity, title: 'Live Inventory & Broker Tools', desc: 'Real-time unit status, automated brokerage tracking, and lead attribution. Protect your sales pipeline with built-in broker management.', tag: 'Operations' },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Features() {
  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Platform</p>
          <h2 className="section-title">AI that sells while you sleep</h2>
          <p className="section-subtitle">
            Reduce sales costs, save time, and increase closures. BrickBytes
            integrates AI at every step so your projects sell faster with less effort.
          </p>
        </motion.div>

        <motion.div
          className="features-bento"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((f) => (
            <TiltCard
              key={f.num}
              className="feature-bento-card"
              tiltStrength={6}
            >
              <motion.div
                variants={card}
                whileHover={{ backgroundColor: 'var(--bg-tertiary)', scale: 1.005 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <div className="feature-bento-top">
                  <span className="feature-bento-num">{f.num}</span>
                  <motion.div
                    className="feature-bento-icon"
                    whileHover={{ scale: 1.15, rotate: 5, borderColor: 'var(--border-strong)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <f.icon size={16} />
                  </motion.div>
                </div>
                <h3 className="feature-bento-title">{f.title}</h3>
                <p className="feature-bento-desc">{f.desc}</p>
                <span className="feature-bento-tag">{f.tag}</span>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
