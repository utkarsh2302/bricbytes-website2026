import { lazy, Suspense, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { animateHeroEntrance } from '../../animations/effects/heroEntranceAnim';
import { setupCTAButtonAnimation } from '../../animations/effects/ctaButtonAnim';
import './Hero.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const splineSceneUrl = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const robotY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const robotOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Hero entrance animation on mount
  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance({
        titleSelector: '.hero-title-minimal',
        underlineSelector: '.hero-horizon-line',
        taglineSelector: '.hero-tagline',
        ctasSelector: '.hero-ctas button',
        trustedSelector: '.hero-trusted',
      });
    }
  }, []);

  // CTA button animations
  useEffect(() => {
    const buttons = document.querySelectorAll('.hero-ctas button');
    buttons.forEach((button, index) => {
      setupCTAButtonAnimation({ buttonSelector: `.hero-ctas button:nth-child(${index + 1})` });
    });
  }, []);

  return (
    <section className="hero hero-minimal" ref={heroRef}>
      {/* Center content */}
      <motion.div
        className="hero-center-content"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="hero-title-minimal">BrickBytes</h1>
        <div className="hero-horizon-line" />
        <p className="hero-tagline">Tech inside real estate simplified</p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book Demo</button>
        </div>

        {/* Trusted by text */}
        <p className="hero-trusted">Trusted by 50x builders across India</p>
      </motion.div>

      {/* ── Right: 3D Robot (Spline) — outside container for full-width positioning ── */}
      <motion.div
        className="hero-robot"
        style={{ y: robotY, opacity: robotOpacity, minWidth: '1200px', minHeight: '1200px' }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
          <Spline scene={splineSceneUrl} />
        </Suspense>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <motion.div
          className="hero-scroll-line"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
