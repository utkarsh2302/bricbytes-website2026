import { useEffect, useRef } from 'react';
import { gsap } from '../gsap-config';

interface UseRippleClickOptions {
  color?: string;
  duration?: number;
  maxRadius?: number;
}

export function useRippleClick(options: UseRippleClickOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const {
    color = 'rgba(255, 255, 255, 0.6)',
    duration = 0.6,
    maxRadius = 100,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple circle
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.pointerEvents = 'none';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.borderRadius = '50%';
      ripple.style.background = color;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.transform = 'translate(-50%, -50%)';

      // Ensure element has position relative
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }

      element.appendChild(ripple);

      // Animate ripple
      gsap.to(ripple, {
        width: maxRadius * 2,
        height: maxRadius * 2,
        opacity: 0,
        duration,
        ease: 'power1.out',
        onComplete: () => {
          ripple.remove();
        },
      });
    };

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [color, duration, maxRadius]);

  return ref;
}
