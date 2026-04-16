import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Global animation defaults
gsap.defaults({
  duration: prefersReduced ? 0 : 0.6,
  ease: 'power2.out',
});

// Global scroll trigger defaults
ScrollTrigger.defaults({
  trigger: undefined,
  onEnter: undefined,
  markers: false,
});

export { gsap, ScrollTrigger };
