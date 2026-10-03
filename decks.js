// Registry of every deck available on the site.
const DECKS = {
  egyptian: {
    label: "Egyptian Tarot (Falconnier, 1896)",
    cards: EGYPTIAN_CARDS,
  },
  rws: {
    label: "Rider-Waite-Smith (1909)",
    cards: RWS_CARDS,
  },
  solabusca: {
    label: "Sola Busca (1491)",
    cards: SOLABUSCA_CARDS,
  },
};

// Every card image also exists as a resized WebP next to the original
// (quality 82, max 1200 px long edge; see progress.md 2026-10-02). Pages
// load `webp` first and fall back to the original `img` if it fails.
for (const deck of Object.values(DECKS)) {
  for (const card of deck.cards) {
    card.webp = card.img.replace(/\.(jpe?g|png)$/i, ".webp");
  }
}
