import { lazy, Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

  return (
    <section className="hero hero-minimal" ref={heroRef}>
      <motion.div className="hero-inner container" style={{ y: contentY }}>
        {/* ── Left: BrickBytes + Line ── */}
        <div className="hero-text-section">
          <motion.div
            className="hero-text-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title-minimal">BrickBytes</h1>
            <div className="hero-horizon-line" />
            <p className="hero-tagline">Tech inside real estate simplified</p>
          </motion.div>
        </div>
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
