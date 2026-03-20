# Reflect — Pre-Launch Checklist
_Audit run: 2026-03-21_

---

## Issues Found & Fixed (commit 7a62e42)

| # | Category | Issue | Status |
|---|----------|-------|--------|
| 1 | SEO | Canonical URL pointed to `reflect.studio` instead of `ireflect.app` | ✅ Fixed |
| 2 | SEO | `og:url` pointed to `reflect.studio` | ✅ Fixed |
| 3 | SEO | `og:image` and `twitter:image` URLs used `reflect.studio` domain | ✅ Fixed |
| 4 | SEO | Meta description was 190 chars — Google truncates at ~155 | ✅ Fixed (now 145 chars) |
| 5 | SEO | `og:locale` meta tag missing | ✅ Fixed (added `en_US`) |
| 6 | SEO | No JSON-LD structured data | ✅ Fixed (added `SoftwareApplication` + `FAQPage` schemas) |
| 7 | SEO | `twitter:card` was `summary_large_image` but image is 200×200 square | ✅ Fixed (changed to `summary`) |
| 8 | Accessibility | Feature headings used `<h4>` — skipped `<h3>`, breaking WCAG 1.3.1 heading hierarchy | ✅ Fixed (h4 → h3, CSS updated) |
| 9 | Mobile / A11y | `.cookie-btn` tap target was ~30px — below 44px WCAG minimum | ✅ Fixed (`min-height: 44px`) |
| 10 | Mobile / A11y | `.footer-waitlist-btn` tap target was ~14px (`padding: 0`) | ✅ Fixed (`padding: 0.75rem 0`) |
| 11 | Mobile / A11y | `.waitlist-close` tap target was ~40px — just under 44px | ✅ Fixed (`min-width/height: 44px`) |
| 12 | UX | Cookie banner privacy link opened same-tab, navigating away before consent | ✅ Fixed (`target="_blank"`) |
| 13 | Mobile | No `theme-color` meta for browser chrome styling | ✅ Fixed (`#FAFAF8`) |
| 14 | Code quality | Stale PostHog comment said "replace YOUR_POSTHOG_KEY" when key was already set | ✅ Fixed |

---

## Lighthouse Scores

> Lighthouse requires a live browser — run manually in Chrome DevTools → Lighthouse tab.
> Expected improvements from this audit: Accessibility +5–10 pts (heading hierarchy, tap targets), SEO +5 pts (structured data, canonical fix).

| Category | Before | After | Target |
|----------|--------|-------|--------|
| Performance | _run manually_ | _run manually_ | ≥ 90 |
| Accessibility | _run manually_ | _run manually_ | ≥ 90 |
| Best Practices | _run manually_ | _run manually_ | ≥ 90 |
| SEO | _run manually_ | _run manually_ | ≥ 90 |

**To run:** Open `https://ireflect.app` in Chrome → DevTools (F12) → Lighthouse tab → Analyze page load (Mobile).

---

## Assets

| Asset | Status |
|-------|--------|
| `reflect-logo.webp` | ✅ Exists (1.2 KB, 200×200) |
| `reflect-logo.png` | ✅ Exists (13 KB, 200×200) |
| `privacy.html` | ✅ Exists |
| `terms.html` | ✅ Exists |
| `config.js` | ✅ Exists |
| Supabase anon key in `config.js` | ✅ Expected — protected by RLS |
| PostHog key in `index.html` | ✅ Expected — client-side analytics key |

---

## Manual Actions Required

| # | Action | Priority |
|---|--------|----------|
| 1 | **Verify `ireflect.app` domain in Resend dashboard** — `hello@ireflect.app` must be a verified sender before welcome emails deliver | 🔴 Blocker |
| 2 | **Create an OG image at 1200×630 px** — current `reflect-logo.webp` is 200×200 and will not render as a rich preview on LinkedIn, Slack, or iMessage. Update `og:image` and `twitter:image` once asset is ready | 🔴 High |
| 3 | **Set up Database Webhook in Supabase** — Dashboard → Database → Webhooks → Create, pointing `waitlist` INSERT events to the deployed Edge Function URL | 🔴 Blocker for emails |
| 4 | **Verify `ireflect.app` DNS** — confirm the domain resolves correctly and Vercel deployment is live | 🔴 Blocker |
| 5 | **Set Resend API key as Supabase secret** — `supabase secrets set RESEND_API_KEY=re_xxx` (if not done yet) | 🔴 Blocker for emails |
| 6 | **Run Lighthouse audit** on the live URL and fix any category scoring below 90 | 🟡 Medium |
| 7 | **Create a 32×32 favicon PNG** — current favicon is a 39 KB JPEG photo; browsers prefer a small purpose-sized PNG or SVG | 🟡 Medium |
| 8 | **Create a 180×180 Apple Touch Icon PNG** — current apple-touch-icon is the same 39 KB JPEG | 🟡 Medium |
| 9 | **Add `twitter:site` meta tag** once you know your Twitter/X handle — e.g. `<meta name="twitter:site" content="@reflectapp">` | 🟢 Low |
| 10 | **Verify Supabase RLS policies** — confirm the anon key cannot SELECT or DELETE rows (only INSERT) | 🟡 Medium |
| 11 | **Test welcome email end-to-end** — submit a real signup, confirm email arrives with correct name and formatting | 🔴 Blocker |

---

## Items Reviewed — No Action Needed

| Item | Notes |
|------|-------|
| All internal links (`privacy.html`, `terms.html`) | Files exist, links resolve |
| PostHog async loading | `array.js` is loaded with `async = true` — non-blocking |
| Preload tag for `reflect-logo.webp` | Present in `<head>` at line 12 |
| Viewport meta tag | Present and correct, no `user-scalable=no` |
| Modal ARIA roles | `role="dialog"`, `aria-modal`, `aria-labelledby` all correct |
| Modal focus trap | Tab/Shift+Tab cycles within modal, Escape closes |
| `aria-hidden` on decorative elements | Step numbers, feature icons, success icon all hidden |
| Visually-hidden form labels | Both name and email inputs have `<label>` elements |
| Autocomplete attributes | `given-name` and `email` set correctly |
| Footer year | Injected dynamically via JS |
| Duplicate email handling | Caught via error code `23505`, shown to user |
| Cookie consent PostHog opt-in/out | Correctly calls `posthog.opt_in_capturing()` / ignored on decline |
| Google Fonts preconnect | Both `fonts.googleapis.com` and `fonts.gstatic.com` with `crossorigin` |
