# iReflect SEO Log

Domain-warming log. **Read this file at the start of every run before pulling new GSC data.**
GSC property: `sc-domain:ireflect.app` (Domain property — the URL-prefix `https://ireflect.app/` does NOT exist; use the Domain property). Deploy: Vercel auto-deploy on push to `main`. Repo: `rafay121ai/Reflect-web`.

---

## 2026-07-13 — Run 1 (baseline + internal-linking / schema)

### GSC snapshot at time of run
| Metric | 90 days | 28 days |
|---|---|---|
| Clicks | 41 | 0 |
| Impressions | 1,090 | 123 |
| CTR | 3.8% | 0% |
| Avg position | 19.7 | 20.3 |

- **Only the brand term "ireflect" earns clicks** (34/41, pos 5.7). Every non-brand query ranks pos 30–99. No striking-distance keywords (nothing non-brand in pos 8–20). Closest: "40 reflection questions" at pos 13 (2 impr) → `self-reflection-questions`.
- **Pages:** only 11 of ~56 pages got any impressions. All clicks are the homepage. Impression-leading blog posts: `self-reflection-questions` (88 impr, pos 77), `how-to-stop-overthinking-in-a-relationship` (64 impr, pos 86), `self-reflection-journal-prompts` (15), `how-to-stop-overthinking-at-night` (13), `how-to-choose-a-self-reflection-app` (7, pos 50 — best position on site).
- **Indexing:** 7 indexed / 9 not (report dated 6/30, pre-sitemap). Not-indexed reasons: 6 Redirect error, 2 Page with redirect, 1 Crawled-not-indexed.
- **Redirect errors are STALE** — live URL inspection on `best-self-reflection-apps-2026` returned "URL is available to Google / can be indexed" (tested 7/13). Fixed at serving layer after the May 19 crawl; Google just hasn't re-crawled. The 6 redirect-error URLs: `/blog/`, `best-self-reflection-apps-2026`, `cant-figure-out-how-i-feel`, `how-to-understand-yourself-better-without-therapy`, `journaling-vs-self-reflection`, `what-is-ai-self-reflection`.
- **Sitemap:** healthy — 59 URLs, read 7/4, status Success.
- **Core Web Vitals:** no data (traffic below CrUX threshold). Not a usable lever yet.
- **Root cause:** discovery + re-crawl latency, not a code bug. `/blog/` failed for Googlebot in May → broke the crawl path to all 55 posts. Posts also had weak internal linking (15 had zero body cross-links; impression leaders had zero inbound internal links).

### Changes shipped this run (55 blog files, SEO-surface only)
1. **Internal links** added to the 15 body-orphan posts (2 topical links each), incl. the impression leaders. Home CTA added to the 2 posts missing one (`self-reflection-questions`, `how-to-stop-overthinking-at-night`).
2. **BlogPosting JSON-LD** added to all 55 posts (real dates from sitemap `lastmod`; no fake ratings). Homepage already had SoftwareApplication + FAQPage + WebSite.
3. Fixed empty schema descriptions on 15 posts (multi-line meta tag).

### Deliberately NOT done
- No title/meta rewrites (titles already match target queries; CTR-title trick only works pos 4–8, these rank 50–88).
- No redirect "fix" (errors were stale/already fixed live).
- No new content, no CWV work (premature until existing posts index).

### Post-deploy actions
- [ ] Push to `main` (Vercel auto-deploy). *Note: commit had to be run locally — sandbox FUSE mount blocks git.*
- [ ] Resubmit sitemap in GSC.
- [ ] URL Inspection → Request Indexing on: `/blog/`, the 6 redirect-error pages, and impression leaders `self-reflection-questions`, `how-to-stop-overthinking-in-a-relationship`.

### What to check NEXT run
1. **Did indexed count rise from 7?** (Indexing > Pages.) If the redirect-error pages moved to Indexed, the re-crawl worked.
2. **Did `how-to-stop-overthinking-in-a-relationship` and `self-reflection-questions` improve from pos ~77–86?** Internal links should lift them.
3. **Any new striking-distance (pos 8–20) queries?** If yes, that's the run to start title/on-page tuning — the lever that was NOT useful this run.
4. Re-check redirect-error count — should trend to 0 after re-crawl.
5. Only after indexing is healthy: consider content gaps vs competing journaling apps.
