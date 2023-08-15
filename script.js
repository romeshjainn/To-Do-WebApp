// Creating Elements 

let header = document.createElement("div");
let createBtn = document.createElement("button");
let deleteBtn = document.createElement("button");
let container = document.createElement("div");
let card = document.createElement("div");
let inputBox = document.createElement("input");
let discriptionBox = document.createElement("input");

// Giving CLasses to Elements 

header.className = "header";
createBtn.className = "createBtn";
createBtn.innerText = "Create Card";
deleteBtn.className = "deleteBtn";
deleteBtn.innerText = "Delete Card";
container.className = "container";
card.className = "card";
inputBox.className = "inputBox";
discriptionBox.className = "discriptionBox";
inputBox.placeholder = "Enter The TItle";
discriptionBox.placeholder = "Enter The Discription";

// Appending ELements 

document.body.appendChild(header);
header.appendChild(createBtn);
header.appendChild(deleteBtn);
document.body.appendChild(container);
card.append(inputBox, discriptionBox);

createBtn.onclick = function () {
    createBtn = [];
    for (let i = 0; i < createBtn.length + 1; i++){
        container.appendChild(card.cloneNode(true));
        card.classList.add("cardData");
    }
}
let allCards = document.getElementsByClassName("cardData");

for (let i = 0; i < allCards.length; i++){
    let data = allCards[i].value; 
    allCards[i].innerText = data;
}
deleteBtn.onclick = function () {
    
}
