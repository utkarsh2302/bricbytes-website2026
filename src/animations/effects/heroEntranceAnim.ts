import { gsap } from '../gsap-config';

interface HeroEntranceOptions {
  titleSelector: string;
  underlineSelector: string;
  taglineSelector: string;
  ctasSelector: string;
  trustedSelector: string;
}

export function animateHeroEntrance(options: HeroEntranceOptions) {
  const { titleSelector, underlineSelector, taglineSelector, ctasSelector, trustedSelector } = options;

  const title    = document.querySelector(titleSelector)  as HTMLElement;
  const underline = document.querySelector(underlineSelector) as HTMLElement;
  const tagline  = document.querySelector(taglineSelector) as HTMLElement;
  const ctas     = document.querySelectorAll(ctasSelector) as NodeListOf<HTMLElement>;
  const trusted  = document.querySelector(trustedSelector) as HTMLElement;

  if (!title || !underline || !tagline || !trusted) return;

  // Immediately hide container so there's no flash before letter split
  gsap.set(title, { opacity: 0 });

  // Split into per-letter spans
  const raw = title.textContent ?? '';
  title.innerHTML = raw
    .split('')
    .map(char =>
      char === ' '
        ? `<span style="display:inline-block;">&nbsp;</span>`
        : `<span style="display:inline-block;opacity:0;">${char}</span>`
    )
    .join('');

  const letters = Array.from(title.querySelectorAll('span')) as HTMLElement[];

  // Set initial states — GSAP owns these from here
  gsap.set(title,    { opacity: 1 });
  gsap.set(underline, { scaleX: 0, transformOrigin: 'left center' });
  gsap.set(tagline,  { opacity: 0, y: 14 });
  gsap.set(ctas,     { opacity: 0, y: 10 });
  gsap.set(trusted,  { opacity: 0 });

  const tl = gsap.timeline({ delay: 0.2 });

  // 1. Letters cascade in — typewriter cadence
  tl.to(letters, {
    opacity: 1,
    duration: 0.022,
    stagger: 0.032,
    ease: 'none',
  });

  // 2. Underline grows from left (scaleX works at any breakpoint width)
  tl.to(underline, {
    scaleX: 1,
    duration: 0.55,
    ease: 'power3.out',
  }, '-=0.08');

  // 3. Tagline rises up
  tl.to(tagline, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.35');

  // 4. CTAs stagger in
  tl.to(ctas, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: 'power2.out',
  }, '-=0.25');

  // 5. Trusted badge fades
  tl.to(trusted, {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out',
  }, '-=0.1');

  return tl;
}
