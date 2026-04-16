import { gsap } from '../gsap-config';

interface CTAButtonAnimOptions {
  buttonSelector: string;
  magneticDistance?: number;
  rippleColor?: string;
}

export function setupCTAButtonAnimation(options: CTAButtonAnimOptions) {
  const {
    buttonSelector,
    magneticDistance = 12,
    rippleColor = 'rgba(255, 255, 255, 0.4)',
  } = options;

  const button = document.querySelector(buttonSelector) as HTMLElement;
  if (!button) return;

  // Magnetic hover
  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const angle = Math.atan2(deltaY, deltaX);
    const mouseX = Math.cos(angle) * magneticDistance;
    const mouseY = Math.sin(angle) * magneticDistance;

    gsap.to(button, {
      x: mouseX,
      y: mouseY,
      duration: 0.4,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'power1.inOut',
    });
  };

  const handleClick = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create ripple
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = rippleColor;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'translate(-50%, -50%)';

    if (getComputedStyle(button).position === 'static') {
      button.style.position = 'relative';
    }

    button.appendChild(ripple);

    gsap.to(ripple, {
      width: 200,
      height: 200,
      opacity: 0,
      duration: 0.6,
      ease: 'power1.out',
      onComplete: () => {
        ripple.remove();
      },
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);
  button.addEventListener('click', handleClick);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
    button.removeEventListener('click', handleClick);
  };
}
