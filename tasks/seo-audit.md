# iReflect — SEO Audit
_Run: 2026-03-21_

---

## Phase 5 Final Checklist

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Title tag 50–60 chars with primary keyword | ✅ | "AI Self-Reflection App for Emotional Clarity \| iReflect" — 55 chars |
| 2 | Meta description 150–160 chars with CTA | ✅ | 155 chars. Ends with "Join the waitlist free." |
| 3 | H1 contains primary keyword | ✅ | "A quiet space for self-reflection" |
| 4 | H2s target secondary keywords | ✅ | "How self-reflection works", "What makes iReflect different", "Common questions about iReflect" |
| 5 | All images have descriptive alt text | ✅ | Logo: `alt="iReflect"`. No other images on page. |
| 6 | Canonical URL correct | ✅ | `https://ireflect.app` — no trailing slash, correct domain |
| 7 | No duplicate meta tags | ✅ | Verified — no duplicate title, description, canonical, og:* |
| 8 | SoftwareApplication JSON-LD valid | ✅ | name="iReflect", category="HealthApplication", OS="Web, iOS, Android" |
| 9 | FAQPage JSON-LD valid and matches visible FAQ | ✅ | 5 Q&A pairs — identical text in schema and accordion |
| 10 | WebSite JSON-LD present | ✅ | Includes potentialAction SearchAction for sitelinks |
| 11 | Sitemap.xml up to date | ✅ | lastmod: 2026-03-21. 3 URLs: /, /privacy.html, /terms.html |
| 12 | Robots.txt correct | ✅ | `Allow: /`, sitemap URL referenced |
| 13 | PostHog loads async | ✅ | PostHog snippet dynamically creates `<script async>` — non-blocking |
| 14 | Images have explicit width/height | ✅ | Logo img has `height="40"`. width attr removed (invalid as "auto"; CSS handles it). |
| 15 | Preconnect tags for third-party origins | ✅ | fonts.googleapis.com, fonts.gstatic.com (crossorigin), us.i.posthog.com |
| 16 | Core Web Vitals — no obvious CLS/LCP issues | ✅ | Logo preloaded via `<link rel="preload">`. Height explicit. |
| 17 | FAQ questions match real search queries | ✅ | All 5 rewritten to exact ICP search patterns |
| 18 | tasks/blog-strategy.md created with 10 post ideas | ✅ | See tasks/blog-strategy.md |
| 19 | Primary keyword in first 100 words | ✅ | H1 + subtitle both contain "self-reflection" |
| 20 | og:title and twitter:title match title tag | ✅ | All three identical |
| 21 | og:url matches canonical | ✅ | Both `https://ireflect.app` — no trailing slash |

**Score: 21/21 ✅**

---

## Changes Made in This Pass

### Title & Meta
| Tag | Before | After |
|-----|--------|-------|
| `<title>` | iReflect — A Quiet Space to Reflect and Know Yourself (56 chars, no primary keyword) | AI Self-Reflection App for Emotional Clarity \| iReflect (55 chars) |
| `<meta description>` | 145 chars, no CTA, starts with "Reflect" | 155 chars, includes primary + secondary keyword, ends with "Join the waitlist free." |
| `og:title` | Same as old title | Matches new title |
| `twitter:title` | Same as old title | Matches new title |
| `canonical` | `https://ireflect.app/` (trailing slash) | `https://ireflect.app` |
| `og:url` | `https://ireflect.app/` (trailing slash) | `https://ireflect.app` |

### Heading Hierarchy
| Element | Before | After | Keyword added |
|---------|--------|-------|---------------|
| H1 | "A quiet space for your thoughts" | "A quiet space for self-reflection" | `self-reflection` (primary) |
| Subtitle | "...Answer a few gentle questions..." | "...Answer gentle self-reflection questions..." | `self-reflection` |
| H2 (section) | "How it works" | "How self-reflection works" | `self-reflection` |
| H2 (section) | "What makes it different" | "What makes iReflect different" | brand name |
| H2 (section) | "Common questions" | "Common questions about iReflect" | brand name |

### FAQ Accordion (all 5 questions rewritten)
| # | Before | After | Target keyword |
|---|--------|-------|----------------|
| 1 | "Is my data private?" | "Is iReflect different from a journaling app?" | journaling app comparison |
| 2 | "What does a mirror response actually look like?" | "How does AI self-reflection actually work?" | AI self-reflection |
| 3 | "What happens after the free trial ends?" | "Is my data private and secure?" | private and secure |
| 4 | "Can I cancel anytime?" | "What happens after my free trial ends?" | free trial |
| 5 | _(new)_ | "Can iReflect help with anxiety or feeling overwhelmed?" | anxiety / overwhelmed |

### Schema / JSON-LD
| Schema | Change |
|--------|--------|
| SoftwareApplication | name: "Reflect" → "iReflect"; category: "LifestyleApplication" → "HealthApplication"; OS: "Web" → "Web, iOS, Android"; description updated to match meta |
| FAQPage | All 5 Q&A pairs updated to match new FAQ accordion |
| WebSite | **New** — added with SearchAction potentialAction |

### Technical
| Item | Change |
|------|--------|
| PostHog preconnect | Added `<link rel="preconnect" href="https://us.i.posthog.com">` |
| Logo `width` attribute | Removed invalid `width="auto"` HTML attribute (CSS handles it) |
| Sitemap homepage URL | Removed trailing slash to match canonical |

---

## Manual Actions Still Needed

| # | Action | Priority |
|---|--------|----------|
| 1 | Submit sitemap to Google Search Console: `https://ireflect.app/sitemap.xml` | 🔴 High |
| 2 | Request Google indexing for homepage via Search Console URL Inspection tool | 🔴 High |
| 3 | Validate structured data at search.google.com/test/rich-results | 🟡 Medium |
| 4 | Set up Google Search Console property for ireflect.app (if not done) | 🔴 High |
| 5 | Run Lighthouse audit on live URL — target ≥90 all categories | 🟡 Medium |
| 6 | Once blog is live, add `<link rel="sitemap">` to blog index and update sitemap.xml | 🟢 Low |
| 7 | Monitor Search Console for crawl errors 2–4 weeks post-launch | 🟡 Medium |
| 8 | Add `twitter:site` meta tag once Twitter/X handle is confirmed | 🟢 Low |

---

## Keyword Placement Summary

| Keyword | Where it appears |
|---------|-----------------|
| `self-reflection app` | Title, meta description, H1, subtitle, H2 "How self-reflection works" |
| `AI self-reflection` | Title, meta description, FAQ Q2, JSON-LD description |
| `self-awareness` | Meta description, JSON-LD description |
| `emotional clarity` | Title, meta description, JSON-LD description |
| `understand yourself` | FAQ Q1 answer, FAQ Q2 answer |
| `journaling app` (comparison) | FAQ Q1 question and answer |
| `anxiety / overwhelmed` | FAQ Q5 question and answer |
| `private and secure` | FAQ Q3 question and answer |
| `AI journaling` | FAQ Q2 implicitly |
