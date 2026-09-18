# Progress — tarot

## Status
Built and verified 2026-09-18. Single-page static site, no build step.

## Recent work
- 2026-09-18 — Initial build: `index.html`, `style.css`, `script.js`, `cards.js` (full 78-card deck, hand-written keyword meanings for upright/reversed).
  - Verified: bracket/brace balance in `cards.js`, card count (22 major + 56 minor = 78, confirmed via grep/awk since `node` isn't installed in this environment), and that all files are served correctly over a local `python3 -m http.server` test.
  - Could not visually test in a real browser — the claude-in-chrome extension isn't connected in this session. Worth a manual look (open `index.html`, click "Draw a card" a few times) to confirm the flip animation and reversed-card rotation look right.

- **2026-09-18 (same day) — Switched to the real Egyptian Tarot deck.** User asked to find actual Egyptian tarot cards and use real pictures. Found and used the Falconnier & Wegener "Egyptian Tarot" (1896, from *Les XXII lames hermétiques du tarot divinatoire*) — public domain, 22 cards, sourced from Wikimedia Commons' `Category:Egyptian Tarot (Falconnier)`.
  - Downloaded all 22 PNGs into `images/`, verified each is a valid image (~440–495px wide, portrait) and that none came back as an error page.
  - Rewrote `cards.js` entirely: replaced the 78-card RWS-based deck with the 22 Egyptian Tarot cards (their traditional titles, e.g. "The Sphinx", "Typhon", "The Crown of the Magi"), each pointing at its downloaded image, with upright/reversed meanings written from the standard esoteric correspondence to the equivalent Tarot de Marseille trump.
  - This was a full replacement, not an addition — a 78-card deck with real art for only 22 of them would have been a worse, inconsistent result, so the Minor Arcana text-only cards were dropped rather than kept alongside real images for the Majors only.
  - Added an on-page credit line linking back to the Wikimedia Commons source/license.
  - Verified: bracket/brace balance and entry count (22) in `cards.js`, all 22 images plus `index.html` serve with HTTP 200 over a local test server.
  - Still could not visually test in an actual browser (no claude-in-chrome connection this session) — worth opening `index.html` yourself to confirm the images display well inside the card frame and the reversed-card rotation still reads clearly with real artwork instead of plain text.

## Next steps
- No git remote yet.
- Images are unoptimized originals from Commons (~150–300KB each, ~4.4MB total for all 22) — fine for a local/personal site, but worth compressing before any public deploy.
