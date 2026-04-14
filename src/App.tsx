import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MarketingNav } from './components/marketing/MarketingNav';
import { MarketingFooter } from './components/marketing/MarketingFooter';
import { AppRoutes } from './router';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <MarketingNav />
      <main style={{ paddingTop: '80px' }}>
        <AppRoutes />
      </main>
      <MarketingFooter />
    </div>
  );
}

export default App;
