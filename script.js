const cardEl = document.getElementById("card");
const drawBtn = document.getElementById("draw-btn");
const nameEl = document.getElementById("card-name");
const symbolEl = document.getElementById("card-symbol");
const orientationEl = document.getElementById("card-orientation");
const meaningEl = document.getElementById("card-meaning");

function drawCard() {
  const card = CARDS[Math.floor(Math.random() * CARDS.length)];
  const reversed = Math.random() < 0.5;

  cardEl.classList.remove("flipped");

  // Let the back-face show briefly before revealing the new card.
  setTimeout(() => {
    symbolEl.textContent = card.symbol;
    nameEl.textContent = card.name;
    orientationEl.textContent = reversed ? "Reversed" : "Upright";
    meaningEl.textContent = reversed ? card.rev : card.up;
    cardEl.style.transform = reversed ? "rotate(180deg)" : "rotate(0deg)";
    cardEl.classList.add("flipped");
  }, 250);
}

drawBtn.addEventListener("click", drawCard);
cardEl.addEventListener("click", drawCard);
