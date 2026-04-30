import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { setupFooterAnimation } from '../../animations/effects/footerAnim';
import './Footer.css';

export function Footer() {
  useEffect(() => {
    setupFooterAnimation({
      footerSelector: '.footer',
      contentSelectors: ['.footer-brand', '.footer-col', '.footer-bottom'],
    });
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="0" y="0" width="5" height="5" fill="var(--text-inverse)" />
                  <rect x="7" y="0" width="5" height="5" fill="var(--text-inverse)" opacity="0.6" />
                  <rect x="0" y="7" width="5" height="5" fill="var(--text-inverse)" opacity="0.6" />
                  <rect x="7" y="7" width="5" height="5" fill="var(--text-inverse)" opacity="0.3" />
                </svg>
              </div>
              <span>BrickBytes</span>
            </Link>
            <p className="footer-tagline">
              AI-powered real estate digitization for developers and builders.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', lineHeight: '1.4' }}>
              BRICKNOVA TECHNOLOGIES PRIVATE LIMITED<br/>
              CIN: U62011RJ2026PTC113544 | GSTIN: 08AAOCB6672J1Z2<br/>
              Khushi Sansar, Lakshmi Nikunjn, Rampura Road, Jaipur, Rajasthan 302020<br/>
              <a href="tel:+919507321260" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+91 9507321260</a> | <a href="tel:+917742200618" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+91 7742200618</a>
            </p>
            <div className="footer-social">
              {[
                { href: '#', label: 'Twitter',  Icon: Twitter },
                { href: '#', label: 'LinkedIn', Icon: Linkedin },
                { href: 'mailto:business@brickbytes.in', label: 'Email', Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12, borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/#features">Features</Link>
            <a href="https://brickbytes360-bd9c.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Book Demo</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BrickBytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
