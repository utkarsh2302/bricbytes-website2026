import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../gsap-config';

type RevealDirection = 'left' | 'right' | 'up' | 'down';

interface UseScrollRevealOptions {
  direction?: RevealDirection;
  duration?: number;
  ease?: string;
  distance?: number;
  triggerStart?: string;
  markers?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const {
    direction = 'up',
    duration = 0.6,
    ease = 'power2.out',
    distance = 60,
    triggerStart = 'top 85%',
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state based on direction
    const fromVars: Record<string, number> = {
      opacity: 0,
    };

    if (direction === 'left') fromVars.x = -distance;
    if (direction === 'right') fromVars.x = distance;
    if (direction === 'up') fromVars.y = distance;
    if (direction === 'down') fromVars.y = -distance;

    // Set initial state immediately
    gsap.set(element, fromVars);

    // Create scroll trigger animation
    gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: `top ${parseInt(triggerStart) - 100}px`,
        markers,
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, duration, ease, distance, triggerStart, markers]);

  return ref;
}
