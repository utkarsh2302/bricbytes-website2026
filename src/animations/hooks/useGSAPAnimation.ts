import { useEffect, useRef } from 'react';
import { gsap } from '../gsap-config';

export function useGSAPAnimation(
  onMount?: (element: HTMLElement) => gsap.core.Tween | void
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (onMount) {
      onMount(element);
    }

    return () => {
      // Kill all animations on this element on unmount
      gsap.killTweensOf(element);
    };
  }, [onMount]);

  return ref;
}
