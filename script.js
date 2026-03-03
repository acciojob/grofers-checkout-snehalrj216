function calculateTotal() {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if exists
  const oldRow = document.getElementById("ans");
  if (oldRow) {
    oldRow.parentElement.remove();
  }

  const table = document.getElementById("groceryTable");

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;

  // 🔥 IMPORTANT LINE (required by test case)
  newCell.id = "ans";

  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
}