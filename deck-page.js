const deckPicker = document.getElementById("deck-picker");
const deckGrid = document.getElementById("deck-grid");

let currentDeckKey = Object.keys(DECKS)[0];
document.body.dataset.deck = currentDeckKey;

for (const [key, deck] of Object.entries(DECKS)) {
  const btn = document.createElement("button");
  btn.className = "deck-btn" + (key === currentDeckKey ? " active" : "");
  btn.textContent = deck.label;
  btn.dataset.deck = key;
  btn.addEventListener("click", () => selectDeck(key));
  deckPicker.appendChild(btn);
}

function selectDeck(key) {
  currentDeckKey = key;
  document.body.dataset.deck = key;
  for (const btn of deckPicker.children) {
    btn.classList.toggle("active", btn.dataset.deck === key);
  }
  renderGrid();
}

function renderGrid() {
  deckGrid.innerHTML = "";
  for (const card of DECKS[currentDeckKey].cards) {
    const item = document.createElement("div");
    item.className = "deck-card";
    item.innerHTML = `
      <img src="${card.img}" alt="${card.name}" loading="lazy">
      <div class="deck-card-num">${card.num}</div>
      <div class="deck-card-name">${card.name}</div>
      <div class="deck-card-meanings">
        <p><span class="label">Upright</span>${card.up}</p>
        <p><span class="label">Reversed</span>${card.rev}</p>
      </div>
    `;
    deckGrid.appendChild(item);
  }
}

renderGrid();
