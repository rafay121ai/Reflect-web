# iReflect SEO Playbook (v2)

Owner: Rafay. Maintained by the scheduled SEO routine. Read this AND the latest entry of `seo-log.md` at the start of every run.
This file is the strategy; `seo-log.md` is the run history. Update the queues and trackers below every run.

## 1. Diagnosis (baseline 2026-09-23)

| Signal | Value | Source |
|---|---|---|
| Clicks / impressions (90d) | 5 / 1,360 | GSC Performance |
| Avg position (90d) | 51.7 (was 19.7 in July) | GSC |
| Indexed | 58 of 61 sitemap URLs | GSC Pages (Run 14) |
| External links | 7, all from reddit.com, all to homepage | GSC Links |
| Non-brand queries in top 20 with real impressions | 0 | GSC Queries |
| Brand SERP "ireflect" | homepage ~pos 8-14; ireflect.com.au, Reflection.app and others own the name | live SERP (Run 6) |
| Avg post length | ~660 words; author = Organization on all posts | repo scan |

Root causes, in order of impact:
1. **No authority.** One linking domain. On-page tuning cannot move a site with nothing to distribute. Runs 1 to 14 only did internal links.
2. **Wrong battlefield.** Most posts target head terms owned by high-authority sites (BetterUp, PositivePsychology, Verywell). A DR~0 site cannot win those yet.
3. **No bottom-of-funnel pages.** "X alternative", "X vs Y", "best AI journaling app for <need>" SERPs are ranked by small app blogs (mylifenote, memexlab, glimmo, talkjune, reflection.app). iReflect has none.
4. **Weak E-E-A-T on a mental-health (YMYL-adjacent) topic.** No human author, no about/editorial page, no reviewer.
5. **Weak brand entity.** Name collision; no Organization schema until 2026-09-23; no sameAs profiles.

## 2. Operating rules (replace the old "1 link per run" rule)

Every run ships ONE primary move from the queue below plus any hygiene fixes. A primary move is one of:
- a new bottom-of-funnel page (comparison / alternatives / use-case), or
- a substantial refresh of one existing post (make it the best answer in its SERP), or
- a consolidation (merge overlapping thin posts with a 301 in vercel.json, update links + sitemap).

Every run also produces the **Authority pack** (section 5): 2 to 4 concrete off-page actions for Rafay with ready-to-paste copy.
Quality gates on anything published: no invented facts about competitors (every claim about another app is checked against its live site or store listing that run, with the date), no fake reviews/ratings/authors, run the claude-seo `seo-content` checks, strip AI-typical phrasing, mental-health posts carry the "not a substitute for professional help" line.

## 3. Primary move queue (re-rank each run using GSC + live SERP)

Verify each target's SERP before writing: if the top 10 is all DR 70+ publishers, drop it; if it has small app blogs, it is winnable.

| # | Move | Target query cluster | Status |
|---|---|---|---|
| 1 | NEW `/blog/rosebud-alternatives/` | rosebud alternative(s), apps like rosebud | queued |
| 2 | NEW `/blog/reflectly-alternatives/` | reflectly alternative(s) | queued (verify SERP) |
| 3 | NEW `/blog/mindsera-alternatives/` | mindsera alternative, mindsera vs rosebud | queued (verify SERP) |
| 4 | NEW `/blog/day-one-vs-ireflect/` or `day-one-alternatives-ai` | day one alternative with AI | queued (verify SERP) |
| 5 | REFRESH `best-ai-journaling-apps-2026` | best AI journaling apps 2026 | queued: must name and fairly compare real apps with checked facts, include iReflect honestly |
| 6 | REFRESH `self-reflection-questions` (pos ~77, top impressions) | self reflection questions | queued: competitors run 100+ questions with categories + printable; 40 now |
| 7 | CONSOLIDATION review | overlapping pairs e.g. `cant-figure-out-how-i-feel` + `cant-understand-my-feelings`; `how-to-understand-your-emotions` + `how-to-process-emotions`; `self-reflection-journal-prompts` + `how-to-start-a-self-reflection-journal` | queued: check GSC for cannibalization first |
| 8 | NEW use-case page | AI journal for overthinking / anxiety (product-led, not a generic blog post) | queued (verify SERP) |

## 4. Waiting on Rafay (do not do these without his OK)
- [ ] Human author entity: approve using Rafay (founder) as author with a real bio + About page. No invented credentials.
- [ ] Linkable asset (needs app code, out of routine scope): free "AI journal prompt generator" or "reflection question generator" page.
- [ ] Add `sameAs` to the Organization schema once profiles in section 5 exist (send the URLs).

## 5. Authority tracker (Rafay executes; routine prepares copy and checks results in GSC Links)

| Channel | Action | Status | Live URL |
|---|---|---|---|
| AlternativeTo | list iReflect as alternative to Rosebud, Reflectly, Day One | todo | |
| SaaSHub | submit iReflect | todo | |
| Product Hunt | launch (plan a date, prep assets) | todo | |
| AI directories | There's An AI For That, Futurepedia, Toolify | todo | |
| BetaList / Indie Hackers | product page + founder build story | todo | |
| LinkedIn company page / X profile | create, link to site (also feeds sameAs) | todo | |
| Reddit | genuine answers in r/Journaling, r/selfimprovement per sub rules, no link spam | ongoing | |
| Guest posts / podcasts | pitch 2 wellness or indie-founder outlets per month | todo | |

KPIs checked every run: referring domains (GSC Links), non-brand clicks (28d), # non-brand queries in top 20, brand query position, pages with impressions.
