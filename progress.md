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

- **2026-09-18 (same day) — Layout overhaul.** User asked for: card image filling the whole frame edge-to-edge, captions moved below the frame instead of overlaid on it, deck picker as buttons instead of a `<select>`, the subtitle line removed, and the on-page art-source credit removed entirely.
  - `card-front` is now just the `<img>` at `object-fit: cover`, no padding/border around it, no text inside the flip card at all.
  - Name/number/orientation/meaning moved to a new `.caption` block under `.stage`.
  - Deck picker is now a row of pill buttons (`.deck-btn`, one `.active` at a time) built from `DECKS` in `script.js`, replacing the earlier `<select>`.
  - Removed `CREDITS` object and all credit-line code/markup from `script.js`/`index.html`/`style.css`. Sourcing info is preserved in this file and in CLAUDE.md — just not shown on the page anymore.
  - Verified: no leftover references to the removed `subtitle`/`credit`/`deck-select` ids/classes anywhere in the three files (grep came back clean), bracket balance in `script.js`, all three files still serve over a local test server.

- **2026-09-18 (same day) — Reversed-cards toggle + site nav + Full Deck page.** User asked for: an option to turn reversed-card generation on/off, and a navigation menu listing pages worth planning, giving "a page to browse the whole deck and read general interpretations" as the example.
  - Added `#reversed-toggle` checkbox (default on) on the draw page; `script.js`'s draw logic is now `reversedToggle.checked && Math.random() < 0.5` — unchecked means every draw comes up upright.
  - Added a shared `.site-nav` header on both pages (`Draw` / `Full Deck`), hand-duplicated in each HTML file since there's no templating step.
  - Built `deck.html` + `deck-page.js`: the concrete page the user asked for — same deck-picker buttons, then a responsive grid showing every card in the selected deck at once (thumbnail, number, name, both upright and reversed meanings). This was implemented, not just planned, since the user gave it as a specific example.
  - Documented further nav candidates that were *not* built (Spreads, an About/sourcing page to hold the credit info removed from the draw page earlier, a localStorage draw journal) in CLAUDE.md's "Planned pages" section, since the user asked for a menu of pages "worth planning," not only the one example.
  - Verified: bracket balance in all touched/new files, all six files (`index.html`, `deck.html`, `style.css`, `script.js`, `deck-page.js`, `decks.js`) serve over a local test server, and grep confirmed every new element id referenced in JS has a matching id in its HTML file (and vice versa) with no leftovers.
  - Still no real-browser test this session — worth checking the toggle's checkbox styling, that the nav's active-link state looks right on both pages, and that the Full Deck grid reads well at a few different widths (it's `auto-fill, minmax(170px, 1fr)`, untested visually).

- **2026-09-18 (same day) — Switched card images from `cover` to `contain`.** User reported the frame was cropping card edges on both the draw page and the Full Deck grid; asked for the frame to round corners only, never crop any side.
  - `.card-image` (draw page) and `.deck-card img` (Full Deck grid) both changed from `object-fit: cover` to `object-fit: contain`.
  - Added an explicit `background: var(--bg)` on `.deck-card img` so the letterbox gaps left by `contain` (when a card's aspect ratio doesn't exactly match the fixed frame) read as intentional dark space rather than a blank/white gap; the draw-page card frame already had a dark `.card-front` background doing the same job.
  - Verified the CSS still parses/serves correctly over a local test server; this is a CSS-only change, no HTML/JS touched.

- **2026-09-18 (same day) — Eliminated the letterbox gaps from the `contain` fix.** User reported the `contain` change left visible black empty space around cards (expected, since the fixed-size frame no longer matched every image's aspect ratio). Fixed properly instead of trading one visual problem for another:
  - Draw page: `.card`'s height is no longer fixed (`--card-h` removed). It now uses `aspect-ratio` (a `--card-ratio` default for the initial card-back state), which `script.js` overrides inline to the *exact* natural aspect ratio of whichever image was just drawn — computed by preloading the image off-screen (`new Image()`, read `naturalWidth`/`naturalHeight` in `onload`) before swapping it into the visible `<img>` and flipping. The frame now hugs each card's real proportions exactly: no cropping, no gaps.
  - `selectDeck()` resets `cardEl.style.aspectRatio` back to the CSS default when switching decks, so the frame doesn't stay sized to the previous deck's last-drawn card.
  - Full Deck grid: dropped the fixed `aspect-ratio: 3/5` + `object-fit` + dark-background workaround entirely. Thumbnails are now just `width: 100%; height: auto` — each renders at its own natural proportions, so grid rows are slightly uneven height card-to-card (normal for a card gallery), but there is no cropping and no letterboxing anywhere.
  - Verified: bracket balance, all files still serve over a local test server, grep confirmed no leftover `--card-h` references.

- **2026-09-18 (same day) — Set up full GitHub access for this environment and pushed.** User asked to configure everything needed for full access, then to create the repo and push. This was previously blocked (see `[[no-git-credentials-in-env]]` in memory) — that constraint is now lifted for this machine specifically.
  - Generated a passphrase-less `ed25519` SSH key (`~/.ssh/id_ed25519_github`), added `~/.ssh/config` pointing `github.com` at it. User added the public key to their GitHub account; verified with `ssh -T git@github.com` → authenticated as `followorbounce`.
  - Installed `gh` CLI (`sudo dnf install -y gh`, run by the user) and authenticated via `gh auth login --web` (device-code flow — user completed the browser step); confirmed `repo` scope.
  - Created `github.com/followorbounce/tarot` (private) via `gh repo create --source=. --remote=origin --push`; all 6 commits pushed to `main`, remote tracking set up.
  - This access is account-wide (SSH key) and machine-wide (`gh` token), not scoped to this one repo — full push/create access to any of the user's GitHub repos from this environment going forward.

- **2026-09-19 — Made the repo public and enabled GitHub Pages.** User asked for both. `gh repo edit --visibility public --accept-visibility-change-consequences`, then `gh api -X POST repos/followorbounce/tarot/pages -f "source[branch]=main" -f "source[path]=/"`. Live at https://followorbounce.github.io/tarot/ once the first Pages build finishes (checked via `gh api repos/followorbounce/tarot/pages/builds/latest`; was still "building" as of this write-up).

- **2026-09-19 (same day) — Full visual redesign: Bauhaus / VKhUTEMAS constructivism.** User asked for a complete redesign referencing early Bauhaus and late VKhUTEMAS, "clean and clear" quality typography, modern practical minimalism. Rewrote `style.css` in full; HTML structure mostly preserved (see CLAUDE.md's new "Design" section for the full breakdown: Jost/IBM Plex Sans/IBM Plex Mono type system, cream/black/functional-accent color system keyed to `body[data-deck]`, sharp corners + flat "hard shadow" geometry instead of the old gold/purple mystical theme with rounded corners and soft glows).
  - `script.js` and `deck-page.js` both gained one new line each (`document.body.dataset.deck = ...`) so CSS can key the per-deck accent color — this was the only JS logic change; everything else is CSS/markup.
  - Replaced the old ✦ Unicode glyph on the card back with `.back-mark`, a pure-CSS circle-with-diagonal-bar (no image asset).
  - Added a small inline SVG "mark" (red square / yellow triangle / blue circle) to both pages' headers, deliberately using Kandinsky's Bauhaus color-form correspondence (square=red, triangle=yellow, circle=blue) rather than arbitrary colors.
  - Verified: bracket balance in all touched files, no leftover references to the removed star glyph, all files still serve correctly, and confirmed the Google Fonts URL used actually resolves (HTTP 200) rather than assuming it would.
  - Still no real-browser test this session (same standing limitation) — this is the highest-value thing to check next, since it's a from-scratch visual system: verify the hard-shadow/press interaction on the draw button, that the per-deck accent color actually swaps live when switching decks, and that Jost/Plex fonts are loading (not silently falling back to system sans) once it's live on GitHub Pages.

## Next steps
- Confirm the redesign actually looks right in a real browser — genuinely can't verify this from here beyond "the CSS parses and fonts resolve."
- Images are unoptimized originals from Commons (~38MB total across all three decks now) — fine for a local/personal site, but worth compressing now that the repo is public and on Pages.
- Sola Busca's 56 suit cards have their own unique inscribed court-card names (only a few were spot-checked: Natanabo, Polisena, Lucio Cecilio for the Cups court) — if you want those surfaced instead of generic "Page/Knight/Queen/King of X" labels, that'd need one-by-one research or OCR across all 56 images.
- The "planned pages" list in CLAUDE.md (Spreads, About/sourcing, Journal) is just a list right now — say which one to build next, if any.
