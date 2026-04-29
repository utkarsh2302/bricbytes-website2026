import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Hero.css';

const words = ['signal', 'listing', 'price', 'contract', 'deal'];

export function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const slotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
      if (slotRef.current) {
        slotRef.current.classList.remove('anim');
        void slotRef.current.offsetWidth;
        slotRef.current.textContent = words[(currentWordIdx + 1) % words.length];
        slotRef.current.classList.add('anim');
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [currentWordIdx]);

  return (
    <section className="hero hero-v5">
      {/* Background layers */}
      <div className="v5-bg">
        <div className="v5-grid"></div>
        <div className="v5-beam"></div>
        <div className="v5-glow"></div>
      </div>

      {/* Main content */}
      <div className="v5-inner">
        {/* Eyebrow with live dot */}
        <motion.div
          className="v5-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="v5-ldot"></span>
          The operating layer for Indian real estate
        </motion.div>

        {/* Main title with rotating word */}
        <motion.h1
          className="v5-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We turn every property in India into a
          <span className="v5-word">
            <span className="v5-word-slot anim" ref={slotRef}>
              signal
            </span>
            <span className="v5-word-underline"></span>
          </span>
          .
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="v5-lede"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Live pricing. Verified inventory. AI that negotiates. One tap to transact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="v5-ctas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#" className="btn btn-blue">
            Explore listings <span className="arr">→</span>
          </a>
          <a href="#" className="btn btn-ghost">
            How it works
          </a>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="v5-pipeline" aria-hidden="true">
          <div className="v5-rail"></div>
          <div className="v5-pulse"></div>

          {/* Stage 1: Listed */}
          <div className="v5-stage s1">
            <div className="v5-stage-label">
              <span className="n">01</span>
              <span className="t">Listed</span>
            </div>
            <div className="v5-card">
              <div className="v5-card-ph"></div>
              <div className="v5-card-meta">
                <div className="v5-card-title">HSR Layout · 3 BHK</div>
                <div className="v5-card-sub">Bengaluru · 1,620 sqft</div>
              </div>
            </div>
          </div>

          {/* Stage 2: Verified */}
          <div className="v5-stage s2">
            <div className="v5-stage-label">
              <span className="n">02</span>
              <span className="t">Verified</span>
            </div>
            <div className="v5-stamp">
              <CheckCircle2 size={13} strokeWidth={2.4} />
              <span>RERA · Title · Encumbrance</span>
            </div>
          </div>

          {/* Stage 3: Priced */}
          <div className="v5-stage s3">
            <div className="v5-stage-label">
              <span className="n">03</span>
              <span className="t">Priced</span>
            </div>
            <div className="v5-price">
              <div className="v5-price-row">
                <span className="l">Asking</span>
                <span className="v">₹ 2.24 Cr</span>
              </div>
              <div className="v5-price-row">
                <span className="l">Fair value</span>
                <span className="v blue">₹ 2.38 Cr</span>
              </div>
              <div className="v5-price-bar">
                <div className="v5-price-fill"></div>
                <div className="v5-price-mark"></div>
              </div>
              <div className="v5-price-note">6.1% under market</div>
            </div>
          </div>

          {/* Stage 4: Transacted */}
          <div className="v5-stage s4">
            <div className="v5-stage-label">
              <span className="n">04</span>
              <span className="t">Transacted</span>
            </div>
            <div className="v5-done">
              <div className="v5-done-ring">
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" className="ring-bg" />
                  <circle cx="20" cy="20" r="17" className="ring-fg" />
                </svg>
                <svg className="tick" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="v5-done-txt">
                <div className="t">Offer accepted</div>
                <div className="s">Escrow • e-Stamp • Registered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer stats */}
        <div className="v5-foot">
          <div className="v5-foot-item">
            <b>51,284</b>
            <span>listings</span>
          </div>
          <span className="v5-foot-sep"></span>
          <div className="v5-foot-item">
            <b>₹ 2,340 Cr</b>
            <span>transacted '25</span>
          </div>
          <span className="v5-foot-sep"></span>
          <div className="v5-foot-item">
            <b>11</b>
            <span>cities live</span>
          </div>
          <span className="v5-foot-sep"></span>
          <div className="v5-foot-item">
            <b>0</b>
            <span>broker calls</span>
          </div>
        </div>
      </div>
    </section>
  );
}
