const cardEl = document.getElementById("card");
const drawBtn = document.getElementById("draw-btn");
const deckPicker = document.getElementById("deck-picker");
const reversedToggle = document.getElementById("reversed-toggle");
const imageEl = document.getElementById("card-image");
const numEl = document.getElementById("card-num");
const nameEl = document.getElementById("card-name");
const orientationEl = document.getElementById("card-orientation");
const meaningEl = document.getElementById("card-meaning");

let currentDeckKey = Object.keys(DECKS)[0];

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
  for (const btn of deckPicker.children) {
    btn.classList.toggle("active", btn.dataset.deck === key);
  }
  cardEl.classList.remove("flipped");
  cardEl.style.transform = "rotate(0deg)";
}

function drawCard() {
  const deck = DECKS[currentDeckKey];
  const card = deck.cards[Math.floor(Math.random() * deck.cards.length)];
  const reversed = reversedToggle.checked && Math.random() < 0.5;

  cardEl.classList.remove("flipped");

  // Let the back-face show briefly before revealing the new card.
  setTimeout(() => {
    imageEl.src = card.img;
    imageEl.alt = card.name;
    numEl.textContent = card.num;
    nameEl.textContent = card.name;
    orientationEl.textContent = reversed ? "Reversed" : "Upright";
    meaningEl.textContent = reversed ? card.rev : card.up;
    cardEl.style.transform = reversed ? "rotate(180deg)" : "rotate(0deg)";
    cardEl.classList.add("flipped");
  }, 250);
}

drawBtn.addEventListener("click", drawCard);
cardEl.addEventListener("click", drawCard);
