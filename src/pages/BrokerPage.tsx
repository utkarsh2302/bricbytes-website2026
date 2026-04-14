import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ExpandableCard } from '../components/marketing/ExpandableCard';
import './BrokerPage.css';

export function BrokerPage() {
  const features = [
    {
      title: 'Branded Profile Page',
      summary: 'Every broker gets a public profile...',
      content: 'Every broker gets a public-facing profile with their name, agency, designation and all listed projects. Shareable on WhatsApp, LinkedIn and Instagram. Your personal brand, right next to the property.'
    },
    {
      title: 'Trackable Referral Links',
      summary: 'Unique URLs per project...',
      content: 'Unique URLs per project with your ref code. Every click, every lead, every conversion — automatically attributed. No disputes. No spreadsheets. Pure transparency.'
    },
    {
      title: 'QR Code Generator',
      summary: 'Download print-ready QR codes...',
      content: 'Download print-ready QR codes for any project you represent. Put them on hoardings, business cards, brochures. Every scan → attributed lead. Track your offline marketing impact.'
    },
    {
      title: 'Lead Pipeline',
      summary: 'See every lead you generated...',
      content: 'See every lead you generated, their current stage (New → Contacted → Visit → Negotiation → Converted), and auto-generated follow-up drafts. Know exactly where each lead stands.'
    },
    {
      title: 'Performance Analytics',
      summary: 'Link opens, visitors, conversion rate...',
      content: 'How many opened your link? Unique visitors? Total leads? Conversion rate? All in one clean dashboard. Know which projects you\'re selling best. Adjust your pitch accordingly.'
    },
    {
      title: 'AI Follow-up Drafts',
      summary: 'One-click message templates...',
      content: 'For each lead stage, BrickBytes AI generates personalized WhatsApp message drafts. Professional, relevant, instant. Edit, copy, paste — save hours of crafting follow-ups.'
    }
  ];

  const comparison = [
    { feature: 'Branded profile', free: true, premium: true },
    { feature: 'Trackable referral links', free: true, premium: true },
    { feature: 'QR code generation', free: true, premium: true },
    { feature: 'Lead pipeline access', free: false, premium: true },
    { feature: 'Full lead details (phone, email)', free: false, premium: true },
    { feature: 'Performance analytics', free: true, premium: true },
    { feature: 'AI follow-up drafts', free: false, premium: true },
    { feature: 'Commission tracking', free: false, premium: true },
    { feature: 'Custom branding', free: false, premium: true },
    { feature: 'Priority support', free: false, premium: true }
  ];

  return (
    <div className="broker-page">
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
            <p className="eyebrow">Channel Partners</p>
            <h1 className="section-title">Stop losing commissions to untracked referrals.</h1>
            <p className="section-subtitle">
              Every lead you generate is tagged with your name. Every conversion rewards you. Every project has a trackable link. Stop guessing where your commission goes.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as Broker Partner
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section section-padding">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your own sales dashboard
          </motion.h2>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <ExpandableCard
                key={idx}
                title={feature.title}
                summary={feature.summary}
                content={feature.content}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="section section-padding bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Free vs Premium</h2>
            <p className="section-subtitle">
              Start free. Upgrade when you need advanced tracking and AI-powered follow-ups.
            </p>
          </motion.div>

          <div className="comparison-table">
            <div className="table-header">
              <div className="table-feature">Feature</div>
              <div className="table-tier">Free Tier</div>
              <div className="table-tier">Premium Tier</div>
            </div>

            {comparison.map((item, idx) => (
              <motion.div
                key={idx}
                className="table-row"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="table-feature">{item.feature}</div>
                <div className="table-tier">
                  {item.free && <Check size={20} className="check-icon" />}
                </div>
                <div className="table-tier">
                  {item.premium && <Check size={20} className="check-icon" />}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="premium-cta">
            <h3>Unlock premium features</h3>
            <p>₹49,999 / year — includes commission tracking, advanced analytics, AI follow-ups, and priority support.</p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upgrade to Premium
            </motion.a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to track every lead?</h2>
            <p className="section-subtitle">
              Join 500+ channel partners who are tracking 100% of their commissions with BrickBytes.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started as Broker Partner
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
