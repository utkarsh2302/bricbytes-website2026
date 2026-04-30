import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../animations/gsap-config';
import './AboutPage.css';

export function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section
      gsap.from('.about-hero-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Section headers
      gsap.utils.toArray<HTMLElement>('.about-section-header').forEach(el => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

      // Value cards - stagger from left and right alternating
      gsap.utils.toArray<HTMLElement>('.value-card').forEach((el, idx) => {
        gsap.from(el, {
          opacity: 0,
          x: idx % 2 === 0 ? -40 : 40,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: { trigger: '.values-grid', start: 'top 82%', once: true },
        });
      });

      // Founder cards
      gsap.from('.founder-card', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.founders-grid', start: 'top 82%', once: true },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-badge">Our Story</span>
            <h1 className="about-hero-title">Transforming real estate through technology</h1>
            <p className="about-hero-subtitle">
              We're building the digital foundation that connects developers, brokers, and buyers.
              Real estate deserves better tools. Better data. Better experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission section-padding">
        <div className="container">
          <div className="about-section-header">
            <span className="section-label">Mission</span>
            <h2 className="section-title">Building the bridge between vision and reality</h2>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Real estate transactions are fundamentally broken. Buyers see static PDFs and outdated photos.
                Sellers waste time answering the same questions. Brokers operate blind, without data on lead sources.
              </p>
              <p>
                BrickBytes fixes this. We digitize projects end-to-end — 3D terrain maps that let buyers explore
                before visiting, AI that answers questions 24/7, and real-time inventory that keeps everyone synchronized.
              </p>
              <p>
                The result: developers close 40% faster. Buyers make confident decisions. Brokers track every lead
                and earn fair commissions. That's the BrickBytes difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section-padding bg-light">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="section-label">Values</span>
            <h2 className="section-title">How we work</h2>
          </div>
          <div className="values-grid">
            {[
              {
                title: 'User-First Design',
                description: 'Every feature answers a real user need. We speak to buyers, brokers, and developers constantly.'
              },
              {
                title: 'Data Accuracy',
                description: 'Real estate demands precision. Our 3D maps are centimetre-accurate. Our inventory is live.'
              },
              {
                title: 'Trust Through Transparency',
                description: 'Brokers see lead sources. Developers track conversions. Buyers get complete information.'
              },
              {
                title: 'Speed Wins',
                description: 'Faster discovery. Faster decisions. Faster closures. Technology removes friction.'
              }
            ].map((value, idx) => (
              <div key={idx} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-founders section-padding">
        <div className="container">
          <div className="about-section-header text-center">
            <span className="section-label">Team</span>
            <h2 className="section-title">Meet the builders</h2>
          </div>
          <div className="founders-grid">
            {/* Founder 1 */}
            <motion.div className="founder-card">
              <div className="founder-avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <h3 className="founder-name">Utkarsh Sharma</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-bio">
                Technology-focused entrepreneur with expertise in web development, AI, and product systems. Transforms complex ideas into scalable, high-performance solutions with deep market insight in real estate.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div className="founder-card">
              <div className="founder-avatar">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <h3 className="founder-name">Rashika Verma</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-bio">
                Design-first leader focused on user experience and branding. Translates concepts into intuitive, refined digital interfaces that are both aesthetically strong and functionally aligned with vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform your projects?</h2>
            <p className="cta-subtitle">Join developers who've transformed their sales with BrickBytes</p>
            <a href="/contact" className="btn-primary btn-lg">Book Your Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
}
