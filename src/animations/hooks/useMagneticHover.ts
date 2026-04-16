import { useEffect, useRef } from 'react';
import { gsap } from '../gsap-config';

interface UseMagneticHoverOptions {
  distance?: number;
  ease?: string;
  duration?: number;
}

export function useMagneticHover(options: UseMagneticHoverOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const {
    distance = 15,
    ease = 'power1.inOut',
    duration = 0.4,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Calculate angle and pull button toward cursor
      const angle = Math.atan2(deltaY, deltaX);
      mouseX = Math.cos(angle) * distance;
      mouseY = Math.sin(angle) * distance;

      gsap.to(element, {
        x: mouseX,
        y: mouseY,
        duration,
        ease,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration,
        ease,
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [distance, ease, duration]);

  return ref;
}
