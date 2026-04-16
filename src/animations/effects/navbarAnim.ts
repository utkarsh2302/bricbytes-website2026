import { gsap } from '../gsap-config';

interface NavbarAnimOptions {
  navbarSelector: string;
  logoSelector: string;
  linksSelector: string;
  scrollThreshold?: number;
}

export function initializeNavbarAnimation(options: NavbarAnimOptions) {
  const {
    navbarSelector,
    logoSelector,
    linksSelector,
    scrollThreshold = 20,
  } = options;

  const navbar = document.querySelector(navbarSelector) as HTMLElement;
  const logo = document.querySelector(logoSelector) as HTMLElement;
  const links = document.querySelectorAll(linksSelector) as NodeListOf<HTMLElement>;

  if (!navbar) return;

  // Initial entrance animations
  if (logo) {
    gsap.from(logo, {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      ease: 'power2.out',
    });
  }

  if (links.length > 0) {
    gsap.from(links, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.2,
    });
  }

  // Scroll listener for glass backdrop
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold && lastScrollY <= scrollThreshold) {
      // Scrolled down past threshold
      gsap.to(navbar, {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottomColor: 'rgba(255, 255, 255, 0.06)',
        duration: 0.3,
        ease: 'power1.inOut',
      });
    } else if (currentScrollY <= scrollThreshold && lastScrollY > scrollThreshold) {
      // Scrolled back up to top
      gsap.to(navbar, {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        borderBottomColor: 'transparent',
        duration: 0.3,
        ease: 'power1.inOut',
      });
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}
