import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MagneticButton } from '../ui/MagneticButton';
import './Navbar.css';

const navLinks = [
  { label: 'Features', path: '/#features' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') return;
      const el = document.getElementById(path.slice(2));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="navbar-progress"
      />
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="0" y="0" width="6" height="6" fill="var(--text-inverse)" />
              <rect x="8" y="0" width="6" height="6" fill="var(--text-inverse)" opacity="0.6" />
              <rect x="0" y="8" width="6" height="6" fill="var(--text-inverse)" opacity="0.6" />
              <rect x="8" y="8" width="6" height="6" fill="var(--text-inverse)" opacity="0.3" />
            </svg>
          </div>
          <span>BrickBytes</span>
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path.startsWith('/#') ? '/' : link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => handleNavClick(link.path)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="navbar-right">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href="/contact"
            className="btn-primary navbar-cta"
          >
            Book Demo
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path.startsWith('/#') ? '/' : link.path}
                  className="navbar-mobile-link"
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="navbar-mobile-footer">
              <ThemeToggle />
              <Link to="/contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
