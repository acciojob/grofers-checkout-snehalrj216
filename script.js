// Select all price elements
let priceElements = document.querySelectorAll(".prices");

let total = 0;

// Loop through prices
priceElements.forEach(function(price) {
    total += Number(price.textContent);
});

// Create new row
let table = document.getElementById("grocery-table");

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

// Make cell span across 2 columns
newCell.colSpan = 2;
newCell.textContent = "Total Price: " + total;

newRow.appendChild(newCell);
table.appendChild(newRow);
