import { Upload, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  { num: '01', icon: Upload, title: 'Upload Your Project',     desc: 'Share your project plans, floor layouts, and site maps. We handle the rest — no technical knowledge required.' },
  { num: '02', icon: Cpu,    title: 'AI Digitizes Everything', desc: 'Our AI engine converts your plans into a fully interactive 3D experience — maps, inventory, chatbot, EMI calculator — all configured automatically.' },
  { num: '03', icon: Rocket, title: 'Deploy & Sell',           desc: 'Go live in 48 hours. Share a single link with buyers. Watch leads come in, deals close, and inventory update in real time — 24/7.' },
];

export function HowItWorks() {
  return (
    <section className="how-it-works section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">How It Works</p>
          <h2 className="section-title">From plans to sales in 48 hours</h2>
          <p className="section-subtitle">
            Three steps to transform your real estate project into a fully digital, AI-powered sales engine.
          </p>
        </motion.div>

        <div className="hiw-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="hiw-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'var(--bg-tertiary)', y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="hiw-step-number">{step.num}</span>
              <motion.div
                className="hiw-step-icon"
                whileHover={{ scale: 1.12, rotate: -5, borderColor: 'var(--border-strong)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <step.icon size={18} />
              </motion.div>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
