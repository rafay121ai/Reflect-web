# Task: Image asset update
_2026-03-21_

## What was done

### index.html changes
| Change | Detail |
|--------|--------|
| Favicons | Replaced `Reflect-logo-jpg.jpg` (39 KB JPEG) with `favicon.ico` + `favicon-32.png` (32×32 PNG) + `apple-touch-icon.png` |
| OG image | Updated `og:image` to `https://ireflect.app/og-image.png` (1200×630) |
| OG dimensions | Added `og:image:width = 1200` and `og:image:height = 630` |
| Twitter image | Updated `twitter:image` to `https://ireflect.app/og-image.png` |
| Twitter card | Restored to `summary_large_image` (now have a proper landscape image) |
| Header logo | Replaced `<picture>` element (reflect-logo.webp/png) with `<img src="/website-logo.png" alt="iReflect" height="40">` |
| LCP preload | Updated preload href from `reflect-logo.webp` to `/website-logo.png` |

### Old filenames — no longer referenced in index.html
- `reflect-logo.webp` — not referenced
- `reflect-logo.png` — not referenced
- `Reflect-logo-jpg.jpg` — not referenced
- `Untitled-1-01.png` — not referenced

### Files committed (5794ba3)
- `og-image.png` ✅
- `website-logo.png` ✅
- `favicon.ico` ✅
- `favicon-32.png` ✅
- `index.html` ✅

## Pending manual action
- **`apple-touch-icon.png` was not found in the repo root** — the file was not present when the commit was made. Add it to the root and run:
  ```bash
  git add apple-touch-icon.png && git commit -m "Add apple-touch-icon" && git push origin main
  ```
  The `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` tag is already in index.html waiting for it.
