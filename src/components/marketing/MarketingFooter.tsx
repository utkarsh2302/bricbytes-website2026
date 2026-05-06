import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import './MarketingFooter.css';

export function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="marketing-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Product */}
          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#plots">Plots</a></li>
              <li><a href="#flats">Flats</a></li>
              <li><a href="#brokers">Brokers</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:business@brickbytes.in">business@brickbytes.in</a>
            </div>
            <div className="contact-item">
              <MessageCircle size={18} />
              <a href="https://wa.me/919507321260" target="_blank" rel="noopener noreferrer">+91 9507321260</a>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Jaipur, Rajasthan, India</span>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>Mon–Sat, 9am – 7pm IST</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-tagline">The digital brain behind every plot sale.</p>
          <p className="footer-copyright">© {currentYear} BrickBytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
