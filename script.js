const cardEl = document.getElementById("card");
const drawBtn = document.getElementById("draw-btn");
const deckSelect = document.getElementById("deck-select");
const imageEl = document.getElementById("card-image");
const numEl = document.getElementById("card-num");
const nameEl = document.getElementById("card-name");
const orientationEl = document.getElementById("card-orientation");
const meaningEl = document.getElementById("card-meaning");
const creditEl = document.getElementById("credit");

const CREDITS = {
  egyptian: 'Card art: <em>Les XXII lames hermétiques du tarot divinatoire</em>, R. Falconnier &amp; M.O. Wegener, 1896 — public domain, via <a href="https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)" target="_blank" rel="noopener">Wikimedia Commons</a>.',
  rws: 'Card art: the Rider&ndash;Waite&ndash;Smith tarot, illustrated by Pamela Colman Smith, 1909 — public domain, via <a href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)" target="_blank" rel="noopener">Wikimedia Commons</a>.',
  solabusca: 'Card art: the Sola Busca tarot, Italy, 1491 — the oldest complete surviving tarot deck, public domain, via <a href="https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck" target="_blank" rel="noopener">Wikimedia Commons</a>.',
};

for (const [key, deck] of Object.entries(DECKS)) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = deck.label;
  deckSelect.appendChild(option);
}

function currentDeck() {
  return DECKS[deckSelect.value];
}

function updateCredit() {
  creditEl.innerHTML = CREDITS[deckSelect.value] || "";
}

function drawCard() {
  const deck = currentDeck();
  const card = deck.cards[Math.floor(Math.random() * deck.cards.length)];
  const reversed = Math.random() < 0.5;

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

deckSelect.addEventListener("change", () => {
  cardEl.classList.remove("flipped");
  cardEl.style.transform = "rotate(0deg)";
  updateCredit();
});

drawBtn.addEventListener("click", drawCard);
cardEl.addEventListener("click", drawCard);

updateCredit();
