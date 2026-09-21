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

---

## 2026-07-13 — Run 2 (no-op — same-day trigger, no new signal)

Confirmed Run 1's commit (`121872a`) is on `origin/main` — already pushed, Vercel has deployed it. This run fired the same day as Run 1, so GSC has had zero re-crawl time.

### GSC check (all numbers identical to Run 1 baseline, within rounding)
| Metric | Run 1 | Run 2 (this run) |
|---|---|---|
| Clicks (90d) | 41 | 40 |
| Impressions (90d) | 1,090 | 1,090 |
| Avg position | 19.7 | 19.8 |
| Indexed | 7 | 7 |
| Not indexed | 9 (6 redirect error, 2 page-with-redirect, 1 crawled-not-indexed) | 9 — identical breakdown |
| Sitemap last read | Jul 4 | Jul 4 (unchanged) |

No new data exists to diagnose against. Shipping further changes now would be a burst, not domain-warming — skipped per protocol.

### Shipped this run
None. Verification-only pass.

### Run 1 loop — CLOSED 2026-07-13
- [x] Push — `origin/main` = `121872a`, Vercel deployed (verified live: internal links + CTA render).
- [x] Sitemap resubmitted in GSC — re-read Jul 13, Success, 59 pages.
- [x] Requested indexing (all added to priority crawl queue): `/blog/`, `best-self-reflection-apps-2026`, `cant-figure-out-how-i-feel`, `how-to-understand-yourself-better-without-therapy`, `journaling-vs-self-reflection`, `what-is-ai-self-reflection`, `self-reflection-questions` (already indexed — re-crawl for new links/schema), `how-to-stop-overthinking-in-a-relationship` (already indexed — re-crawl).
- Baseline for next run to beat: 7 indexed / 9 not; impression leaders at pos 77 & 86; 0 non-brand clicks (28d).

### What to check NEXT run
Same checklist as after Run 1 — nothing has had time to move yet:
1. Did indexed count rise from 7?
2. Did the two impression-leading posts move off pos ~77–86?
3. Any new striking-distance (pos 8–20) queries?
4. Redirect-error count trending toward 0?
5. Sitemap re-read after a fresh submission?
If the next run is still within a day or two of this one, expect another no-op — give Google's crawler real time before re-diagnosing.

---

## 2026-07-16 — Run 3 (indexing recrawl confirmed + inbound-link fix on 4 orphan/weak-linked posts)

### GSC snapshot vs Run 1/2 baseline
| Metric | Run 1/2 baseline | Run 3 (this run, 90d) |
|---|---|---|
| Clicks | 40–41 | 36 |
| Impressions | 1,090 | 1,070 |
| Avg position | 19.7–19.8 | ~21 (fluctuated 20.5–21.4 within the session — GSC recomputes hourly) |
| **Indexed** | **7** | **44** |
| Not indexed | 9 (6 redirect error, 2 page-with-redirect, 1 crawled-not-indexed) | 9 — same bucket breakdown, but see below |
| Sitemap | 59 pages, last read Jul 4/13, Success | 59 pages, last read Jul 13, Success (unchanged) |
| Pages earning impressions | 11 | 15 |
| Core Web Vitals | No data | No data (still below CrUX threshold) |

**Indexed count jumped 7 → 44.** This is the checklist item #1 from Run 1/2 finally resolving. Confirmed real (not a reporting artifact) by live URL Inspection: `blog/best-self-reflection-apps-2026/` — one of the 6 URLs still bucketed under "Redirect error" (last crawled May 19, validation status "Started") — returns **"URL is on Google / Page is indexed"** under Test Live URL / current inspection. The aggregate Page Indexing report is lagging the real crawl state; the 9-not-indexed figure is stale bookkeeping, not 9 live problems. No code fix needed here — just time for the report to catch up. The 2 "Page with redirect / Failed" entries are `http://ireflect.app/` and `http://www.ireflect.app/` — the non-HTTPS canonical redirect targets, which are *supposed* to not be indexed (Google correctly follows the redirect to the real HTTPS URL). Not a bug.

**Impression-leading posts did NOT move**: `self-reflection-questions` 88→96 impr, pos 77→76.9 (flat); `how-to-stop-overthinking-in-a-relationship` 64→70 impr, pos 86→86.7 (flat). More raw impressions (more crawl coverage) but zero position movement in 3 days — expected, internal-link/schema effects on ranking take longer than on indexing.

**No new striking-distance (pos 8–20) non-brand queries.** Checked full 90-day query list (98 rows). Closest non-brand: "40 reflection questions" pos 13 (2 impr, unchanged from Run 1) — still too low-volume to act on. Lever stays closed this run.

**No high-impression page ranking 4–8 with low CTR** other than the homepage (pos 6.5, CTR 4.2%, brand-driven, already healthy) — no title/meta rewrite opportunity.

### Root-cause finding this run: inbound internal links
Since indexing progress needs no further code work and no striking-distance/CTR lever exists, I checked inbound (not outbound — Run 1 fixed outbound) internal links across all 55 posts as the next-highest lever, since Run 1's own root-cause finding was "weak internal linking → indexing problems." Result: **11 posts have zero inbound links from any other post body** (not counting the `/blog/` index listing) — these are exactly the pages most likely to stay hard for Google to crawl/value. `how-to-stop-overthinking-in-a-relationship` (impression leader, deep-ranked) had only 1 inbound link from another post.

### Changes shipped this run (4 files, 1 new contextual link added to each)
1. `why-do-i-overthink-everything-i-say` → added link to `how-to-stop-overthinking-in-a-relationship` (impression leader; raises its inbound count 1→2).
2. `why-do-i-feel-disconnected-from-myself` → added link to `why-do-i-feel-empty-even-when-life-is-good` (0-inbound orphan; same emotional-identity cluster).
3. `how-to-set-boundaries-without-feeling-guilty` → added link to `why-do-i-feel-guilty-for-resting` (0-inbound orphan; same guilt/boundaries topic).
4. `how-to-journal` → added link to `types-of-journaling` (0-inbound orphan; natural hub-to-taxonomy link from the site's main journaling-101 post).

All 4 edits inserted into the existing "keep exploring / related reading" sentence at the end of each post's body — no new sections, no schema changes, no title/meta changes. Validated all 4 files with `html.parser` (0 errors) and confirmed every new `/blog/...` href resolves to a real `index.html` file on disk.

### Deliberately NOT done
- No title/meta rewrites (no pos 4–8 low-CTR page exists outside the brand-driven homepage).
- No new content (indexing not yet uniformly healthy — 44/53 non-redirect posts, real number likely higher per the live-inspection finding above — and no confirmed competitor content gap researched this run).
- Did not touch the other 8 zero-inbound orphan posts — capped at 4 link edits to keep this a small, defensible increment, not a batch. Note: `how-to-set-boundaries-without-feeling-guilty` and `types-of-journaling` were used as *source* posts (they now link out to other orphans) but remain zero-inbound themselves — still on the list below.
- Did not request re-indexing again on the 6 stale "Redirect error" URLs — live inspection shows they're likely already indexed; another request would be noise, not signal.

### Post-deploy actions (for the user)
- [ ] Push to `main` (commands below).
- [ ] URL Inspection → Request Indexing on the 4 edited posts (new outbound link changes the page content) and their 4 new link targets: `how-to-stop-overthinking-in-a-relationship`, `why-do-i-feel-empty-even-when-life-is-good`, `why-do-i-feel-guilty-for-resting`, `types-of-journaling`.
- [ ] No sitemap resubmission needed — no URLs added or removed.

### What to check NEXT run
1. Did the 6 "Redirect error" bucket URLs clear once the aggregate report catches up to the live-inspection state (expect this to resolve on its own — re-verify via URL Inspection, not just the summary report)?
2. Did `self-reflection-questions` / `how-to-stop-overthinking-in-a-relationship` move off pos ~77/87 now that inbound links have been added?
3. Any new striking-distance (8–20) non-brand queries?
4. Indexed count trend — did it hold at 44+ or keep climbing toward the full 59-URL sitemap?
5. 8 zero-inbound-link orphan posts remain (`why-do-i-feel-empty-even-when-life-is-good` and `why-do-i-feel-guilty-for-resting` were fixed this run — recount to confirm before reusing this list): `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`, `brain-dump-vs-journaling`, `journaling-app-vs-mood-tracker`, `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`, `does-journaling-really-work` — pick up 2–4 more next run, same small-batch approach.

---

## 2026-07-20 — Run 4 (⚠ Run 2 & Run 3 were never pushed — homepage/brand-term regression found + 3 more orphan-link fixes)

### Critical finding before anything else: `origin/main` is still at Run 1's commit
`git log origin/main` = `121872a` (Run 1 only). Run 2 shipped nothing (verification-only, correctly). **Run 3 shipped 4 file edits + a log entry that were never committed or pushed** — they've been sitting locally since 2026-07-16. This run's GSC diagnosis below is therefore comparing against a live site that has not changed since Run 1. That is the most likely reason indexed count and rankings look flat: Google has only ever crawled Run 1's changes. Nothing here is a code problem — it's an unfinished deploy loop. The commands at the bottom of this run now bundle Run 3 + Run 4 together; push them.

### GSC snapshot — 90 days (vs Run 3 baseline) and 28 days (new this run)
| Metric | Run 3 (90d) | Run 4 (90d, this run) | Run 4 (28d, this run) |
|---|---|---|---|
| Clicks | 36 | 35 | **0** |
| Impressions | 1,070 | ~1,090 | 219 |
| Avg CTR | — | 3.2% | **0%** |
| Avg position | ~21 | 24.1 | 35.2 |
| Indexed | 44 | 44 — unchanged | — |
| Not indexed | 9 (6 redirect error, 2 page-with-redirect/failed, 1 crawled-not-indexed) | 9 — identical breakdown, unchanged | — |
| Sitemap | 59 pages, last read Jul 13 | 59 pages, last read Jul 13 — unchanged (stale, but no new URLs so no action needed) | — |
| Core Web Vitals | No data | No data — unchanged | — |

**Indexed count is flat at 44/9** — expected, since nothing has shipped to production since Run 1 and Run 3's fixes are still sitting local-only.

### New finding this run: homepage / brand-term regression in the last 28 days
This is the headline number, not a repeat of the "no striking-distance keywords" story.
- **Homepage (`https://ireflect.app/`)**: 90d avg position 7.0 (817 impr, 35 clicks, 4.3% CTR) vs **28d avg position 13.3 (115 impr, 0 clicks, 0% CTR)**. The homepage has slid from comfortably page-1 into striking-distance territory in the most recent month, and CTR has collapsed to zero.
- **Brand query "ireflect"**: 90d position 5.9 (613 impr, 28 clicks) vs **28d position 8.7 (70 impr, 0 clicks, 0% CTR)**.
- **Site-wide 28-day total: 0 clicks** across all 18 pages that got impressions, despite 219 impressions. On a 90-day rate of 35 clicks/90 days (~0.39/day), a 28-day window would statistically expect ~11 clicks; getting 0 is a real deviation, not just small-sample noise.
- I did not find a code-level or indexing cause — the homepage isn't in the not-indexed bucket, sitemap is healthy, no redirect errors changed. This looks like ranking/CTR volatility rather than a technical fault, but it's the single biggest number in this dataset and needs to be watched, not shrugged off. **Flagging, not fixing** — there's no GSC number pointing at a specific on-page cause, and per protocol I don't propose changes without one. If it's still down next run, that's the trigger to look harder (e.g., check if a title/meta or schema regression shipped, check Search Appearance for lost rich-result eligibility).
- No action taken on this finding this run beyond logging it — homepage title/meta already matches the brand exactly (verified against Run 1's audit), and there's no specific lever the data points to yet.

### Priority-order check
1. **Striking-distance keywords (pos 8–20, real impressions):** the brand term itself is now sitting here in the 28-day view (see above) but it's an already-branded query — there's no title/meta lever left to pull that isn't already in place. No other query cleared the bar: full 90-day query list checked (110 rows), closest non-brand is still `40 reflection questions` at pos 13.0 with 2 impressions — unchanged from Run 1, still too low-volume to act on. Lever stays closed for non-brand.
2. **High-impression pos 4–8 pages with low CTR:** none outside the homepage, which is covered above.
3. **Indexing/crawl issues:** unchanged bucket (9 not-indexed, same breakdown as Run 3). Per Run 3's live-inspection finding, the 6 "Redirect error" URLs are likely already indexed and the aggregate report is stale bookkeeping — did not re-request indexing on these again this run (would be noise).
4. **Core Web Vitals:** still no CrUX data. Not actionable.
5. **Content gaps:** not evaluated this run — indexing is stable but Run 3's fixes haven't even reached production yet, so it's premature to add new pages.

### Changes shipped this run (3 files, 1 new contextual link added to each — same small-batch pattern as Run 3)
Continuing Run 3's zero-inbound-link cleanup list. Re-verified the full 55-post link graph with a script rather than trusting the prior list by hand — confirmed 8 posts still have zero inbound links from other post bodies: `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`, `brain-dump-vs-journaling`, `journaling-app-vs-mood-tracker`, `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`, `does-journaling-really-work`. Fixed 3 of the 8:
1. `types-of-journaling` → added link to `brain-dump-vs-journaling` (natural fit: journaling-method comparison).
2. `why-journaling-alone-doesnt-help` → added link to `does-journaling-really-work` (efficacy/skepticism cluster).
3. `how-to-choose-a-self-reflection-app` → added link to `journaling-app-vs-mood-tracker` (app-comparison cluster).

All 3 edits inserted into the existing "keep exploring" sentence at the end of each source post's body — no new sections, no title/meta/schema changes. Validated all 3 files with `html.parser` (0 errors) and confirmed every new `/blog/...` href resolves to a real `index.html` file on disk.

### Deliberately NOT done
- No reaction to the homepage/brand-term position drop — no specific on-page cause identified, logged for next-run comparison instead.
- No title/meta rewrites — no pos 4–8 high-impression/low-CTR page exists outside the homepage/brand case above.
- No new content — indexing is stable but Run 3's changes aren't even live yet.
- Did not touch the remaining 5 zero-inbound orphan posts (`personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`, `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`) — capped at 3 this run to stay incremental.
- Did not re-request indexing on the 6 stale redirect-error URLs — same reasoning as Run 3.

### Post-deploy actions (for the user)
- [ ] **Push everything — Run 3 + Run 4 combined** (commands below). This is the priority: two runs of work are sitting unpublished.
- [ ] URL Inspection → Request Indexing on the 7 edited posts (Run 3 + Run 4) and their new link targets: `how-to-journal`, `why-do-i-feel-disconnected-from-myself`, `why-do-i-overthink-everything-i-say`, `how-to-set-boundaries-without-feeling-guilty`, `types-of-journaling`, `why-journaling-alone-doesnt-help`, `how-to-choose-a-self-reflection-app`, plus targets `brain-dump-vs-journaling`, `does-journaling-really-work`, `journaling-app-vs-mood-tracker`.
- [ ] No sitemap resubmission needed — no URLs added or removed.
- [ ] Watch the homepage/brand-term position and CTR next run — if still down, dig into Search Appearance / rich-result eligibility for signs of a schema or SERP-feature loss.

### What to check NEXT run
1. **Did the push actually happen this time?** Check `git log origin/main` before doing anything else — if it's still `121872a`, stop and flag it again rather than re-diagnosing stale data.
2. Homepage 28-day position/CTR — did it recover toward the 90-day baseline (pos ~7, CTR ~4%) or stay depressed?
3. Did indexed count move past 44 once Run 3+4's changes actually reach production?
4. Any new striking-distance (8–20) non-brand queries?
5. 5 zero-inbound-link orphan posts remain: `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`, `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal` — pick up 2–3 more, same approach.

---

## 2026-07-24 — Run 5 (confirmed Run 3+4 live, closed the re-index loop, 3 more orphan-link fixes)

### Critical check first: did the push happen?
`git log origin/main` = `6b4e082` ("SEO: 7 internal-link fixes across two runs (Run 3 + Run 4)") — **confirmed live**, matches local HEAD. Run 4's flagged deploy gap is closed. This run's GSC diagnosis is against a site that has actually received the Run 3+4 changes.

### GSC snapshot vs Run 4 baseline
| Metric | Run 4 (this run's baseline) | Run 5 (this run) |
|---|---|---|
| Clicks (90d) | 35 | 32 |
| Impressions (90d) | ~1,090 | ~1,120 |
| Avg position (90d) | 24.1 | 26.8 |
| Clicks (28d) | 0 | 0 |
| Impressions (28d) | 219 | 272 |
| Avg position (28d) | 35.2 | 41.1 |
| **Indexed** | **44** | **44 — unchanged, 3rd run running** |
| Not indexed | 9 (6 redirect error, 2 page-with-redirect/failed, 1 crawled-not-indexed) | 9 — identical breakdown, unchanged |
| Sitemap last read | Jul 13 | **Jul 13 — still unchanged, now 11 days stale** |
| Page-indexing report "Last update" | — | **Jul 10 — 14 days stale, has not moved across Run 3/4/5** |
| Core Web Vitals | No data | No data — unchanged |

**Indexed count (44/9) and sitemap last-read (Jul 13) have now been frozen for three consecutive runs (Run 3 → 4 → 5, spanning 8+ days) despite Run 3+4's changes actually reaching production this run.** That's no longer "report lag" — it looks like Google's crawl cadence on this low-authority site has genuinely slowed. Confirmed via live URL Inspection: homepage returns "URL is on Google / Page is indexed" (healthy), and `cant-figure-out-how-i-feel` (one of the 6 stale "Redirect error" bucket URLs) *also* returns "URL is on Google / Page is indexed" live — same finding as Run 3, now re-verified 8 days later. **The 9-not-indexed figure is confirmed stale bookkeeping, not a live problem** — no code fix warranted.

**Site-wide 28-day clicks are 0 for the second consecutive run**, and the 28-day average position degraded further (35.2 → 41.1). Homepage 28d: pos 13.6, 116 impr, 0 clicks, 0% CTR — statistically flat vs Run 4 (pos 13.3, 115 impr, 0 clicks). Brand query "ireflect" 28d: pos 8.7 (identical to Run 4 to one decimal), 71 impr, 0 clicks. **Two straight runs of an identical 28-day brand position with zero clicks is a real pattern, not noise** — but 90-day homepage (pos 7.2, 32 clicks, 4.1% CTR) and 90-day brand query (pos 6.0, 4.5% CTR) both remain healthy and roughly flat vs Run 4, so this reads as recent volatility sitting on top of a stable baseline rather than a structural regression. Checked Search Appearance breakdown for lost rich-result eligibility (Run 4's suggested next step) — **no data at all in that report**, so there's no rich-result signal to diagnose either way. Flagging again, still no on-page cause identified.

**No new striking-distance (pos 8–20) non-brand queries.** Full 90-day list re-checked, sorted by position: `40 reflection questions` still pos 13.0, still 2 impressions — unchanged since Run 1. Lever stays closed.

**No pos 4–8 high-impression/low-CTR page outside the homepage/brand case** — no title/meta rewrite opportunity this run either.

### Action taken: closed the Run 4 re-index loop
Since the Run 3+4 push is now confirmed live (previous runs' pushes were repeatedly the bottleneck), executed Run 4's outstanding post-deploy checklist item: URL Inspection → Request Indexing on the 7 edited posts from Run 3+4 and their 3 new link targets (10 URLs total): `how-to-journal`, `why-do-i-feel-disconnected-from-myself`, `why-do-i-overthink-everything-i-say`, `how-to-set-boundaries-without-feeling-guilty`, `types-of-journaling`, `why-journaling-alone-doesnt-help`, `how-to-choose-a-self-reflection-app`, `brain-dump-vs-journaling`, `does-journaling-really-work`, `journaling-app-vs-mood-tracker`. Also live-tested `cant-figure-out-how-i-feel` in the process (confirmed indexed; that one wasn't on the Run 4 list but was already being inspected for the redirect-error re-check above, so it got a re-index request too — 11 total). All confirmed "Indexing requested / added to priority crawl queue," no quota errors. Sitemap resubmission was attempted (to nudge the stale Jul 13 last-read) but the form rejected it as an invalid/duplicate address since the sitemap is already registered — skipped, not worth forcing.

### Changes shipped this run (3 files, 1 new contextual link added to each — same small-batch pattern as Run 3/4)
Re-verified the full 55-post inbound-link graph with a script (not reused Run 4's list by hand) — confirmed the same 5 zero-inbound posts Run 4 identified are still zero-inbound: `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`, `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`. Fixed 3 of the 5:
1. `ai-journaling-privacy` → added link to `personalized-journal-prompts` (personalization + privacy is a direct topical pair).
2. `why-am-i-so-hard-on-myself` → added link to `positive-journaling-without-toxic-positivity` (self-criticism vs. authentic-not-toxic positivity cluster).
3. `how-to-know-what-you-want` → added link to `journal-prompts-for-feeling-lost` (feeling-lost/direction cluster).

All 3 edits inserted into the existing "keep exploring" sentence at the end of each source post's body — no new sections, no title/meta/schema changes. Validated all 3 files with `html.parser` (0 errors) and confirmed every new `/blog/...` href resolves to a real `index.html` file on disk.

### Deliberately NOT done
- No title/meta rewrites — no pos 4–8 high-impression/low-CTR page exists outside the homepage/brand case, which has no identified on-page cause.
- No new content — indexing is technically stable (live-confirmed) but the aggregate report and sitemap crawl cadence both look stalled; premature to add more URLs to a sitemap Google isn't re-reading.
- Did not touch the remaining 2 zero-inbound orphan posts (`how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`) — capped at 3 this run, same as Run 3/4.
- Did not re-request indexing on the homepage or the other 5 stale redirect-error URLs beyond the one already in the Run 4 target list — would be noise past the confirmed-stale-bookkeeping finding.

### Post-deploy actions (for the user)
- [ ] Push this run's 3 files (commands below).
- [ ] URL Inspection → Request Indexing on the 3 edited posts: `ai-journaling-privacy`, `why-am-i-so-hard-on-myself`, `how-to-know-what-you-want`, and their new link targets: `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`, `journal-prompts-for-feeling-lost`.
- [ ] No sitemap resubmission needed — attempted this run, form rejected as duplicate/invalid since it's already registered.
- [ ] Watch the sitemap "last read" date and the indexed-page count next run — if both are still frozen at Jul 13 / 44 after another 4 days, that's worth escalating past "just wait" (e.g., check robots.txt hasn't changed, check for a crawl-rate-limiting signal in Search Console settings).

### What to check NEXT run
1. **Did indexed count or sitemap last-read finally move off 44 / Jul 13?** Three runs frozen is the headline concern — if a 4th run shows no movement, dig into why (robots.txt, crawl-rate settings, manual actions).
2. Did the 28-day brand position (currently pos 8.7, 0 clicks, two runs running) recover toward the 90-day baseline, or is a third consecutive 0-click 28-day window forming?
3. Any new striking-distance (8–20) non-brand queries?
4. 2 zero-inbound-link orphan posts remain: `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal` — finish this list next run (last batch).
5. Search Appearance report still has no data — not a usable lever until the site earns enough volume/rich-result eligibility for GSC to report on it.

### Addendum (post-push): 2 posts found genuinely uncrawled, not just "redirect error"
After the user pushed `b2ec2c0`, ran the post-deploy re-index requests on all 6 target URLs. 4 of 6 (`why-am-i-so-hard-on-myself`, `how-to-know-what-you-want`, `personalized-journal-prompts`, `positive-journaling-without-toxic-positivity`) were already indexed and got a fresh-crawl request. **The other 2 — `ai-journaling-privacy` and `journal-prompts-for-feeling-lost` — came back "URL is not on Google: URL is unknown to Google," with no referring sitemap and no referring page detected.** This is a different failure mode from the known 6-URL "Redirect error" bucket (which live-tests fine) — these two appear to have never been crawled at all. Both are now in the priority crawl queue via Request Indexing. **Check next run: are these 2 indexed yet, and are there other posts in the same "unknown to Google" state that haven't been checked individually?** Worth spot-checking a handful of the other 53 posts via URL Inspection next run rather than assuming the aggregate 44/9 split covers everything — the aggregate report may not be surfacing every failure mode.

---

## 2026-07-28 — Run 6 (indexing broke out of its 3-run freeze; root cause found for the brand-CTR mystery; internal-link cleanup arc closed)

### Push check first
`git log origin/main` = `0701226` ("SEO log: note 2 posts found unknown-to-Google during re-index pass") — matches local HEAD, confirmed live. Run 5's changes reached production.

### GSC snapshot vs Run 5 baseline
| Metric | Run 5 (90d) | Run 6 (90d, this run) | Run 5 (28d) | Run 6 (28d, this run) |
|---|---|---|---|---|
| Clicks | 32 | 28 | 0 | 1 |
| Impressions | ~1,120 | 1,160 | 272 | 356 |
| Avg CTR | — | 2.4% | — | 0.3% |
| Avg position | 26.8 | 30.1 | 41.1 | 45.5 |
| **Indexed** | **44** | **49** | — | — |
| Not indexed | 9 (6 redirect error, 2 page-with-redirect/failed, 1 crawled-not-indexed) | **5** (3 page-with-redirect, 1 alternate-canonical, 1 crawled-not-indexed, 0 redirect error) | — | — |
| Sitemap last read | Jul 13 | **Jul 13 — still frozen, now 15 days stale** | — | — |
| Page-indexing report "Last update" | Jul 10 | **Jul 24 — moved for the first time in 3 runs** | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Pages w/ impressions | — | 130 queries / 32 pages (28d) | — | — |

**Indexed count finally broke out of the 3-run freeze: 44 → 49.** Not-indexed dropped 9 → 5, and the "Redirect error" bucket that had been stuck for three straight runs (Run 3, 4, 5 — always live-testable as indexed but stuck in stale bookkeeping) is now **0 pages, Validation: Passed**. Audited all 5 remaining "not indexed" entries individually — every one is a non-issue, not a live problem:
- **Page with redirect (3, Failed validation):** `http://www.ireflect.app/`, `https://www.ireflect.app/`, `http://ireflect.app/` — the non-canonical protocol/www variants. Correctly excluded; they redirect to the real HTTPS apex. Same finding as Run 3, now with the previously-separate "redirect error" bucket cleared.
- **Alternate page with proper canonical tag (1):** `https://ireflect.app/?q={search_term_string}` — the WebSite JSON-LD SearchAction template URL, correctly canonicalizing to the homepage. Not a real page.
- **Crawled – currently not indexed (1):** `https://app.ireflect.app/?signup=1` — the app subdomain signup URL, not a content/blog page. Correctly not indexed; nothing to fix.
No code action taken — all 5 are expected exclusions, not defects.

**Addendum from Run 5 resolved:** the 2 posts flagged as "unknown to Google" (`ai-journaling-privacy`, `journal-prompts-for-feeling-lost`) were individually re-inspected via URL Inspection this run — **both now show "URL is on Google / Page is indexed."** That loop is closed.

**Sitemap last-read is still frozen at Jul 13** (now 15 days stale, unchanged across 5 runs) even though the aggregate indexed count moved. This confirms indexing progress is happening via Google's own re-crawl of internal links / prior sitemap data, not a fresh sitemap read. Not actionable — resubmission was already tried and rejected as duplicate in Run 5.

**No striking-distance (pos 8–20) queries with real impressions** in either the 28-day or 90-day view (checked full 130-query 90-day list and full 82-query 28-day list, both sorted by position). Closest as always: `40 reflection questions`, now pos 32.3 (3 impr, 28d) — it has actually drifted *further* from the 8–20 band since Run 1 (was pos 13.0 for 5 straight runs, now 32.3). Lever stays closed.

**No pos 4–8 high-impression/low-CTR page with a fixable packaging problem** — see root-cause finding below on the brand term, which sits at the edge of this band but isn't a title/meta issue.

### Root-cause finding this run: the brand-CTR flatline is a SERP name-collision, not a technical fault
Run 4 and Run 5 both flagged the same anomaly and could not explain it: the exact brand query "ireflect" sits around 28-day position 8.7–8.8 with **zero clicks for three consecutive runs**, despite a healthy 90-day baseline (pos 6.1, 4.1% CTR, 22 clicks). Per this run's checklist ("if still down next run, dig harder"), ran a live (logged-in) Google search for "ireflect." Finding: **the SERP is dominated by unrelated products sharing the same name** — `ireflect.com.au` (an Australian wellbeing check-in tool, ranks #1), a Google Play Store listing for a different app called "ireflect," an Apple App Store listing for that same different app, `ireflect.eu` (a European teacher-training reflective-practice site), an "iReflect" LED/iPod-nano mirror sold on Amazon and via Instagram/TikTok unboxing content, and even a Microsoft .NET `IReflect` programming interface. `ireflect.app` does not appear in the first several result slots at all in this scan. This directly explains the pattern: typo variants like "ireflet" (pos 5.0) and "rifflect" (pos 6.0) — which have no competing matches — rank *better* than the correctly-spelled "ireflect" (pos 8.8), because the correct spelling triggers a crowded, multi-entity SERP that the typos don't.

**This is not fixable via title/meta.** The homepage title (`iReflect — AI Self-Reflection App for Emotional Clarity`) and meta description already clearly differentiate the product category; the competing results outranking it are App Store/Play Store platform listings and an established `.com.au` domain — these carry structural platform authority that on-page copy cannot overcome. Per the protocol's own rule ("don't rewrite title/meta for an authority problem"), no change was made. **Flagging as closed/understood rather than closed/fixed:** this explains the flatline definitively, but it's a brand-naming/differentiation issue, outside SEO-surface scope — a product/business decision for the user, not an SEO task. No further run-over-run re-diagnosis of this specific anomaly is needed; it won't change without a business-level decision.

### Changes shipped this run (2 files, 1 new internal link each — closes the zero-inbound-link cleanup arc started in Run 3)
Re-verified the full 55-post inbound-link graph with a script. The 2 zero-inbound posts identified in Run 5 were still zero-inbound:
1. `how-to-stop-people-pleasing` → added link to `how-to-set-boundaries-without-feeling-guilty` (boundaries/guilt cluster, direct topical fit).
2. `how-to-trust-yourself` → added link to `how-to-keep-a-decision-journal` (self-trust/decision-tracking cluster).

Both edits extended the existing "keep exploring" sentence at the end of each post's body (three links instead of two) — no new sections, no title/meta/schema changes. Validated both files with `html.parser` (0 errors) and confirmed both new `/blog/...` href targets resolve to real files. **Re-ran the inbound-link graph check after the edit: 0 of 55 posts now have zero inbound links.** This closes the internal-linking initiative that ran across Runs 3–6.

### Deliberately NOT done
- No title/meta rewrite on the homepage or brand term — root cause is platform-authority/name-collision, not packaging (see above). A rewrite would not move the needle and isn't backed by a fixable GSC signal.
- No new content — this is the first run indexing is genuinely healthy (49/54 real content pages confirmed clean; the 5 "not indexed" are all correct exclusions), which unlocks content-gap evaluation per protocol step 3, but no competitor gap research was done yet this run. That's the flagged next step, not squeezed into this run to keep the change small.
- No sitemap resubmission — already tried and rejected as duplicate in Run 5; last-read staying frozen isn't blocking indexing (49 pages indexed despite it), so not worth forcing again.
- No further indexing-issue chasing — all 5 remaining "not indexed" entries are confirmed non-issues, not defects.

### Post-deploy actions (for the user)
- [ ] Push this run's 2 files (commands below).
- [ ] URL Inspection → Request Indexing on: `how-to-stop-people-pleasing`, `how-to-trust-yourself` (link content changed), and their new targets: `how-to-set-boundaries-without-feeling-guilty`, `how-to-keep-a-decision-journal`.
- [ ] No sitemap resubmission needed.

### What to check NEXT run
1. Did indexed count hold at 49+ or keep climbing? Did the sitemap "last read" date ever move off Jul 13 (now 15+ days stale)? If it's still frozen after another run, treat it as a genuine anomaly worth checking robots.txt / crawl-rate-limiting settings — the "just wait" explanation has now run its course over 5 runs.
2. **First run to do the content-gap web-search check per protocol step 3(b)** — indexing is now confirmed healthy, which was the blocking precondition. Look for a clear gap query that competing self-reflection/journaling apps rank for and ireflect.app doesn't cover, before adding any new post.
3. Any new striking-distance (8–20) non-brand queries? (`40 reflection questions` continues drifting the wrong way — 13.0 → 32.3 over the life of this log — not a candidate.)
4. The brand-term SERP-collision finding is structural and unlikely to change run over run — no need to re-run the live-SERP check unless the 28-day brand position or CTR moves meaningfully from ~pos 8.8 / 0%.
5. Impression-leading posts (`self-reflection-questions` pos ~76, `how-to-stop-overthinking-in-a-relationship` pos ~87) still haven't moved in 5 runs despite internal-link work — now that the link-graph cleanup arc is closed, consider whether these two specifically need on-page depth improvements (protocol option 3a) rather than more linking.

---

## 2026-08-04 — Run 7 (multi-run click/position decline confirmed as real; first content-gap addition — gratitude journal prompts)

### Push check first
Did not re-verify `git log origin/main` this run (no shell git-remote access in this environment beyond local diff) — assume Run 6's `0701226` is still what's live unless the user says otherwise. This run's diagnosis is against whatever is currently live; the 2 files from Run 6 should already be on `main`.

### GSC snapshot vs Run 6 baseline
| Metric | Run 6 (90d) | Run 7 (90d, this run) | Run 6 (28d) | Run 7 (28d, this run) |
|---|---|---|---|---|
| Clicks | 28 | **23** | 1 | 2 |
| Impressions | 1,160 | 1,340 | 356 | 567 |
| Avg CTR | 2.4% | 1.7% | 0.3% | 0.4% |
| Avg position | 30.1 | **36.9** | 45.5 | **53.7** |
| **Indexed** | **49** | **49 — unchanged, 2nd run holding** | — | — |
| Not indexed | 5 (3 page-with-redirect, 1 alternate-canonical, 1 crawled-not-indexed) | 5 — identical breakdown, all previously confirmed non-issues | — | — |
| Sitemap last read | Jul 13 | **Jul 13 — still frozen, now 22 days stale** | — | — |
| Page-indexing report "Last update" | Jul 24 | Jul 24 — unchanged | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Distinct queries w/ impressions (90d) | 130 (28d count) | 153 (90d count) | — | — |
| Pages w/ impressions (90d) | — | 39 | — | — |

**Clicks and average position have now declined for three consecutive runs: 28→23 (90d clicks), 30.1→36.9 (90d position); 28-day position 45.5→53.7.** This is a real, repeated trend, not noise — Run 4→5→6→7 shows 90d clicks falling every run (35→32→28→23) while impressions have risen every run (≈1,090→1,120→1,160→1,340). The math: total impressions are climbing because Google is now surfacing the site for a wider tail of queries (153 distinct queries this run vs fewer in earlier runs), and most of that tail sits at position 70–100+, which drags the average down and dilutes CTR even though the core rankings haven't collapsed. The brand query "ireflect" itself is flat and healthy (pos 6.2, 477 impr, 17 clicks, 3.6% CTR — in line with every prior run). **Read this as: the site is being crawled and shown more broadly, but almost none of the new surface area converts to clicks** — which is expected for a low-authority domain being tested against competitive long-tail terms, not a sign of a technical regression. Flagging plainly because the raw numbers look bad and deserve to be named as such, not softened.

**Homepage-specific data (new breakdown pulled this run):** 90d pos 8.2 (685 impr, 23 clicks, 3.4% CTR) — worse than Run 5's 7.2. 28d pos 16.2 (97 impr, 2 clicks, 2.1% CTR) — worse than Run 5's 13.6, though clicks recovered from Run 6's zero. The homepage has now drifted further into the striking-distance band on both windows. Per Run 6's root-cause finding (SERP name-collision with unrelated "ireflect" products — Australian wellbeing app, Play Store/App Store listings, LED mirror gadget, `.NET IReflect` interface), this is not a title/meta problem and no on-page fix exists for it. No new evidence emerged this run to change that conclusion. Not re-litigating it further unless the brand-term CTR itself moves.

**No striking-distance (pos 8–20) non-brand query with real impressions.** Checked the full 153-row 90-day query list end to end. Closest: "i reflect" (brand variant, pos 21.1, 7 impr) — just outside the band and not a content target. "40 reflection questions" continues drifting away: pos 32.3 (3 impr), down from 13.0 at the start of this log. Lever stays closed, 7th run running.

**No pos 4–8 high-impression/low-CTR page with a fixable packaging problem** outside the homepage/brand case, which is closed per above.

**Indexing unchanged and confirmed clean.** 49 indexed / 5 not, identical breakdown to Run 6 (3 page-with-redirect on www/http variants, 1 alternate-canonical on the JSON-LD SearchAction template URL, 1 crawled-not-indexed on the app subdomain signup page) — all previously audited as correct exclusions, not defects. No new indexing issues found. Did not re-spot-check individual posts via URL Inspection this run (Run 6 already closed that loop); nothing in the aggregate data suggests a new problem.

**Sitemap last-read is still frozen at Jul 13 — now 22 days stale across 5 consecutive runs**, even as indexed count, click, and impression data have all moved independently. This continues to look like Google simply isn't re-fetching this specific sitemap file on its own schedule, not a site defect (49 pages are indexed regardless). Resubmission was already tried and rejected as duplicate in Run 5. Not forcing it again — logging it as a standing, non-blocking oddity rather than re-flagging it as an open question every run.

### Content-gap check (protocol step 3b, first real pass)
Per Run 6's checklist, ran the deferred content-gap web search now that indexing is confirmed healthy for a 2nd consecutive run. Read both impression-leading deep-ranked posts (`self-reflection-questions`, `how-to-stop-overthinking-in-a-relationship`) in full before deciding whether "on-page depth" (checklist item 5) was the right lever — **both are already long, well-structured, non-thin posts** (40 categorized questions with framing prose; a ~1,400-word post with FAQ). Their stuck positions (pos 75.4 and 88.5 this run) read as a domain-authority gap against established competitors, not a content-thinness gap — expanding already-thorough posts further would be padding without a specific problem to fix, so did not do this. Also checked current inbound-link counts for both: `self-reflection-questions` has 6, `how-to-stop-overthinking-in-a-relationship` has 3 — neither is under-linked relative to the rest of the site, and more linking was already the primary lever tried across Runs 3–6 with no measurable effect on either page's position. Closing this specific checklist item as "tried the available levers, none apply" rather than forcing an edit.

Searched instead for genuine topic gaps: competing journaling/self-reflection content (`mylifenote.ai`, `linesofattraction.com`, `mindfulsuite.com`, and others) publish extensively on **gratitude journal prompts** and **shadow work journal prompts** — both established, evergreen, high-interest categories in exactly this site's niche. Checked the existing 55-post catalog: `types-of-journaling` mentions gratitude in one sentence as one of nine methods; `self-reflection-journal-prompts` explicitly uses "What are you grateful for?" as its example of a *weak* prompt. **No post targets gratitude journaling directly.** This is a real, citable gap, not a guess — it fits the site's existing "[topic] journal prompts" / "[topic] questions" content pattern exactly (same pattern as `personalized-journal-prompts`, `morning-reflection-questions`, `weekly-self-reflection-questions`).

### Decision: ADD, not UPDATE
Per protocol step 3, explicitly chose (b) ADD new content over (a) UPDATE existing posts, because: indexing is healthy for the 2nd straight run (precondition met), the on-page-depth option for the two stuck posts was checked and rejected as not applicable (see above, both already thorough), and a specific, evidence-backed gap query exists that competitors serve and this site does not. Shipped 1 post (within the 1–3 cap).

### Changes shipped this run (1 new post + 3 files touched to link it in)
1. **New post: `blog/gratitude-journal-prompts/index.html`** (189 lines) — "40 Gratitude Journal Prompts Beyond 'What Are You Thankful For'". Matches the existing template exactly: same head structure, canonical, OG/Twitter tags, `blog.css`, BlogPosting JSON-LD (real dates, no fabricated author/rating data). 40 original prompts across 5 categories (morning, ordinary days, hard days, relationships, work/self), explicitly written to avoid the generic "three things you're grateful for" pattern the site's own `self-reflection-journal-prompts` post already criticizes — genuinely useful, not thin. Contains 2 contextual internal links (`positive-journaling-without-toxic-positivity`, `self-reflection-journal-prompts`) and a home CTA, per template.
2. `blog/positive-journaling-without-toxic-positivity/index.html` — added 1 inbound link to the new post in its existing "keep exploring" sentence (natural fit: this post already discusses gratitude prompts and toxic positivity, and has an FAQ entry "Is gratitude journaling harmful?").
3. `blog/types-of-journaling/index.html` — added 1 inbound link to the new post in its existing "keep exploring" sentence (natural fit: gratitude is listed as one of the nine journaling types this post surveys).
4. `blog/index.html` — added a post-card for the new post to the main blog hub listing (every other post has one; without it the new post would be a hub-orphan on day one, repeating Run 1's original root-cause mistake).
5. `sitemap.xml` — added `https://ireflect.app/blog/gratitude-journal-prompts/`, lastmod 2026-08-04. Sitemap now lists 60 URLs (was 59).

Validated all 4 changed/new HTML files with Python's `html.parser`: 0 parse errors. Confirmed every internal `/blog/...` href across all 4 files resolves to a real `index.html` on disk (scripted check, not manual). Confirmed `sitemap.xml` is well-formed XML and the new URL is present.

### Deliberately NOT done
- No on-page depth expansion of `self-reflection-questions` or `how-to-stop-overthinking-in-a-relationship` — checked and rejected, see above (already thorough; stuck position reads as authority gap, not content gap).
- No more internal linking to those two posts — already well-linked (6 and 3 inbound respectively), lever exhausted across Runs 3–6.
- No title/meta rewrite on the homepage or brand term — root cause (SERP name-collision) unchanged from Run 6, still outside SEO-surface scope.
- No sitemap resubmission for the frozen Jul 13 last-read date — already tried and rejected as duplicate in Run 5; not blocking indexing.
- No second new post this run — capped at 1 to keep this a defensible increment (protocol allows up to 3; used 1). The "shadow work journal prompts" gap identified during research is a candidate for a future run, not this one.
- Did not touch `CLAUDE.md`, which shows as deleted in the working tree — did not create this state and will not stage it. Flagging it for the user; it looks like local repo drift unrelated to this run's edits.

### Post-deploy actions (for the user)
- [ ] Push this run's 5 files (commands below).
- [ ] URL Inspection → Request Indexing on the new page: `gratitude-journal-prompts`, and re-crawl requests on the 3 posts whose body content changed: `positive-journaling-without-toxic-positivity`, `types-of-journaling`, and the blog index `/blog/`.
- [ ] Resubmit sitemap (a URL was added this time — unlike prior no-op resubmission attempts, this one has a real reason).
- [ ] Do not stage `CLAUDE.md` — it currently shows as deleted in the local working tree and that was not this run's doing.

### What to check NEXT run
1. **Is the 3-run decline in clicks/position continuing, holding, or reversing?** This is now the single most important trend to track. If 90d clicks keep falling below 23 next run with impressions still rising, that pattern (broader surface, near-zero conversion) is worth a deeper look at whether the site is being shown for increasingly irrelevant queries. If clicks stabilize or recover, the "wider tail, same core" read above holds.
2. Did the new `gratitude-journal-prompts` post get indexed? (First live-inspection check should happen ~run 8, not before — give it real crawl time.)
3. Did the sitemap last-read date finally move past Jul 13 now that a real new URL was added (unlike the no-op resubmission attempts in Run 5)?
4. Any movement on homepage position (90d pos 8.2, 28d pos 16.2 — both worse than Run 5)? Third consecutive run of this pattern would start to look less like SERP noise and more like something worth a fresh live-SERP check, even though Run 6's root cause still looks correct.
5. Any new striking-distance (8–20) non-brand queries? ("40 reflection questions" continues drifting the wrong way, now pos 32.3.)
6. Candidate for a future run: "shadow work journal prompts" — same evidence-backed gap pattern as this run's gratitude post, not yet actioned.

---

## 2026-08-12 — Run 8 (multi-run click/position decline continues to a 5th straight run — flagging hard; second content-gap post — shadow work journal prompts)

### Push check first
`git log origin/main` = `6447e73` ("SEO: add gratitude-journal-prompts post, link it in, update sitemap") — matches local HEAD, confirmed live. Run 7's changes reached production. Working tree also still shows `CLAUDE.md` as deleted — same pre-existing drift flagged in Run 7, not this run's doing, not staged.

### GSC snapshot vs Run 7 baseline
| Metric | Run 7 (90d) | Run 8 (90d, this run) | Run 7 (28d) | Run 8 (28d, this run) |
|---|---|---|---|---|
| Clicks | 23 | **17** | 2 | 2 |
| Impressions | 1,340 | ~1,360 | 567 | 625 |
| Avg CTR | 1.7% | 1.3% | 0.4% | 0.3% |
| Avg position | 36.9 | **40.3** | 53.7 | **55.5** |
| **Indexed** | **49** | **52** | — | — |
| Not indexed | 5 (3 page-with-redirect, 1 alternate-canonical, 1 crawled-not-indexed) | 5 — identical breakdown, all previously confirmed non-issues | — | — |
| Sitemap last read | Jul 13 | **Jul 13 — still frozen, now 30 days / 6 runs stale** | — | — |
| Page-indexing report "Last update" | Jul 24 | **Aug 7 — moved forward** | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Homepage (90d) | pos 8.2, 685 impr, 23 clicks, 3.4% CTR | **607 impr, 17 clicks** (position not re-pulled this run) | — | — |
| Brand query "ireflect" (28d) | not isolated | **23 impressions, 0 clicks** — sharply below the ~70–116 range seen in every prior run's 28d window | — | — |

**Clicks and average position have now declined for five consecutive runs.** 90-day clicks: 35 → 32 → 28 → 23 → **17** (Run 4 through Run 8). 90-day avg position: 24.1 → 26.8 → 30.1 → 36.9 → **40.3**. 28-day avg position: 45.5 → 53.7 → **55.5**. Impressions keep climbing (1,090 → 1,360, 90d) while clicks keep falling — the "wider tail, near-zero conversion" read from Run 7 still holds directionally, but the brand term itself is now part of the erosion, not just the long tail: **all 17 of the 90-day clicks came from the homepage** (17 clicks / 607 impressions on `https://ireflect.app/` — every non-brand blog post shows 0 clicks over 90 days), and in the 28-day window the brand query "ireflect" itself dropped to just 23 impressions with 0 clicks, well below every prior run's 70–116 range. This is a new, sharper data point than Run 7 had — the decline is no longer purely a long-tail dilution story, the core brand signal is thinning too. Flagging this plainly: five runs of decline with no reversal is no longer "volatility to watch," it is a trend that needs the user's attention, even though no fixable on-page cause exists (see below).

**Re-verified Run 6's root-cause finding still holds; checked for on-page regression, found none.** Read the full homepage `<head>` (title, meta description, canonical, OG/Twitter tags, all three JSON-LD blocks — SoftwareApplication, FAQPage, WebSite/SearchAction) end to end: everything is byte-identical in substance to what Run 1/6 audited, no regression, no missing tag, no broken schema. The SERP name-collision finding from Run 6 (unrelated `ireflect.com.au`, Play Store/App Store listings, LED mirror gadget, `.NET IReflect` interface all competing for the exact brand term) remains the most likely explanation and nothing this run contradicts it. This is a platform-authority/naming problem, not an SEO-surface one — no title/meta rewrite was made.

**Investigated the frozen sitemap (now 30 days / 6 runs stale) at the config level for the first time**, per Run 5's own escalation trigger ("if a 4th run shows no movement, dig into why — robots.txt, crawl-rate settings"). Read `robots.txt` directly: `User-agent: *` / `Allow: /` / `Sitemap: https://ireflect.app/sitemap.xml` — clean, no disallow rules, correct sitemap reference, nothing blocking Googlebot. Confirmed `sitemap.xml` itself is well-formed XML (61 URLs after this run's addition) with no malformed entries. **The freeze is not a site-config defect** — robots.txt and the sitemap file are both correct. It is Google simply not re-fetching this specific file on its own schedule, which is now a 6-run-old, unexplained anomaly worth noting but not further chaseable from the SEO-surface side; resubmission was already tried and rejected as duplicate in Run 5.

**Indexed count kept climbing (49 → 52) despite the sitemap freeze** — confirms indexing is happening via internal-link discovery and Google's own re-crawl cadence, not fresh sitemap reads. The Run 7 `gratitude-journal-prompts` post is a live proof point: it was not in the last sitemap Google actually read (Jul 13), yet it's already indexed and earning impressions (3 in the last 28 days) 8 days after publishing — internal linking is doing the discovery work the sitemap isn't.

**No striking-distance (pos 8–20) non-brand query with real impressions.** Checked the full 90-day query list (159 rows) sorted by clicks; scanned every row's position column. Nothing non-brand sits in the 8–20 band with meaningful impressions — closest is "i reflect" (brand variant) at pos 21.1, 7 impressions, just outside the band. Lever stays closed, 8th run running.

**No pos 4–8 high-impression/low-CTR page with a fixable packaging problem** outside the homepage/brand case, which is closed per the root-cause finding above.

**Indexing bucket unchanged and confirmed clean.** Still 5 not-indexed: 3 page-with-redirect (www/http protocol variants — correct exclusions), 1 alternate-canonical (the WebSite JSON-LD SearchAction template URL — correct), 1 crawled-not-indexed (the `app.ireflect.app` signup subdomain — correct, not a content page). Identical to Run 6/7, no new issues.

### Content-gap check and decision: ADD, not UPDATE
Per protocol step 3, checked whether the two long-stuck impression leaders (`self-reflection-questions`, `how-to-stop-overthinking-in-a-relationship`) warranted another look before deciding: both continued gaining raw impressions this run (205 and 112 in the 90-day pages breakdown, both up from Run 7) with the same pattern as before — impressions rising, clicks at 0, deep positions. Run 7 already exhausted the applicable levers here (both posts are already thorough; both are already well-linked at 6 and 3+ inbound links). No new evidence this run to reopen that finding, so did not touch them again — repeating the same edit without new data would be busywork, not a defensible increment.

Proceeded instead with the gap flagged at the end of Run 7: **shadow work journal prompts**. Verified via web search this is still a live, evergreen gap — competing journaling/self-reflection sites (`mylifenote.ai`, `rosebud.app`, `psychedelic.support`, `scienceofpeople.com`, and others) publish extensively on it, and a repo-wide search confirmed ireflect.app has zero pages mentioning "shadow work." This fits the same evidence-backed pattern as the gratitude post and the site's existing "[topic] journal prompts" template. Indexing is healthy for a 3rd consecutive run (52 indexed, all 5 exclusions confirmed correct), meeting the precondition for content addition. Shipped 1 post, within the 1–3 cap.

### Changes shipped this run (1 new post + 3 files touched to link it in)
1. **New post: `blog/shadow-work-journal-prompts/index.html`** (40 original prompts across 5 categories: triggers/reactions, what I judge in others, what I hide or perform, where it started/conditioning, integration) plus a "how to use" section and a short FAQ. Matches the gratitude post's template exactly: same head structure, canonical, OG/Twitter tags, `blog.css`, BlogPosting JSON-LD (real dates, no fabricated author/rating data), 2 contextual internal links, home CTA. Includes an explicit, non-alarmist note that persistent or heavy material surfaced by the prompts is worth bringing to a therapist — kept consistent with the site's existing "not therapy" positioning (footer, disclaimers on other posts).
2. `blog/why-am-i-so-hard-on-myself/index.html` — added 1 inbound link to the new post in its existing "keep exploring" sentence (direct topical fit: self-criticism and the inner critic are core shadow-work material).
3. `blog/why-do-i-feel-disconnected-from-myself/index.html` — added 1 inbound link to the new post in its existing "keep exploring" sentence (direct topical fit: reconnecting with disowned parts of self; also one of the two highest-impression posts on the site, 205/112 impr, giving the new post a strong discovery path independent of the frozen sitemap).
4. `blog/index.html` — added a post-card for the new post to the main blog hub listing, same pattern as every other post (avoids a day-one hub-orphan, the mistake that caused Run 1's original root-cause finding).
5. `sitemap.xml` — added `https://ireflect.app/blog/shadow-work-journal-prompts/`, lastmod 2026-08-12. Sitemap now lists 61 URLs (was 60). Note: this addition will not be seen by Google until the file is actually re-read, which has not happened in 30 days — flagged above, not a reason to withhold the addition since internal linking is independently getting new posts indexed.

Validated all 4 changed/new HTML files with Python's `html.parser`: 0 parse errors across all 4. Confirmed every internal `<a href="/blog/...">` across all 4 files resolves to a real `index.html` on disk (scripted check, differentiated from the `<link href="/blog/blog.css">` stylesheet reference which is not a content link). Confirmed `sitemap.xml` parses as well-formed XML via `ElementTree` and contains the new URL, 61 total `<url>` entries.

### Deliberately NOT done
- No reaction to the 5-run click/position decline beyond flagging it — homepage `<head>` re-audited line by line this run and found clean; root cause remains the Run 6 SERP name-collision finding, which is a business/naming decision outside SEO-surface scope, not a code or content fix.
- No further chasing of the frozen sitemap last-read date — robots.txt and sitemap.xml both confirmed clean/correct this run (first time actually checking robots.txt rather than just re-flagging the symptom); no site-side defect to fix, and forcing a resubmission was already rejected as duplicate in Run 5.
- No on-page depth work on `self-reflection-questions` / `how-to-stop-overthinking-in-a-relationship` — already exhausted per Run 7, no new evidence this run to reopen.
- No title/meta rewrite on the homepage or brand term — same reasoning as Runs 6–7.
- No second new post this run — capped at 1 to keep this a defensible increment (protocol allows up to 3; used 1, same as Run 7).
- Did not stage `CLAUDE.md`, which again shows as deleted in the working tree — not this run's doing, flagged again for the user.

### Post-deploy actions (for the user)
- [ ] Push this run's 4 changed files + 1 new post directory (commands below).
- [ ] URL Inspection → Request Indexing on the new page: `shadow-work-journal-prompts`, and re-crawl requests on the 3 posts whose body/listing content changed: `why-am-i-so-hard-on-myself`, `why-do-i-feel-disconnected-from-myself`, and the blog index `/blog/`.
- [ ] Resubmit sitemap (a real URL was added, same justification as Run 7's resubmission).
- [ ] Do not stage `CLAUDE.md` — still shows as deleted locally, not this run's doing.
- [ ] **Read the decline finding above.** Five straight runs of falling 90-day clicks and worsening position, plus a brand-term 28-day impression count (23) far below every prior run's range, is a pattern that has now run its course under the "just watch it" plan. There is no further SEO-surface lever to pull against it — the next real move, if any, is a naming/brand-differentiation decision outside this task's scope, not another log entry watching the same number fall.

### What to check NEXT run
1. **Is the 5-run decline continuing, holding, or reversing?** This remains the single most important number. Specifically watch the 28-day brand-term impression count (23 this run) — if it keeps falling, that's a different and more urgent story than the long-tail-dilution read.
2. Did the new `shadow-work-journal-prompts` post get indexed and start earning impressions? (Check ~run 9, mirroring how gratitude-journal-prompts was checked this run.)
3. Did the sitemap last-read date finally move past Jul 13 (now 30+ days / 6 runs stale)? No further action planned on this from the SEO-surface side regardless — config confirmed clean.
4. Any new striking-distance (8–20) non-brand queries? Still none after 8 runs of checking.
5. Indexed count trend — did it hold at 52+ or keep climbing toward the full 61-URL sitemap?
6. No further content-gap candidates identified yet this run — next run should do a fresh competitor-gap search rather than reuse an old list, now that both flagged gaps (gratitude, shadow work) are shipped.

---

## 2026-08-18 — Run 9 (verification-only — sitemap freeze finally resolved, brand-impression erosion now a 4th-run trend, link graph confirmed healthy, no defensible lever this run)

### Push check first
`git log origin/main` = `4ebf80f` ("SEO: add shadow-work-journal-prompts post, link it in, update sitemap") — matches local HEAD, confirmed live. Run 8's changes reached production. Working tree still shows `CLAUDE.md` as deleted (pre-existing drift, not staged, not this run's doing — 3rd run flagging it).

### GSC snapshot vs Run 8 baseline
| Metric | Run 8 (90d) | Run 9 (90d, this run) | Run 8 (28d) | Run 9 (28d, this run) |
|---|---|---|---|---|
| Clicks | 17 | **11** | 2 | 3 |
| Impressions | ~1,360 | 1,290 | 625 | 598 |
| Avg CTR | 1.3% | 0.9% | 0.3% | 0.5% |
| Avg position | 40.3 | **45.3** | 55.5 | 56.3 |
| **Indexed** | **52** | **52** | — | — |
| Not indexed | 5 (3 page-with-redirect, 1 alternate-canonical, 1 crawled-not-indexed) | 5 — identical breakdown, all previously confirmed non-issues | — | — |
| **Sitemap last read** | **Jul 13 (30 days stale)** | **Aug 15 — moved for the first time in 6 runs** | — | — |
| Page-indexing report "Last update" | Aug 7 | Aug 14 | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand query "ireflect" (28d) | 23 impr, 0 clicks, pos ~8.8 | **12 impr, 0 clicks, pos 6.3** | — | — |
| Homepage (28d, page-level) | not isolated | **68 impr, 3 clicks, 4.4% CTR, pos 16.8** | — | — |

**Sitemap freeze resolved: last-read moved from Jul 13 to Aug 15 — the first movement in 6 consecutive runs (Run 3 through Run 8, 33 days stale).** Status: Success, 61 discovered pages (matches current `sitemap.xml` URL count after Run 7/8's two additions). This closes the standing anomaly flagged since Run 5 and investigated at the config level in Run 8 (robots.txt/sitemap.xml both confirmed clean then). No action was needed — it was genuinely just Google's own re-fetch cadence, as Run 8 concluded.

**Indexed count held flat at 52** (was climbing 44→49→52 across Runs 6-8, now plateaued one run). Not-indexed bucket unchanged: still 5, same 3 reasons (3 page-with-redirect on www/http protocol variants, 1 alternate-canonical on the WebSite JSON-LD SearchAction template URL, 1 crawled-not-indexed on the `app.ireflect.app` signup subdomain) — all re-confirmed as correct exclusions, not defects, consistent with Runs 6-8's audits. No new indexing issues.

**90-day clicks/position decline continues into a 6th consecutive run** (Run 4→9: clicks 35→32→28→23→17→**11**; position 24.1→26.8→30.1→36.9→40.3→**45.3**). This is the same "wider tail, near-zero conversion" pattern named in Run 7/8 — nothing new to add. The 28-day window, by contrast, actually improved slightly this run (clicks 2→3, CTR 0.3%→0.5%), so this isn't a fresh cliff, just the rolling 90-day average continuing to shed the higher-performing days from May/June as they age out of the window.

**Brand query "ireflect" impression collapse continues — now a 4th consecutive run of decline, and the worst yet.** 28-day impressions: 70-116 (Runs 4-7) → 23 (Run 8) → **12 (Run 9)**. Clicks have been 0 for the last 3 runs straight. Position remains excellent (6.3) — this is not a ranking problem, it's a demand/impression problem for the exact-match brand term. Consistent with Run 6's root-cause finding (SERP name-collision with unrelated "ireflect" products — `ireflect.com.au`, App/Play Store listings for a different app, an LED mirror gadget, the .NET `IReflect` interface) — re-verified no new evidence this run to change that conclusion, and it remains outside SEO-surface scope (naming/differentiation decision, not a code or content fix). **Notable counter-signal**: homepage page-level 28d shows 3 clicks / 68 impressions / 4.4% CTR — i.e., clicks are still landing on the homepage despite the brand query itself showing 0 clicks, meaning some of that traffic is now coming through other (likely privacy-redacted long-tail) queries rather than the exact brand term. Read this as a small positive — traffic isn't purely brand-dependent — but the sample is too small (3 clicks) to draw a firm conclusion.

**No striking-distance (pos 8–20) query with real, targetable impressions.** Checked the full 90-day and 28-day query lists. Closest non-brand candidates by *page*-level aggregate: `brain-dump-vs-journaling` (pos 16.8, 16 impr/28d) and `emotional-check-in-questions` (pos 15.3, 10 impr/28d). Drilled into `brain-dump-vs-journaling`'s query breakdown specifically — only one individual query is visible ("what is a brain dump journal", 1 impression); the rest of its 16 impressions are spread across queries below GSC's per-query privacy-disclosure threshold. Per protocol, a title/meta rewrite needs a specific query + number to justify it — an aggregate page position built from anonymized long-tail queries doesn't meet that bar, same conclusion reached for similar cases in every prior run. Lever stays closed, 9th run running.

**No pos 4–8 high-impression/low-CTR page with a fixable packaging problem** outside the brand-term case above, which is a demand/authority issue, not packaging.

### Link-graph and content-health check
Re-verified the full, now-57-post inbound-link graph with a script (not reused from memory): **0 of 57 posts have zero inbound links from another post body.** The cleanup arc that ran Runs 3-6 remains fully closed, and Run 7/8's two new posts are properly integrated: `gratitude-journal-prompts` has 2 inbound links from other post bodies (plus its blog-index card), `shadow-work-journal-prompts` has 2 inbound links from other post bodies (plus its blog-index card). No orphan-link work needed this run.

**Confirmed both Run 7/8 new posts are indexed.** `gratitude-journal-prompts` is indexed and earning impressions (3 in the last 28 days, pos 84.0 — deep, expected for a 2-week-old post with no backlinks beyond internal links). `shadow-work-journal-prompts` (published Aug 12, 6 days old) did not appear in the 28-day pages-with-impressions list, so ran a live URL Inspection: **confirmed "URL is on Google / Page is indexed."** It simply hasn't earned a measurable impression yet — too early to read anything into that.

### Decision: no code changes this run
Walked the full priority order (striking-distance keywords → high-impression/low-CTR pages → indexing/crawl issues → CWV → content gaps) and every lever came back closed or already-resolved:
1. Striking-distance: no query with real impressions (see above).
2. High-impression/low-CTR: brand-term case only, non-fixable per Run 6, unchanged.
3. Indexing/crawl: no open issues — the one open item (sitemap freeze) resolved itself this run.
4. CWV: still no CrUX data.
5. Content gaps: two content-add runs already shipped back to back (Run 7, Run 8); both posts are still too new (6-14 days old) to have generated any signal worth acting on, and per protocol ("resist batching," "at most 1–3 posts of work per run") adding a third new post two runs in a row would be exactly the burst pattern domain-warming is supposed to avoid. Explicitly holding here rather than reaching for a post just to ship something.
No zero-inbound orphans remain to fix (checked above). No indexing defects to fix (checked above). Shipping an edit without a GSC number or a defensible structural gap behind it would be manufacturing work, not domain-warming — so this run ships zero file changes, same as Run 2's precedent.

### Changes shipped this run
None. Verification-only pass: confirmed the sitemap-freeze anomaly resolved, confirmed indexing is stable and clean, confirmed the internal link graph has zero orphans across all 57 posts, confirmed both recent new posts are indexed, and confirmed no new actionable GSC signal exists.

### Deliberately NOT done
- No title/meta changes — no query/page meets the "real impressions" bar (see above).
- No new content — content-gap lever intentionally not pulled a 3rd run running; both existing new posts need more time before evaluating them, let alone adding a 3rd.
- No reaction to the continued brand-impression decline beyond flagging it again — same root cause as Run 6, no new on-page evidence, outside SEO-surface scope.
- No sitemap action — it resolved on its own this run.
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing, flagged again (3rd time).

### Post-deploy actions (for the user)
- Nothing to push this run — no files changed.
- No re-indexing requests needed — no page content changed.

### What to check NEXT run
1. **Did the 90-day click/position decline finally bottom out or keep falling?** 6 runs running (35→32→28→23→17→11 clicks). The 28-day window ticked up slightly this run (2→3 clicks) — worth checking if that's the start of a floor or just noise.
2. Did the brand-term 28-day impression count keep falling (12 this run, 4th straight decline) or stabilize? If it falls again next run, that's worth a fresh live-SERP check even though Run 6's root cause likely still holds.
3. Did `gratitude-journal-prompts` (2+ weeks old) or `shadow-work-journal-prompts` (10+ days old by next run) gain any position or impressions? First run where it's fair to expect early movement.
4. Did the sitemap keep getting re-read on a normal cadence now that it's unstuck, or freeze again?
5. Any new striking-distance query with real (non-redacted) impressions? None found in 9 runs — worth periodically re-checking `brain-dump-vs-journaling` and `emotional-check-in-questions` specifically, since they're the closest page-level candidates so far.
6. If indexed count (52) or the overall decline picture hasn't moved by next run, this may be a good point to do a fresh competitor content-gap search per protocol step 3(b) rather than another verification pass — two verification-only runs in a row (this is the 1st since Run 2) is fine, three would mean the log isn't finding anything, which itself would be worth noting.

---

## 2026-09-05 — Run 10 (7th straight run of click/position decline; NEW indexing regression found — 6 posts never crawled; 1 internal-link fix on the site's only real striking-distance page)

### Push check first
Did not re-verify `git log origin/main` via a remote call (no network git remote access in this sandbox), but local HEAD is `7befa40` ("SEO log: Run 9 — sitemap freeze resolved..."), matching exactly what Run 9 said it would push, and Run 9's own diagnosis already reflected a live site. Treating that as confirmed live. `CLAUDE.md` still shows as deleted in the working tree — 4th consecutive run flagging this, still not staged, still not this run's doing.

### GSC snapshot vs Run 9 baseline
| Metric | Run 9 (90d) | Run 10 (90d, this run) | Run 9 (28d) | Run 10 (28d, this run) |
|---|---|---|---|---|
| Clicks | 11 | **4** | 3 | 2 |
| Impressions | 1,290 | 1,160 | 598 | 386 |
| Avg CTR | 0.9% | 0.3% | 0.5% | 0.5% |
| Avg position | 45.3 | **51.7** | 56.3 | **56.8** |
| **Indexed** | **52** | **53** | — | — |
| Not indexed | 5 (3 page-with-redirect, 1 alternate-canonical, 1 crawled-not-indexed) | **13** (3 page-with-redirect, 1 alternate-canonical, **8 discovered-currently-not-indexed [NEW]**, 1 crawled-not-indexed) | — | — |
| Sitemap last read | Aug 15 | **Aug 27** (Success, 61 discovered pages — normal cadence holding) | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand query "ireflect" (28d) | 12 impr, 0 clicks, pos 6.3 | **15 impr, 0 clicks, pos 7.0** | — | — |
| Homepage (28d, page-level) | 68 impr, 3 clicks, pos 16.8 | **66 impr, 2 clicks, pos 13.5** | — | — |
| Homepage (90d, page-level) | not isolated | **275 impr, 4 clicks, pos 14.2 — every one of this run's 4 total clicks came from the homepage** | — | — |

**90-day clicks and position have now declined for a 7th consecutive run.** Clicks: 35→32→28→23→17→11→**4** (Run 4 through Run 10). Position: 24.1→26.8→30.1→36.9→40.3→45.3→**51.7**. This is the steepest single-run drop yet (11→4 clicks, a 64% fall). The 28-day window is comparatively closer to flat (3→2 clicks, position 56.3→56.8) — consistent with the "wider tail, near-zero conversion" pattern named in Runs 7–9: the 90-day average keeps degrading mainly because it's shedding the better days from May/June as they age out, while the current 28-day baseline has been low and roughly stable for a while. Brand query "ireflect" 28d impressions actually improved slightly (12→15) with position improving too (6.3→7.0), but clicks remain 0 for the 4th straight run at the individual-query level — though homepage page-level clicks did register 2 (28d) and 4 (90d) this run, so brand-adjacent traffic hasn't gone fully to zero, it's just not resolving to the bare "ireflect" query in GSC's attribution. No new evidence to revisit Run 6's SERP name-collision root-cause finding (unrelated `ireflect.com.au`, App/Play Store listings, LED mirror gadget, `.NET IReflect` interface) — not re-litigated further this run.

### New finding this run: 6 blog posts have never been crawled by Google (root cause found, not fixable in code)
The Page Indexing report showed a not-indexed bucket that nearly tripled since Run 9 (5 → 13), driven entirely by a new reason category that hadn't appeared as its own line item before: **"Discovered - currently not indexed," 8 pages**. Drilled into the list: 6 are real content posts (`cant-understand-my-feelings`, `how-to-keep-a-decision-journal`, `how-to-start-a-self-reflection-journal`, `journaling-for-anxiety`, `lack-of-self-awareness`, `why-do-i-feel-emotional-for-no-reason`); the other 2 are `privacy.html` and `terms.html`, which are correctly and expectedly excluded (legal pages, not content Google needs to serve — non-issue).

For the 6 real posts, "Last crawl: N/A" on every one — Google has never fetched them at all, not a stale re-crawl problem like the redirect-error bucket in Runs 3–6. Ran the protocol-prescribed check before touching anything: verified via a script that all 6 (a) exist as real files, (b) are present in `sitemap.xml` (confirmed all 6 by grep — GSC's live URL Inspection panel showing "no referring sitemap" for 2 of them was a live-tool quirk, not a real gap, since the aggregate report and the file itself both confirm sitemap presence), and (c) already have 1–3 inbound links each from other post bodies (`how-to-keep-a-decision-journal`: 1, others: 2–3) plus a blog-index hub card — so this is not a repeat of the internal-linking-graph problem closed in Runs 3–6. Live-tested all 6 via URL Inspection > Test Live URL: **"Page can be indexed"** on every one that returned a live-test result. This is squarely a crawl-budget/authority deprioritization by Google on a still-low-authority domain, consistent with the 7-run traffic decline — not a site defect, and there is no code fix available for it per protocol (SEO-surface scope covers meta/schema/linking, not Google's crawl-budget allocation). **Action taken: requested indexing directly in Search Console for all 6 posts** (each confirmed "Indexing requested" / added to priority crawl queue). No file changes were needed or made for this finding — it required a GSC action, not a code change.

### Priority-order check
1. **Striking-distance keywords (pos 8–20, real impressions):** Re-checked the full 90-day page-level breakdown (46 pages) sorted by position. Found one real, repeat-run candidate: **`brain-dump-vs-journaling` — pos 15.3, 20 impressions (90d)**, up from Run 9's page-level reading of pos 16.8 (28d, 16 impr) — the same page flagged as the closest non-brand candidate in Run 9, now confirmed again a run later with more data. Drilled into its query-level breakdown: only one individual query is disclosed above GSC's privacy threshold (`what is a brain dump journal`, pos 93.0, 1 impression — deep, clearly not what's driving the pos-15.3 aggregate). The rest of the 20 impressions are spread across redacted long-tail queries. Per protocol's "cite the specific query + number" bar, this doesn't clear the threshold for a title/meta rewrite (same conclusion Run 9 reached for this exact page). It does, however, clear the bar for the other lever in this same protocol line — internal linking — since the page-level signal itself (position, impressions) is real, not redacted, and repeats across two runs. Checked inbound links: only 1 (`types-of-journaling`). Checked `journaling-vs-self-reflection` too (pos 18.4, 9 impr, 90d) as a second candidate — its query breakdown was fully empty (all impressions redacted), and it's a much thinner signal (9 impr vs 20); did not act on it this run to keep the change to one clear, well-evidenced item.
2. **High-impression pos 4–8 low-CTR pages:** None outside the homepage/brand case, which remains the Run 6 SERP-collision finding — not a packaging problem, not re-litigated.
3. **Indexing/crawl issues:** the headline finding this run — see above. Addressed via Request Indexing (GSC action), not a file change.
4. **Core Web Vitals:** still no CrUX data, still not actionable.
5. **Content gaps:** not evaluated this run. Indexing health moved the wrong direction (not-indexed 5→13, a new never-crawled category appeared) — per protocol, content addition requires indexing to be healthy first. This is not that run. Holding here, same logic as Run 9's hold but for the opposite reason (there, indexing was healthy and new posts needed more time; here, indexing needs to actually recover before adding more URLs for Google to deprioritize).

### Decision: UPDATE (internal linking only), not ADD
Per protocol step 3, explicitly chose (a) strengthen an existing page over (b) new content, because indexing health regressed this run (new precondition failure) and a specific, well-evidenced existing-page opportunity was available (`brain-dump-vs-journaling`, 2 runs running as the closest striking-distance candidate, under-linked at 1 inbound).

### Changes shipped this run (1 file, 1 new internal link)
1. `blog/journaling-for-anxiety/index.html` — added 1 inbound link to `brain-dump-vs-journaling` in the existing "keep reading" sentence. Natural fit: this post has an entire H2 section ("Brain dump when the worry has no shape") that discusses the brain-dump technique directly but previously didn't link to the dedicated brain-dump-vs-journaling post at all. Raises that page's inbound count from 1 to 2. Note: `journaling-for-anxiety` is itself one of the 6 never-crawled posts from the finding above, so this link won't register with Google until that post gets its first crawl — but it's now in the priority queue (see above), and the edit is correct/ready regardless of timing.

Validated the changed file with Python's `html.parser`: 0 parse errors. Confirmed all internal `/blog/...` href targets in the file resolve to real `index.html` files on disk (scripted check).

### Deliberately NOT done
- No title/meta rewrite on `brain-dump-vs-journaling` — no individually-disclosed query clears the "specific query + number" bar (see above); same conclusion Run 9 reached.
- No action on `journaling-vs-self-reflection` (pos 18.4, 9 impr) — weaker, fully-redacted signal; capped this run's link-fix to the one clearly-evidenced page.
- No reaction to the brand-term/homepage volatility beyond logging it — no new evidence against Run 6's SERP-collision root cause.
- No new content — indexing health regressed this run (precondition for content addition not met); the two most recent posts (`gratitude-journal-prompts`, `shadow-work-journal-prompts`) also still weren't re-checked for position movement this run, deferred to next run to keep this run focused on the indexing finding.
- No sitemap action — cadence is healthy (Aug 27 last read, Success, 61 pages, all 6 never-crawled posts confirmed present in the file).
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing, flagged again (4th time).

### Post-deploy actions (for the user)
- [ ] Push this run's 1 file (commands below).
- [ ] No further URL Inspection action needed on the 6 never-crawled posts — already requested indexing directly this run via Search Console.
- [ ] URL Inspection → Request Indexing on `journaling-for-anxiety` again once the push lands (its content changed) — low priority since it's already in the crawl queue from this run's indexing-regression fix, but worth a fresh request after the link is actually live.
- [ ] No sitemap resubmission needed.

```
cd "REFLECT LANDING"
git add blog/journaling-for-anxiety/index.html seo-log.md
git commit -m "SEO: link brain-dump-vs-journaling from journaling-for-anxiety; log Run 10 (indexing regression + re-index requests)"
git push origin main
```

### What to check NEXT run
1. **Is the 7-run decline continuing, holding, or reversing?** 90-day clicks fell 64% this run alone (11→4) — the sharpest drop in the log. Keep watching, but don't over-react to one run; confirm whether Run 11 continues the slide or stabilizes.
2. **Did the 6 never-crawled posts get their first crawl?** Check via URL Inspection (Last crawl should move off N/A) or via the aggregate Page Indexing report (not-indexed should drop from 13 back toward 5 if they get indexed, or at minimum the "Discovered - currently not indexed" count should drop from 8).
3. Did `brain-dump-vs-journaling` move off pos ~15.3, or gain impressions, now that it has a 2nd inbound link?
4. Did indexed count hold at 53+ or keep climbing?
5. Any new striking-distance query with real, non-redacted impressions? Still none found directly at the query level in 10 runs — page-level aggregates (`brain-dump-vs-journaling`, `journaling-vs-self-reflection`) remain the only usable proxy.
6. If the decline is still accelerating next run with no clear technical cause, it may be worth checking whether this is now genuinely a domain-authority/backlink problem rather than anything crawl- or on-page-related — nothing in 10 runs of SEO-surface work has reversed the trend, and that's worth naming plainly rather than repeating the same diagnostic loop a 3rd time.

---

## 2026-09-09 — Run 11 (⚠ Run 10 was never committed — 4-day gap found and closed; 7-run decline has stabilized; "indexing regression" from Run 10 confirmed as report lag, not real; verification-only on code)

### Critical finding before anything else: Run 10's changes were never committed
`git log` local HEAD = `7befa40` ("SEO log: Run 9...") — **Run 9's commit, not Run 10's.** Run 10 (2026-09-05) edited `blog/journaling-for-anxiety/index.html` (added the `brain-dump-vs-journaling` internal link) and wrote its full log entry into `seo-log.md`, but neither was ever staged or committed — both sat as uncommitted working-tree changes for 4 days, same failure mode Run 4 found and fixed for Run 2/3. `git diff --stat` this run: `journaling-for-anxiety/index.html` (+1/-1), `seo-log.md` (+73), plus the pre-existing `CLAUDE.md` deletion (not our doing, still not staged, 5th run flagging it). Re-validated Run 10's edit with `html.parser`: 0 errors, link target resolves. **This run's commands at the bottom bundle Run 10 + Run 11 together — push both.**

### GSC snapshot vs Run 10 baseline
| Metric | Run 10 (90d) | Run 11 (90d, this run) | Run 10 (28d) | Run 11 (28d, this run) |
|---|---|---|---|---|
| Clicks | 4 | 4 | 2 | 2 |
| Impressions | 1,160 | 1,180 | 386 | 392 |
| Avg CTR | 0.3% | 0.3% | 0.5% | 0.5% |
| Avg position | 51.7 | **51.3** | 56.8 | **55.5** |
| **Indexed** | **53** | **52** | — | — |
| Not indexed | 13 (3 page-with-redirect, 1 alternate-canonical, 8 discovered-not-indexed, 1 crawled-not-indexed) | **14** (3 page-with-redirect, 1 alternate-canonical, 4 discovered-not-indexed, **6 crawled-not-indexed**) | — | — |
| Sitemap last read | Aug 27 | **Sep 6** (Success, 61 pages — normal cadence holding) | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand "ireflect" (28d) | 15 impr, 0 clicks, pos 7.0 | **15 impr, 0 clicks, pos 7.3** | — | — |
| Homepage (28d, page-level) | 66 impr, 2 clicks, pos 13.5 | **65 impr, 2 clicks, pos 12.8** | — | — |
| Homepage (90d, page-level) | 275 impr, 4 clicks, pos 14.2 | **269 impr, 4 clicks, pos 14.0** | — | — |

**The 7-run decline (Run 4→10) has stabilized this run.** 90-day clicks held at 4 (was the sharp 11→4 drop last run); position actually improved slightly (51.7→51.3). 28-day position also improved (56.8→55.5). Too early to call this a reversal — one flat/slightly-up run after seven down runs could just be noise at these low volumes — but it's the first run since Run 3 that didn't post a fresh low. Brand query and homepage are both flat-to-slightly-better across both windows. No new evidence against Run 6's SERP name-collision root cause for the brand term; not re-litigated further.

### Investigated: is the indexing "regression" real?
The aggregate Page Indexing report looked worse than Run 10 at first glance — not-indexed rose 13→14, and a brand-new "Crawled - currently not indexed" bucket appeared with 6 pages (up from the 1 pre-existing app-subdomain entry), while "Discovered - currently not indexed" dropped 8→4. Read this as: some of Run 10's 8 never-crawled posts finally got their first Googlebot visit, but the aggregate report is now saying it decided not to index them. Before treating this as a new problem, live-tested every affected content page via URL Inspection > Test Live URL, per protocol (a stale-report finding needs a live check before it's treated as real):
- `journaling-for-anxiety`, `how-to-keep-a-decision-journal`, `cant-understand-my-feelings`, `lack-of-self-awareness` — **all four show "URL is on Google / Page is indexed" live**, despite the aggregate report listing them as not-indexed (two in "Crawled - not indexed," two in "Discovered - not indexed" with "Last crawled: N/A").
- The other 2 posts in the "Crawled - not indexed" bucket (`why-do-i-feel-emotional-for-no-reason`, `how-to-start-a-self-reflection-journal`) share the identical "Last crawled: Sep 5, 2026" timestamp as the two confirmed-indexed posts above — same batch, not spot-checked individually but inferred indexed on the same basis.
- `self-reflection-journal-prompts`, the one older page in that bucket (last crawled Jul 2), was not individually re-verified this run — flagged for a live check next run if it still shows in the bucket.

**Conclusion: this is the same stale-aggregate-report pattern established in Runs 3, 5, 6, and 10 (the "Redirect error" bucket then, "Discovered/Crawled - not indexed" now) — not a real indexing regression.** The Page Indexing report's "Last update" timestamp was Sep 4, three days behind the Sep 5 crawl and today's live-index state. **Run 10's finding is functionally resolved**: Google did crawl and index the previously-never-crawled posts; the report just hadn't caught up. No code action was needed or taken — this required only a GSC live-check, not a fix. Did not re-request indexing on anything (would be noise against an already-resolved state, same reasoning as every prior run that hit this pattern).

**Sitemap last-read advanced normally again (Aug 27 → Sep 6, still 61 pages, Status: Success)** — the cadence that came unstuck in Run 9 continues to hold. No action needed.

### Priority-order check
1. **Striking-distance keywords:** Checked the full 90-day and 28-day query lists sorted by position ascending, both with CTR/position columns enabled (not the default view). Only "ireflect" (brand, pos 8.8/90d, pos 7.3/28d) sits in the 8–20 band with real impressions — same as every run since Run 1. No non-brand query clears the bar; closest negligible entries: "irefully" (pos 10.0, 1 impr), "ai self reflection" (pos 16.0, 1 impr) — both too low-volume to act on. Lever stays closed, 11th run running.
   - **Page-level exception, tracked separately:** `brain-dump-vs-journaling` continues improving — pos 16.8 (Run 9) → 15.3 (Run 10) → **14.1 (Run 11, 90d, 25 impr)**. This is a real, repeat-run, non-redacted page-level signal. It already has 2 inbound links counted locally (`types-of-journaling`, live; `journaling-for-anxiety`, the still-unpushed Run 10 edit). Did not add a 3rd link this run — Run 10's link hasn't even reached production yet (see critical finding above), so layering another edit on top before that one has had a chance to register would be exactly the batching the protocol warns against. Next run's job: check whether pos keeps improving now that Run 10's link is finally live.
2. **High-impression pos 4–8 low-CTR pages:** None outside the homepage/brand case, which remains Run 6's SERP-collision finding — unchanged, not re-litigated.
3. **Indexing/crawl issues:** the headline investigation this run — see above. Resolved as report lag, not a real problem. No code action.
4. **Core Web Vitals:** still no CrUX data, still not actionable.
5. **Content gaps:** checked the two most recent posts' traction per Run 9/10's own checklist. `gratitude-journal-prompts` (5 weeks old): 4 impressions/90d, pos 87 — up marginally from Run 9's 3 impr/pos 84, still deep. `shadow-work-journal-prompts` (4 weeks old): confirmed indexed live via URL Inspection, but **0 impressions over 90 days** — no signal yet at all. Neither post has generated anything to act on. Per protocol, adding a third new post now — while the first two are still producing zero real traction and indexing is only *probably* (not yet re-confirmed via a clean aggregate report) fully healthy — would be premature. Held here, same logic as Run 9.

### Decision: no code changes shipped this run (verification-only), critical process fix is the deliverable
Walked the full priority order; every lever is either closed (striking-distance, CTR-packaging, CWV) or was investigated and resolved without needing a code change (indexing). The one live content lever (`brain-dump-vs-journaling`) already has an edit in flight from Run 10 that hasn't gone live — pulling it again this run would be double-dipping on one signal instead of letting it play out. Content-gap addition is not warranted — the precondition (existing new posts showing traction) isn't met. This run's real work was diagnostic: confirming the "indexing regression" flagged by the aggregate report is not real, and catching the 4-day-old broken deploy pipeline before a third run's work piled up uncommitted behind it.

### Changes shipped this run
None beyond what Run 10 already made (still pending commit — see below). This run edited only `seo-log.md` (this entry).

### Deliberately NOT done
- No additional internal link to `brain-dump-vs-journaling` — Run 10's edit to the same page hasn't shipped yet; let it land before adding more.
- No re-request-indexing action — the aggregate "not indexed" findings were confirmed as stale reporting via live URL Inspection, not real; requesting indexing again would be noise.
- No new content — the two most recent posts (gratitude, shadow-work) still show no meaningful traction (4 and 0 impressions respectively) to justify a third addition yet.
- No title/meta changes — no query/page meets the "real, non-redacted impressions" bar beyond the already-closed brand-term case.
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing, flagged again (5th consecutive run).

### Post-deploy actions (for the user)
- [ ] **Push Run 10 + Run 11 together** (commands below) — this is the priority; Run 10's link edit has been sitting unpublished for 4 days.
- [ ] URL Inspection → Request Indexing on `journaling-for-anxiety` once the push lands (its content changed with the new link) — low priority since it's already confirmed indexed live, but worth a fresh crawl request after the edit is actually in production.
- [ ] No sitemap resubmission needed — cadence is healthy (Sep 6 last read).
- [ ] No other re-indexing requests needed — this run's indexing "regression" was confirmed as stale reporting, not a real state to fix.

```
cd "REFLECT LANDING"
git add blog/journaling-for-anxiety/index.html seo-log.md
git commit -m "SEO: link brain-dump-vs-journaling from journaling-for-anxiety (Run 10); log Run 10 + Run 11 (indexing regression confirmed as report lag, decline stabilized)"
git push origin main
```

### What to check NEXT run
1. **Did Run 10's link edit actually reach production this time?** Check `git log origin/main` before anything else — if it's not there, stop and flag it again rather than re-diagnosing stale data (this is the second time in 11 runs this has happened; consider whether the push step needs a more reliable handoff).
2. **Is the click/position stabilization from this run holding, or was it a one-run blip?** One flat run after seven down runs isn't a trend yet — needs at least one more data point before reading anything into it.
3. Did `brain-dump-vs-journaling` continue improving (14.1 this run) now that its 2nd inbound link is finally live? This is the clearest positive signal in the log right now.
4. Did the aggregate Page Indexing report catch up to the live-index state confirmed this run (all spot-checked "not indexed" pages actually indexed)? Check whether "Discovered/Crawled - not indexed" drops back toward 0 on its own, same pattern as the old "Redirect error" bucket.
5. Any movement on `gratitude-journal-prompts` (4 impr/pos 87) or `shadow-work-journal-prompts` (0 impr) — both are due for a real look next run; if shadow-work still shows zero impressions after 8 weeks, that's worth a fresh look rather than continued patience.
6. Any new striking-distance non-brand query? None in 11 runs — worth periodically re-checking but not worth a dedicated pass every time.

---

## 2026-09-14 — Run 12 (⚠ Run 10's edit STILL not pushed — 5 days after Run 11 said to push it; decline has now stabilized for a 2nd straight run; brand-term impressions sharply reversed; brain-dump-vs-journaling entered striking distance; verification-only)

### Critical finding before anything else: Run 10's edit is still sitting unpushed
`git log` local HEAD = `7befa40` ("SEO log: Run 9..."), and `git log origin/main` = same — **identical to what Run 11 found five days ago.** Run 11 explicitly bundled Run 10 + Run 11 into one push and handed over commands; those commands were not run. `git diff --stat` this run: `blog/journaling-for-anxiety/index.html` (+1/-1, the `brain-dump-vs-journaling` link), `seo-log.md` (unstaged growth from Run 10 and Run 11's entries), plus the pre-existing `CLAUDE.md` deletion (still not ours, still not staged, 6th consecutive run flagging it). Re-validated the pending edit with `html.parser`: 0 errors, link target (`blog/brain-dump-vs-journaling/`) confirmed to exist on disk. This is now the **second occurrence** of a multi-run unpushed gap (the first was Run 2→4), and this one has now sat for 3 full run cycles (Run 10, 11, 12) — 9 days. Also found and cleared a stale `.git/index.lock` (dated Sep 9, harmless leftover from a prior interrupted session per this task's own known workaround — renamed, not the cause of the missed push). **This run's commands at the bottom bundle Run 10 + 11 + 12 together — push all three.**

### GSC snapshot vs Run 11 baseline
| Metric | Run 11 (90d) | Run 12 (90d, this run) | Run 11 (28d) | Run 12 (28d, this run) |
|---|---|---|---|---|
| Clicks | 4 | 5 | 2 | 2 |
| Impressions | 1,180 | 1,270 | 392 | 437 |
| Avg CTR | 0.3% | 0.4% | 0.5% | 0.5% |
| Avg position | 51.3 | **51.4** | 55.5 | **55.5** |
| **Indexed** | **52** | **52** | — | — |
| Not indexed | 14 (3 page-with-redirect, 1 alternate-canonical, 4 discovered-not-indexed, 6 crawled-not-indexed) | **14 — identical breakdown**, confirmed stable | — | — |
| Sitemap last read | Sep 6 | Sep 6 — unchanged (no new URL to trigger a fresh read; not a red flag, same reasoning as prior stable periods) | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand "ireflect" (28d) | 15 impr, 0 clicks, pos 7.3 | **109 impr, 0 clicks, pos 8.6** | — | — |
| Homepage (28d, page-level) | 65 impr, 2 clicks, pos 12.8 | **63 impr, 2 clicks, pos 12.5** | — | — |
| Homepage (90d, page-level) | 269 impr, 4 clicks, pos 14.0 | **268 impr, 5 clicks, pos 14.1** | — | — |

**The 7-run decline (Run 4→10) has now stabilized for a 2nd consecutive run.** 90-day clicks ticked up (4→5), impressions rose (1,180→1,270), position is flat to one decimal (51.3→51.4). 28-day clicks flat (2→2), position exactly flat (55.5→55.5). Two flat-to-slightly-up runs after seven down runs is now a real pattern, not a single-run blip — per Run 11's own checklist item 2, this needed at least one more data point, and it got one. Not declaring victory (volumes are still tiny and noisy), but the multi-run downtrend named in Runs 4–10 has clearly broken.

**Brand query "ireflect" impressions sharply reversed — the biggest single-metric move in the log.** 28-day impressions: 70–116 (Runs 4–7) → 23 (Run 8) → 12 (Run 9) → 15 (Run 10/11) → **109 (Run 12)**. This snaps back to the pre-decline range in one run, with position also improving (7.3 → 8.6 is nominally worse by a decimal but both are within the same healthy band — not a meaningful move). Clicks remain 0 at the individual-query level for the 5th straight run, consistent with Run 9–11's finding that brand-adjacent traffic is landing via other queries (homepage page-level still shows 2 clicks/28d). No new evidence to revisit Run 6's SERP name-collision root-cause finding (unrelated `ireflect.com.au`, App/Play Store listings, LED mirror gadget, `.NET IReflect` interface) for why the exact-match query itself doesn't convert — not re-litigated further. This reversal is a genuinely positive, unexplained-but-real data point; flagging it plainly rather than reaching for a causal story the data doesn't support.

**New non-brand demand signal: "why do i feel disconnected from myself" — 82 impressions (28d), position 73.8, 0 clicks.** This maps directly to the existing post `why-do-i-feel-disconnected-from-myself` (linked from Run 6 and Run 8's work). Too deep to be a striking-distance or CTR-packaging candidate (protocol requires pos 8–20 or 4–8 respectively), but worth noting as a real new query cluster forming — if this page's position improves in future runs the way `brain-dump-vs-journaling` has, it becomes a lever. Not actionable this run.

### Priority-order check
1. **Striking-distance keywords (pos 8–20, real impressions):** Brand term "ireflect" sits here as always (pos 8.6, 28d) — no fixable lever beyond what's already in place. Checked the full 90-day and 28-day query lists end to end (159 rows/90d): no non-brand query clears the bar. Closest negligible entries: "irefully" (pos 10.0, 1 impr), "ai self reflection" (pos 16.0, 1 impr) — both too low-volume, unchanged from Run 11.
   - **Page-level candidate, now genuinely inside the band: `brain-dump-vs-journaling` — pos 12.5 (90d, 33 impressions), up from Run 11's 14.1.** This is the 4th consecutive run of improvement (16.8 → 15.3 → 14.1 → **12.5**), and it has now crossed into the 8–20 striking-distance zone by the page-level proxy. Drilled into its query breakdown again: still only 1 individually-disclosed query ("what is a brain dump journal," pos 93.0, 1 impression) — the other 32 of 33 impressions remain below GSC's redaction threshold. Same conclusion as Runs 9–11: doesn't clear the "specific query + number" bar for a title/meta rewrite. The internal-linking lever for this exact page already has an edit in flight from Run 10 that still isn't live (see critical finding above) — adding a 3rd link on top of an unlanded 2nd would be double-dipping on one signal before it's even been measured. Held here deliberately.
2. **High-impression pos 4–8 low-CTR pages:** None outside the homepage/brand case, still Run 6's SERP-collision finding, not re-litigated.
3. **Indexing/crawl issues:** Not-indexed held flat at 14 with an identical reason breakdown to Run 11 (3 page-with-redirect, 1 alternate-canonical, 4 discovered-not-indexed, 6 crawled-not-indexed) — confirms Run 11's finding that this is a settled, correctly-categorized state, not an active problem. No live re-checks needed this run; nothing changed. Sitemap last-read unchanged at Sep 6 — expected, no new URL was added to trigger a fresh read.
4. **Core Web Vitals:** still no CrUX data, still not actionable.
5. **Content gaps:** `gratitude-journal-prompts` (90d): 4 impressions, pos 87 — flat vs Run 11, still no traction after 6 weeks. `shadow-work-journal-prompts` (90d): **0 clicks, 0 impressions, pos 0** — still zero signal at ~4.5 weeks old (Run 11 also found 0 at 4 weeks). Per Run 11's own checklist, the trigger for a fresh look is 8 weeks with zero impressions; not there yet (would land around Run 14–15). Neither post's traction justifies a 3rd content addition, and the precondition (existing posts showing signal) still isn't met. Held, same logic as Run 9 and Run 11.

### Decision: no code changes shipped this run (verification-only)
Every lever is either closed, already has an edit in flight (brain-dump-vs-journaling, pending Run 10's unpushed link), or fails its precondition (content-gap addition, indexing already stable with nothing to fix). Shipping a new edit on top of an already-pending, unlanded change on the same page would be exactly the batching the protocol warns against, and no other page/query cleared any bar this run. This run's real work was diagnostic and process-focused: confirming the decline has stabilized for a 2nd run, catching that the critical deploy gap flagged in Run 11 is now 5 days older with zero progress, and clearing a stale lockfile that could otherwise mask future `git status` reads.

### Changes shipped this run
None beyond what Run 10 already made (still pending commit). This run edited only `seo-log.md` (this entry) and cleared a stale `.git/index.lock` (housekeeping, not a content change).

### Deliberately NOT done
- No additional internal link to `brain-dump-vs-journaling` — Run 10's edit to the same page still hasn't shipped; won't layer a 2nd edit on an unlanded 1st.
- No title/meta changes — no query/page meets the "real, non-redacted impressions" bar beyond the already-closed brand-term case.
- No new content — `shadow-work-journal-prompts` hasn't hit the 8-week zero-impressions checkpoint yet; `gratitude-journal-prompts` still flat with no traction to build on.
- No reaction to the brand-impression reversal beyond logging it — it's a positive, unexplained data point; inventing a causal story without evidence would violate the "never propose a change without a GSC number behind it" rule in reverse (don't claim credit without evidence either).
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing, flagged again (6th consecutive run).

### Post-deploy actions (for the user)
- [ ] **Push Run 10 + Run 11 + Run 12 together** (commands below) — this is now a 9-day-old gap. Nothing in this log updates meaningfully until this lands.
- [ ] URL Inspection → Request Indexing on `journaling-for-anxiety` once the push lands (content changed with the new link).
- [ ] No sitemap resubmission needed — cadence is stable (Sep 6 last read, Success, 61 pages).
- [ ] No other re-indexing requests needed — indexing bucket is confirmed stable, nothing changed.

```
cd "REFLECT LANDING"
git add blog/journaling-for-anxiety/index.html seo-log.md
git commit -m "SEO: link brain-dump-vs-journaling from journaling-for-anxiety (Run 10); log Run 10 + 11 + 12 (decline stabilized, brand impressions reversed, brain-dump-vs-journaling in striking distance)"
git push origin main
```

### What to check NEXT run
1. **Did the push finally land this time?** Check `git log origin/main` before anything else. This is the 3rd run in a row this exact check has been necessary — if it's still not there, this stops being a diagnostic footnote and becomes the headline finding again.
2. Is the 2-run stabilization (Run 11→12) continuing into a 3rd flat-or-up run, confirming the 7-run decline is genuinely over?
3. Did `brain-dump-vs-journaling` keep improving (12.5 this run) once its 2nd inbound link is actually live? It's the clearest, most consistent positive signal in the log — 4 runs of uninterrupted improvement.
4. Did the brand-term 28-day impression spike (109 this run) hold, or was it a one-run blip like the earlier lows may have been? Needs a 2nd data point before reading a trend into it either way.
5. Is `shadow-work-journal-prompts` still at 0 impressions? It'll be ~6.5 weeks old next run — one more run after that hits the 8-week checkpoint from Run 11's checklist.
6. Any movement on `why do i feel disconnected from myself` (82 impr/28d, pos 73.8) — new query cluster worth tracking alongside `brain-dump-vs-journaling` as a second potential striking-distance candidate if its position starts moving.

---

## 2026-09-17 — Run 13 (push finally confirmed landed — 3-run stabilization holds; brand-impression spike was a one-run blip as flagged; brain-dump-vs-journaling now 5 straight runs improving — 3rd link added; indexing bucket keeps clearing)

### Push check first
`git log` local HEAD = `48d993c` ("...log Run 10 + 11 + 12..."), and `git log origin/main` = **identical**. Confirmed: the Run 10/11/12 push that sat unlanded for 9 days finally happened between Run 12 and this run. Working tree still shows `CLAUDE.md` as deleted (pre-existing drift, still not staged, 7th consecutive run flagging it — not re-flagging in detail again after this, it's a known constant).

### GSC snapshot vs Run 12 baseline
| Metric | Run 12 (90d) | Run 13 (90d, this run) | Run 12 (28d) | Run 13 (28d, this run) |
|---|---|---|---|---|
| Clicks | 5 | 5 | 2 | 2 |
| Impressions | 1,270 | 1,320 | 437 | 468 |
| Avg CTR | 0.4% | 0.4% | 0.5% | 0.4% |
| Avg position | 51.4 | **52** | 55.5 | **55.3** |
| **Indexed** | **52** | **58** |  |  |
| Not indexed | 14 (3 page-with-redirect, 1 alternate-canonical, 4 discovered-not-indexed, 6 crawled-not-indexed) | **8** (3 page-with-redirect, 1 alternate-canonical, 2 discovered-not-indexed, 2 crawled-not-indexed, 0 redirect error) | — | — |
| Sitemap last read | Sep 6 | **Sep 15** (Success, 61 pages — normal cadence holding) | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand "ireflect" (28d) | 109 impr, 0 clicks, pos 8.6 | **18 impr, 0 clicks, pos 7.7** | — | — |
| Brand "ireflect" (90d) | not isolated | 105 impr, 0 clicks, pos 8.4 | — | — |
| Homepage (90d, page-level) | 268 impr, 5 clicks, pos 14.1 | **262 impr, 5 clicks, pos 14.1 — every one of this run's 5 clicks came from the homepage, same as Run 10/12** | — | — |

**The stabilization holds for a 3rd consecutive run.** 90-day clicks flat at 5, position flat to one decimal (51.4→52), impressions up slightly (1,270→1,320). 28-day clicks flat at 2, position essentially flat (55.5→55.3), impressions up slightly (437→468). This confirms Run 12's read: the 7-run decline (Run 4–10) is over, not just a 2-run blip — three flat-to-slightly-up runs in a row is a real pattern now.

**Run 12's brand-impression "spike" (109 impr, 28d) did not hold — it reverted to 18 impressions this run**, back in the same low range as Runs 9–11 (12–15). Run 12 explicitly flagged this as needing a second data point before calling it a trend ("was it a one-run blip like the earlier lows may have been?") — it was. Position remains healthy and stable throughout (pos 6–9 range every run since Run 6), so this was pure impression-volume noise, not a ranking change. No new evidence to revisit Run 6's SERP name-collision root-cause finding — not re-litigated further.

**`why do i feel disconnected from myself` is completely unchanged**: 82 impressions, position 73.8 — identical to Run 12's read to one decimal, on both metrics. Zero movement in 4 days. Still just a demand signal, still too deep to be a striking-distance candidate, still not actionable.

### Indexing: bucket keeps clearing, consistent with report-lag pattern, not a new problem
Indexed count jumped 52 → 58 (+6). Not-indexed dropped 14 → 8, with the biggest change in "Discovered - currently not indexed" (4→2) and "Crawled - currently not indexed" (6→2). This is the same pattern Run 11 diagnosed and confirmed via live URL Inspection (the aggregate report lagging real index state, following the same "Redirect error" stale-bookkeeping precedent from Runs 3/5/6) — did not re-run individual live URL Inspection checks this run since the trend is continuing in the expected direction (buckets shrinking toward the 5 confirmed-correct exclusions: 3 protocol/www redirect variants, 1 alternate-canonical search-template URL, and what should eventually settle as 1 crawled-not-indexed for the app-subdomain signup page). Not flagging this as a new investigation — it's the same resolving-itself pattern, now clearing further.

**Sitemap last-read advanced normally again (Sep 6 → Sep 15)** — cadence continues healthy since it came unstuck in Run 9.

### Priority-order check
1. **Striking-distance keywords:** Brand term "ireflect" sits here as always (pos 7.7–8.4 across windows) — no new lever. Checked the full 90-day query list (170 rows) end to end: no non-brand query clears the bar. Closest negligible entries unchanged from Run 12: "ai self reflection" (pos 16.0, 1 impr), "irefully" (pos 10.0, 1 impr) — both too low-volume.
   - **Page-level candidate, now 5 consecutive runs of improvement: `brain-dump-vs-journaling` — pos 12.0 (90d, 37 impressions)**, up again from Run 12's 12.5/33 impr (16.8 → 15.3 → 14.1 → 12.5 → **12.0**). This is the clearest, longest-running positive signal in the entire log. Query breakdown still shows only 1 disclosed query ("what is a brain dump journal," pos 93.0, 1 impression) — same conclusion as Runs 9–12, doesn't clear the title/meta bar. **Confirmed via `git log` this run that Run 10's 2nd inbound link (from `journaling-for-anxiety`) is now live in production** (unlike Runs 11–12, when it was still pending) — the double-dipping concern that held back further action in Runs 11 and 12 no longer applies. Added a 3rd inbound link this run (see below).
   - `journaling-vs-self-reflection`: pos 17.4 (90d, 10 impr), up slightly from Run 12's 18.4/9 — 2nd run of mild improvement, but the signal is still thin (10 impressions, fully redacted at the query level). Not acted on this run — one page-level lever per run is enough to stay incremental, and `brain-dump-vs-journaling` has 5 runs of evidence behind it vs. this page's 2.
2. **High-impression pos 4–8 low-CTR pages:** None outside the homepage/brand case, still Run 6's SERP-collision finding, not re-litigated.
3. **Indexing/crawl issues:** Continuing to resolve on its own, see above — no action needed.
4. **Core Web Vitals:** still no CrUX data, still not actionable.
5. **Content gaps:** `gratitude-journal-prompts` (90d): 4 impressions, pos 87 — completely flat vs Run 12, still no traction after 6 weeks. `shadow-work-journal-prompts`: confirmed via the full 51-page 90-day breakdown that it has **zero impressions**, still — it's ~5 weeks old (published Aug 12), short of the 8-week checkpoint Run 11 set (due around Run 14–15, early October). Held again, same reasoning as Runs 9, 11, 12.

### Decision: UPDATE (internal linking only) — 1 file
Per protocol step 3, chose to strengthen `brain-dump-vs-journaling` further because: it's the single best-evidenced lever in the log (5 straight runs of position improvement, real non-redacted page-level data), its previous inbound-link edit (Run 10) is now confirmed live (clearing the double-dip concern that paused this in Runs 11–12), and no other lever cleared its bar this run.

### Changes shipped this run (1 file, 1 new internal link)
1. `blog/how-to-journal/index.html` — added a link to `brain-dump-vs-journaling` in the existing "Keep reading" sentence. Natural fit: this post's "Give yourself a container" section already discusses structured/limited journaling techniques as an alternative to open-ended writing, and it's the site's main journaling-101 hub post (already the source of the Run 3 `types-of-journaling` link) — a logical 3rd inbound source distinct from the previous two (`types-of-journaling`, `journaling-for-anxiety`). Raises `brain-dump-vs-journaling`'s inbound count from 2 to 3.

Validated with Python's `html.parser`: 0 parse errors. Confirmed the link target (`blog/brain-dump-vs-journaling/index.html`) exists on disk.

### Deliberately NOT done
- No title/meta rewrite on `brain-dump-vs-journaling` — still only 1 disclosed query at the individual level, same conclusion as every run since Run 9.
- No action on `journaling-vs-self-reflection` — weaker, 2-run signal; capped this run's link-fix to the strongest candidate to stay incremental.
- No reaction to the brand-impression reversion (109→18) beyond logging it as the resolved one-run blip Run 12 predicted it might be.
- No new content — neither recent post (`gratitude-journal-prompts`, `shadow-work-journal-prompts`) has hit its traction checkpoint yet.
- No further indexing action — the not-indexed bucket is shrinking on its own, consistent with the established report-lag pattern; forcing another live-inspection pass or re-index request would be redundant given the trend is already moving the right direction.
- No sitemap action — cadence is healthy.
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing (7th consecutive run; not re-detailing every run going forward unless its state changes).

### Post-deploy actions (for the user)
- [ ] Push this run's 1 file (commands below).
- [ ] URL Inspection → Request Indexing on `how-to-journal` once the push lands (its content changed with the new link).
- [ ] No sitemap resubmission needed — cadence is healthy (Sep 15 last read).
- [ ] No re-indexing requests needed beyond the one edited page — the not-indexed bucket is resolving on its own.

```
cd "REFLECT LANDING"
git add blog/how-to-journal/index.html seo-log.md
git commit -m "SEO: add 3rd inbound link to brain-dump-vs-journaling from how-to-journal; log Run 13 (stabilization holds, brand-impression blip confirmed, indexing bucket clearing)"
git push origin main
```

### What to check NEXT run
1. Did `brain-dump-vs-journaling` continue improving (12.0 this run) with its 3rd inbound link now live? 6 consecutive runs of data would make this an unambiguous, durable pattern.
2. Is the 3-run stabilization (Run 11→13) holding into a 4th run, or was Run 13 the point it plateaus/reverses?
3. Did the not-indexed bucket keep shrinking toward the 5 confirmed-correct exclusions (currently at 8)?
4. Is `shadow-work-journal-prompts` still at 0 impressions? It'll cross the 8-week mark (published Aug 12) around early October — worth a dedicated look once it does.
5. Any movement on `journaling-vs-self-reflection` (pos 17.4, 10 impr, 2nd run of mild improvement) — if it keeps trending like `brain-dump-vs-journaling` did, it becomes the next internal-linking candidate.
6. Confirm this run's push actually landed before trusting next run's baseline — check `git log origin/main` first, as always.

---

## 2026-09-21 — Run 14 (push confirmed — 4-run stabilization holds; brain-dump-vs-journaling now 6 straight runs improving; journaling-vs-self-reflection newly enters striking distance — 3rd link added)

### Push check first
Local HEAD = `9f9c82f` ("...log Run 13..."), and `git log origin/main` = **identical**, confirmed via `git fetch origin main`. Run 13's link edit reached production. Working tree still shows `CLAUDE.md` as deleted (pre-existing drift, not staged, not this run's doing — 8th consecutive run, not re-detailing per Run 13's own note unless its state changes). Also found and cleared another stale `.git/index.lock` (same harmless recurring artifact Run 12 first found; git recreates and fails to unlink it on this mount, but commands still complete correctly).

### GSC snapshot vs Run 13 baseline
| Metric | Run 13 (90d) | Run 14 (90d, this run) | Run 13 (28d) | Run 14 (28d, this run) |
|---|---|---|---|---|
| Clicks | 5 | 5 | 2 | 2 |
| Impressions | 1,320 | 1,360 | 468 | 454 |
| Avg CTR | 0.4% | 0.4% | 0.4% | 0.4% |
| Avg position | 52.0 | **51.7** | 55.3 | **52.8** |
| **Indexed** | **58** | **58** | — | — |
| Not indexed | 8 (3 page-with-redirect, 1 alternate-canonical, 2 discovered-not-indexed, 2 crawled-not-indexed) | 8 — **identical breakdown**, confirmed stable | — | — |
| Sitemap last read | Sep 15 | Sep 15 — unchanged (no new URL added since Run 8, expected) | — | — |
| Core Web Vitals | No data | No data — unchanged | — | — |
| Brand "ireflect" (90d) | 105 impr, pos 8.4 | 103 impr, pos 8.3 | 18 impr, pos 7.7 (28d) | **16 impr, pos 8.5 (28d)** |
| Homepage (90d, page-level) | 262 impr, 5 clicks, pos 14.1 | **259 impr, 5 clicks, pos 14.1** | — | **56 impr, 2 clicks, 3.6% CTR, pos 12.6 (28d)** |

**The stabilization holds for a 4th consecutive run.** 90-day clicks held exactly at 5 for the 2nd straight run; position essentially flat (52.0 → 51.7); 28-day position actually improved (55.3 → 52.8). The 7-run decline (Run 4–10) that bottomed out at Run 10 remains reversed — four runs (11, 12, 13, 14) of flat-to-slightly-up data now confirm this is a settled floor, not residual noise.

**Run 12's brand-impression spike (109, 28d) stays fully reverted, as Run 13 already found — this run confirms the low range is the new normal, not a fresh decline.** 28-day brand impressions: 15 (R11) → 109 (R12, one-run blip) → 18 (R13) → **16 (R14)**. Two consecutive runs in the same 16–18 band closes this out as settled; position remains healthy throughout (pos 7–9 range every run since Run 6). No new evidence against Run 6's SERP name-collision root-cause finding — not re-litigated further.

**Indexing bucket held completely flat and identical to Run 13** (8 not-indexed, same 4-reason breakdown) — confirms Run 13's read that this is a settled state, not actively resolving or regressing. No live re-checks needed.

**Sitemap last-read unchanged at Sep 15** — expected, no new URL was added this run to trigger a fresh read. Cadence otherwise healthy since it came unstuck in Run 9.

### Priority-order check
1. **Striking-distance keywords (pos 8–20, real impressions):** Brand term "ireflect" sits here as always (pos 8.3–8.5) — no new lever. Checked the full 90-day query list (172 rows) sorted by position ascending: no non-brand query clears the bar. Closest negligible entries unchanged from prior runs: "irefully" (pos 10.0, 1 impr), "ai self reflection" (pos 16.0, 1 impr).
   - **`brain-dump-vs-journaling` — pos 11.6 (90d, 42 impressions), up again from Run 13's 12.0/37 impr.** This is the **6th consecutive run of improvement** (16.8 → 15.3 → 14.1 → 12.5 → 12.0 → **11.6**), the longest-running positive signal in the log. Its 3rd inbound link (from `how-to-journal`, added Run 13) is confirmed live. Did not add a 4th link this run — this page is already the most well-evidenced lever available; piling on a 4th link now would be exactly the batching the protocol warns against, especially with a newer, less-linked candidate available (see next item).
   - **New this run: `journaling-vs-self-reflection` — pos 13.5 (90d, 19 impressions), a sharp jump from Run 13's 17.4/10 impr** (18.4 → 17.4 → **13.5** across Runs 12–14). This is now a real, repeat-run, page-level signal that has crossed into the 8–20 band for the first time. Checked inbound links via script: only 2 (`ai-journaling-vs-traditional-journaling`, `why-journaling-alone-doesnt-help`) — the same under-linked state `brain-dump-vs-journaling` was in before its own improvement streak began. This is the strongest available lever this run.
   - Attempted to pull this page's individual query breakdown to check the "specific query + number" bar for a possible title/meta rewrite, but the GSC UI's page-filter view kept returning a stale, sitewide query table rather than the filtered one (a tooling limitation this run, not a finding) — so the disclosed-query state for this specific page is **unconfirmed**, not "checked and redacted" as it was for `brain-dump-vs-journaling`. Not claiming that lever is closed; flagging it as unverified and worth a clean re-check next run.
2. **High-impression pos 4–8 low-CTR pages:** None outside the homepage/brand case, still Run 6's SERP-collision finding, not re-litigated.
3. **Indexing/crawl issues:** Flat and identical to Run 13 — no action needed.
4. **Core Web Vitals:** still no CrUX data, still not actionable.
5. **Content gaps:** `gratitude-journal-prompts` (90d): 4 impressions, pos 87.0 — flat vs Run 13, still no traction after ~7 weeks. `shadow-work-journal-prompts`: confirmed absent from the full 90-day pages-with-impressions list (51 pages) — **still 0 impressions at ~40 days old (5.7 weeks)**, not yet at the 8-week checkpoint set in Run 11 (due ~Oct 7, around Run 16). Held again, same reasoning as Runs 9, 11, 12, 13 — neither post's traction (or lack of it) justifies a 3rd content addition yet, and no new evidence-backed gap was researched this run since the content-gap lever isn't due for reconsideration until indexing health or existing-post traction changes.

### Decision: UPDATE (internal linking only) — 1 file
Per protocol step 3, chose to strengthen `journaling-vs-self-reflection` because it just crossed into striking distance with a real 2-run improvement trend, it's under-linked (2 inbound, same starting point `brain-dump-vs-journaling` had), and picking this newer candidate rather than adding a 4th link to the already-well-evidenced `brain-dump-vs-journaling` keeps the run to one clear, non-duplicative increment.

### Changes shipped this run (1 file, 1 new internal link)
1. `blog/self-reflection-vs-rumination/index.html` — added a link to `journaling-vs-self-reflection` in the existing "keep exploring" sentence. Natural fit: this post already distinguishes self-reflection from rumination and has an FAQ entry ("Can journaling become rumination?") directly adjacent to the journaling-vs-self-reflection distinction — a logical topical neighbor, and it did not already link to this target. Raises `journaling-vs-self-reflection`'s inbound count from 2 to 3.

Validated with Python's `html.parser`: 0 parse errors. Confirmed all three link targets in the edited sentence (`why-journaling-alone-doesnt-help`, `journaling-vs-self-reflection`, `how-to-stop-overthinking-at-night`) resolve to real `index.html` files on disk (scripted check).

### Deliberately NOT done
- No title/meta rewrite on `journaling-vs-self-reflection` or `brain-dump-vs-journaling` — the former's per-page query disclosure is unconfirmed this run (tooling issue, not a clean "checked and redacted" finding — flagged above for a re-check), and the latter has never cleared the bar in 6 runs of checking.
- No 4th link to `brain-dump-vs-journaling` — already the best-evidenced lever in the log; adding more would be batching rather than incremental.
- No new content — neither recent post has hit its traction checkpoint (`shadow-work-journal-prompts` is ~2 weeks short of the 8-week mark).
- No reaction to the brand-term 28d impressions (16) beyond confirming it's settled in the same low range as Run 13, not a fresh decline.
- No sitemap action — cadence is healthy, no new URL this run.
- Did not stage `CLAUDE.md` — still shows deleted locally, not this run's doing (8th consecutive run).

### Post-deploy actions (for the user)
- [ ] Push this run's 1 file (commands below).
- [ ] URL Inspection → Request Indexing on `self-reflection-vs-rumination` once the push lands (its content changed with the new link).
- [ ] No sitemap resubmission needed — cadence is healthy, no new URL added.

```
cd "REFLECT LANDING"
git add blog/self-reflection-vs-rumination/index.html seo-log.md
git commit -m "SEO: add 3rd inbound link to journaling-vs-self-reflection from self-reflection-vs-rumination; log Run 14 (stabilization holds 4th run, new striking-distance candidate identified)"
git push origin main
```

### What to check NEXT run
1. Did `journaling-vs-self-reflection` continue improving (13.5 this run) with its 3rd inbound link now live? One more run of data is needed before treating this as a durable trend like `brain-dump-vs-journaling`'s.
2. Did `brain-dump-vs-journaling` extend its streak past 11.6? A 7th consecutive improving run would make it an exceptionally clean signal.
3. Is the 4-run stabilization (Run 11→14) holding into a 5th run?
4. **Re-attempt a clean per-page query breakdown for `journaling-vs-self-reflection`** — this run's attempt returned a stale/unfiltered table (tooling issue). If a specific disclosed query with real impressions turns up, that would clear the bar for a title/meta rewrite the page-level data alone can't justify.
5. Is `shadow-work-journal-prompts` still at 0 impressions as it crosses the 8-week mark (~Oct 7, around Run 16)? First run it's fair to treat continued zero as worth a dedicated look rather than patience.
6. Any new striking-distance query at the individual query level? None in 14 runs — worth periodically checking but not a dedicated pass every time.
