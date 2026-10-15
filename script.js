const toggleButton = document.querySelector("#hello-button");
const factCard = document.querySelector("#fact-card");
const closeButton = document.querySelector("#close-fact");

function toggleFactCard() {
  const isOpening = factCard.hidden;
  factCard.hidden = !isOpening;
  toggleButton.setAttribute("aria-expanded", String(isOpening));

  if (isOpening) {
    closeButton.focus();
  } else {
    toggleButton.focus();
  }
}

toggleButton.addEventListener("click", toggleFactCard);
closeButton.addEventListener("click", toggleFactCard);
