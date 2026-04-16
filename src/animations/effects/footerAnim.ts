import { gsap } from '../gsap-config';

interface FooterAnimOptions {
  footerSelector: string;
  contentSelectors: string[];
}

export function setupFooterAnimation(options: FooterAnimOptions) {
  const {
    footerSelector,
    contentSelectors,
  } = options;

  const footer = document.querySelector(footerSelector) as HTMLElement;
  if (!footer) return;

  // Set up scroll reveal for footer sections
  contentSelectors.forEach((selector) => {
    const elements = footer.querySelectorAll(selector) as NodeListOf<HTMLElement>;

    elements.forEach((element, index) => {
      gsap.set(element, { opacity: 0, y: 20 });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
          once: true,
        },
      });
    });
  });

  // Hover underline effect on footer links
  const footerLinks = footer.querySelectorAll('a') as NodeListOf<HTMLElement>;

  footerLinks.forEach(link => {
    const handleMouseEnter = () => {
      gsap.to(link, {
        textDecoration: 'underline',
        duration: 0.3,
        ease: 'power1.inOut',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(link, {
        textDecoration: 'none',
        duration: 0.3,
        ease: 'power1.inOut',
      });
    };

    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);
  });
}
