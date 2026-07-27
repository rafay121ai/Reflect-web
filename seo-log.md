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
