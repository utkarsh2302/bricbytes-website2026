# GSAP Animation Suite Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task-by-task.

**Goal:** Implement site-wide GSAP animations (entrance stagger, scroll reveals, magnetic buttons, ripple effects, continuous motion) across all pages.

**Architecture:** Modular hooks + effect modules. Keep Framer Motion for scroll parallax. GSAP handles entrance, scroll reveals, hover/click interactions.

**Tech Stack:** GSAP 3.12+, React hooks, ScrollTrigger plugin

---

## Phase 1: Core Setup (5 tasks)

### Task 1: Create GSAP Config & Register Plugins
- Create: `src/animations/gsap-config.ts`
- Register ScrollTrigger, set global defaults
- Code: Import gsap, register ScrollTrigger plugin, set `duration: 0.6`, `ease: 'power2.out'`
- Commit: "feat: setup GSAP with ScrollTrigger plugin"

### Task 2: Create useGSAPAnimation Hook
- Create: `src/animations/hooks/useGSAPAnimation.ts`
- Generic ref-based animation hook, kills tweens on unmount
- Code: Export function with ref return, onMount callback, cleanup
- Commit: "feat: add useGSAPAnimation hook"

### Task 3: Create useScrollReveal Hook
- Create: `src/animations/hooks/useScrollReveal.ts`
- ScrollTrigger wrapper: set initial state, animate on scroll
- Code: Direction (left/right/up/down), distance, duration, ease
- Commit: "feat: add useScrollReveal hook"

### Task 4: Create useMagneticHover Hook
- Create: `src/animations/hooks/useMagneticHover.ts`
- Track mouse, pull element toward cursor, spring return
- Code: Track mouse position, calculate angle, animate X/Y offset
- Commit: "feat: add useMagneticHover hook"

### Task 5: Create useRippleClick Hook
- Create: `src/animations/hooks/useRippleClick.ts`
- On click, create expanding circle that fades out
- Code: Create div, append to button, animate scale + opacity
- Commit: "feat: add useRippleClick hook"

---

## Phase 2: Hero & Navbar (4 tasks)

### Task 6: Create Hero Entrance Animation Effect
- Create: `src/animations/effects/heroEntranceAnim.ts`
- Letter stagger for title, underline grows, tagline fades, CTAs scale
- Code: Timeline with staggered letter animation, synchronize underline, tagline, CTAs
- Commit: "feat: add hero entrance animation"

### Task 7: Integrate Hero Entrance in Hero.tsx
- Modify: `src/components/hero/Hero.tsx`
- Import effect, call in useEffect on mount
- Add selectors: `.hero-title-minimal`, `.hero-horizon-line`, `.hero-tagline`, buttons, `.hero-trusted`
- Test: Logo loads, animations play
- Commit: "feat: integrate hero entrance animation"

### Task 8: Create Navbar Scroll Reveal Effect
- Create: `src/animations/effects/navbarAnim.ts`
- Logo/links entrance, glass backdrop on scroll > 20px
- Code: Initial gsap.from for entrance, scroll listener for backdrop blur
- Commit: "feat: add navbar animations"

### Task 9: Integrate Navbar Animations in Navbar.tsx
- Modify: `src/components/layout/Navbar.tsx`
- Add useEffect, call initializeNavbarAnimation
- Test: Logo/links fade in, glass backdrop triggers on scroll
- Commit: "feat: integrate navbar animations"

---

## Phase 3: Features & CTAs (5 tasks)

### Task 10: Create Feature Card Scroll Reveal & Hover Tilt
- Create: `src/animations/effects/featureCardAnim.ts`
- Scroll reveal (direction: left/right alternating), hover tilt (rotateX/Y)
- Code: ScrollTrigger + fromVars for direction, mousemove listener for tilt
- Commit: "feat: add feature card animations"

### Task 11: Integrate Feature Card Animations
- Modify: `src/components/features/FeatureCard.tsx`
- Add ref, useEffect, call setupFeatureCardAnimation
- Alternate direction based on index (even=left, odd=right)
- Test: Cards slide in, hover triggers tilt
- Commit: "feat: integrate feature card animations"

### Task 12: Create CTA Button Magnetic + Ripple
- Create: `src/animations/effects/ctaButtonAnim.ts`
- Magnetic hover (track cursor, pull button), ripple on click
- Code: mousemove listener + angle calculation, click handler creates ripple div
- Commit: "feat: add CTA button animations"

### Task 13: Integrate CTA Animations in Hero.tsx
- Modify: `src/components/hero/Hero.tsx`
- Add data-button attributes, useEffect calls setupCTAButtonAnimation for each button
- Test: Buttons pull toward cursor, click shows ripple
- Commit: "feat: integrate hero CTA button animations"

### Task 14: Integrate CTA Animations in CTA Section
- Modify: `src/components/*/CTASection.tsx` (wherever CTA section lives)
- Add data-button attributes, useEffect calls setupCTAButtonAnimation
- Test: Same magnetic + ripple effect as hero CTAs
- Commit: "feat: integrate CTA section button animations"

---

## Phase 4: Footer & Secondary Pages (3 tasks)

### Task 15: Create Footer Scroll Reveal
- Create: `src/animations/effects/footerAnim.ts`
- Footer sections scroll reveal with stagger, link hover underline
- Code: querySelectorAll for footer-column, animate opacity/Y with stagger, link hover listeners
- Commit: "feat: add footer animations"

### Task 16: Integrate Footer Animations
- Modify: `src/components/layout/Footer.tsx`
- Add useEffect, call setupFooterAnimation with selectors
- Test: Footer sections fade in staggered, links get underline on hover
- Commit: "feat: integrate footer animations"

### Task 17: Apply Animations to About & Contact Pages
- Modify: `src/pages/AboutPage.tsx`
  - Page title entrance (animateHeroEntrance)
  - Content sections with useScrollReveal
- Modify: `src/pages/ContactPage.tsx`
  - CTA button (setupCTAButtonAnimation)
  - Page content scroll reveals
- Test: Both pages have consistent animations
- Commit: "feat: apply animations to secondary pages"

---

## Phase 5: Accessibility & Testing (2 tasks)

### Task 18: Add Accessibility Support (prefers-reduced-motion)
- Create: `src/animations/hooks/usePrefersReducedMotion.ts`
- Create: `src/animations/accessibility.ts`
- Code: Check window.matchMedia('(prefers-reduced-motion: reduce)'), disable GSAP animations if true
- Update `gsap-config.ts` to check and set `gsap.defaults({ duration: 0 })` if reduced motion
- Test: System setting → Accessibility → Reduced Motion → verify animations disabled
- Commit: "feat: add prefers-reduced-motion accessibility support"

### Task 19: Test All Animations Across Breakpoints
- Test desktop (1440px): All entrance animations, scroll reveals, hover effects, navbar glass backdrop
- Test tablet (768px): All animations work, no overflow
- Test mobile (375px): Entrance animations work, scroll reveals, button taps smooth
- Test keyboard: Tab through site, all interactive elements accessible
- Commit changes if any fixes needed
- Commit: "test: verify animations across all breakpoints"

---

## Phase 6: Final Deployment

### Task 20: Build & Deploy
- Run: `npm run build` — verify no errors
- Run: `npm run preview` — verify production build works
- Push: `git push origin main`
- Verify: Vercel auto-deploys in 1-2 min
- Final commit: Verify all animation commits in history
- Commit: "feat: GSAP animation suite complete and deployed"

---

## Files Created
```
src/animations/
  ├── gsap-config.ts
  ├── hooks/
  │   ├── useGSAPAnimation.ts
  │   ├── useScrollReveal.ts
  │   ├── useMagneticHover.ts
  │   ├── useRippleClick.ts
  │   └── usePrefersReducedMotion.ts
  └── effects/
      ├── heroEntranceAnim.ts
      ├── navbarAnim.ts
      ├── featureCardAnim.ts
      ├── ctaButtonAnim.ts
      └── footerAnim.ts
```

## Files Modified
- `src/components/hero/Hero.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/features/FeatureCard.tsx`
- `src/components/*/CTASection.tsx`
- `src/components/layout/Footer.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/ContactPage.tsx`

---

## Execution

**Plan is ready. Two options:**

1. **Subagent-Driven** (recommended) — Fresh subagent per task, review between tasks
2. **Inline Execution** — Execute tasks in this session with checkpoints

Which approach?
