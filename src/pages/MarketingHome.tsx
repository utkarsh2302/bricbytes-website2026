import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Map, Zap, Eye, Bot, Calculator, BarChart2, Check,
  MapPin, Users, TrendingUp,
} from 'lucide-react';
import { Hero } from '../components/hero/Hero';
import { ExpandableCard } from '../components/marketing/ExpandableCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { gsap, ScrollTrigger } from '../animations/gsap-config';
import './MarketingHome.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

const problemCards = [
  {
    icon: <MapPin size={22} />,
    title: 'Outdated Site Maps',
    summary: 'Static PDFs & WhatsApp photos…',
    content: 'Static PDFs, printed brochures, WhatsApp photos. Buyers get confused, call repeatedly, and walk away before they\'ve even seen the right plot.',
  },
  {
    icon: <Users size={22} />,
    title: 'Zero Transparency',
    summary: 'Buyers don\'t know availability…',
    content: 'Buyers don\'t know which plots are actually available. Sold plots show as available. Trust erodes. Your sales team spends hours clarifying basics.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Broker Chaos',
    summary: 'No referral tracking…',
    content: 'No way to track referrals. Brokers push competing projects. Commissions are disputed. The buyer you paid to acquire ends up walking to a competitor.',
  },
];

const featureTiles = [
  { Icon: Map,        title: '3D Interactive Site Map',      description: 'Rotate, zoom, tap any plot for live pricing and specs.' },
  { Icon: Zap,        title: 'Real-time Availability',        description: 'Sold is sold. The moment a deal closes, it reflects everywhere.' },
  { Icon: Eye,        title: '360° & Drone Views',            description: 'Every plot with a panoramic view and aerial footage.' },
  { Icon: Bot,        title: 'AI Sales Assistant',            description: 'Answers every buyer question instantly, 24/7.' },
  { Icon: Calculator, title: 'EMI Calculator',                description: 'Remove the biggest mental block. Monthly payments in seconds.' },
  { Icon: BarChart2,  title: 'Broker Affiliate Portal',       description: 'Trackable links, QR codes, performance dashboards per partner.' },
];

const products = [
  {
    label: 'Plotted Developments',
    title: 'BrickBytes for Plots',
    description: 'The complete digital showroom for plotted layout projects. 3D terrain maps, polygon plot boundaries, GeoJSON integration, booking pipeline and broker tracking — purpose-built for plotted sales.',
  },
  {
    label: 'Apartment & Flat Projects',
    title: 'BrickBytes for Flats',
    badge: 'Coming Q3 2026',
    description: 'Take apartment sales digital. Interactive floor plans, unit-level availability grids, tower views, flat comparison and virtual tours — all in one buyer link.',
  },
];

const adminFeatures = [
  'Live lead inbox with stage tracking',
  'Client CRM — docs, payment timeline, booking status',
  'Payment ledger with receipt generation',
  'Broker portal management — approve, invite, track',
  'Broadcast messages to leads and buyers',
  'Project-level analytics',
];

const stats = [
  { number: '65+',     label: 'Townships Listed' },
  { number: '11,000+', label: 'Buyers Served' },
  { number: '₹500 Cr+', label: 'In Plots Tracked' },
  { number: '4',        label: 'Cities Active' },
];

// ─── Cinematic architecture dividers ─────────────────────────────────────────
const dividers = [
  { img: '/images/architecture-01.jpg?w=1920&h=600', quote: 'The way real estate is sold is changing.' },
  { img: '/images/architecture-02.jpg?w=1920&h=600', quote: 'There\'s a better way.' },
  { img: '/images/architecture-03.jpg?w=1920&h=600', quote: 'Built for the teams behind every project.' },
  { img: '/images/architecture-04.jpg?w=1920&h=600', quote: 'Every decision, backed by real data.' },
  { img: '/images/architecture-05.jpg?w=1920&h=600', quote: 'Ready to take your project digital?' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function MarketingHome() {

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Section headers
      gsap.utils.toArray<HTMLElement>('.gs-section-header').forEach(el => {
        gsap.from(el, {
          opacity: 0, y: 28, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Feature tiles — stagger
      gsap.from('.gs-feature-tile', {
        opacity: 0, y: 36, duration: 0.55, ease: 'power2.out', stagger: 0.09,
        scrollTrigger: { trigger: '.gs-feature-grid', start: 'top 86%', once: true },
      });

      // Product cards
      gsap.from('.gs-product-card', {
        opacity: 0, y: 28, duration: 0.6, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: '.gs-products-grid', start: 'top 86%', once: true },
      });

      // Admin feature items — slide from left
      gsap.from('.gs-admin-item', {
        opacity: 0, x: -22, duration: 0.5, ease: 'power2.out', stagger: 0.07,
        scrollTrigger: { trigger: '.gs-admin-features', start: 'top 86%', once: true },
      });

      // Stat cards — scale up
      gsap.from('.gs-stat-card', {
        opacity: 0, scale: 0.88, y: 16, duration: 0.5, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: '.gs-stats-grid', start: 'top 86%', once: true },
      });

      // CTA sections
      gsap.utils.toArray<HTMLElement>('.gs-cta-block').forEach(el => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Cinematic divider quotes
      gsap.utils.toArray<HTMLElement>('.cinematic-quote').forEach(el => {
        gsap.from(el, {
          opacity: 0, y: 20, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Hero />

      {/* ── Divider 1 ── */}
      <section className="bg-architecture" style={{ backgroundImage: `url(${dividers[0].img}?v=1)` }}>
        <div className="cinematic-overlay">
          <p className="cinematic-quote">{dividers[0].quote}</p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section section-padding">
        <div className="container">
          <div className="gs-section-header section-header text-center">
            <p className="section-label">The Problem</p>
            <h2 className="section-title">The old way of selling plots is broken.</h2>
          </div>
          <div className="problem-grid">
            {problemCards.map((card, idx) => (
              <ExpandableCard key={idx} {...card} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider 2 ── */}
      <section className="bg-architecture" style={{ backgroundImage: `url(${dividers[1].img})` }}>
        <div className="cinematic-overlay">
          <p className="cinematic-quote">{dividers[1].quote}</p>
        </div>
      </section>

      {/* ── Platform Demo ── */}
      <section className="section section-padding bg-secondary">
        <div className="container">
          <div className="gs-section-header section-header text-center">
            <p className="section-label">The Platform</p>
            <h2 className="section-title">One link. The entire buying journey.</h2>
            <p className="section-subtitle">
              Share a single URL with your buyers and they get everything — without downloading anything.
            </p>
          </div>
          <div className="feature-grid gs-feature-grid">
            {featureTiles.map(({ Icon, title, description }, idx) => (
              <div key={idx} className="feature-tile gs-feature-tile">
                <div className="tile-icon-wrap">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="tile-title">{title}</h3>
                <p className="tile-description">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="section section-padding">
        <div className="container">
          <div className="gs-section-header section-header text-center">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Built for how India sells real estate.</h2>
          </div>
          <div className="products-grid gs-products-grid">
            {products.map((product, idx) => (
              <div key={idx} className="product-card gs-product-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider 3 ── */}
      <section className="bg-architecture" style={{ backgroundImage: `url(${dividers[2].img})` }}>
        <div className="cinematic-overlay">
          <p className="cinematic-quote">{dividers[2].quote}</p>
        </div>
      </section>

      {/* ── Admin Panel ── */}
      <section className="section section-padding bg-secondary">
        <div className="container">
          <div className="gs-section-header section-header text-center">
            <p className="section-label">The Dashboard</p>
            <h2 className="section-title">Your entire sales operation. One screen.</h2>
            <p className="section-subtitle">
              The BrickBytes Admin Panel gives your team full control — leads, payments, bookings, clients and channel partners, all in one place.
            </p>
          </div>
          <div className="admin-features gs-admin-features">
            {adminFeatures.map((feature, idx) => (
              <div key={idx} className="admin-feature-item gs-admin-item">
                <div className="admin-icon">
                  <Check size={13} strokeWidth={2.5} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider 4 ── */}
      <section className="bg-architecture" style={{ backgroundImage: `url(${dividers[3].img})` }}>
        <div className="cinematic-overlay">
          <p className="cinematic-quote">{dividers[3].quote}</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section-padding">
        <div className="container">
          <div className="gs-section-header section-header text-center">
            <p className="section-label">Proof</p>
            <h2 className="section-title">Builders trust BrickBytes.</h2>
          </div>
          <div className="stats-grid gs-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card gs-stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider 5 ── */}
      <section className="bg-architecture" style={{ backgroundImage: `url(${dividers[4].img})` }}>
        <div className="cinematic-overlay">
          <p className="cinematic-quote">{dividers[4].quote}</p>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="section section-padding">
        <div className="container text-center">
          <div className="gs-cta-block">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Simple, honest pricing.</h2>
            <p className="section-subtitle">
              No hidden fees. No per-seat charges. One flat subscription per project. Cancel anytime.
            </p>
            <div className="cta-buttons" style={{ marginTop: '2rem' }}>
              <MagneticButton as="a" href="/pricing" className="btn-primary">
                See Pricing <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section section-padding bg-dark">
        <div className="container text-center">
          <div className="gs-cta-block">
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Ready to give your buyers a better experience?
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Join the developers who've moved their sales digital. Setup takes under 48 hours.
            </p>
            <div className="cta-buttons" style={{ marginTop: '2rem' }}>
              <MagneticButton as="a" href="/contact" className="btn-primary">
                Book Your Free Demo
              </MagneticButton>
              <MagneticButton as="a" href="tel:+919876500000" className="btn-secondary">
                Call us: +91 98765 00000
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
