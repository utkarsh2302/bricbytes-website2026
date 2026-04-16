import { gsap } from '../gsap-config';

interface FeatureCardAnimOptions {
  cardSelector: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

export function setupFeatureCardAnimation(options: FeatureCardAnimOptions) {
  const {
    cardSelector,
    direction = 'up',
    duration = 0.6,
  } = options;

  const card = document.querySelector(cardSelector) as HTMLElement;
  if (!card) return;

  // Set initial state
  const fromVars: Record<string, number | string> = {
    opacity: 0,
  };

  if (direction === 'left') fromVars.x = -60;
  if (direction === 'right') fromVars.x = 60;
  if (direction === 'up') fromVars.y = 60;
  if (direction === 'down') fromVars.y = -60;

  gsap.set(card, fromVars);

  // Scroll trigger animation
  gsap.to(card, {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      end: 'top 50%',
      once: true,
    },
  });

  // Hover tilt effect
  const handleMouseMove = (e: MouseEvent) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate tilt
    const rotateX = (y / rect.height) * -10;
    const rotateY = (x / rect.width) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1200,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
}
