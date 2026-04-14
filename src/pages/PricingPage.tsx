import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ExpandableCard } from '../components/marketing/ExpandableCard';
import './PricingPage.css';

export function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '₹2,99,999',
      billing: 'one-time setup',
      description: 'For projects launching their first digital sales portal',
      features: [
        { feature: 'One project', included: true },
        { feature: 'Up to 50 plots / 100 units', included: true },
        { feature: 'Interactive floor plan / plot grid', included: true },
        { feature: '360° media integration (3 images per plot/unit)', included: true },
        { feature: 'Live availability sync', included: true },
        { feature: 'EMI calculator', included: true },
        { feature: 'Basic AI assistant', included: true },
        { feature: 'Lead inbox (up to 100 leads/month)', included: true },
        { feature: 'Email support', included: true },
        { feature: 'Broker portal', included: false },
        { feature: 'Advanced CRM', included: false },
        { feature: 'Priority support', included: false }
      ],
      cta: 'Start with Starter'
    },
    {
      name: 'Professional',
      price: '₹7,49,999',
      billing: 'one-time setup',
      description: 'For growing teams scaling across multiple projects',
      featured: true,
      features: [
        { feature: 'Up to 3 projects', included: true },
        { feature: 'Up to 200 plots / 500 units per project', included: true },
        { feature: 'Interactive floor plan / plot grid', included: true },
        { feature: '360° panoramic tours (unlimited media)', included: true },
        { feature: 'Drone video integration', included: true },
        { feature: 'Live availability sync across all projects', included: true },
        { feature: 'Advanced EMI calculator (GST, registration, insurance)', included: true },
        { feature: 'Premium AI assistant (24/7 support, lead qualification)', included: true },
        { feature: 'Complete CRM + lead management', included: true },
        { feature: 'Broker portal + performance analytics', included: true },
        { feature: 'Payment ledger and document management', included: true },
        { feature: 'Email + WhatsApp support + dedicated onboarding', included: true }
      ],
      cta: 'Upgrade to Professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: 'contact sales',
      description: 'For large-scale developers with custom requirements',
      features: [
        { feature: 'Unlimited projects', included: true },
        { feature: 'Unlimited units/plots', included: true },
        { feature: 'All Professional features', included: true },
        { feature: 'Custom integrations (ERP, CRM, payment gateways)', included: true },
        { feature: 'White-label platform', included: true },
        { feature: 'Advanced analytics and dashboards', included: true },
        { feature: 'Multi-language support', included: true },
        { feature: 'Dedicated account manager', included: true },
        { feature: '24/7 phone + email + WhatsApp support', included: true },
        { feature: 'SLA guarantee', included: true },
        { feature: 'Custom feature development', included: true },
        { feature: 'On-premise deployment option', included: true }
      ],
      cta: 'Get Custom Quote'
    }
  ];

  const faqs = [
    {
      title: 'Do you charge monthly or is it one-time?',
      summary: 'We charge a one-time setup fee...',
      content: 'We charge a one-time setup fee for platform access, configuration and deployment. No hidden monthly fees. You own your data and can export anytime. If you need updates, new projects or advanced features later, we quote separately.'
    },
    {
      title: 'What if we have more than 200 units?',
      summary: 'We scale with you...',
      content: 'Professional tier supports up to 500 units per project. If you need more, we recommend Enterprise. Or we can structure a custom package. Contact our sales team for options tailored to your scale.'
    },
    {
      title: 'Can we get a custom plan for our needs?',
      summary: 'Absolutely. Custom packages available...',
      content: 'Yes. If standard tiers don\'t fit your exact needs — maybe you need white-labeling, or specific integrations, or more projects — we build a custom plan. Talk to our sales team.'
    },
    {
      title: 'Do you offer discounts for annual commitment?',
      summary: 'We can discuss options...',
      content: 'Our model is one-time setup, so there\'s no annual recurring fee. But if you\'re planning multiple projects or need long-term partnership, we can negotiate. Connect with sales.'
    },
    {
      title: 'What if we only need a single feature, like lead management?',
      summary: 'We sell complete platforms, not single features...',
      content: 'BrickBytes is designed as a complete platform — from buyer journey to sales team tools. We don\'t unbundle features. But we\'ll work with you on a custom plan if needed.'
    },
    {
      title: 'Do you offer free trials?',
      summary: 'Yes — book a live demo...',
      content: 'Yes. We offer a 48-hour live demo of the complete platform configured for your project details (plots, pricing, images). You\'ll see exactly what your buyers will experience. Book a demo with our team.'
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Simple, Honest Pricing</h1>
            <p className="section-subtitle">
              One project. One price. No hidden fees, no surprise charges. BrickBytes is a one-time setup. You own your data and your portal forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section section-padding bg-light">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                className={`pricing-card ${tier.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {tier.featured && <div className="featured-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{tier.name}</h3>
                  <div className="pricing-price">{tier.price}</div>
                  <p className="pricing-billing">{tier.billing}</p>
                </div>
                <p className="pricing-description">{tier.description}</p>

                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tier.cta}
                </motion.button>

                <div className="pricing-features">
                  <p className="features-label">Includes:</p>
                  {tier.features.map((item, i) => (
                    <div key={i} className="feature-item">
                      {item.included ? (
                        <Check size={18} className="feature-icon included" />
                      ) : (
                        <X size={18} className="feature-icon excluded" />
                      )}
                      <span className={item.included ? '' : 'excluded-text'}>{item.feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-padding">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Questions?</h2>
            <p className="section-subtitle">
              Everything you need to know about BrickBytes pricing and plans.
            </p>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <ExpandableCard
                key={idx}
                title={faq.title}
                summary={faq.summary}
                content={faq.content}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-padding hero-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to launch?</h2>
            <p className="section-subtitle">
              Book a live demo and see BrickBytes configured for your project.
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
