import { TrendingUp, Clock, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyAI.css';

const benefits = [
  { icon: TrendingUp, title: 'Higher Conversion', desc: 'Buyers who explore properties digitally convert 3× faster. Immersive 3D builds confidence before the first call.' },
  { icon: Clock,      title: 'Zero Wait Time',    desc: 'AI handles every buyer query instantly — EMI calculations, availability checks, unit comparisons — around the clock.' },
  { icon: Shield,     title: 'Broker Protection', desc: 'Automated lead attribution and brokerage tracking ensure no commission disputes. Every lead logged, every deal protected.' },
  { icon: Users,      title: 'Wider Reach',       desc: 'Sell to buyers in any city, any country. One shareable link delivers a full property experience anywhere.' },
];

export function WhyAI() {
  return (
    <section className="why-ai section-padding">
      <div className="container">
        <div className="why-ai-grid">
          <motion.div
            className="why-ai-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Why AI?</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              AI doesn't just assist — it sells
            </h2>
            <p className="section-subtitle" style={{ fontSize: '0.9375rem' }}>
              BrickBytes integrates AI at every touchpoint of your sales funnel.
              Lower your cost per acquisition, reduce your sales team's workload,
              and close more deals with less friction.
            </p>
          </motion.div>

          <div className="why-ai-right">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="why-ai-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: 'var(--bg-secondary)', y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="why-ai-icon"
                  whileHover={{ scale: 1.15, rotate: -6, borderColor: 'var(--border-strong)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <b.icon size={16} />
                </motion.div>
                <h3 className="why-ai-title">{b.title}</h3>
                <p className="why-ai-desc">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
