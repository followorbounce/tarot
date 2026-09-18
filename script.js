const cardEl = document.getElementById("card");
const drawBtn = document.getElementById("draw-btn");
const imageEl = document.getElementById("card-image");
const numEl = document.getElementById("card-num");
const nameEl = document.getElementById("card-name");
const orientationEl = document.getElementById("card-orientation");
const meaningEl = document.getElementById("card-meaning");

function drawCard() {
  const card = CARDS[Math.floor(Math.random() * CARDS.length)];
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

drawBtn.addEventListener("click", drawCard);
cardEl.addEventListener("click", drawCard);
