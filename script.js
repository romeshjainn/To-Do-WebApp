// Creating Elements
let header = document.createElement("div");
let createBtn = document.createElement("button");
let deleteBtn = document.createElement("button");
let container = document.createElement("div");
let card = document.createElement("div");
let inputBox = document.createElement("input");
let discriptionBox = document.createElement("input");

// Giving Classes to Elements
header.className = "header";
createBtn.className = "createBtn";
createBtn.innerText = "Create Card";
deleteBtn.className = "deleteBtn";
deleteBtn.innerText = "Delete Card";
container.className = "container";
card.className = "card";
inputBox.className = "inputBox";
discriptionBox.className = "discriptionBox";
inputBox.placeholder = "Enter The Title";
discriptionBox.placeholder = "Enter The Description";

// Appending Elements
document.body.appendChild(header);
header.appendChild(createBtn);
header.appendChild(deleteBtn);
document.body.appendChild(container);
card.append(inputBox, discriptionBox);

// Create Button Functionality
createBtn.onclick = function () {
  let newCard = card.cloneNode(true);
  newCard.classList.add("cardData");
  container.appendChild(newCard);
};

// Delete Button Functionality
deleteBtn.onclick = function () {
  let allCards = document.querySelectorAll(".cardData");
  let lastCardIndex = allCards.length - 1;

  if (lastCardIndex >= 0) {
    container.removeChild(allCards[lastCardIndex]);
  }
};
