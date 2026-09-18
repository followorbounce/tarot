# tarot

A single-page static site that draws a random card from the standard 78-card Rider-Waite-Smith tarot deck.

## Structure
- `index.html` — page markup: a flip-card element and a "Draw a card" button.
- `style.css` — dark/gold mystical theme, 3D flip animation, responsive down to phone width.
- `cards.js` — the full 78-card deck as a plain `CARDS` array (22 major arcana + 4 suits × 14 minor arcana), each entry has `name`, `arcana`, `symbol`, `up` (upright meaning keywords), `rev` (reversed meaning keywords).
- `script.js` — draw logic: picks a random card, randomly assigns upright/reversed (50/50), flips the card and fills in its text.

## Conventions
- No build step, no dependencies — plain HTML/CSS/JS, open `index.html` directly or serve statically.
- No card imagery (no external assets) — cards are rendered as styled text/symbol faces, not images.
- English UI by default per the standing no-Russian-unless-specified rule, even though the request that created this site was in Russian.

## Deploy
No git remote configured yet — local repo only.
