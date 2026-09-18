# Progress — tarot

## Status
Built and verified 2026-09-18. Single-page static site, no build step.

## Recent work
- 2026-09-18 — Initial build: `index.html`, `style.css`, `script.js`, `cards.js` (full 78-card deck, hand-written keyword meanings for upright/reversed).
  - Verified: bracket/brace balance in `cards.js`, card count (22 major + 56 minor = 78, confirmed via grep/awk since `node` isn't installed in this environment), and that all files are served correctly over a local `python3 -m http.server` test.
  - Could not visually test in a real browser — the claude-in-chrome extension isn't connected in this session. Worth a manual look (open `index.html`, click "Draw a card" a few times) to confirm the flip animation and reversed-card rotation look right.

## Next steps
- No git remote yet.
- If you want real card artwork instead of the text/symbol faces, that's a deliberate scope cut for now (no external assets were fetched).
