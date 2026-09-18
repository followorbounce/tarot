# tarot

A single-page static site that draws a random card from the Egyptian Tarot
(Falconnier & Wegener, 1896) — 22 cards, with the original public-domain
card art from that deck.

## Structure
- `index.html` — page markup: a flip-card element, a "Draw a card" button, and an art-credit line.
- `style.css` — dark/gold mystical theme, 3D flip animation, card-image styling, responsive down to phone width.
- `cards.js` — the 22-card `CARDS` array; each entry has `num` (roman numeral), `name` (the Egyptian-tarot title, e.g. "The Chariot of Osiris"), `img` (path under `images/`), `up`/`rev` (upright/reversed meaning keywords, written from the traditional esoteric correspondence to the equivalent Tarot de Marseille trump).
- `script.js` — draw logic: picks a random card, randomly assigns upright/reversed (50/50), flips the card, swaps in the card image, and fills in its text.
- `images/01.png`–`22.png` — the card art itself, downloaded from Wikimedia Commons' `Category:Egyptian Tarot (Falconnier)`. Public domain (1896 publication). Numbering follows the traditional Falconnier ordering, where the Fool ("The Crocodile") is card XXII rather than card 0.

## Conventions
- No build step, no dependencies — plain HTML/CSS/JS, open `index.html` directly or serve statically.
- This deck has only 22 cards by design — the historical Egyptian Tarot never had a Minor Arcana. An earlier version of this site used the standard 78-card Rider-Waite-Smith deck with text-only (no-image) cards; that was fully replaced, not extended, when real Egyptian Tarot art was added, to avoid a mismatched deck (78 cards but only 22 with real art).
- English UI by default per the standing no-Russian-unless-specified rule, even though the requests that created and extended this site were in Russian.
- Reversed cards are rendered by rotating the whole card face 180° (not just re-labeling it) so the image itself appears upside-down, matching how a physical reversed card looks.

## Deploy
No git remote configured yet — local repo only.
