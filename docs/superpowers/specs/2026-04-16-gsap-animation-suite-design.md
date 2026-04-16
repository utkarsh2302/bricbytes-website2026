# BrickBytes GSAP Animation Suite Design

**Date:** 2026-04-16  
**Status:** Approved  
**Scope:** Full-site animation strategy using GSAP (entrance, scroll-triggered, hover, continuous)  
**Goal:** Premium, cohesive motion language across desktop & mobile with conversion-focused CTA polish

---

## Design Overview

Implement a **GSAP Timeline Master Suite** that orchestrates all animations site-wide while preserving existing Framer Motion scroll parallax (robot Y, content Y transforms). GSAP handles entrance stagger, scroll reveals, hover interactions, and ambient continuous motion.

**Core Principle:** One unified motion language with coordinated timing across all pages and components.

---

## Architecture: Master Timeline + ScrollTrigger

### Plugin & Setup
- **GSAP plugins:** ScrollTrigger (scroll-triggered animations), Draggable (if needed for future interactions)
- **Config file:** `src/animations/gsap-config.ts` — registers plugins, sets global defaults (ease, duration)
- **Master orchestration:** `src/animations/masterTimeline.ts` — coordinates page-level entrance animations

### Animation Split (GSAP vs Framer Motion)
- **Framer Motion** (keep): Continuous scroll-linked transforms (robot Y position, content Y parallax, opacity fades based on scrollYProgress)
- **GSAP** (new): All other animations
  - Entrance stagger (title letters, CTAs, cards)
  - Scroll-triggered reveals (elements animating in as viewport intersects)
  - Hover/interaction effects (magnetic buttons, ripple clicks, card tilt)
  - Continuous ambient motion (floating bob, pulse loops)

**Why this split?** Framer Motion's `useTransform` is optimized for continuous scroll tracking; GSAP Timeline excels at orchestrated, discrete animations. No conflicts — they operate on different CSS properties.

---

## Animation Blueprint by Section

### 1. Hero Section

**Page Load Entrance:**
- Title (h1.hero-title-minimal): Letters stagger in with `letter-spacing` grow, each letter 0.3s duration, cubic-bezier easing
- Underline (div.hero-horizon-line): Grows width from 0 to full, synchronized with final title letter
- Tagline (p.hero-tagline): Fades in (opacity 0→1) when title completes
- CTAs (div.hero-ctas buttons): Scale from 0.8 to 1, staggered 0.1s apart, trigger after tagline
- Trusted text (p.hero-trusted): Fades in last

**Scroll Behavior:**
- Robot: Y position via Framer Motion `useTransform(scrollYProgress, [0, 1], [0, 80])` (keep existing)
- Robot: Opacity fade via Framer Motion `useTransform(scrollYProgress, [0, 0.8], [1, 0])` (keep existing)
- Content: Y position via Framer Motion (keep existing)

**Hover/Interaction:**
- CTA buttons: Magnetic effect — track cursor X/Y, pull button toward mouse (offset ±10px), smooth spring return on leave
- CTA buttons: On active (click), trigger ripple effect — animated circle expands from click point, opacity 1→0 over 600ms

**Continuous Motion:**
- Robot: Gentle floating bob (Y offset ±5px, 3s cycle, ease-in-out)
- Robot: Subtle rotation hint (±2deg, 4s cycle, repeats infinitely)

---

### 2. Navbar

**Page Load:**
- Logo: Fades in with slight scale (0.9→1) over 0.5s
- Links: Slide in from top (translateY -20px → 0) with 0.1s stagger between each link
- CTA button: Scale from 0.8 to 1, synced with last link

**Scroll Behavior:**
- At scroll > 20px: Navbar glass backdrop animates in
  - Background opacity: 0 → 0.6 (or as per design)
  - Backdrop-filter blur: 0 → 20px
  - Border opacity: 0 → 1
  - Duration: 0.4s, triggered by ScrollTrigger

**Hamburger Menu (Mobile):**
- Icon rotation: 0deg → 45deg on click (or X icon animation)
- Menu items: Cascade down from top with 0.08s stagger when menu opens
- Menu items: Reverse cascade on close

---

### 3. Features Section

**Scroll Reveal:**
- Each feature card enters as viewport scrolls to it
- Card 1: Slides in from left (-100px) + fade
- Card 2: Slides in from right (+100px) + fade
- Card 3: Slides in from left (alternate pattern)
- Card 4: Slides in from right
- Stagger: 0.15s between each card
- Trigger: ScrollTrigger, `onEnter` when card is 20% visible in viewport
- Duration: 0.6s per card, ease: `power2.out`

**Hover Interaction:**
- Card: Tilts slightly (rotateX: ±5deg, rotateY: ±5deg based on mouse position)
- Card: Shadow deepens (box-shadow increases in blur/offset)
- Icon/text: Highlight color shifts (use accent color)

**Continuous Motion:**
- Cards: Subtle shimmer (gradient animate across card, 0.5 opacity, 3s cycle)

---

### 4. CTA Section

**Entrance Animation:**
- Headline: Letter stagger (similar to hero, 0.2s per letter)
- Subtext: Fades in staggered after headline
- Buttons: Scale from 0.8 to 1, with stagger

**Button Hover/Interaction:**
- Magnetic pull: Track cursor, offset toward mouse ±12px
- Ripple on click: Animated expanding circle, white fill opacity 1→0 over 600ms
- Inner glow: Button background brightens on hover

**Continuous Motion:**
- Gradient animate: Subtle color shift across button background (slow pulse, 4s cycle)

---

### 5. Footer

**Scroll Reveal:**
- Links and content fade in + slide up (translateY 20px → 0) as user scrolls to footer
- Stagger: 0.1s between link groups
- Trigger: ScrollTrigger when footer is 30% in viewport

**Hover:**
- Links: Underline animates in on hover (width 0 → 100%, 0.3s)

---

### 6. Secondary Pages (About, Contact)

**Entrance:**
- Page title: Letter stagger (consistent with hero)
- Content blocks: Fade in + slide up (staggered)
- Images/cards: Scroll reveal pattern (same as Features section)

**Consistency:**
- All hover effects match primary page patterns (magnetic buttons, link underlines)
- All continuous motion uses same easing curves and durations

---

## Implementation Strategy

### File Structure
```
src/
  animations/
    gsap-config.ts                 -- Plugin registration, global defaults
    masterTimeline.ts              -- Page-level entrance orchestration
    
    hooks/
      useGSAPAnimation.ts           -- Generic ref-based animation hook
      useScrollReveal.ts            -- ScrollTrigger wrapper for scroll-triggered reveals
      useMagneticHover.ts           -- Magnetic button hover effect
      useRippleClick.ts             -- Ripple effect on click
      useGSAPStagger.ts             -- Reusable stagger utility
    
    effects/
      heroEntranceAnim.ts           -- Hero title/underline/cta entrance
      navbarAnim.ts                 -- Navbar scroll reveal + glass backdrop
      featureCardAnim.ts            -- Feature card scroll reveals + hover tilt
      ctaButtonAnim.ts              -- CTA button magnetic + ripple
      footerAnim.ts                 -- Footer scroll reveal
      scrollListeners.ts            -- Global scroll event handlers
```

### Integration Points

| Component | Animation | Method |
|-----------|-----------|--------|
| Hero.tsx | Title/underline/CTA entrance | `useGSAPAnimation` hook |
| Hero.tsx | Robot parallax | Keep Framer Motion |
| Navbar.tsx | Logo/links entrance + glass backdrop | `useScrollReveal` + custom scroll listener |
| FeatureCard.tsx | Scroll reveal + hover tilt | `useScrollReveal` + `useMagneticHover` |
| Button (CTAs) | Magnetic hover + ripple click | `useMagneticHover` + `useRippleClick` |
| Footer.tsx | Scroll reveal + link hover | `useScrollReveal` + custom hover handler |

### Hook Design Pattern

Each hook returns:
- `ref` — attach to DOM element
- `triggerAnimation()` — manual animation trigger (optional)
- Configuration options (duration, ease, stagger)

Example:
```javascript
const { ref, triggerAnimation } = useScrollReveal({
  direction: 'left',     // 'left' | 'right' | 'up' | 'down'
  duration: 0.6,
  ease: 'power2.out'
});
```

---

## Easing & Timing Reference

| Animation Type | Duration | Easing | Use Case |
|---|---|---|---|
| Entrance stagger | 0.2–0.3s per item | `power2.out` | Title letters, links |
| Scroll reveal | 0.5–0.8s | `power2.out` | Cards, sections |
| Hover (magnetic) | 0.4s | `power1.inOut` | Smooth tracking |
| Click ripple | 0.6s | `power1.out` | Expand & fade |
| Continuous motion | 3–4s | `sine.inOut` | Bob, pulse, shimmer |
| Glass backdrop | 0.4s | `power1.inOut` | Navbar scroll reveal |

---

## Performance Considerations

- **Desktop:** Full animations, no throttling
- **Mobile:** Same as desktop (user preference for premium feel over performance)
- **Optimization:**
  - Use `will-change` CSS on frequently animated elements
  - Lazy-load GSAP plugins (load ScrollTrigger only on pages with scroll animations)
  - Avoid animating layout properties (top/left) — use transform instead
  - Use `prefers-reduced-motion` media query for accessibility (disable animations if user preference)

---

## Accessibility

- Add `prefers-reduced-motion` handler: If enabled, reduce or disable animations
- Ensure all interactive elements (buttons, links) remain accessible with keyboard navigation
- Animations must not obstruct or interfere with content legibility

---

## Testing Checklist

- [ ] Hero entrance animates on page load
- [ ] Scroll parallax (robot Y, content Y) works with scroll
- [ ] Navbar glass backdrop triggers at scroll > 20px
- [ ] Feature cards reveal as viewport scrolles
- [ ] CTA buttons have magnetic hover + ripple click
- [ ] Footer content reveals at bottom scroll
- [ ] Mobile: Full animations work on mobile viewport
- [ ] Responsive: Animations adjust to screen size (no overflow/clipping)
- [ ] Accessibility: Animations respect `prefers-reduced-motion`

---

## Dependencies

- GSAP 3.12+ (already installed)
- React hooks for component integration
- Framer Motion (keep for parallax)
- Three.js (for 3D robot, already in use)

---

## Timeline & Scope

**Phase 1:** Core setup (gsap-config.ts, hooks, masterTimeline.ts)  
**Phase 2:** Hero + Navbar animations  
**Phase 3:** Features + CTA section animations  
**Phase 4:** Footer + secondary pages  
**Phase 5:** Polish, refinement, testing  

**Total scope:** Full-site animation suite, all pages, all interaction types.
