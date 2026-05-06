import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './MarketingNav.css';

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Plots', href: '/plots' },
    { label: 'Flats', href: '/flats' },
    { label: 'Brokers', href: '/broker-partners' },
    { label: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      className={`marketing-nav ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            BrickBytes
          </Link>
        </div>

        <div className="nav-center">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <motion.div
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              Book Demo
            </Link>
          </motion.div>
        </div>

        <motion.button
          className="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="nav-mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="nav-mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
            Book Demo
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
