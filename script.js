function calculateTotal() {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += Number(price.innerText);
  });

  const table = document.getElementById("groceryTable");

  // Remove previous total row if exists
  const existing = document.getElementById("ans");
  if (existing) {
    existing.parentElement.remove();
  }

  // Create new row
  const row = document.createElement("tr");

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.id = "ans";
  cell.innerText = total;

  row.appendChild(cell);
  table.appendChild(row);
}