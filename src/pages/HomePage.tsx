import { Hero } from '../components/hero/Hero';
import { HowItWorks } from '../components/howItWorks/HowItWorks';
import { Features } from '../components/features/Features';
import { WhyAI } from '../components/whyAI/WhyAI';
import { Products } from '../components/products/Products';
import { CTASection } from '../components/cta/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <WhyAI />
      <Products />
      <CTASection />
    </>
  );
}
