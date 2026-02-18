// Get all price elements
let prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate sum dynamically
prices.forEach(function(price) {
    total += Number(price.textContent);
});

// Create new row
let table = document.getElementById("grocery-table");
let newRow = document.createElement("tr");
let newCell = document.createElement("td");

// Single cell spanning both columns
newCell.colSpan = 2;
newCell.textContent = "Total Price: " + total;

// Append elements
newRow.appendChild(newCell);
table.appendChild(newRow);
