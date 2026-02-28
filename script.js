// Get all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Loop through prices and calculate sum
prices.forEach(price => {
  total += Number(price.innerText);
});

// Create new row
const table = document.querySelector("table");
const newRow = document.createElement("tr");

// Create new cell
const newCell = document.createElement("td");
newCell.colSpan = 2;   // span across columns
newCell.innerText = total;

// Append cell to row
newRow.appendChild(newCell);

// Append row to table
table.appendChild(newRow);