import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MarketingHome } from './pages/MarketingHome';
import { FeaturesPage } from './pages/FeaturesPage';
import { PlotsPage } from './pages/PlotsPage';
import { FlatsPage } from './pages/FlatsPage';
import { PricingPage } from './pages/PricingPage';
import { BrokerPage } from './pages/BrokerPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MarketingHome />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/plots" element={<PlotsPage />} />
        <Route path="/flats" element={<FlatsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/broker-partners" element={<BrokerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}
