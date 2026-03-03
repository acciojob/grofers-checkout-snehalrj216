function calculateTotal() {
  // Get all price elements
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Loop through prices and sum them
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create new row
  const table = document.getElementById("groceryTable");
  const newRow = document.createElement("tr");

  // Create cell
  const newCell = document.createElement("td");

  // Span across 2 columns
  newCell.colSpan = 2;

  // Add total text
  newCell.textContent = "Total Price: " + total;

  // Append cell to row and row to table
  newRow.appendChild(newCell);
  table.appendChild(newRow);
}