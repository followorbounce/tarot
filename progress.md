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

- **2026-09-18 (same day) — Added RWS and Sola Busca decks with a deck picker.** User asked what other complete public-domain decks exist, then asked to download both and add a deck selector to the draw.
  - Downloaded 78 Rider-Waite-Smith images (Commons `Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)`, files `RWS1909 - <card>.jpeg`) into `images/rws/`, and 78 Sola Busca images (Commons `Category:Sola-Busca_tarot_deck`, files `00.jpg`–`77.jpg`) into `images/solabusca/`. Moved the existing Egyptian deck's 22 images into `images/egyptian/` for consistency.
  - Recovered the original 78-card RWS meaning text from the first git commit (`git show 516498e:cards.js`) rather than rewriting it, and split it out into `cards-rws.js` with real image paths added.
  - Sola Busca's file numbering (00–77) isn't documented anywhere with a reliable card-by-card key, so the suit-block order (Cups/Pentacles/Wands/Swords, each Ace→King) was **verified by reading sample images directly** (checked ace markings and rank numerals on cards 22, 23, 35, 36, 50, 64, 32-34) rather than assumed from search results.
  - Confirmed via Wikipedia that Sola Busca follows Tarot de Marseille trump ordering (Justice=8th, Strength=11th) — the opposite of RWS's swap — and built `cards-solabusca.js`'s major-arcana meanings against the correct position for each, not a naive RWS-index copy.
  - Sola Busca's 22 trump cards carry unique Renaissance names (fetched via web search and cross-checked against Wikipedia's Sola Busca article); each is labeled `"<name> (<standard equivalent>)"`, e.g. `"Nabuchodenasor (The World)"`.
  - Restructured the site from a single hardcoded deck to a `DECKS` registry (`decks.js`) + `<select>` in `index.html`; `script.js` now draws from whichever deck is selected and swaps the credit line accordingly.
  - Verified: bracket/brace balance and correct entry counts (22+56=78) in both new card files via grep/awk (still no `node` in this environment), every generated minor-arcana image path checked to actually exist on disk via a small Python script, and two RWS images (`major_00.jpg`, `cups_11.jpg`) opened and visually confirmed to be "The Fool" and "Page of Cups" respectively, matching their data entries exactly.
  - Still no real-browser test available this session — worth checking that the deck `<select>` styling looks right and that switching decks mid-session behaves as expected (resets to the card back, doesn't carry over the wrong deck's image).

## Next steps
- No git remote yet.
- Images are unoptimized originals from Commons (~38MB total across all three decks now) — fine for a local/personal site, but worth compressing before any public deploy.
- Sola Busca's 56 suit cards have their own unique inscribed court-card names (only a few were spot-checked: Natanabo, Polisena, Lucio Cecilio for the Cups court) — if you want those surfaced instead of generic "Page/Knight/Queen/King of X" labels, that'd need one-by-one research or OCR across all 56 images.
