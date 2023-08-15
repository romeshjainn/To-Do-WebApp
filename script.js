let container = document.createElement("div");
container.className = "container";
let card = document.createElement("div");
card.className = "card";
let inputBox = document.createElement("input");
inputBox.className = "inputBox";
inputBox.placeholder = "Enter The TItle"
let discriptionBox = document.createElement("input");
discriptionBox.className = "discriptionBox";
discriptionBox.placeholder = "Enter The Discription"
document.body.appendChild(container);
container.appendChild(card);
card.append(inputBox, discriptionBox);





