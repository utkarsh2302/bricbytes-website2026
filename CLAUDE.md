# BrickBytes Website — Development & Deployment Workflow

## Critical Deployment Rules

### 1. Pre-Commit Validation (Husky)
- **Husky pre-commit hook** (`npm run build`) runs automatically before every commit
- If build fails → commit is blocked → fix the issue before retrying
- This prevents broken code from reaching GitHub/Vercel
- ✅ **Always commit locally first** — you'll catch errors immediately

### 2. Automatic Vercel Deployment
- GitHub → main branch push → **auto-deploys to Vercel in ~1-2 minutes**
- No manual Vercel CLI needed — just `git push origin main`
- Monitor https://vercel.com/brickbytes (or your Vercel dashboard) to confirm deployment
- Check deployment logs if something looks wrong

### 3. Dark Mode Persistence (Critical)
**Dark mode must be forced BEFORE React renders:**

- `index.html` has a script in `<head>` that sets localStorage and DOM before React loads:
  ```html
  <script>
    localStorage.setItem('brickbytes-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  </script>
  ```
- `src/ThemeContext.tsx` defaults to 'dark' on first load: `return (saved as Theme) || 'dark';`
- If light mode appears on deploy: likely a browser cache issue → hard refresh or clear cache

### 4. CSS Overrides for Inline Styles
- React components may have inline `style={}` props that are hard to override
- Use CSS `!important` to override inline styles when needed:
  ```css
  .hero-robot > div {
    min-width: auto !important;
    min-height: auto !important;
    width: 100% !important;
    height: 100% !important;
  }
  ```
- Document this in code comments so future changes are aware

### 5. Mobile Responsive Testing
- **Always test at these breakpoints** before committing:
  - Desktop: 1440px+
  - Tablet: 768px–1024px
  - Mobile: 640px, 480px, 380px
- Use browser DevTools mobile emulator (F12 → toggle device toolbar)
- Test actual mobile device if possible before final push

## Workflow Checklist

Before every commit:
- [ ] Test locally: `npm run dev` → navigate all pages → test responsive
- [ ] Build locally: `npm run build` (Husky will do this anyway, but catch errors early)
- [ ] Review changes: `git diff` → confirm only intended files changed
- [ ] Commit: `git commit -m "Clear message describing changes"`
- [ ] Push: `git push origin main`
- [ ] Verify Vercel: Check dashboard — deployment should show ✅ in ~2 minutes

## Key Files & Their Purpose

| File | Purpose |
|------|---------|
| `index.html` | Dark mode forced before React loads (critical!) |
| `src/ThemeContext.tsx` | Theme toggle logic, defaults to 'dark' |
| `src/index.css` | CSS variables for light/dark themes (unused in dark-only mode) |
| `src/components/hero/Hero.css` | Responsive hero layout, 5 breakpoints |
| `.husky/pre-commit` | Build validation gate — prevents broken commits |
| `package.json` | Scripts: `npm run dev`, `npm run build`, `npm run lint` |

## Common Issues & Fixes

### Issue: CSS changes not showing on deployed site
- **Likely cause**: Browser cache or CSS not built correctly
- **Fix**: 
  1. Run `npm run build` locally to verify CSS is compiled
  2. Hard refresh browser: Ctrl+Shift+R (Windows)
  3. Clear browser cache or use incognito mode
  4. Check Vercel deployment logs for CSS errors

### Issue: Dark mode showing as light on deploy
- **Likely cause**: index.html script not executed or localStorage cleared
- **Fix**: Ensure `index.html` has the dark-mode forcing script in `<head>`
- Hard refresh deployed site after verifying code is correct

### Issue: Mobile layout broken after changes
- **Likely cause**: Responsive CSS not tested on all breakpoints
- **Fix**: 
  1. `npm run dev` locally
  2. F12 → Device Toolbar → test 640px, 480px, 380px
  3. Fix CSS media queries before committing

### Issue: Build fails after commit
- **Already prevented by Husky**, but if it happens:
- Fix the TypeScript/build error
- `git add .` → `git commit -m "Fix build error"`
- Husky will re-run build check before allowing commit

## No Force-Push or Manual Overrides
- ❌ Never use `git push --force` or `vercel deploy --prod --force` casually
- ❌ Never skip Husky hooks (`--no-verify`)
- ✅ Trust the workflow — Husky catches errors before they reach production

---

**TL;DR**: Test locally (`npm run dev` + `npm run build`), commit (Husky validates), push (`git push origin main`), Vercel auto-deploys in 1-2 min.
