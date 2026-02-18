let prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach(price => {
    total += parseFloat(price.innerText);
});

let table = document.querySelector("table");

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

newCell.colSpan = 2;   // single cell
newCell.innerText = total;  // ONLY total number

newRow.appendChild(newCell);
table.appendChild(newRow);
