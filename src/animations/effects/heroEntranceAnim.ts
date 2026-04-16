import { gsap } from '../gsap-config';

interface HeroEntranceOptions {
  titleSelector: string;
  underlineSelector: string;
  taglineSelector: string;
  ctasSelector: string;
  trustedSelector: string;
}

export function animateHeroEntrance(options: HeroEntranceOptions) {
  const {
    titleSelector,
    underlineSelector,
    taglineSelector,
    ctasSelector,
    trustedSelector,
  } = options;

  const title = document.querySelector(titleSelector) as HTMLElement;
  const underline = document.querySelector(underlineSelector) as HTMLElement;
  const tagline = document.querySelector(taglineSelector) as HTMLElement;
  const ctas = document.querySelectorAll(ctasSelector) as NodeListOf<HTMLElement>;
  const trusted = document.querySelector(trustedSelector) as HTMLElement;

  if (!title || !underline || !tagline || !trusted) return;

  // Create timeline
  const tl = gsap.timeline();

  // Split title into letters
  const titleText = title.textContent || '';
  title.innerHTML = titleText
    .split('')
    .map(letter => (letter === ' ' ? '&nbsp;' : letter))
    .map(letter => `<span style="display: inline-block; opacity: 0;">${letter}</span>`)
    .join('');

  const titleLetters = Array.from(title.querySelectorAll('span')) as HTMLElement[];

  // Title letter stagger
  tl.to(titleLetters, {
    opacity: 1,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.out',
  }, 0);

  // Underline grows
  gsap.set(underline, { width: 0 });
  tl.to(underline, {
    width: 'auto',
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.2');

  // Tagline fades in
  gsap.set(tagline, { opacity: 0 });
  tl.to(
    tagline,
    {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    },
    '-=0.3'
  );

  // CTAs scale in
  gsap.set(ctas, { scale: 0.8, opacity: 0 });
  tl.to(
    ctas,
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    },
    '-=0.2'
  );

  // Trusted text fades in
  gsap.set(trusted, { opacity: 0 });
  tl.to(
    trusted,
    {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    },
    '-=0.1'
  );

  return tl;
}
